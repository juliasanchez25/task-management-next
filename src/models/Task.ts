type TaskStatus = 'todo' | 'doing' | 'done';
export type TaskType = string;

export interface TaskModel {
  id: number;
  title: string;
  description: string;
  type: TaskType;
  status: TaskStatus;
  createdAt: Date;
  endAt: Date;
  finishedAt?: Date;
}

export type TaskTypeOption = {
  value: string;
  label: string;
}
