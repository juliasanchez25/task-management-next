import { TaskModel } from '@/models/Task';
import { Delete, MoreHoriz, EditNote } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import Tag from '../task-type-tag/TaskTypeTag';
import TaskDates from '../task-dates/TaskDates';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import * as s from './styled-custom-card';

type CardProps = {
  task: TaskModel;
  index: number;
  onClick?: () => void;
  remove: (id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

dayjs.extend(timezone);
dayjs.extend(utc);

export const CustomCard = ({ task, onClick, remove }: CardProps) => {
  const endOfDay = dayjs().endOf('day');
  const taskEndTime = dayjs(task.endAt).endOf('day');

  const status = {
    late: taskEndTime.isBefore(endOfDay),
    today: taskEndTime.isSame(endOfDay, 'day'),
    inTime: taskEndTime.isAfter(endOfDay)
  };

  const handleTaskEndAt = () => {
    if (status.late) {
      return 'Atrasado';
    }

    if (status.today) {
      return 'Hoje';
    }

    if (status.inTime) {
      return 'Em dia';
    }
  };

  return (
    <s.Container onClick={onClick}>
      <s.Content>
        <s.CardTop>
          <Tag type={task.type} />
          <s.TaskDue status={status.late ? 'late' : status.today ? 'today' : 'inTime'}>
            <s.ScheduleIcon />
            <p>{handleTaskEndAt()}</p>
          </s.TaskDue>
          <MoreHoriz htmlColor='#d1d1d1' />
        </s.CardTop>
        <s.CardTitle>{task.title}</s.CardTitle>
        <s.DatesActions>
          <s.Dates>
            <TaskDates task={task} />
          </s.Dates>
          <s.Actions>
            <Tooltip title='Editar tarefa'>
              <IconButton onClick={onClick} size='small'><EditNote /></IconButton>
            </Tooltip>
            <Tooltip title='Excluir tarefa'>
              <IconButton onClick={(event) => {
                remove(task.id, event);
              }} size='small'><Delete /></IconButton>
            </Tooltip>
          </s.Actions>
        </s.DatesActions>
      </s.Content>
    </s.Container>
  );
};