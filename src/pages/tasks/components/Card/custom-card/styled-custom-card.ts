import { pxToRem } from '@/utils/px-to-rem';
import styled from 'styled-components';
import { Schedule } from '@mui/icons-material';
import { Card, CardActions, CardContent } from '@mui/material';

export const Container = styled(Card)`
  padding: ${pxToRem(15)};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${pxToRem(348)};
  max-width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.title};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const TaskDue = styled.div<{ status: 'late' | 'today' | 'inTime' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(110)};
  height: ${pxToRem(30)};
  border-radius: 18px;
  gap: ${pxToRem(5)};
  background-color: ${props => {
    switch (props.status) {
    case 'late': return props.theme.lightRed;
    case 'today': return props.theme.yellow;
    case 'inTime': return props.theme.lightGreen;
    default: return 'transparent';
    }
  }};
  color: ${props => {
    switch (props.status) {
    case 'late': return props.theme.red;
    case 'today': return props.theme.orange;
    case 'inTime': return props.theme.green;
    default: return 'inherit';
    }
  }};

  p {
    font-size: ${pxToRem(14)};
    font-weight: 600;
  }

  &__icon {
    font-size: ${pxToRem(16)};
  }
`;

export const CardTitle = styled.h3`
  font-size: ${pxToRem(17)};
`;

export const ScheduleIcon = styled(Schedule)`
  font-size: ${pxToRem(16)};
`;

export const DatesActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Dates = styled.div`
  display: flex;
`;

export const Actions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`;