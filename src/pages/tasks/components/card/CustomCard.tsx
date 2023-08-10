import { TaskModel } from '@/models/Task';
import styles from './../../../../styles/pages/tasks/components/card/CustomCard.module.scss';
import { Delete, MoreHoriz, EditNote } from '@mui/icons-material';
import { Button, CardActions, CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import Tag from './TaskTypeTag';
import TaskDates from './TaskDates';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

type CardProps = {
  task: TaskModel;
  index: number;
  onClick?: () => void;
  remove: (id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const typeMapper = {
  personal: 'Pessoal',
  work: 'Trabalho',
};

dayjs.extend(timezone);
dayjs.extend(utc);

export const CustomCard = ({ task, onClick, remove }: CardProps) => {
  const handleTaskEndAt = () => {
    const status = {
      late: dayjs(task.endAt).isBefore(dayjs()),
      today: dayjs(task.endAt).isSame(dayjs(), 'day'),
      inTime: dayjs(task.endAt).isAfter(dayjs())
    };

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
    <Card onClick={onClick} className={styles['card']}>
      <CardContent>
        <div className={styles['card__top']}>
          <Tag type={typeMapper[task.type]} />
          <div className={styles['card__task-due']}>
            <p>{handleTaskEndAt()}</p>
          </div>
          <MoreHoriz htmlColor='#d1d1d1' />
        </div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <TaskDates task={task} />

      </CardContent>
      <CardActions className={styles['card__actions']}>
        <Button onClick={onClick} size="small"><EditNote /></Button>
        <Button onClick={(event) => {
          remove(task.id, event);
        }} size="small"><Delete /></Button>
      </CardActions>
    </Card>
  );
};