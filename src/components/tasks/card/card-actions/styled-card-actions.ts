import { pxToRem } from '@/utils/px-to-rem';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};
`;
