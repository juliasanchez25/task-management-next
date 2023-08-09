import { TaskModel } from '@/models/Task';
import { Button, CardActions, CardContent } from '@mui/material';
import Card from '@mui/material/Card';
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
    <Card onClick={onClick}>
      <CardContent>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.type}</p>
        <p>{dayjs(task.createdAt).format('DD/MM/YYYY HH:mm')}</p>
        <p>{dayjs(task.endAt).format('DD/MM/YYYY')}</p>
        <p>{handleTaskEndAt()}</p>
      </CardContent>
      <CardActions>
        <Button onClick={(event) => {
          remove(task.id, event);
        }} size="small">REMOVERRRRR</Button>
      </CardActions>
    </Card>
  );
};