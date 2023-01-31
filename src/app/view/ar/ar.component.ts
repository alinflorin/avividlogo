import {
  Component,
  ElementRef,
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

import 'aframe';
import 'mind-ar-ts/dist/mindar-image.prod.js';
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

  @ViewChild('container', { static: true, read: ElementRef })
  private container!: ElementRef<HTMLDivElement>;

  constructor(
    private actRoute: ActivatedRoute,
    private logosService: LogosService,
    private overlaysService: OverlaysService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
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
  }

  private init() {
    const str = `
      <a-scene
    mindar-image="imageTargetSrc: ${this.logo!.mindFile!};"
    color-space="sRGB"
    renderer="colorManagement: true, physicallyCorrectLights"
    vr-mode-ui="enabled: false"
    device-orientation-permission-ui="enabled: false">

    <a-assets>
	    <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
    </a-assets>

    <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

    <a-entity mindar-image-target="targetIndex: 0">
      <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate" />
    </a-entity>
  </a-scene>
    `;
    this.container.nativeElement.innerHTML = str;
  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }
}
