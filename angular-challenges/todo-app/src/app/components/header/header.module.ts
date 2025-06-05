import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from "./header.component";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@NgModule({
  declarations: [HeaderComponent, ThemeToggleComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
