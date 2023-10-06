/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import TasksService from '@/services/TasksService';
import { TaskSharp } from '@mui/icons-material';
import * as s from './styled-tasks-to-deliver';
import { TaskModel } from '@/models/Task';
import dayjs, { Dayjs } from 'dayjs';

type TasksToDeliverProps = {
  selectedDayTasks: TaskModel[];
  setSelectedDayTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  selectedDate: Dayjs;
}

const TasksToDeliver = ({
  selectedDayTasks,
  selectedDate,
  setSelectedDayTasks
}: TasksToDeliverProps) => {
  const allTasks = TasksService.getTask();

  useEffect(() => {
    const latestTasks = allTasks.filter((task) => (
      dayjs(task.endAt).isSame(selectedDate, 'day')
    ));
    setSelectedDayTasks(latestTasks);
  }, [selectedDate]);

  return (
    <div>
      <s.Container>
        <s.Title>
          <TaskSharp fontSize={'small'} />
          Tarefas para entregar
        </s.Title>
        {Boolean(selectedDayTasks.length) ? (
          selectedDayTasks.map((task) => (
            <>
              <s.StyledLink href='/tasks'>
                <s.Card key={task.id}>
                  <s.TaskIcon />
                  <s.TaskTitle>{task.title}</s.TaskTitle>
                </s.Card>
              </s.StyledLink>
            </>
          ))
        ) : (
          <p>Aqui aparecerão suas tarefas do dia.</p>
        )}
      </s.Container>
    </div>
  );
};

export default TasksToDeliver;
