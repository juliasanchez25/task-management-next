import React from 'react';
import { TaskModel } from '@/models/Task';
import dayjs from 'dayjs';
import * as s from './styled-task-dates';

type TaskTypeTagProps = {
  task: TaskModel;
};

const TaskDates = ({ task }: TaskTypeTagProps) => {
  return (
    <s.TaskDatesContainer>
      <s.DateItem>
        <s.CalendarIcon />
        <p>Criada em: {dayjs(task.createdAt).format('DD/MM/YYYY HH:mm')}</p>
      </s.DateItem>
      <s.DateItem>
        <s.ScheduleIcon />
        <p>Vence em:</p>
        <p>{dayjs(task.endAt).format('DD/MM/YYYY')}</p>
      </s.DateItem>
    </s.TaskDatesContainer>
  );
};

export default TaskDates;