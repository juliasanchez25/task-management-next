import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { Box } from '@mui/material';

export const BoxContainer = styled(Box)`
  position: absolute;
  padding: ${pxToRem(20)};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${pxToRem(500)};
  width: fit-content;
  top: 50%;
  left: 50%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  gap: ${pxToRem(20)};
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  font-size: ${pxToRem(20)};
  font-weight: 500;
  color: ${({ theme }) => theme.title};
`;

export const Button = styled.button`
  width: ${pxToRem(280)};
  max-width: 100%;
  height: ${pxToRem(40)};
  border: none;
  border-radius: 5px;
  font-size: ${pxToRem(16)};
  font-weight: 600;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ConfirmButton = styled(Button)`
  background-color: #ff6363;
  color: ${({ theme }) => theme.title};

  &:hover {
    background-color: #f74b4b;
  }
`;

export const CancelButton = styled(Button)`
  &:hover {
    background-color: #e9e9e9;
  }
`;
