import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { Schedule } from '@mui/icons-material';

export const Container = styled.div<{ status: 'late' | 'today' | 'inTime' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(80)};
  height: ${pxToRem(30)};
  border-radius: 18px;
  gap: ${pxToRem(5)};
  background-color: ${(props) => {
    switch (props.status) {
    case 'late':
      return props.theme.lightRed;
    case 'today':
      return props.theme.yellow;
    case 'inTime':
      return props.theme.lightGreen;
    default:
      return 'transparent';
    }
  }};
  color: ${(props) => {
    switch (props.status) {
    case 'late':
      return props.theme.red;
    case 'today':
      return props.theme.orange;
    case 'inTime':
      return props.theme.green;
    default:
      return 'inherit';
    }
  }};

  p {
    font-size: ${pxToRem(12)};
    font-weight: 600;
  }
`;

export const ScheduleIcon = styled(Schedule)`
  font-size: ${pxToRem(12)};
`;
