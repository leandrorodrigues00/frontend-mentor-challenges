import { Component, inject, Input } from "@angular/core";
import { ITask } from "src/app/interfaces/task.interfaces";
import { TasksService } from "src/app/services/tasks.service";

@Component({
  selector: "[task-item]",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.scss"],
})
export class TaskItemComponent {
  @Input() taskData!: ITask;
  protected _taskSvc = inject(TasksService);

  removeTask(id: string) {
    this._taskSvc.removeTask(id);
  }

  onCompleteTask(id: string) {
    this._taskSvc.completeTask(id);
  }
}
