import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-logos',
  templateUrl: './my-logos.component.html',
  styleUrls: ['./my-logos.component.scss']
})
export class MyLogosComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  constructor() {

  }

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }
}
