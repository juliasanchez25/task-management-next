import React, { useEffect } from 'react';
import TasksService from '../../../services/TasksService';
import * as s from './styled-today-tasks';
import { TaskModel } from '@/models/Task';
import dayjs, { Dayjs } from 'dayjs';

type TTodayTasks = {
  selectedDayTasks: TaskModel[];
  setSelectedDayTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  selectedDate: Dayjs;
}

const TodayTasks = ({
  selectedDayTasks,
  selectedDate,
  setSelectedDayTasks
}: TTodayTasks) => {
  const allTasks = TasksService.getTask();

  useEffect(() => {
    const latestTasks = allTasks.filter((task) => (
      dayjs(task.endAt).isSame(selectedDate, 'day')
    ))
    setSelectedDayTasks(latestTasks);
  }, [selectedDate])

  return (
    <s.Container>
      <s.Title>Tarefas para entregar hoje</s.Title>
      {Boolean(selectedDayTasks.length) ? (
        selectedDayTasks.map((task) => (
          <div key={task.id}>
            <div>{task.title}</div>
          </div>
        ))
      ) : (
        <div>Nenhuma tarefa para entregar hoje!!</div>
      )}
    </s.Container>
  );
};

export default TodayTasks;
