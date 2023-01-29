import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmationService } from 'src/app/shared/confirmation/services/confirmation.service';
import { ToastService } from 'src/app/shared/toast/services/toast.service';
import { Logo } from '../models/logo';
import { LogosService } from '../services/logos.service';

@Component({
  selector: 'app-my-logos',
  templateUrl: './my-logos.component.html',
  styleUrls: ['./my-logos.component.scss'],
})
export class MyLogosComponent implements OnInit {
  private user: User | undefined;
  logos: Logo[] = [];
  constructor(
    private authService: AuthService,
    private router: Router,
    private logosService: LogosService,
    private toastService: ToastService,
    private translateService: TranslateService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe(u => {
      this.user = u;
      this.logosService.getByOwnerEmail(u!.email!).subscribe(logos => {
        this.logos = logos;
      });
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

  deleteLogo(event: MouseEvent, logo: Logo, index: number) {
    event.preventDefault();
    event.stopPropagation();
    this.confirmationService.confirm().subscribe(x => {
      if (!x) {
        return;
      }
      this.logosService.deleteLogo(logo.id!).subscribe({
        next: () => {
          this.logos.splice(index, 1);
          this.toastService.showSuccess(
            this.translateService.instant(
              'ui.logos.myLogos.logoDeletedSuccessfully'
            )
          );
        },
        error: e => {
          this.toastService.showError(e.message);
        },
      });
    });
  }

  preview(event: MouseEvent, logo: Logo) {
    event.preventDefault();
    event.stopPropagation();
    window.open(window.location.origin + '/v/' + logo.id!, '_blank');
  }
}
