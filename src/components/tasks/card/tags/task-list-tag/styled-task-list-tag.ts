import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { List } from '@/models/Task';

type CardTagProps = {
  type: List;
};

export const CardTagContainer = styled.div`
  padding: ${pxToRem(2)} ${pxToRem(8)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(83)};
  height: ${pxToRem(28)};
  border-radius: 18px;
  background-color: ${({ theme }) => theme.blue};
  overflow: hidden;
`;

export const CardTag = styled.div<CardTagProps>`
  max-width: 80px;
  font-size: ${pxToRem(12)};
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
`;
