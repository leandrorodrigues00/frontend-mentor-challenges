import { Component, inject } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

import { TasksService } from "../services/tasks.service";
import { ITask, ITaskStatusOptions } from "../interfaces/task.interfaces";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent {
  protected _taskSvc = inject(TasksService);
  selectedFilter = "all";

  get getUserTasks() {
    const TASKS = this._taskSvc.getUserTasks();
    if (this.selectedFilter === "completed")
      return TASKS.filter((task) => task.completed);
    if (this.selectedFilter === "active")
      return TASKS.filter((task) => !task.completed);
    return TASKS;
  }

  trackByTaskId(index: number, task: ITask): string {
    return task.id;
  }

  onClearTask() {
    this._taskSvc.removeCompletedTasks();
  }

  onChangeTasksFilter(filter: ITaskStatusOptions) {
    this.selectedFilter = filter;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.selectedFilter === "all") {
      moveItemInArray(
        this._taskSvc.getUserTasks(),
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
