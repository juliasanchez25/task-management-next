import { TaskModel } from '@/models/Task';
import Tag from '../tags/task-type-tag/TaskTypeTag';
import TaskDates from '../task-dates/TaskDates';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import * as s from './styled-custom-card';
import CardActions from '../card-actions/CardActions';
import TaskCurrentStatusTag from '../tags/task-current-status-tag/TaskCurrentStatusTag';
import TaskEndsAt from '../task-dates/task-ends-at/TaskEndsAt';

type CardProps = {
  task: TaskModel;
  index: number;
  onClick?: () => void;
  remove: (
    id: number,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => void;
  openEditModal: (id: number) => void;
};

dayjs.extend(timezone);
dayjs.extend(utc);

const CustomCard = ({ task, onClick, remove, openEditModal }: CardProps) => {
  return (
    <s.Container>
      <s.CardTop>
        <Tag type={task.type} />
        <TaskCurrentStatusTag task={task} />
        <CardActions task={task} remove={remove} openEditModal={openEditModal} />
      </s.CardTop>
      <s.Content onClick={onClick}>
        <s.CardTitle>{task.title}</s.CardTitle>
        <TaskEndsAt task={task} />
      </s.Content>
    </s.Container>
  );
};

export default CustomCard;
