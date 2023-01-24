import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, Subscription } from 'rxjs';
import { ValidatorsExtra } from '../helpers/validators-extra';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../shared/toast/services/toast.service';
import { TranslateService } from '@ngx-translate/core';

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
    private auth: Auth,
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
    from(
      createUserWithEmailAndPassword(
        this.auth,
        this.formGroup.value.email!,
        this.formGroup.value.password!
      )
    ).subscribe({
      next: u => {
        from(
          updateProfile(u.user, {
            displayName: this.formGroup.value.name,
          })
        ).subscribe({
          next: () => {
            from(sendEmailVerification(u.user)).subscribe({
              next: () => {
                this.router.navigateByUrl(this.returnTo);
                this.toastService.showSuccess(
                  this.translate.instant('ui.signup.accountCreatedSuccessfully')
                );
              },
              error: e => {
                this.toastService.showError(e.message);
              },
            });
          },
          error: e => {
            this.toastService.showError(e.message);
          },
        });
      },
      error: e => {
        this.toastService.showError(e.message);
      },
    });
  }
}
