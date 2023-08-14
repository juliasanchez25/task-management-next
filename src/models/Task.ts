type TaskStatus = 'todo' | 'doing' | 'done'
type TaskType = 'work' | 'personal'

export interface TaskModel {
  id: number;
  title: string;
  description: string;
  type: TaskType;
  status: TaskStatus;
  createdAt: Date;
  endAt: Date;
}