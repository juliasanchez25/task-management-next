import React from 'react';
import TaskCreatedAt from './task-created-at/TaskCreatedAt';
import TaskEndsAt from './task-ends-at/TaskEndsAt';
import { TaskModel } from '@/models/Task';
import * as s from './styled-task-dates';

type TaskDatesProps = {
  task: TaskModel;
}

const TaskDates = ({ task }: TaskDatesProps) => {
  return (
    <s.TaskDatesContainer>
      <TaskCreatedAt task={task} />
      <TaskEndsAt task={task} />
    </s.TaskDatesContainer>
  );
};

export default TaskDates;
