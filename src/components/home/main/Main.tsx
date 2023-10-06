import Image from 'next/image';
import timeManagement from '../../../../../public/assets/images/time-management.png';
import * as s from './styled-main';

const Main = () => {
  return (
    <s.Main>
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
  );
};

export default Main;
