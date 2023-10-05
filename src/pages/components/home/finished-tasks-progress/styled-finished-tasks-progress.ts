import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const Date = styled.h4`
  margin-bottom: ${pxToRem(10)};
  font-size: ${pxToRem(16)};
  font-weight: 500;
  color: ${({ theme }) => theme.gray};
`;

export const ProgressContainer = styled.div`
  margin-top: 0;
  font-size: ${pxToRem(16)};
  font-weight: 400;
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
`;

export const ProgressBar = styled.div<{ width: number; animate: boolean }>`
  background-color: #4caf50;
  width: ${(props) => (props.animate ? `${props.width}%` : '0%')};
  height: ${pxToRem(10)};
  border-radius: 20px;
  transition: width 1s ease-in-out;
`;

export const TasksFinishedToday = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: ${pxToRem(30)};

  .title {
    font-size: ${pxToRem(18)};
    font-weight: 400;
    min-width: 200px;
    color: ${({ theme }) => theme.title};
  }

  p {
    font-size: ${pxToRem(18)};
    font-weight: 400;
    color: ${({ theme }) => theme.title};
  }
`;

export const NoTasksTitle = styled.h2`
  margin-top: ${pxToRem(30)};
  font-size: ${pxToRem(24)};
  font-weight: 600;
  color: ${({ theme }) => theme.title};
  margin-bottom: ${pxToRem(44)};
`;
