import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const Container = styled.div`
  margin-right: ${pxToRem(80)};
  display: flex;
  justify-content: space-between;
`;
