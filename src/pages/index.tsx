import React from 'react';
import styles from './../styles/pages/index.module.scss';

const Home = () => {
  return (
    <main className={styles['main']}>
      <div className={styles['main__text']}>
        <h1 className={styles['main__title']}>Tarefas atuais</h1>
        <p className={styles['main__description']}>Veja suas tarefas do dia</p>
        <button className={styles['main__button']}>Tarefas do dia</button>
      </div>
    </main>
  );
};

export default Home;