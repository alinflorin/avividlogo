import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@angular/fire/auth';
import { MatDrawer } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { LocalSettingsService } from 'src/app/services/local-settings.service';
import { environment } from 'src/environments/environment';
import { APP_VERSION } from 'src/version';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() drawer: MatDrawer | undefined;
  @Input() isMobile: boolean | undefined;
  @Input() user: User | null = null;

  @Output() logoutClicked = new EventEmitter<void>();

  allLanguages = environment.ui.language.available;
  appVersion = APP_VERSION;

  constructor(
    public translateService: TranslateService,
    private lss: LocalSettingsService
  ) {}

  changeLanguage(key: string) {
    this.translateService.use(key).subscribe(() => {
      this.lss.set('language', key);
    });
  }
}
