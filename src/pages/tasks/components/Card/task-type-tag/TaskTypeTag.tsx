import React from 'react';
import * as s from './styled-task-type-tag';

type TaskType = 'personal' | 'work';

type TagParams = {
  type: TaskType;
};

const TaskTypeTag = ({ type }: TagParams) => {
  const tag = {
    personal: 'Pessoal',
    work: 'Trabalho',
  };

  return (
    <s.CardTagContainer>
      <s.CardTag type={type}>{tag[type]}</s.CardTag>
    </s.CardTagContainer>
  );
};

export default TaskTypeTag;
