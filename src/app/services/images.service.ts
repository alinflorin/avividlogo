import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Resolution } from '../models/resolution';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getImageSizeFromFile(f: File) {
    const subject = new Subject<Resolution>();
     let img = new Image();
     img.src = window.URL.createObjectURL(f);
     img.onload = () => {
       subject.next({
         width: img.width,
         height: img.height
       });
       subject.complete();
       return true;
     };
    img.onerror = e => {
      subject.error(e);
    };
    return subject.asObservable();
  }
}
