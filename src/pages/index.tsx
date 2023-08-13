import React from 'react';
import Image from 'next/image';
import styles from './../styles/pages/index.module.scss';
import ProgressCard from './components/ProgressCard';
import imageTimeManagement from './../../public/assets/images/time-management.png';

const Home = () => {
  return (
    <div>
      <main className={styles['main']}>
        <div>
          <h1 className={styles['main__title']}>Tarefas</h1>
          <p className={styles['main__description']}>Explore todas as tarefas pendentes e priorize suas atividades com eficiência!</p>
          <button className={styles['main__button']}>Minhas tarefas</button>
        </div>
        <Image src={imageTimeManagement} alt='Time Management' className={styles['main__image']} />
      </main>

      <section className={styles['progress-cards-area']}>
        <ProgressCard />
      </section>
    </div>
  );
};

export default Home;