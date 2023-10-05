type TaskStatus = 'todo' | 'doing' | 'done';
export type TaskType = 'work' | 'personal';

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
