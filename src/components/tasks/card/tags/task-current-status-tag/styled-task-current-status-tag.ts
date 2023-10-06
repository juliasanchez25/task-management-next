/* eslint-disable indent */
import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { Schedule } from '@mui/icons-material';

export const Container = styled.div<{ status: 'late' | 'today' | 'inTime' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(83)};
  height: ${pxToRem(30)};
  border-radius: 18px;
  gap: ${pxToRem(3)};
  background-color: ${(props) => {
    switch (props.status) {
      case 'late':
        return '#ff875b';
      case 'today':
        return '#ffd442';
      case 'inTime':
        return '#96e17e';
      default:
        return 'transparent';
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case 'late':
        return '#da0000';
      case 'today':
        return '#ff8a00';
      case 'inTime':
        return '#00952a';
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
