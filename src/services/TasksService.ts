import { TaskModel } from '@/models/Task';

class TasksService {
  public getTask(): TaskModel[] {
    return JSON.parse(localStorage.getItem('task') || '[]');
  }

  public setTask(params: TaskModel[]): void {
    localStorage.setItem('task', JSON.stringify(params));
  }
}

const task = new TasksService();
export default task;
