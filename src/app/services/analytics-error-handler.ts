import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { AnalyticsService } from './analytics.service';

@Injectable()
export class AnalyticsErrorHandler implements ErrorHandler {
  private analyticsService: AnalyticsService | undefined;
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    console.error('Global exception handler: ', error);
    if (!this.analyticsService) {
      this.analyticsService = this.injector.get(AnalyticsService);
    }
    this.analyticsService!.sendEvent('jsException', { error });
  }
}
