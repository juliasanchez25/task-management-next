import { TaskModel } from '@/models/Task';

type CardProps = {
  task: TaskModel;
  index: number;
}

export const Card = ({ task, index }: CardProps) => {
  return (
    <h1>{task.title}</h1>
  );
};