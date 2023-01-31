import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Logo } from 'src/app/logos/models/logo';
import { LogosService } from 'src/app/logos/services/logos.service';
import { Overlay } from 'src/app/overlays/models/overlay';
import { OverlaysService } from 'src/app/overlays/services/overlays.service';
import { ToastService } from 'src/app/shared/toast/services/toast.service';
import 'mind-ar-ts/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar-ts/dist/mindar-image-aframe.prod.js';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.scss'],
})
export class ArComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  private logoId: string | undefined;
  logo: Logo | undefined;
  overlay: Overlay | undefined;
  loaded = false;

  aScene: any;
  arSystem: any;

  @ViewChild('aFrameScene', { static: true, read: ElementRef })
  private aFrameScene!: ElementRef<HTMLElement>;

  constructor(
    private actRoute: ActivatedRoute,
    private logosService: LogosService,
    private overlaysService: OverlaysService,
    private toastService: ToastService,
    private zone: NgZone
  ) {}

  private onRenderStart = () => {
    this.zone.run(() => {
      this.actRoute.params.pipe(take(1)).subscribe(params => {
        this.logoId = params['id'];

        this.logosService.getById(this.logoId!).subscribe({
          next: logo => {
            this.logo = logo;

            if (this.logo.overlay) {
              this.overlaysService.getById(this.logo.overlay!).subscribe({
                next: overlay => {
                  this.overlay = overlay;
                  this.init();
                },
                error: e => {
                  this.toastService.showError(e.message);
                },
              });
            } else {
              this.init();
            }
          },
          error: e => {
            this.toastService.showError(e.message);
          },
        });
      });
    });
  };

  ngOnInit(): void {
    this.aScene = this.aFrameScene.nativeElement as any;
    this.arSystem = this.aScene['systems']['mindar-image-system'];
    this.aScene.addEventListener('renderstart', this.onRenderStart);
  }

  private init() {
    this.loaded = true;
    this.arSystem.start();
  }

  ngOnDestroy(): void {
    this.aScene.removeEventListener('renderstart', this.onRenderStart);
    this._subs.forEach(s => s.unsubscribe());
  }
}
