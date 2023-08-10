import React from 'react';
import styles from './../../../../styles/pages/tasks/components/card/TaskTypeTag.module.scss';

type TagParams = {
  type: string;
}

const TaskTypeTag = ({type}: TagParams) => {
  return (
    <div className={styles['card-tag']}>
      <div className={`${styles['card-tag__tag']} ${styles[type]}`}>{type}</div>
    </div>
  );
};

export default TaskTypeTag;