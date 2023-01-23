import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { Auth, onAuthStateChanged, Unsubscribe, User, signOut } from '@angular/fire/auth';

import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { ToastService } from './shared/toast/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  private _authStateSub: Unsubscribe | undefined;
  isMobile = false;
  user: User | null = null;

  constructor(private mediaObserver: MediaObserver, private auth: Auth, private toast: ToastService, private router: Router,
  private sts: ScreenTrackingService, private uts: UserTrackingService) {

  }

  ngOnInit(): void {

    this._subs.push(
      this.mediaObserver.asObservable().subscribe(() => {
        this.isMobile = this.mediaObserver.isActive('xs');
      })
    );
    
    this._authStateSub = onAuthStateChanged(this.auth, user => { 
      this.user = user;
    }, error => {
      this.user = null;
      this.toast.showError(error.message);
    });



  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
    if (this._authStateSub) {
      this._authStateSub();
    }
  }

  logout() {
    from(signOut(this.auth)).subscribe(() => {
      this.router.navigate(['login']);
    });
  }

}
