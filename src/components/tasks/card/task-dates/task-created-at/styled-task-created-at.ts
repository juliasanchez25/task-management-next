import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { CalendarToday } from '@mui/icons-material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: ${pxToRem(10)};
  color: ${({ theme }) => theme.title};
  font-style: italic;
  gap: ${pxToRem(5)};

  p {
    margin: 3px 0;
  }
`;

export const CalendarIcon = styled(CalendarToday)`
  font-size: ${pxToRem(12)} !important;
  color: ${({ theme }) => theme.icons};
`;
