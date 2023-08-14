import { TaskModel } from '@/models/Task';
import styles from './../../../../styles/pages/tasks/components/Card/CustomCard.module.scss';
import { Delete, MoreHoriz, EditNote, Schedule } from '@mui/icons-material';
import { CardActions, CardContent, IconButton, Tooltip } from '@mui/material';
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

  const getDueDateClass = () => {
    if (status.late) {
      return styles['card__dates__late'];
    }

    if (status.today) {
      return styles['card__dates__today'];
    }

    if (status.inTime) {
      return styles['card__dates__inTime'];
    }
  };

  return (
    <Card onClick={onClick} className={styles['card']}>
      <CardContent className={styles['card__content']}>
        <div className={styles['card__top']}>
          <Tag type={task.type} />
          <div className={`${styles['card__task-due']} ${getDueDateClass()}`}>
            <Schedule className={styles['card__task-due__icon']} />
            <p>{handleTaskEndAt()}</p>
          </div>
          <MoreHoriz htmlColor='#d1d1d1' />
        </div>
        <h3 className={styles['card__title']}>{task.title}</h3>
        <div className={styles['card__dates-actions']}>
          <div className={styles['card__dates']}>
            <TaskDates task={task} />
          </div>
          <CardActions className={styles['card__actions']}>
            <Tooltip title='Editar tarefa'>
              <IconButton onClick={onClick} size="small"><EditNote /></IconButton>
            </Tooltip>
            <Tooltip title='Excluir tarefa'>
              <IconButton onClick={(event) => {
                remove(task.id, event);
              }} size="small"><Delete /></IconButton>
            </Tooltip>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};