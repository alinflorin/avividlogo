import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
import { combineLatest, Subscription } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';
import { fabric } from 'fabric';
import { CompilerService } from '../services/compiler.service';
import { Overlay } from 'src/app/overlays/models/overlay';
import { OverlaysService } from 'src/app/overlays/services/overlays.service';

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
    overlay: new FormControl<string | null>(null, [Validators.required]),
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
    computedFiles: new FormControl([] as string[], [Validators.required]),
    mindFile: new FormControl<string | null>(null, [Validators.required]),
    useMergedFile: new FormControl<boolean | null>(false, [Validators.required]),
  });

  id: string | undefined;

  logoFileUploading = false;
  logoFileUploadProgress = 0;

  qrFileUploading = false;
  qrFileUploadProgress = 0;

  computedFilesUploading = false;
  computedFilesUploadProgress = 0;

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

  private qrFabricObject: fabric.Object | undefined;
  private logoFabricObject: fabric.Object | undefined;

  overlays: Overlay[] = [];

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
    private zone: NgZone,
    private overlaysService: OverlaysService
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

      this.overlaysService.getByOwnerEmail(this.user!.email!).subscribe(x => {
        this.overlays = x;
      });

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
              if (!l.qrFile) {
                this.generateQr();
              }

              if (!l.mergedFile) {
                this.initFabric();

                setTimeout(() => {
                  if (l.logoWidth && l.logoHeight) {
                    this.scaleFabric(l.logoWidth, l.logoHeight);
                  }
                  if (l.logoFile) {
                    this.addLogoToFabric(l.logoFile);
                  }

                  if (l.qrFile) {
                    this.addQrToFabric(l.qrFile);
                  }
                }, 10);
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
          if (this.fabricInstance) {
            this.scaleFabric(
              this.logoForm.get('logoWidth')!.value!,
              this.logoForm.get('logoHeight')!.value!
            );
          }
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
        this.fabricInstance!.add(this.logoFabricObject);
        this.fabricInstance!.sendBackwards(this.logoFabricObject);
      },
      {
        lockScalingX: true,
        lockScalingY: true,
        lockMovementX: true,
        lockMovementY: true,
        lockRotation: true,
        crossOrigin: 'anonymous',
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

        this.fabricInstance!.add(this.qrFabricObject);
        this.fabricInstance!.bringForward(this.qrFabricObject);
      },
      {
        lockRotation: false,
        name: 'qr',
        lockSkewingX: true,
        crossOrigin: 'anonymous',
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

  selectLogoFile(logoInput: any) {
    logoInput.value = '';
    logoInput.click();
  }

  logoFileUploaded(logoInput: any) {
    const file = logoInput.files?.item(0);
    if (!file) {
      return;
    }

    this.imagesService.getImageSizeFromFile(file).subscribe({
      next: r => {
        this.logoForm.get('logoWidth')!.setValue(r.width);
        this.logoForm.get('logoHeight')!.setValue(r.height);
        this.scaleFabric(r.width, r.height);

        if (this.fabricInstance) {
          const fo = this.fabricInstance!.getObjects().find(
            o => o.name === 'qr'
          );
          if (fo) {
            fo.scaleX =
              this.logoForm.get('logoWidth')!.value &&
              this.logoForm.get('logoHeight')!.value
                ? Math.min(
                    this.logoForm.get('logoWidth')!.value!,
                    this.logoForm.get('logoHeight')!.value!
                  ) /
                  2 /
                  300
                : 1;
            fo.scaleY =
              this.logoForm.get('logoWidth')!.value &&
              this.logoForm.get('logoHeight')!.value
                ? Math.min(
                    this.logoForm.get('logoWidth')!.value!,
                    this.logoForm.get('logoHeight')!.value!
                  ) /
                  2 /
                  300
                : 1;
          }
        }
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
    this.fabricInstance!.toCanvasElement().toBlob(blob => {
      this.storageService
        .uploadWithProgress(
          `${this.user!.email!}/merged_${this.id}.png`,
          blob!,
          'image/png'
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
    });
  }

  optimize() {
    try {
      const compilerService = new CompilerService();
      this.computedFilesUploadProgress = 0;
      this.computedFilesUploading = true;
      const img: HTMLImageElement = new Image(
        this.logoForm.get('logoWidth')!.value!,
        this.logoForm.get('logoHeight')!.value!
      );

      this.storageService
        .getAsBlob(
          this.computeForm.get('useMergedFile')!.value
            ? this.mergeForm.get('mergedFile')!.value!
            : this.logoForm.get('logoFile')!.value!
        )
        .subscribe({
          next: blob => {
            this.computedFilesUploadProgress = 10;
            img.onload = () => {
              compilerService
                .compile(img, p => {
                  this.computedFilesUploadProgress = 10 + Math.round(p / 2);
                })
                .subscribe({
                  next: (d: any) => {
                    try {
                      const exportedData = compilerService.export();
                      compilerService.showData(d[0]).then(trImages => {
                        const observables = [
                          this.storageService.uploadWithProgress(
                            `${this.user!.email!}/mind_${this.id!}.mind`,
                            exportedData,
                            'application/x-msgpack',
                            'mind'
                          ),
                          ...trImages.map((ed, i) =>
                            this.storageService.uploadWithProgress(
                              `${this.user!.email!}/compiled_${this
                                .id!}_${i}.png`,
                              ed,
                              'image/png',
                              i
                            )
                          ),
                        ];

                        const maxPercentagePerItem = Math.round(
                          40 / observables.length
                        );

                        const completedItems: any[] = [];

                        combineLatest(observables).subscribe({
                          next: all => {
                            for (let item of all) {
                              if (item.complete) {
                                if (completedItems.includes(item.tag)) {
                                  // already completed
                                } else {
                                  // complete it
                                  completedItems.push(item.tag);
                                  if (item.tag === 'mind') {
                                    this.computeForm
                                      .get('mindFile')!
                                      .setValue(item.url!);
                                  } else {
                                    const list =
                                      this.computeForm.get('computedFiles')!
                                        .value!;
                                    list.push(item.url!);
                                    this.computeForm
                                      .get('computedFiles')!
                                      .setValue(list);
                                  }
                                }
                              } else {
                                this.computedFilesUploadProgress =
                                  this.computedFilesUploadProgress +
                                  (item.progress / 100) * maxPercentagePerItem;
                              }
                            }
                            if (!all.some(x => !x.complete)) {
                              this.computedFilesUploadProgress = 0;
                              this.computedFilesUploading = false;
                            }
                          },
                          error: e => {
                            this.toastService.showError(e.message);
                            this.computedFilesUploadProgress = 0;
                            this.computedFilesUploading = false;
                          },
                        });
                      });
                    } catch (err2: any) {
                      this.toastService.showError(err2.message);
                      this.computedFilesUploadProgress = 0;
                      this.computedFilesUploading = false;
                    }
                  },
                  error: e => {
                    this.toastService.showError(e.message);
                    this.computedFilesUploadProgress = 0;
                    this.computedFilesUploading = false;
                  },
                });
            };
            img.src = URL.createObjectURL(blob);
          },
          error: e => {
            this.toastService.showError(e.message);
            this.computedFilesUploadProgress = 0;
            this.computedFilesUploading = false;
          },
        });

      img.onerror = (e: any) => {
        this.toastService.showError(e);
        this.computedFilesUploadProgress = 0;
        this.computedFilesUploading = false;
      };
    } catch (err: any) {
      this.computedFilesUploadProgress = 0;
      this.computedFilesUploading = false;
      this.toastService.showError(err.message);
    }
  }

  clearLogoFile() {
    this.logoForm.get('logoFile')!.setValue(null);
    if (this.logoFabricObject) {
      this.fabricInstance!.remove(this.logoFabricObject!);
      this.logoFabricObject = undefined;
    }
    this.clearMerge();
  }

  clearComputed() {
    this.computeForm.get('computedFiles')!.setValue([]);
    this.computeForm.get('mindFile')!.setValue(null);
  }

  clearMerge() {
    this.mergeForm.get('mergedFile')!.setValue(null);
    this.clearComputed();
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
    this.clearMerge();
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
