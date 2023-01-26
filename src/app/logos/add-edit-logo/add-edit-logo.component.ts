import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/shared/toast/services/toast.service';

@Component({
  selector: 'app-add-edit-logo',
  templateUrl: './add-edit-logo.component.html',
  styleUrls: ['./add-edit-logo.component.scss'],
})
export class AddEditLogoComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  private user: User | undefined;

  generalForm = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.required]),
  });

  logoForm = new FormGroup({
    logoFile: new FormControl<string | null>(null, [Validators.required]),
    computedFiles: new FormArray([] as FormControl<string | null>[], [
      Validators.required,
    ]),
  });

  constructor(
    private toastService: ToastService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this._subs.push(
      this.authService.user.subscribe(u => {
        this.user = u;
      })
    );
  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }
}
