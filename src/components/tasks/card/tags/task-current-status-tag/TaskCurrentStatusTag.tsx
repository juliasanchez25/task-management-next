import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import * as s from './styled-task-current-status-tag';
import { TaskModel } from '@/models/Task';
import { Schedule } from '@mui/icons-material';

type TaskCurrentStatusTagProps = {
  task: TaskModel;
};

dayjs.extend(timezone);
dayjs.extend(utc);

const TaskCurrentStatusTag = ({ task }: TaskCurrentStatusTagProps) => {
  const endOfDay = dayjs().endOf('day');
  const taskEndTime = dayjs(task.endAt).endOf('day');

  const status = {
    late: taskEndTime.isBefore(endOfDay),
    today: taskEndTime.isSame(endOfDay, 'day'),
    inTime: taskEndTime.isAfter(endOfDay),
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
    <>
      <s.Container
        status={status.late ? 'late' : status.today ? 'today' : 'inTime'}
      >
        <Schedule fontSize={'small'} />
        <p>{handleTaskEndAt()}</p>
      </s.Container>
    </>
  );
};

export default TaskCurrentStatusTag;
