import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  setDoc,
  query,
  where,
} from '@angular/fire/firestore';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Overlay } from '../models/overlay';

@Injectable()
export class OverlaysService {
  constructor(private firestore: Firestore) {}

  create(overlay: Overlay) {
    return from(addDoc(collection(this.firestore, 'overlays'), overlay)).pipe(
      map(dr => ({ ...overlay, id: dr.id } as Overlay))
    );
  }

  update(id: string, overlay: Overlay) {
    return from(setDoc(doc(this.firestore, `overlays/${id}`), overlay));
  }

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

  deleteOverlay(id: string) {
    return from(deleteDoc(doc(this.firestore, `overlays/${id}`)));
  }
}
