import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDoc,
  doc,
  getDocs,
  query,
  where,
  deleteDoc,
  setDoc,
} from '@angular/fire/firestore';
import { from, map } from 'rxjs';
import { Logo } from '../models/logo';

@Injectable()
export class LogosService {
  constructor(private firestore: Firestore) {}

  create(logo: Logo) {
    return from(addDoc(collection(this.firestore, 'logos'), logo)).pipe(
      map(dr => ({ ...logo, id: dr.id } as Logo))
    );
  }

  getById(id: string) {
    return from(getDoc(doc(this.firestore, `logos/${id}`))).pipe(
      map(ds => ({ id: ds.id, ...ds.data() } as Logo))
    );
  }

  update(id: string, logo: Logo) {
    return from(
      setDoc(doc(this.firestore, `logos/${id}`), logo)
    );
  }

  getByOwnerEmail(email: string) {
    return from(
      getDocs(
        query(
          collection(this.firestore, 'logos'),
          where('ownerEmail', '==', email)
        )
      )
    ).pipe(
      map(qs => {
        return qs.docs.map(d => ({ id: d.id, ...d.data() } as Logo));
      })
    );
  }

  deleteLogo(id: string) {
    return from(deleteDoc(doc(this.firestore, `logos/${id}`)));
  }
}
