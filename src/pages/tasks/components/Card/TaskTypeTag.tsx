import React from 'react';
import styles from './../../../../styles/pages/tasks/components/Card/TaskTypeTag.module.scss';

type TaskType = 'personal' | 'work';

type TagParams = {
  type: TaskType;
}

const TaskTypeTag = ({ type }: TagParams) => {
  const tag = {
    personal: 'Pessoal',
    work: 'Trabalho',
  };

  const handleTaskTag = () => {
    if (type === 'personal') {
      return styles['personal'];
    }
    if (type === 'work') {
      return styles['work'];
    }
  };

  return (
    <div className={styles['card-tag']}>
      <div className={`${styles['card-tag__tag']} ${handleTaskTag()}`}>{tag[type]}</div>
    </div>
  );
};

export default TaskTypeTag;