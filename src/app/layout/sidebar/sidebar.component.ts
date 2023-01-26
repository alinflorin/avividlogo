import { Component, Input, OnDestroy } from '@angular/core';
import { User } from '@angular/fire/auth';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnDestroy {
  private _subs: Subscription[] = [];

  @Input() drawer: MatDrawer | undefined;
  @Input() user: User | undefined;

  constructor(private router: Router) {}

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

  navigate(url: string, e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.router.navigateByUrl(url);
    if (this.drawer && this.drawer.mode === 'over') {
      this.drawer.close();
    }
  }
}
