import { Component, Input } from "@angular/core";

@Component({
  selector: "app-thank-you-card",
  templateUrl: "./thank-you-card.component.html",
  styleUrls: ["./thank-you-card.component.scss"],
})
export class ThankYouCardComponent {
  @Input() userRating!: number;
}
