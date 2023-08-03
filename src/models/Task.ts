type TaskStatus = 'todo' | 'progress' | 'done'
type TaskType = 'work' | 'personal'

// data de criação, prazo de entrega, checklist

export interface Task {
  id: number;
  title: string;
  description: string;
  type: TaskType,
  status: TaskStatus;
}