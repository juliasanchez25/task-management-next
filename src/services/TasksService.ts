import { TaskModel } from '@/models/Task';
class TasksService {
  public getTasks(): TaskModel[] {
    return JSON.parse(localStorage.getItem('task') || '[]');
  }

  public setTasks(params: TaskModel[]): void {
    localStorage.setItem('task', JSON.stringify(params));
  }

  public addTasks(task: TaskModel): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.setTasks(tasks);
  }

  public getTasksWithListId(listId: string | string[] | undefined): TaskModel[] {
    const tasks = task.getTasks();
    return tasks.filter((task) => task?.list === listId);
  }

  public substituteTask(task: TaskModel): void {
    if (!task?.id) return;
    const tasks = this.getTasks();
    const index = tasks.findIndex((item) => item.id === task.id);
    tasks[index] = task;
    this.setTasks(tasks);
  }

  public removeTask(taskId?: number): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex((item) => item.id === taskId);
    tasks.splice(index, 1);
    this.setTasks(tasks);
  }

  public removeTasksWithListId(listId?: string): void {
    const tasks = this.getTasks();
    const newTasks = tasks.filter((task) => task?.list !== listId);
    this.setTasks(newTasks);
  }
}

const task = new TasksService();
export default task;
