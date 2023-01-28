import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/toast/services/toast.service';
import { LogosService } from '../services/logos.service';
import { Options, NgxQrcodeStylingService } from 'ngx-qrcode-styling';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '@angular/fire/auth';
import { Logo } from '../models/logo';
import { TranslateService } from '@ngx-translate/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-edit-logo',
  templateUrl: './add-edit-logo.component.html',
  styleUrls: ['./add-edit-logo.component.scss'],
})
export class AddEditLogoComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  private user: User | undefined;

  generalForm = new FormGroup({
    name: new FormControl<string | null>('New Logo', [Validators.required]),
    ownerEmail: new FormControl<string | null>(null, [Validators.required]),
  });

  logoForm = new FormGroup({
    logoFile: new FormControl<string | null>(null, [Validators.required]),
  });

  qrForm = new FormGroup({
    qrFile: new FormControl<string | null>(null, [Validators.required]),
    qrColor: new FormControl<string | null>('#000000', []),
    qrBackgroundColor: new FormControl<string | null>('#ffffff', []),
    qrPadding: new FormControl<number | null>(5, []),
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

  qrFileUploading = false;
  qrFileUploadProgress = 0;

  qrConfig: Options = {
    width: 300,
    height: 300,
    data: window.location.origin,
    type: 'svg',
    margin: 5,
    dotsOptions: {
      color: '#000000',
      type: 'square',
    },
    backgroundOptions: {
      color: '#ffffff',
    },
  };

  isMobile = false;

  @ViewChild('qrSvgWrapper', { static: false, read: ElementRef })
  private qrSvgWrapper: ElementRef<HTMLDivElement> | undefined;
  qrImageData: Blob | undefined;
  logoImageData: Blob | undefined;

  constructor(
    private toastService: ToastService,
    private logosService: LogosService,
    private actRoute: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthService,
    private qrService: NgxQrcodeStylingService,
    private translateService: TranslateService,
    private mediaObserver: MediaObserver
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
        this.qrConfig.data = window.location.origin + '/v/' + this.id;

        this.logosService.getById(this.id!).subscribe(l => {
          this.generalForm.patchValue(l);
          this.logoForm.patchValue(l);
          this.qrForm.patchValue(l);
          this.mergeForm.patchValue(l);
          this.computeForm.patchValue(l);

          setTimeout(() => {
            if (!l.qrFile) {
              this.generateQr();
            }
          }, 10);
        });
      });
    });
  }

  generateQr() {
    this.qrConfig.backgroundOptions!.color =
      this.qrForm.get('qrBackgroundColor')!.value || '#ffffff';
    this.qrConfig.margin = this.qrForm.get('qrPadding')!.value || 5;
    this.qrConfig.dotsOptions!.color =
      this.qrForm.get('qrColor')!.value || '#000000';
    this.qrService
      .create(this.qrConfig, this.qrSvgWrapper!.nativeElement)
      .subscribe(x => {
        setTimeout(() => {
          const svgWrapper = x.container as HTMLDivElement;
          this.qrImageData = new Blob(
            [
              svgWrapper.innerHTML.replace(
                '<svg',
                '<svg xmlns="http://www.w3.org/2000/svg"'
              ),
            ],
            {
              type: 'image/svg+xml',
            }
          );
        }, 100);
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
    
    file.arrayBuffer().then(ab => { 
      this.logoImageData = new Blob([ab], {
        type: file.type
      })
    });

    this.logoFileUploading = true;
    this.logoFileUploadProgress = 0;
    this.storageService
      .uploadWithProgress(`${this.user!.email!}/${file.name}`, file, file.type)
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

  saveQr() {
    this.qrFileUploading = true;
    this.qrFileUploadProgress = 0;
    this.storageService
      .uploadWithProgress(
        `${this.user!.email!}/qr_${this.id}.svg`,
        this.qrImageData!,
        'image/svg+xml'
      )
      .subscribe({
        next: s => {
          if (!s.complete) {
            this.qrFileUploadProgress = s.progress;
            return;
          }
          this.qrFileUploading = false;
          this.qrFileUploadProgress = 0;
          this.qrForm.get('qrFile')!.setValue(s.url!);
        },
        error: e => {
          this.toastService.showError(e.message);
          this.qrFileUploading = false;
          this.qrFileUploadProgress = 0;
        },
      });
  }

  clearLogoFile() {
    this.logoForm.get('logoFile')!.setValue(null);
  }

  clearQrFile() {
    this.qrForm.get('qrFile')!.setValue(null);
    setTimeout(() => {
      this.generateQr();
    }, 100);
  }

  save() {
    this.logosService
      .update(this.id!, {
        ...this.generalForm.value,
        ...this.logoForm.value,
        ...this.qrForm.value,
        ...this.mergeForm.value,
        ...this.computeForm.value,
      } as Logo)
      .subscribe({
        next: () => {
          this.toastService.showSuccess(
            this.translateService.instant(
              'ui.logos.addEditLogo.savedSuccessfully'
            )
          );
        },
        error: e => {
          this.toastService.showError(e.message);
        },
      });
  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }
}
