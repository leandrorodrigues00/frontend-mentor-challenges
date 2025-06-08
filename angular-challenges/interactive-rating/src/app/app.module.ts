import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FeedbackFormComponent } from "./components/feedback-form/feedback-form.component";
import { ThankYouCardComponent } from "./components/thank-you-card/thank-you-card.component";
import { CardComponent } from "./components/ui/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent,
    ThankYouCardComponent,
    CardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
