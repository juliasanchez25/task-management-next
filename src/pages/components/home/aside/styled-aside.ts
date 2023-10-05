import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const Aside = styled.aside`
  margin-top: ${pxToRem(40)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  border-radius: 14px;
  padding: 30px;
`;
