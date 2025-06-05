import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { TasksService } from "src/app/services/tasks.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  protected _taskSvc = inject(TasksService);

  form = new FormGroup({
    title: new FormControl("", {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.controls.title.markAsDirty();
      return;
    }
    const ENTERED_TITLE = this.form.value.title;
    this._taskSvc.addTask(ENTERED_TITLE!);
    this.form.reset();
  }
}
