import { Injectable, NgZone } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  StorageReference,
  getDownloadURL,
} from '@angular/fire/storage';
import { from, Subject, switchMap } from 'rxjs';
import { UploadStatus } from '../models/upload-status';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage, private ngZone: NgZone) {}

  upload(path: string, content: Blob | Uint8Array | ArrayBuffer) {
    const r = ref(this.storage, path);
    return from(uploadBytes(r, content)).pipe(
      switchMap(r => this.getUrl(r.ref))
    );
  }

  uploadWithProgress(path: string, content: Blob | Uint8Array | ArrayBuffer) {
    const r = ref(this.storage, path);
    const uploadTask = uploadBytesResumable(r, content);
    const subject = new Subject<UploadStatus>();
    uploadTask.on(
      'state_changed',
      r => {
        this.ngZone.run(() => {
          subject.next({
            progress: Math.round((r.bytesTransferred * 100) / r.totalBytes),
            complete: false,
          });
        });
      },
      e => {
        this.ngZone.run(() => {
          subject.error(e);
        });
      },
      () => {
        this.getUrl(uploadTask.snapshot.ref).subscribe({
          next: url => {
            this.ngZone.run(() => {
              subject.next({
                progress: 100,
                complete: true,
                url: url,
              });
            });
          },
          error: e2 => {
            this.ngZone.run(() => {
              subject.error(e2);
            });
          },
        });
      }
    );
    return subject.asObservable();
  }

  getUrl(ref: StorageReference) {
    return from(getDownloadURL(ref));
  }
}