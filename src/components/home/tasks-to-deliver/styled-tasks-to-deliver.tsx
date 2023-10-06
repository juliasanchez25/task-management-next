import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { TaskAlt } from '@mui/icons-material';
import Link from 'next/link';

export const Title = styled.h4`
  margin: ${pxToRem(60)} 0 ${pxToRem(6)};
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
  gap: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    margin-top: 0;
    color: ${({ theme }) => theme.title};
  }
`;

export const Card = styled.div`
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.lightBlue};
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.blue};
  }
`;

export const TaskTitle = styled.h4`
  font-size: ${pxToRem(14)};
  font-weight: 500;
  color: #fff;
`;

export const TaskIcon = styled(TaskAlt)`
  font-size: ${pxToRem(18)};
  color: #fff;
  margin-right: 0.5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
