import styled from 'styled-components';
import Link from 'next/link';
import { pxToRem } from '@/utils/px-to-rem';

export const LastTasksTitle = styled.h2`
  margin-top: ${pxToRem(30)};
  font-size: ${pxToRem(24)};
  font-weight: 600;
  color: ${({ theme }) => theme.title};
  margin-bottom: ${pxToRem(44)};
`;

export const Container = styled.div`
  margin-top: ${pxToRem(20)};
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const TasksLink = styled(Link)`
  text-decoration: none;
`;

export const Card = styled.div`
  padding: ${pxToRem(10)} ${pxToRem(25)};
  width: ${pxToRem(233)};
  max-width: 100%;
  height: ${pxToRem(159)};
  max-height: auto;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 22.69px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const Date = styled.h4`
  margin-bottom: ${pxToRem(10)};
  font-size: ${pxToRem(16)};
  font-weight: 500;
  color: ${({ theme }) => theme.gray};
`;

export const TaskTitle = styled.h1`
  margin: 0 0 ${pxToRem(15)};
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
  margin-top: ${pxToRem(10)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  p,
  span {
    font-size: ${pxToRem(14)};
    color: ${({ theme }) => theme.title};
  }
`;
