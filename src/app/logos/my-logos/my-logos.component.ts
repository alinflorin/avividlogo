import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-logos',
  templateUrl: './my-logos.component.html',
  styleUrls: ['./my-logos.component.scss'],
})
export class MyLogosComponent implements OnDestroy {
  private _subs: Subscription[] = [];
  constructor() {}

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

  openAddDialog() {}
}
