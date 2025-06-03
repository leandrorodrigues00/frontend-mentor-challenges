import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CartDialogComponent } from "./components/cart-dialog/cart-dialog.component";
import { HeaderModule } from "./header/header.module";
import { MatDialogModule } from "@angular/material/dialog";
import { ButtonComponent } from "./components/ui/button/button.component";
import { ProductDialogComponent } from "./components/product-dialog/product-dialog.component";
import { MenuMobileComponent } from "./components/menu-mobile/menu-mobile.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CartDialogComponent,
    ButtonComponent,
    ProductDialogComponent,
    MenuMobileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
