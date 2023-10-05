import React, { useEffect } from 'react';
import TasksService from '@/services/TasksService';
import * as s from './styled-today-tasks';
import { TaskModel } from '@/models/Task';
import dayjs, { Dayjs } from 'dayjs';

type TodayTasksProps = {
  selectedDayTasks: TaskModel[];
  setSelectedDayTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  selectedDate: Dayjs;
}

const TodayTasks = ({
  selectedDayTasks,
  selectedDate,
  setSelectedDayTasks
}: TodayTasksProps) => {
  const allTasks = TasksService.getTask();

  useEffect(() => {
    const latestTasks = allTasks.filter((task) => (
      dayjs(task.endAt).isSame(selectedDate, 'day')
    ))
    setSelectedDayTasks(latestTasks);
  }, [selectedDate])

  return (
    <div>
      <s.Title>Tarefas para entregar hoje</s.Title>
      <s.Container>
      {Boolean(selectedDayTasks.length) ? (
          selectedDayTasks.map((task) => (
          <s.Card key={task.id}>
            <s.TaskTitle>{task.title}</s.TaskTitle>
          </s.Card>
        ))
        ) : (
          <div>Nenhuma tarefa para entregar hoje!!</div>
          )}
      </s.Container>
    </div>
  );
};

export default TodayTasks;