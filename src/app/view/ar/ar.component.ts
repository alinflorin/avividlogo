import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Logo } from 'src/app/logos/models/logo';
import { LogosService } from 'src/app/logos/services/logos.service';
import { Overlay } from 'src/app/overlays/models/overlay';
import { OverlaysService } from 'src/app/overlays/services/overlays.service';
import { ToastService } from 'src/app/shared/toast/services/toast.service';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.scss'],
})
export class ArComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  private logoId: string | undefined;
  private logo: Logo | undefined;
  private overlay: Overlay | undefined;

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
    console.log(this.logo, this.overlay);
  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }
}
