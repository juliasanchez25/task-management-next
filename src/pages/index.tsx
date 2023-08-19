import React from 'react';
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
          <s.Button>Minhas tarefas</s.Button>
        </div>
        <Image src={imageTimeManagement} alt='Time Management' className={styles['main__image']} />
      </s.Main>

      <section className={styles['progress-cards-area']}>
        <ProgressCard />
      </section>
    </>
  );
};

export default Index;