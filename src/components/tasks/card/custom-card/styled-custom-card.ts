/* eslint-disable indent */
import { pxToRem } from '@/utils/px-to-rem';
import styled from 'styled-components';
import { Card, CardContent } from '@mui/material';

export const Container = styled(Card)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${pxToRem(348)};
  max-width: 100%;
  background-color: ${({ theme }) => theme.background} !important;
  color: ${({ theme }) => theme.title};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow-wrap: break-word;
`;

export const CardTop = styled.div`
  padding: 8px 15px 0;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  margin-top: 0;
  font-size: ${pxToRem(16)};
  font-weight: 400;
  color: ${({ theme }) => theme.title};
`;

