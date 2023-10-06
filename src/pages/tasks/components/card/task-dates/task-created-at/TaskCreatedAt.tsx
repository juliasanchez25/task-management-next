import React from 'react';
import { TaskModel } from '@/models/Task';
import dayjs from 'dayjs';
import * as s from './styled-task-created-at';

type TaskCreatedAtProps = {
  task: TaskModel;
};

const TaskCreatedAt = ({ task }: TaskCreatedAtProps) => {
  return (
    <s.Container>
      <s.CalendarIcon />
      <p>Criada em: {dayjs(task.createdAt).format('DD/MM/YYYY')}</p>
    </s.Container>
  );
};

export default TaskCreatedAt;
