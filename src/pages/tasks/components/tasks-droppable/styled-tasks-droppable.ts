import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const DroppableTasks = styled.div`
  display: flex;
`;

export const DroppableTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100vh;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const DraggableCard = styled.div`
  margin-bottom: ${pxToRem(30)};
`;

export const Title = styled.h1`
  font-size: ${pxToRem(24)};
  font-weight: 600;
  color: ${({ theme }) => theme.title};
`;