import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { MediaObserver } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/shared/toast/services/toast.service';
import { Overlay } from '../models/overlay';
import { OverlaysService } from '../services/overlays.service';

@Component({
  selector: 'app-add-edit-overlay',
  templateUrl: './add-edit-overlay.component.html',
  styleUrls: ['./add-edit-overlay.component.scss'],
})
export class AddEditOverlayComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  isMobile = false;
  private user: User | undefined;
  private id: string | undefined;

  generalForm = new FormGroup({
    name: new FormControl<string | null>('New Logo', [Validators.required]),
    ownerEmail: new FormControl<string | null>(null, [Validators.required]),
  });

  constructor(
    private mediaObserver: MediaObserver,
    private authService: AuthService,
    private actRoute: ActivatedRoute,
    private overlaysService: OverlaysService,
    private toastService: ToastService,
    private translateService: TranslateService
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
}
