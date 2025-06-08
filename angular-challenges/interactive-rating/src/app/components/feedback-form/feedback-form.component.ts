import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-feedback-form",
  templateUrl: "./feedback-form.component.html",
  styleUrls: ["./feedback-form.component.scss"],
})
export class FeedbackFormComponent {
  rating: number | null = null;
  @Output() feedback = new EventEmitter<number>();

  onSelect(rating: number) {
    this.rating = rating;
  }

  onSubmit() {
    if (this.rating) {
      this.feedback.emit(this.rating);
    }
  }

  trackByFn(index: number, item: number) {
    return item;
  }
}
