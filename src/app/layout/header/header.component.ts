import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { User } from "@angular/fire/auth";
import { MatDrawer } from "@angular/material/sidenav";
import { TranslateService } from "@ngx-translate/core";
import { LocalSettingsService } from "src/app/services/local-settings.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() drawer: MatDrawer | undefined;
  @Input() isMobile: boolean | undefined;
  @Input() user: User | null = null;

  @Output() onLogoutClicked = new EventEmitter<void>();

  allLanguages = environment.ui.language.available;

  constructor(
    public translateService: TranslateService,
    private lss: LocalSettingsService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  changeLanguage(key: string) {
    this.translateService.use(key).subscribe(() => {
      this.lss.set("language", key);
    });
  }
}
