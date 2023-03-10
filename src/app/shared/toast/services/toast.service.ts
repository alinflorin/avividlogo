import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastData } from '../models/toast-data';
import { ToastComponent } from '../toast/toast.component';

@Injectable()
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  showError(message: string, title: string | null = null) {
    return this.show(message, title, 'severity-error');
  }

  showInfo(message: string, title: string | null = null) {
    return this.show(message, title, 'severity-info');
  }

  showWarn(message: string, title: string | null = null) {
    return this.show(message, title, 'severity-warn');
  }

  showSuccess(message: string, title: string | null = null) {
    return this.show(message, title, 'severity-success');
  }

  private show(message: string, title: string | null, className: string) {
    const sub = new Subject<void>();
    if (title == null) {
      title = className.toUpperCase().replace('SEVERITY-', '');
    }
    this.snackBar.openFromComponent(ToastComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: environment.ui.toast.duration,
      panelClass: className,
      data: {
        message: message,
        title: title,
        onClick: () => {
          sub.next();
        },
      } as ToastData,
    });
    return sub.asObservable();
  }
}
