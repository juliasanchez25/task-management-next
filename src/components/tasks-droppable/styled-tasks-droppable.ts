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
  max-height: 300px;
`;

export const DraggableCard = styled.div`
  margin-bottom: ${pxToRem(30)};
`;

export const Title = styled.h1`
  font-size: ${pxToRem(18)};
  font-weight: 500;
  color: ${({ theme }) => theme.title};
`;
