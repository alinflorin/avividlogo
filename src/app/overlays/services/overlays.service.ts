import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs, query, where } from '@angular/fire/firestore';
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
}