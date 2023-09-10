import React, { useEffect, useState } from 'react';
import { TaskModel } from '@/models/Task';
import TasksService from '../../services/TasksService';
import * as s from './styled-progresscard';
import dayjs from 'dayjs';

const ProgressCard = () => {
  const allTasks = TasksService.getTask();
  const latestTasks = allTasks
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 4);
  const [tasks, setTasks] = useState<TaskModel[]>(latestTasks);
  const [animate, setAnimate] = useState(false);

  const progresses = tasks.map((task) => ({
    date: dayjs(task.createdAt).format('MMM DD, YYYY'),
    taskTitle: task.title,
    taskCurrentStatus: task.status,
    progress: task.status === 'todo' ? 0 : task.status === 'doing' ? 50 : 100,
  }));

  const statusDisplay = {
    todo: 'To Do',
    doing: 'Doing',
    done: 'Done',
  };

  useEffect(() => {
    setAnimate(true);
    return () => setAnimate(false);
  }, []);

  return (
    <>
      {tasks.length > 0 && <s.LastTasksTitle>Últimas Tarefas</s.LastTasksTitle>}
      <s.Container>
        {progresses.map((progress, index) => (
          <s.Card key={index}>
            <s.Date>{progress.date}</s.Date>
            <s.TaskTitle>{progress.taskTitle}</s.TaskTitle>
            <s.TaskCurrentStatus>
              {statusDisplay[progress.taskCurrentStatus]}
            </s.TaskCurrentStatus>
            <s.ProgressContainer>
              <s.ProgressBar width={progress.progress} animate={animate} />
            </s.ProgressContainer>
            <s.ProgressStatus>
              <p>Progresso</p>
              <span>{progress.progress}%</span>
            </s.ProgressStatus>
          </s.Card>
        ))}
      </s.Container>
    </>
  );
};

export default ProgressCard;
