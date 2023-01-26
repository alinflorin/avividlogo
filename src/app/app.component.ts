import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { User } from '@angular/fire/auth';

import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { LocalSettingsService } from './services/local-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  isMobile = false;
  user: User | undefined;

  constructor(
    private mediaObserver: MediaObserver,
    private router: Router,
    private sts: ScreenTrackingService,
    private uts: UserTrackingService,
    private translateService: TranslateService,
    private localSettingsService: LocalSettingsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initScreenSizeWatcher();

    this.initAuthSubscription();

    this.initTranslate();
  }

  private initTranslate() {
    this.translateService.setDefaultLang(environment.ui.language.default);
    let lsLang = this.localSettingsService.get<string>('language');
    if (!lsLang) {
      lsLang = this.translateService.getBrowserLang();
      if (!lsLang) {
        lsLang = environment.ui.language.default;
      }
    }
    this.translateService.use(lsLang);
  }

  private initScreenSizeWatcher() {
    this._subs.push(
      this.mediaObserver.asObservable().subscribe(() => {
        this.isMobile = this.mediaObserver.isActive('xs');
      })
    );
  }

  private initAuthSubscription() {
    this._subs.push(
      this.authService.user.subscribe(u => {
        this.user = u;
      })
    );
  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
