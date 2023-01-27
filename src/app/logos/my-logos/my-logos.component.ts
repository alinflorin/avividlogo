import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/shared/toast/services/toast.service';
import { LogosService } from '../services/logos.service';

@Component({
  selector: 'app-my-logos',
  templateUrl: './my-logos.component.html',
  styleUrls: ['./my-logos.component.scss'],
})
export class MyLogosComponent implements OnInit {
  private user: User | undefined;
  constructor(
    private authService: AuthService,
    private router: Router,
    private logosService: LogosService,
    private toastService: ToastService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe(u => {
      this.user = u;
    });
  }

  addLogo() {
    this.logosService
      .create({
        name: 'New Logo',
        ownerEmail: this.user!.email!,
      })
      .subscribe({
        next: l => {
          this.toastService.showSuccess(
            this.translateService.instant('ui.logos.myLogos.logoCreated')
          );
          this.router.navigate(['logos/edit', l.id]);
        },
        error: e => {
          this.toastService.showError(e.message);
        },
      });
  }
}
