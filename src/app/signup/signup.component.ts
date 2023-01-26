import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidatorsExtra } from '../helpers/validators-extra';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../shared/toast/services/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  returnTo = '/';

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      ValidatorsExtra.mustMatch('password'),
    ]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private actRoute: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this._subs.push(
      this.formGroup.get('password')!.valueChanges.subscribe(() => {
        this.formGroup.get('password2')!.updateValueAndValidity();
      })
    );

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

  signup() {
    this.authService
      .signup(
        this.formGroup.value.email!,
        this.formGroup.value.password!,
        this.formGroup.value.name!
      )
      .subscribe({
        next: u => {
          this.router.navigateByUrl(this.returnTo);
          this.toastService.showSuccess(
            this.translate.instant('ui.signup.accountCreatedSuccessfully')
          );
        },
        error: e => {
          this.toastService.showError(e.message);
        },
      });
  }
}
