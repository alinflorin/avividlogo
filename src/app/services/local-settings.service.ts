import { Injectable } from '@angular/core';
import { LocalSettings } from '../models/local-settings';

@Injectable({
  providedIn: 'root'
})
export class LocalSettingsService {

  constructor() { }

  getAll() {
    const strValue = localStorage.getItem('settings');
    if (!strValue) {
      return undefined;
    }
    return JSON.parse(strValue) as LocalSettings;
  }

  get<T>(key: string, defaultVal: T | undefined = undefined) {
    const ls = this.getAll();
    if (!ls) {
      return defaultVal;
    }
    return (ls as any)[key] as T;
  }

  set(key: string, value: any) {
    let currentSettings = this.getAll();
    if (!currentSettings) {
      currentSettings = {};
    }
    (currentSettings as any)[key] = value;
    localStorage.setItem('settings', JSON.stringify(currentSettings));
  }
}
