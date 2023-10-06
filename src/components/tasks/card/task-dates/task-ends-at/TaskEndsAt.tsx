import React from 'react';
import { TaskModel } from '@/models/Task';
import dayjs from 'dayjs';
import * as s from './styled-task-ends-at';

type TaskEndsAtProps = {
  task: TaskModel;
};

const TaskEndsAt = ({ task }: TaskEndsAtProps) => {
  return (
    <s.Container>
      <s.ScheduleIcon />
      <p>Vence em:</p>
      <p>{dayjs(task.endAt).format('DD/MM/YYYY')}</p>
    </s.Container>
  );
};

export default TaskEndsAt;
