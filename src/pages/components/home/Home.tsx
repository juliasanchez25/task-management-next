import * as s from './styled-home'
import timeManagement from '../../../../public/assets/images/time-management.png';

import ProgressCard from '@/pages/components/progress-card/ProgressCard';
import Calendar from '@/pages/components/calendar/Calendar';
import TodayTasks from '@/pages/components/today-tasks/TodayTasks';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { TaskModel } from '@/models/Task';

export const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedDayTasks, setSelectedDayTasks] = useState<TaskModel[]>([]);

  useEffect(() => {

  }, [selectedDate])

  return (
    <s.Container>
        <div>
          <s.Main>
            <Image src={timeManagement} alt="Time Management" />
            <div>
              <s.Name>Olá, Julia!</s.Name>
              <s.Title>Bem-vindo ao Task Manager!</s.Title>
              <s.Description>
                Veja suas atividades aqui. Ou
                <s.ViewTasksLink href={'/tasks'}>
                  clique para acessar
                </s.ViewTasksLink>
                todas as suas tarefas.
              </s.Description>
            </div>
          </s.Main>
          <ProgressCard />
        </div>
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
      </s.Container>
  )
}
