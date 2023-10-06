import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const Title = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Card = styled.div`
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.lightPurple};
  border-radius: 10px;
`;

export const TaskTitle = styled.h4`
  font-size: ${pxToRem(14)};
  font-weight: 500;
  color: ${({ theme }) => theme.title};
`;
