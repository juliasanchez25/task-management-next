import React, { useState } from 'react';
import styles from './../../../styles/pages/tasks/components/Tag.module.scss';
import { MoreHoriz } from '@mui/icons-material';

type TagParams = {
  type: string;
}

const Tag = ({type}: TagParams) => {
  return (
    <div className={styles['card-top']}>
      <div className={styles['card-top__tag']}>{type}</div>
      <MoreHoriz htmlColor='#D1D1D1' />
    </div>
  );
};

export default Tag;