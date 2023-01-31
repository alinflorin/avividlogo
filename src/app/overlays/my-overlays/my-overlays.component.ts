import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmationService } from 'src/app/shared/confirmation/services/confirmation.service';
import { ToastService } from 'src/app/shared/toast/services/toast.service';
import { Overlay } from '../models/overlay';
import { OverlaysService } from '../services/overlays.service';

@Component({
  selector: 'app-my-overlays',
  templateUrl: './my-overlays.component.html',
  styleUrls: ['./my-overlays.component.scss'],
})
export class MyOverlaysComponent implements OnInit, OnDestroy {
  overlays: Overlay[] = [];
  private user: User | undefined;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private overlaysService: OverlaysService,
    private confirmationService: ConfirmationService,
    private translateService: TranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe(u => {
      this.user = u;
      this.overlaysService.getByOwnerEmail(u!.email!).subscribe(overlays => {
        this.overlays = overlays;
      });
    });
  }

  addOverlay() {
    this.overlaysService
      .create({
        name: 'New Overlay',
        ownerEmail: this.user!.email!,
      })
      .subscribe({
        next: l => {
          this.toastService.showSuccess(
            this.translateService.instant(
              'ui.overlays.myOverlays.overlayCreated'
            )
          );
          this.router.navigate(['overlays/edit', l.id]);
        },
        error: e => {
          this.toastService.showError(e.message);
        },
      });
  }

  ngOnDestroy(): void {}

  preview(event: Event, overlay: Overlay) {
    event.preventDefault();
    event.stopPropagation();
    window.open(
      window.location.origin + '/overlays/preview/' + overlay.id!,
      '_blank'
    );
  }

  deleteOverlay(event: Event, overlay: Overlay, index: number) {
    event.preventDefault();
    event.stopPropagation();
    this.confirmationService.confirm().subscribe(x => {
      if (!x) {
        return;
      }
      this.overlaysService.deleteOverlay(overlay.id!).subscribe({
        next: () => {
          this.overlays.splice(index, 1);
          this.toastService.showSuccess(
            this.translateService.instant(
              'ui.overlays.myOverlays.overlayDeletedSuccessfully'
            )
          );
        },
        error: e => {
          this.toastService.showError(e.message);
        },
      });
    });
  }
}
