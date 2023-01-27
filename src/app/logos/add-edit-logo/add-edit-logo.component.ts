import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/toast/services/toast.service';
import { LogosService } from '../services/logos.service';
import { Options, NgxQrcodeStylingService } from 'ngx-qrcode-styling';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-add-edit-logo',
  templateUrl: './add-edit-logo.component.html',
  styleUrls: ['./add-edit-logo.component.scss'],
})
export class AddEditLogoComponent implements OnInit {
  private user: User | undefined;

  generalForm = new FormGroup({
    id: new FormControl<string | null>(null, [Validators.required]),
    name: new FormControl<string | null>('New Logo', [Validators.required]),
    ownerEmail: new FormControl<string | null>(null, [Validators.required]),
  });

  logoForm = new FormGroup({
    logoFile: new FormControl<string | null>(null, [Validators.required]),
  });

  mergeForm = new FormGroup({
    mergedFile: new FormControl<string | null>(null, [Validators.required]),
  });

  computeForm = new FormGroup({
    computedFiles: new FormArray([] as FormControl<string | null>[], [
      Validators.required,
    ]),
  });

  id: string | undefined;

  logoFileUploading = false;
  logoFileUploadProgress = 0;

  qrConfig: Options = {
    width: 300,
    height: 300,
    data: window.location.origin,
    type: 'canvas',
    margin: 5,
    dotsOptions: {
      color: '#000000',
      type: 'square',
    },
    backgroundOptions: {
      color: '#ffffff',
    },
  };

  @ViewChild('qrCanvas', { static: true, read: ElementRef })
  private qrCanvas!: ElementRef<HTMLCanvasElement>;

  qrCanvasElement: HTMLCanvasElement | undefined;
  qrImageData: ArrayBuffer | undefined;

  constructor(
    private toastService: ToastService,
    private logosService: LogosService,
    private actRoute: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthService,
    private qrService: NgxQrcodeStylingService
  ) {}

  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe(u => {
      this.user = u;

      this.actRoute.params.pipe(take(1)).subscribe(params => {
        this.id = params['id'];
        this.qrConfig.data = window.location.origin + '/v/' + this.id;

        this.qrService
          .create(this.qrConfig, this.qrCanvas.nativeElement)
          .subscribe(x => {
            this.qrCanvasElement = (x.container as HTMLDivElement)
              .firstChild as HTMLCanvasElement;
            this.qrImageData = this.qrCanvasElement!.getContext(
              '2d'
            )!.getImageData(0, 0, 300, 300).data;
          });

        this.logosService.getById(this.id!).subscribe(l => {
          this.generalForm.patchValue(l);
          this.logoForm.patchValue(l);
          this.mergeForm.patchValue(l);
          this.computeForm.patchValue(l);
        });
      });
    });
  }

  selectLogoFile(logoInput: HTMLInputElement) {
    logoInput.value = '';
    logoInput.click();
  }

  logoFileUploaded(logoInput: HTMLInputElement) {
    const file = logoInput.files?.item(0);
    if (!file) {
      return;
    }
    this.logoFileUploading = true;
    this.logoFileUploadProgress = 0;
    this.storageService
      .uploadWithProgress(`${this.user!.email!}/${file.name}`, file)
      .subscribe({
        next: s => {
          if (!s.complete) {
            this.logoFileUploadProgress = s.progress;
            return;
          }
          this.logoFileUploading = false;
          this.logoFileUploadProgress = 0;
          this.logoForm.get('logoFile')!.setValue(s.url!);
        },
        error: e => {
          this.toastService.showError(e.message);
          this.logoFileUploading = false;
          this.logoFileUploadProgress = 0;
        },
      });
  }

  clearLogoFile() {
    this.logoForm.get('logoFile')!.setValue(null);
  }
}
