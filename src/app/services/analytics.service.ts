import { Injectable } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private analytics: Analytics) { }

  sendEvent(type: string, e: any) {
    logEvent(this.analytics, type, e);
  }
}
