import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  Auth,
  onAuthStateChanged,
  Unsubscribe,
  User,
} from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import {
  Storage,
  uploadBytes,
  ref,
  getDownloadURL,
} from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';
import { ToastService } from 'src/app/shared/toast/services/toast.service';
import { AddEditLogoData } from '../models/add-edit-logo-data';

@Component({
  selector: 'app-add-edit-logo',
  templateUrl: './add-edit-logo.component.html',
  styleUrls: ['./add-edit-logo.component.scss'],
})
export class AddEditLogoComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.required]),
    logoFile: new FormControl<string | null>(null, [Validators.required]),
  });
  private userUnsubscribe: Unsubscribe | undefined;
  private user: User | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AddEditLogoData,
    private dialogRef: MatDialogRef<AddEditLogoComponent>,
    private firestore: Firestore,
    private storage: Storage,
    private toastService: ToastService,
    private translateService: TranslateService,
    private auth: Auth
  ) {}

  ngOnInit(): void {
    if (this.data.logo) {
      this.form.patchValue(this.data.logo);
    }

    this.userUnsubscribe = onAuthStateChanged(
      this.auth,
      u => {
        this.user = u;
      },
      () => {
        this.user = null;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.userUnsubscribe) {
      this.userUnsubscribe();
    }
  }

  logoFileChanged(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.item(0);
    if (!file) {
      input.value = '';
      return;
    }

    const fileRef = ref(this.storage, `${this.user!.email}/${file.name}`);

    from(uploadBytes(fileRef, file)).subscribe({
      next: () => {
        from(getDownloadURL(fileRef)).subscribe({
          next: url => {
            this.form.get('logoFile')!.setValue(url);
            this.form.get('logoFile')!.markAsTouched();
            this.form.get('logoFile')!.markAsDirty();
            this.form.get('logoFile')!.updateValueAndValidity();
          },
          error: e2 => {
            this.toastService.showError(e2.message);
          },
        });
      },
      error: e => {
        this.toastService.showError(e.message);
      },
    });

    input.value = '';
  }

  removeLogoFile() {
    this.form.get('logoFile')!.setValue(null);
    this.form.get('logoFile')!.updateValueAndValidity();
  }

  save() {
    console.log(1);
  }
}
