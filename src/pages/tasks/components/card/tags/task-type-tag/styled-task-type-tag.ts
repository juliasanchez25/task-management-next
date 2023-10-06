import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { TaskType } from '@/models/Task';

type CardTagProps = {
  type: TaskType;
};

export const CardTagContainer = styled.div`
  display: flex;
`;

export const CardTag = styled.div<CardTagProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(80)};
  height: ${pxToRem(28)};
  font-size: ${pxToRem(12)};
  font-weight: 600;
  color: ${({ theme }) => theme.blue};
  border-radius: 50px;
  background-color: ${({ type, theme }) =>
    type === 'personal' ? theme.lightBlue : theme.lightPurple};
  color: ${({ type, theme }) =>
    type === 'personal' ? theme.blue : theme.purple};
`;
