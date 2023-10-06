import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const Container = styled.div`
  margin: ${pxToRem(15)} 0 0 4%;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
