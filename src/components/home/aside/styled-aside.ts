import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const Aside = styled.aside`
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
`;
