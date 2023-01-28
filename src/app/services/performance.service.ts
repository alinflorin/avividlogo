import { Injectable } from '@angular/core';
import { Performance } from '@angular/fire/performance';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(private performance: Performance) { 
    this.performance.dataCollectionEnabled = true;
    this.performance.instrumentationEnabled = true;
  }
}
