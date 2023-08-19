import styled from '@emotion/styled';
import theme from '@/theme/theme';
import { pxToRem } from '@/utils/px-to-rem';

export const DroppableTasks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DroppableTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: ${pxToRem(24)};
  font-weight: 600;
  color: ${theme.title};
`;