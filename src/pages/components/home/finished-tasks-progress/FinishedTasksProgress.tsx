import React, { useState } from 'react';
import { TaskModel } from '@/models/Task';
import TasksService from '@/services/TasksService';
import * as s from './styled-finished-tasks-progress';
import dayjs from 'dayjs';

const FinishedTasksProgress = () => {
  const [tasks] = useState<TaskModel[]>(TasksService.getTask().filter((task) => (
    dayjs(task.endAt).isSame(dayjs(), 'day')
  )));
  const [finishedTasks] = useState<TaskModel[]>(TasksService.getTask().filter((task) => (
    task.status === 'done' && dayjs(task.finishedAt).isSame(dayjs(), 'day')
  )));

  const handleProgress = () => {
    const totalTasksEndingToday = tasks.length;
    const totalTasksFinishedToday = finishedTasks.length;
    return ((totalTasksFinishedToday / totalTasksEndingToday) * 100).toFixed(0);
  }

  return (
    <>
      {tasks.length > 0 ? (
        <s.TasksFinishedToday>
          <h2 className='title'>Seu progresso hoje</h2>
          <s.ProgressContainer>
            <s.ProgressBar width={parseInt(handleProgress())} animate />
          </s.ProgressContainer>
          <p>{handleProgress()}%</p>
        </s.TasksFinishedToday>
      ) : (
        <s.NoTasksTitle>Nenhuma tarefa para hoje!</s.NoTasksTitle>
      )}
    </>
  );
};

export default FinishedTasksProgress;
