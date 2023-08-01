type TaskStatus = 'todo' | 'progress' | 'done'
type TaskType = 'work' | 'personal'

export interface Task {
  id: number;
  title: string;
  description: string;
  type: TaskType,
  status: TaskStatus;
}