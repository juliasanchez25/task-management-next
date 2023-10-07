type TaskStatus = 'todo' | 'doing' | 'done';
export type List = string;

export interface TaskModel {
  id: number;
  title: string;
  description: string;
  list: List;
  status: TaskStatus;
  createdAt: Date;
  endAt: Date;
}

export type TaskTypeOption = {
  value: string;
  label: string;
}
