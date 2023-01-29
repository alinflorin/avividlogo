import { Injectable } from '@angular/core';
import { collection, doc, Firestore, getDoc, getDocs, query, where } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Overlay } from '../models/overlay';

@Injectable()
export class OverlaysService {
  constructor(private firestore: Firestore) {}

  getByOwnerEmail(email: string) {
    return from(
      getDocs(
        query(
          collection(this.firestore, 'overlays'),
          where('ownerEmail', '==', email)
        )
      )
    ).pipe(
      map(qs => {
        return qs.docs.map(d => ({ id: d.id, ...d.data() } as Overlay));
      })
    );
  }

  getById(id: string) {
    return from(getDoc(doc(this.firestore, `overlays/${id}`))).pipe(
      map(x => {
        if (!x.exists()) {
          throw new Error('Not found');
        }
        return x;
      }),
      map(ds => ({ id: ds.id, ...ds.data() } as Overlay))
    );
  }
}