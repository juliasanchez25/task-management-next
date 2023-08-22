import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './../styles/pages/index.module.scss';
import ProgressCard from './components/ProgressCard';
import imageTimeManagement from './../../public/assets/images/time-management.png';
import * as s from './styled-index';

const Index = () => {
  return (
    <>
      <s.Main>
        <div>
          <s.Title>Tarefas</s.Title>
          <s.Description>Explore todas as tarefas pendentes e priorize suas atividades com eficiência!</s.Description>
          <Link href={'/tasks'}>
            <s.Button>Minhas tarefas</s.Button>
          </Link>
        </div>
        {/*         <s.ImageWrapper>
          <Image src={imageTimeManagement} alt='Time Management' />
        </s.ImageWrapper> */}
      </s.Main>

      <s.ProgressCardsArea>
        <ProgressCard />
      </s.ProgressCardsArea>
    </>
  );
};

export default Index;
