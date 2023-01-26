import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ToastService } from '../shared/toast/services/toast.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  returnTo = '/';

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
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

  login() {
    this.authService
      .loginWithEmailAndPassword(
        this.formGroup.value.email!,
        this.formGroup.value.password!
      )
      .subscribe({
        next: r => {
          this.toastService.showSuccess(
            this.translateService.instant('ui.login.loginSuccessful')
          );
          this.router.navigateByUrl(this.returnTo);
        },
        error: e => {
          this.toastService.showError(e.message);
        },
      });
  }

  loginWithSocial(provider: string) {
    this.authService.loginWithSocial(provider).subscribe({
      next: () => {
        this.toastService.showSuccess(
          this.translateService.instant('ui.login.loginSuccessful')
        );
        this.router.navigateByUrl(this.returnTo);
      },
      error: e => {
        this.toastService.showError(e.message);
      },
    });
  }
}
