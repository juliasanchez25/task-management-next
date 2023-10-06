import React from 'react';
import * as s from './styled-task-type-tag';
import { TaskType } from '@/models/Task';

type TagParams = {
  type: TaskType;
};

const TaskTypeTag = ({ type }: TagParams) => {

  return (
    <s.CardTagContainer>
      <s.CardTag type={type}>{type}</s.CardTag>
    </s.CardTagContainer>
  );
};

export default TaskTypeTag;
