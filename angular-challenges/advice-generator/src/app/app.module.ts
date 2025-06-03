import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AdviceCardComponent } from "./advice-card/advice-card.component";

@NgModule({
  declarations: [AppComponent, AdviceCardComponent],
  imports: [BrowserModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
