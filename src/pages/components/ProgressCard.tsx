import React, { useEffect, useState } from 'react';
import * as s from './styled-progresscard';

const progresses = [
  {
    date: 'Ago 08, 2023',
    taskTitle: 'Criar landing page',
    taskCurrentStatus: 'Completed',
    progress: 100,
  },
  {
    date: 'Ago 08, 2023',
    taskTitle: 'Criar landing page',
    taskCurrentStatus: 'Doing',
    progress: 50,
  },
  {
    date: 'Ago 08, 2023',
    taskTitle: 'Criar landing page',
    taskCurrentStatus: 'Doing',
    progress: 20,
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
        <s.Card key={index}>
          <s.Date>{progress.date}</s.Date>
          <s.TaskTitle>{progress.taskTitle}</s.TaskTitle>
          <s.TaskCurrentStatus>{progress.taskCurrentStatus}</s.TaskCurrentStatus>
          <s.ProgressContainer>
            <s.ProgressBar
              animate={animate}
              style={{
                width: `${progress.progress}%`,
              }}
            ></s.ProgressBar>
          </s.ProgressContainer>
          <s.ProgressStatus>
            <p>Progresso</p>
            <span>{progress.progress}%</span>
          </s.ProgressStatus>
        </s.Card>
      ))}
    </>
  );
};

export default ProgressCard;
