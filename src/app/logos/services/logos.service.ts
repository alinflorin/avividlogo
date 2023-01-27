import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDoc,
  doc,
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
}
