import styled from 'styled-components';
import { pxToRem } from '../../../../../utils/px-to-rem';
import { CalendarToday, Schedule } from '@mui/icons-material';

export const TaskDatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(4)};
`;

export const DateItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${pxToRem(12)};
  color: ${({ theme }) => theme.title};
  font-style: italic;
  gap: ${pxToRem(5)};

  p {
    margin: 3px 0;
  }
`;

export const CalendarIcon = styled(CalendarToday)`
  font-size: ${pxToRem(16)} !important;
  color: ${({ theme }) => theme.icons};
`;

export const ScheduleIcon = styled(Schedule)`
  font-size: ${pxToRem(16)} !important;
  color: ${({ theme }) => theme.icons};
`;
