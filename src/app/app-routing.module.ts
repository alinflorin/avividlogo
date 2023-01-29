import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsComponent } from './settings/settings.component';
import {
  redirectUnauthorizedTo,
  canActivate,
  AuthPipeGenerator,
} from '@angular/fire/auth-guard';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TosComponent } from './tos/tos.component';

const redirectUnauthorizedToLogin: AuthPipeGenerator = next => {
  return redirectUnauthorizedTo(
    `/login?returnTo=` + encodeURIComponent('/' + next.url.toString())
  );
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'tos',
    component: TosComponent,
  },
  {
    path: 'logos',
    loadChildren: () => import('./logos/logos.module').then(m => m.LogosModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'overlays',
    loadChildren: () =>
      import('./overlays/overlays.module').then(m => m.OverlaysModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: 'v', loadChildren: () => import('./view/view.module').then(m => m.ViewModule) },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
