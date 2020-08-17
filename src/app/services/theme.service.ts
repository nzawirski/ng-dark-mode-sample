import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _darkTheme = new BehaviorSubject<boolean>(localStorage.getItem("darkTheme") === "true" ? true : false);
  isDarkTheme = this._darkTheme.asObservable();

  setDarkTheme(toggle: boolean): void {
    localStorage.setItem("darkTheme",toggle?"true":"false")
    this._darkTheme.next(toggle);
  }
}
