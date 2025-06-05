import { Component } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-theme-toggle",
  templateUrl: "./theme-toggle.component.html",
  styleUrls: ["./theme-toggle.component.scss"],
})
export class ThemeToggleComponent {
  isDarkMode: boolean;

  constructor(protected _themeSvc: ThemeService) {
    this.isDarkMode = this._themeSvc.isDarkMode();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this._themeSvc.setDarkMode(this.isDarkMode);
  }
}
