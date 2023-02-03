import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { User } from '@angular/fire/auth';
import { MediaObserver } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/shared/toast/services/toast.service';
import { Overlay } from '../models/overlay';
import { OverlaysService } from '../services/overlays.service';
import 'aframe';

@Component({
  selector: 'app-add-edit-overlay',
  templateUrl: './add-edit-overlay.component.html',
  styleUrls: ['./add-edit-overlay.component.scss'],
})
export class AddEditOverlayComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  isMobile = false;
  private user: User | undefined;
  id: string | undefined;

  modelForm = new FormGroup({
    modelFile: new FormControl<string | null>(null, [Validators.required]),
  });
  modelFileUploading = false;
  modelFileUploadProgress = 0;

  generalForm = new FormGroup({
    name: new FormControl<string | null>('New Logo', [Validators.required]),
    ownerEmail: new FormControl<string | null>(null, [Validators.required]),
  });

  @ViewChild('aframeWrapper', { static: true, read: ElementRef })
  private aframeWrapper!: ElementRef<HTMLDivElement>;

  constructor(
    private mediaObserver: MediaObserver,
    private authService: AuthService,
    private actRoute: ActivatedRoute,
    private overlaysService: OverlaysService,
    private toastService: ToastService,
    private translateService: TranslateService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this._subs.push(
      this.mediaObserver.asObservable().subscribe(() => {
        this.isMobile = this.mediaObserver.isActive('xs');
      })
    );

    this.authService.user.pipe(take(1)).subscribe(u => {
      this.user = u;

      this.actRoute.params.pipe(take(1)).subscribe(params => {
        this.id = params['id'];

        this.overlaysService.getById(this.id!).subscribe({
          next: x => {
            this.generalForm.patchValue(x);
            this.modelForm.patchValue(x);

            if (x.modelFile) {
              this.addAframeScene();
            }
          },
          error: e => {
            this.toastService.showError(e.message);
          },
        });
      });
    });
  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

  save() {
    this.overlaysService
      .update(this.id!, {
        ...this.generalForm.value,
        ...this.modelForm.value,
      } as Overlay)
      .subscribe({
        next: () => {
          this.toastService.showSuccess(
            this.translateService.instant(
              'ui.overlays.addEditOverlay.savedSuccessfully'
            )
          );
        },
        error: e => {
          this.toastService.showError(e.message);
        },
      });
  }

  clearModelFile() {
    this.modelForm.get('modelFile')!.setValue(null);
    this.removeAframeScene();
  }

  selectModelFile(modelInput: any) {
    modelInput.value = '';
    modelInput.click();
  }

  modelFileUploaded(modelInput: any) {
    const file = modelInput.files?.item(0);
    if (!file) {
      return;
    }
    this.modelFileUploading = true;
    this.modelFileUploadProgress = 0;
    this.storageService
      .uploadWithProgress(`${this.user!.email!}/${file.name}`, file, file.type)
      .subscribe({
        next: s => {
          if (!s.complete) {
            this.modelFileUploadProgress = s.progress;
            return;
          }
          this.modelFileUploading = false;
          this.modelFileUploadProgress = 0;
          this.modelForm.get('modelFile')!.setValue(s.url!);
          this.addAframeScene();
        },
        error: e => {
          this.toastService.showError(e.message);
          this.modelFileUploading = false;
          this.modelFileUploadProgress = 0;
        },
      });
  }

  private addAframeScene() {
    const scene = `
            <a-scene embedded  background="color: #ECECEC">
          <a-assets>
            <a-asset-item
              id="m" crossorigin="anonymous" src="${this.modelForm.get(
                'modelFile'
              )!.value!}"></a-asset-item>
          </a-assets>

          <a-entity
            gltf-model="#m"
            animation="property: rotation; dur: 10000;
                       dir: normal; loop: true;
                       to: 0 360 0">
          </a-entity>
          <a-entity position="0 0 4">
            <a-camera></a-camera>
          </a-entity>
        </a-scene>
    `;

    this.aframeWrapper.nativeElement.insertAdjacentHTML('afterbegin', scene);
  }

  private removeAframeScene() {
    const child = this.aframeWrapper.nativeElement.children[0];
    this.aframeWrapper.nativeElement.removeChild(child);
  }
}
