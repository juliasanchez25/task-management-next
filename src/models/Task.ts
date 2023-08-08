type TaskStatus = 'todo' | 'progress' | 'done'
type TaskType = 'work' | 'personal'

export interface TaskModel {
  id: number;
  title: string;
  description: string;
  type: TaskType,
  status: TaskStatus;
  createdAt: string;
}
