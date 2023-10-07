import React from 'react';
import * as s from './styled-task-list-tag';
import { List } from '@/models/Task';

type TagParams = {
  list: List;
};

const TaskListTag = ({ list }: TagParams) => {
  return (
    <s.CardTagContainer>
      <s.CardTag type={list}>{list}</s.CardTag>
    </s.CardTagContainer>
  );
};

export default TaskListTag;
