import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'src/app/shared/toast/services/toast.service';
import { AddEditLogoData } from '../models/add-edit-logo-data';

@Component({
  selector: 'app-add-edit-logo',
  templateUrl: './add-edit-logo.component.html',
  styleUrls: ['./add-edit-logo.component.scss'],
})
export class AddEditLogoComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    originalFile: new FormControl('', [Validators.required]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AddEditLogoData,
    private dialogRef: MatDialogRef<AddEditLogoComponent>,
    private firestore: Firestore,
    private storage: Storage,
    private toastService: ToastService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    if (this.data.logo) {
      this.form.patchValue(this.data.logo);
    }
  }

  ngOnDestroy(): void {}

  save() {}
}
