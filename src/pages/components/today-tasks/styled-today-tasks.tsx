import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const Container = styled.div`
  margin-top: 0;
`;

export const Title = styled.h4`
  font-size: ${pxToRem(18)};
  font-weight: 600;
  color: ${({ theme }) => theme.title};
`;
