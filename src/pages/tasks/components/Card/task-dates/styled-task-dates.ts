import styled from '@emotion/styled';
import { pxToRem } from '@/utils/px-to-rem';
import theme from '@/theme/theme';
import { CalendarToday, Schedule } from '@mui/icons-material';

export const TaskDatesContainer = styled.div`
`;

export const DateItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${pxToRem(14)};
  color: ${theme.title};
  font-style: italic;
  gap: ${pxToRem(5)};

  p {
    margin: 3px 0;
  }
`;

export const CalendarIcon = styled(CalendarToday)`
  font-size: ${pxToRem(16)};
`;

export const ScheduleIcon = styled(Schedule)`
  font-size: ${pxToRem(16)};
`;