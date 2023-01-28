import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
import { ImagesService } from 'src/app/services/images.service';
import { fabric } from 'fabric';

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
    logoWidth: new FormControl<number | null>(600, [Validators.required]),
    logoHeight: new FormControl<number | null>(1024, [Validators.required]),
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

  mergedFileUploading = false;
  mergedFileUploadProgress = 0;

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

  @ViewChild('fabricParent', { static: true, read: ElementRef })
  private fabricParent!: ElementRef<HTMLFormElement>;

  @ViewChild('fabricCanvas', { static: false, read: ElementRef })
  private fabricCanvas: ElementRef<HTMLCanvasElement> | undefined;
  private fabricInstance: fabric.Canvas | undefined;

  private qrFabricObject: fabric.Image | undefined;
  private logoFabricObject: fabric.Image | undefined;

  constructor(
    private toastService: ToastService,
    private logosService: LogosService,
    private actRoute: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthService,
    private qrService: NgxQrcodeStylingService,
    private translateService: TranslateService,
    private mediaObserver: MediaObserver,
    private imagesService: ImagesService,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    window.addEventListener('resize', this.onWindowResize);

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

        this.logosService.getById(this.id!).subscribe({
          next: l => {
            this.generalForm.patchValue(l);
            this.logoForm.patchValue(l);
            this.qrForm.patchValue(l);
            this.mergeForm.patchValue(l);
            this.computeForm.patchValue(l);

            setTimeout(() => {
              if (!l.mergedFile) {
                this.initFabric();
              }

              if (l.logoWidth && l.logoHeight) {
                this.scaleFabric(l.logoWidth, l.logoHeight);
              }
              if (!l.qrFile) {
                this.generateQr();
              }
              if (l.logoFile) {
                this.addLogoToFabric(l.logoFile);
              }

              if (l.qrFile) {
                this.addQrToFabric(l.qrFile);
              }
            }, 10);
          },
          error: e => {
            this.toastService.showError(e.message);
          },
        });
      });
    });
  }

  private onWindowResize = () => {
    this.zone.run(() => {
      if (
        this.logoForm.get('logoWidth')!.value &&
        this.logoForm.get('logoHeight')!.value
      )
        setTimeout(() => {
          this.scaleFabric(
            this.logoForm.get('logoWidth')!.value!,
            this.logoForm.get('logoHeight')!.value!
          );
        });
    });
  };

  private initFabric() {
    this.fabricInstance = new fabric.Canvas(
      this.fabricCanvas!.nativeElement,
      {}
    );
  }

  private scaleFabric(width: number, height: number) {
    const scaleRatio = this.fabricParent.nativeElement.clientWidth / width;
    this.fabricInstance!.setDimensions({
      width: width * scaleRatio,
      height: height * scaleRatio,
    });
    this.fabricInstance!.setZoom(scaleRatio);
  }

  private addLogoToFabric(url: string) {
    fabric.Image.fromURL(
      url,
      i => {
        this.logoFabricObject = i;
        this.fabricInstance!.add(i);
        this.fabricInstance!.sendBackwards(i);
      },
      {
        lockScalingX: true,
        lockScalingY: true,
        lockMovementX: true,
        lockMovementY: true,
        lockRotation: true,
        lockSkewingX: true,
        lockSkewingY: true,
        lockScalingFlip: true,
        lockUniScaling: true,
        hasControls: false,
        selectable: false,
      }
    );
  }

  private addQrToFabric(url: string) {
    fabric.Image.fromURL(
      url,
      i => {
        this.qrFabricObject = i;
        this.fabricInstance!.add(i);
        this.fabricInstance!.bringForward(i);
      },
      {
        lockRotation: false,
        lockSkewingX: true,
        lockSkewingY: true,
        lockScalingFlip: true,
        scaleX:
          this.logoForm.get('logoWidth')!.value &&
          this.logoForm.get('logoHeight')!.value
            ? Math.min(
                this.logoForm.get('logoWidth')!.value!,
                this.logoForm.get('logoHeight')!.value!
              ) /
              2 /
              300
            : 1,
        scaleY:
          this.logoForm.get('logoWidth')!.value &&
          this.logoForm.get('logoHeight')!.value
            ? Math.min(
                this.logoForm.get('logoWidth')!.value!,
                this.logoForm.get('logoHeight')!.value!
              ) /
              2 /
              300
            : 1,
      }
    );
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

    this.imagesService.getImageSizeFromFile(file).subscribe({
      next: r => {
        this.logoForm.get('logoWidth')!.setValue(r.width);
        this.logoForm.get('logoHeight')!.setValue(r.height);
        this.scaleFabric(r.width, r.height);
      },
      error: e => {
        this.toastService.showError(e.message);
      },
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
          this.addLogoToFabric(s.url!);
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
          this.addQrToFabric(s.url!);
        },
        error: e => {
          this.toastService.showError(e.message);
          this.qrFileUploading = false;
          this.qrFileUploadProgress = 0;
        },
      });
  }

  acceptMerge() {
    this.mergedFileUploading = true;
    this.mergedFileUploadProgress = 0;

    const blob = new Blob(
      [
        this.fabricInstance!.toSVG({
          width: this.logoForm.get('logoWidth')!.value!,
          height: this.logoForm.get('logoHeight')!.value!,
          suppressPreamble: true,
        }),
      ],
      {
        type: 'image/svg+xml',
      }
    );

    this.storageService
      .uploadWithProgress(
        `${this.user!.email!}/merged_${this.id}.svg`,
        blob,
        'image/svg+xml'
      )
      .subscribe({
        next: s => {
          if (!s.complete) {
            this.mergedFileUploadProgress = s.progress;
            return;
          }
          this.mergedFileUploading = false;
          this.mergedFileUploadProgress = 0;
          this.mergeForm.get('mergedFile')!.setValue(s.url!);
        },
        error: e => {
          this.toastService.showError(e.message);
          this.mergedFileUploading = false;
          this.mergedFileUploadProgress = 0;
        },
      });
  }

  clearLogoFile() {
    this.logoForm.get('logoFile')!.setValue(null);
    if (this.logoFabricObject) {
      this.fabricInstance!.remove(this.logoFabricObject!);
      this.logoFabricObject = undefined;
    }
  }

  clearMerge() {
    this.mergeForm.get('mergedFile')!.setValue(null);
    setTimeout(() => {
      this.initFabric();

      if (
        this.logoForm.get('logoWidth')!.value &&
        this.logoForm.get('logoHeight')!.value
      ) {
        this.scaleFabric(
          this.logoForm.get('logoWidth')!.value!,
          this.logoForm.get('logoHeight')!.value!
        );
      }
      if (this.logoForm.get('logoFile')!.value) {
        this.addLogoToFabric(this.logoForm.get('logoFile')!.value!);
      }

      if (this.qrForm.get('qrFile')!.value) {
        this.addQrToFabric(this.qrForm.get('qrFile')!.value!);
      }
    }, 100);
  }

  clearQrFile() {
    this.qrForm.get('qrFile')!.setValue(null);
    if (this.qrFabricObject) {
      this.fabricInstance!.remove(this.qrFabricObject!);
      this.qrFabricObject = undefined;
    }
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
    window.removeEventListener('resize', this.onWindowResize);
  }
}
