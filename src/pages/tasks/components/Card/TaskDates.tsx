import React from 'react';
import { TaskModel } from '@/models/Task';
import styles from './../../../../styles/pages/tasks/components/card/TaskDates.module.scss';
import { CalendarToday, Schedule } from '@mui/icons-material';
import dayjs from 'dayjs';

type TaskTypeTagProps = {
  task: TaskModel;
};

const TaskDates = ({ task }: TaskTypeTagProps) => {
  return (
    <div className={styles['task-dates']}>
      <div className={styles['task-dates__date']}>
        <CalendarToday className={styles['task-dates__icon']} />
        <p>Criada em: {dayjs(task.createdAt).format('DD/MM/YYYY HH:mm')}</p>
      </div>
      <div className={styles['task-dates__date']}>
        <Schedule className={styles['task-dates__icon']} />
        <p>Vence em:</p>
        <p>{dayjs(task.endAt).format('DD/MM/YYYY')}</p>
      </div>
    </div>
  );
};

export default TaskDates;