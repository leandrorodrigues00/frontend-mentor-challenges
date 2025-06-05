export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

export type ITaskStatusOptions = "all" | "active" | "completed";
