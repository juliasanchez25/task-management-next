import React, { useState, useEffect } from 'react';
import Calendar from '../calendar/Calendar';
import TodayTasks from '../tasks-to-deliver/TasksToDeliver';
import dayjs, { Dayjs } from 'dayjs';
import { TaskModel } from '@/models/Task';
import * as s from './styled-aside';

const Aside = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedDayTasks, setSelectedDayTasks] = useState<TaskModel[]>([]);

  useEffect(() => {

  }, [selectedDate]);

  return (
    <s.Aside>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <TodayTasks
        selectedDayTasks={selectedDayTasks}
        setSelectedDayTasks={setSelectedDayTasks}
        selectedDate={selectedDate}
      />
    </s.Aside>
  );
};

export default Aside;
