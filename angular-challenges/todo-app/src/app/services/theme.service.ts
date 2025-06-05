import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  protected _darkMode = false;

  isDarkMode() {
    return this._darkMode;
  }

  setDarkMode(isDarkMode: boolean) {
    this._darkMode = isDarkMode;
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }
}
