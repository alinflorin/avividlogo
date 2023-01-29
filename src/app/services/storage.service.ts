import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  StorageReference,
  getDownloadURL,
} from '@angular/fire/storage';
import { from, map, Subject, switchMap } from 'rxjs';
import { UploadStatus } from '../models/upload-status';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    private storage: Storage,
    private ngZone: NgZone,
    private httpClient: HttpClient
  ) {}

  upload(
    path: string,
    content: Blob | Uint8Array | ArrayBuffer,
    contentType: string,
    tag: any = undefined
  ) {
    const r = ref(this.storage, path);
    return from(
      uploadBytes(r, content, {
        contentType: contentType,
      })
    ).pipe(
      switchMap(r =>
        this.getUrl(r.ref).pipe(
          map(
            z =>
              ({
                url: z,
                complete: true,
                progress: 100,
                tag: tag,
              } as UploadStatus)
          )
        )
      )
    );
  }

  uploadWithProgress(
    path: string,
    content: Blob | Uint8Array | ArrayBuffer,
    contentType: string,
    tag: any = undefined
  ) {
    const r = ref(this.storage, path);
    const uploadTask = uploadBytesResumable(r, content, {
      contentType: contentType,
    });
    const subject = new Subject<UploadStatus>();
    uploadTask.on(
      'state_changed',
      r => {
        this.ngZone.run(() => {
          subject.next({
            progress: Math.round((r.bytesTransferred * 100) / r.totalBytes),
            complete: false,
            tag: tag,
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
                tag: tag,
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

  getAsString(url: string) {
    return this.httpClient.get(url, {
      responseType: 'text',
    });
  }

  getAsBlob(url: string) {
    return this.httpClient.get(url, {
      responseType: 'blob',
    });
  }
}
