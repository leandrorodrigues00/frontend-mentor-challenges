import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  rating: number | null = null;

  onReview(selectedRating: number) {
    this.rating = selectedRating;
  }
}
