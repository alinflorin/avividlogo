import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../shared/toast/services/toast.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  returnTo = '/';

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private authService: AuthService,
    private translateService: TranslateService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this._subs.push(
      this.actRoute.queryParams.subscribe(qp => {
        if (qp['returnTo']) {
          this.returnTo = qp['returnTo'];
        }
      })
    );
  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

  sendEmail() {
    this.authService.forgotPassword(this.formGroup.value.email!).subscribe({
      next: r => {
        this.toastService.showSuccess(
          this.translateService.instant(
            'ui.forgotPassword.emailSentSuccessfully'
          )
        );
        this.router.navigateByUrl(
          '/login?returnTo=' + encodeURIComponent(this.returnTo)
        );
      },
      error: e => {
        this.toastService.showError(e.message);
      },
    });
  }
}
