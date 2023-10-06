import FinishedTasksProgress from '@/pages/components/home/finished-tasks-progress/FinishedTasksProgress';
import Aside from './aside/Aside';
import Main from './main/Main';
import * as s from './styled-home';

export const Home = () => {
  return (
    <s.Container>
      <div>
        <Main />
        <FinishedTasksProgress />
      </div>
      <Aside />
    </s.Container>
  );
};
