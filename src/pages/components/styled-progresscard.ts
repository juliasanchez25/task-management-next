import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const LastTasksTitle = styled.h2`
  margin-top: ${pxToRem(50)};
  font-size: ${pxToRem(30)};
  font-weight: 600;
  color: ${({ theme }) => theme.title};
`;

export const Container = styled.div`
  margin-top: ${pxToRem(20)};
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Card = styled.div`
  padding: ${pxToRem(10)} ${pxToRem(25)};
  width: ${pxToRem(304)};
  max-width: 100%;
  height: ${pxToRem(225)};
  max-height: auto;
  background-color: ${({ theme }) => theme.background};
  border-radius: 22.69px;
`;

export const Date = styled.h4`
  font-size: ${pxToRem(16)};
  font-weight: 500;
  color: ${({ theme }) => theme.title};
`;

export const TaskTitle = styled.h1`
  margin-bottom: 0;
  font-size: ${pxToRem(16)};
  font-weight: 600;
  color: ${({ theme }) => theme.title};
`;

export const TaskCurrentStatus = styled.p`
  margin-top: 0;
  font-size: ${pxToRem(16)};
  font-weight: 400;
  color: ${({ theme }) => theme.title};
`;

export const ProgressContainer = styled.div`
  margin-top: 0;
  font-size: ${pxToRem(16)};
  font-weight: 400;
  color: ${({ theme }) => theme.title};
  width: 100%;
  border-radius: 20px;
  background-color: #f3f3f3;
`;

export const ProgressBar = styled.div<{ width: number; animate: boolean }>`
  background-color: #4caf50;
  width: ${(props) => (props.animate ? `${props.width}%` : '0%')};
  height: ${pxToRem(10)};
  border-radius: 20px;
  transition: width 1s ease-in-out;
`;

export const ProgressStatus = styled.div`
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p,
  span {
    font-size: ${pxToRem(14)};
    color: ${({ theme }) => theme.title};
  }
`;
