import { Injectable } from '@angular/core';
import {
  Auth,
  AuthProvider,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from '@angular/fire/auth';
import { onAuthStateChanged } from '@firebase/auth';
import { BehaviorSubject, from, map, switchMap } from 'rxjs';
import { User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | undefined>(undefined);

  constructor(private auth: Auth) {
    onAuthStateChanged(
      this.auth,
      u => {
        this.user.next(u ? u : undefined);
      },
      () => {
        this.user.next(undefined);
      }
    );
  }

  logout() {
    return from(signOut(this.auth));
  }

  loginWithEmailAndPassword(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  loginWithSocial(provider: string) {
    let prv: AuthProvider | undefined;

    switch (provider) {
      default:
        throw new Error('Invalid provider');
      case 'google':
        prv = new GoogleAuthProvider();
        break;
      case 'facebook':
        prv = new FacebookAuthProvider();
        break;
      case 'microsoft':
        prv = new OAuthProvider('microsoft.com');
        break;
    }
    return from(signInWithPopup(this.auth, prv));
  }

  signup(email: string, password: string, name: string) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      switchMap(u =>
        from(
          updateProfile(u.user, {
            displayName: name,
          })
        ).pipe(map(() => u))
      ),
      switchMap(u => from(sendEmailVerification(u.user)).pipe(map(() => u)))
    );
  }

  forgotPassword(email: string) {
    return from(sendPasswordResetEmail(this.auth, email));
  }
}
