import React, { useEffect, useState } from 'react';
import { TaskModel } from '@/models/Task';
import TasksService from '../../../services/TasksService';
import * as s from './styled-progress-card';
import dayjs from 'dayjs';

const ProgressCard = () => {
  const [tasks, setTasks] = useState<TaskModel[]>(TasksService.getTask().filter((task) => (
    dayjs(task.endAt).isSame(dayjs(), 'day')
  )));
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
    done: 'Done'
  };

  useEffect(() => {
    setAnimate(true);
    return () => setAnimate(false);
  }, []);

  return (
    <>
      {tasks.length > 0 ? (
        <s.LastTasksTitle>Tarefas para entregar hoje</s.LastTasksTitle>
      ) : (
        <s.LastTasksTitle>Nenhuma tarefas</s.LastTasksTitle>
      )}
      <s.Container>
        <s.TasksLink href={'/tasks'}>
          {progresses.map((progress, index) => (
            <s.Card key={index}>
              <s.Date>{progress.date}</s.Date>
              <s.TaskTitle>{progress.taskTitle}</s.TaskTitle>

              <s.ProgressContainer>
                <s.ProgressBar width={progress.progress} animate={animate} />
              </s.ProgressContainer>
              <s.ProgressStatus>
                <s.TaskCurrentStatus>
                  {statusDisplay[progress.taskCurrentStatus]}
                </s.TaskCurrentStatus>
                <span>{progress.progress}%</span>
              </s.ProgressStatus>
            </s.Card>
          ))}
        </s.TasksLink>
      </s.Container>
    </>
  );
};

export default ProgressCard;
