import React, { useEffect, useState } from 'react';
import styles from './../../styles/pages/components/ProgressCard.module.scss';

const progresses = [
  {
    date: 'Ago 08, 2023',
    taskTitle: 'Criar landing page',
    taskCurrentStatus: 'Completed',
    progress: 100
  },
  {
    date: 'Ago 08, 2023',
    taskTitle: 'Criar landing page',
    taskCurrentStatus: 'Doing',
    progress: 50
  },
  {
    date: 'Ago 08, 2023',
    taskTitle: 'Criar landing page',
    taskCurrentStatus: 'Doing',
    progress: 20
  },
];

const ProgressCard = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    return () => setAnimate(false);
  }, []);

  return (
    <>
      {progresses.map((progress, index) => (
        <div key={index} className={styles['card']}>
          <div className={styles['card__header']}>
            <h4 className={styles['card__date']}>{progress.date}</h4>
          </div>
          <div className={styles['card__text']}>
            <h1 className={styles['card__task-title']}>{progress.taskTitle}</h1>
            <p className={styles['card__task-current-status']}>{progress.taskCurrentStatus}</p>
          </div>
          <div className={styles['card__progress-container']}>
            <div
              className={`${styles['card__progress-container__progress-bar']} ${animate ? styles['card__progress-container__progress-bar--animate'] : ''}`}
              style={{
                width: `${progress.progress}%`,
              }}
            ></div>
          </div>
          <div className={styles['card__progress-status']}>
            <p>Progresso</p>
            <span>{progress.progress}%</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProgressCard;