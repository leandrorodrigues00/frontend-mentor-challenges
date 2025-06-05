import { Injectable } from "@angular/core";
import { ITask } from "../interfaces/task.interfaces";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  protected _tasks: ITask[] = [];

  getUserTasks() {
    return this._tasks;
  }

  addTask(title: string) {
    const NEW_TASK = {
      id: new Date().getTime().toString(),
      title: title,
      completed: false,
    };
    this._tasks = [...this._tasks, NEW_TASK];
  }

  removeTask(id: string) {
    this._tasks = this._tasks.filter((task) => task.id !== id);
  }

  completeTask(id: string) {
    this._tasks = this._tasks.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed } : task;
    });
  }

  removeCompletedTasks() {
    this._tasks = this._tasks.filter((task) => !task.completed);
  }
}
