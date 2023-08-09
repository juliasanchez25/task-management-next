import { TaskModel } from '@/models/Task';
import { Button, CardActions, CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import dayjs from 'dayjs';

type CardProps = {
  task: TaskModel;
  index: number;
  onClick?: () => void;
  remove: (id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const CustomCard = ({ task, onClick, remove }: CardProps) => {
  return (
    <Card onClick={onClick}>
      <CardContent>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.type}</p>
        <p>{dayjs(task.createdAt).format('DD/MM/YYYY hh:mm')}</p>
      </CardContent>
      <CardActions>
        <Button onClick={(event) => {
          remove(task.id, event);
        }} size="small">REMOVERRRRR</Button>
      </CardActions>
    </Card>
  );
};