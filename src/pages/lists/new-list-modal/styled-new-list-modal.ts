import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { Box, InputLabel, TextField } from '@mui/material';

export const BoxContainer = styled(Box)`
  position: absolute;
  padding: ${pxToRem(20)};
  display: flex;
  flex-direction: column;
  min-width: ${pxToRem(500)};
  width: fit-content;
  top: 50%;
  left: 50%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  gap: ${pxToRem(20)};
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
  position: absolute;
  padding-bottom: ${pxToRem(75)};
  margin-right: ${pxToRem(15)};
  background: none;
  border: none;
  right: 0;
  color: ${({ theme }) => theme.gray};
  cursor: pointer;
`;

export const CreateButton = styled.button`
  margin: ${pxToRem(14)} 0;
  height: ${pxToRem(47)};
  font-size: ${pxToRem(16)};
  font-weight: 600;
  color: #ffff;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 8px;
  transition: 0.2s all ease-in;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(47, 128, 237, 0.8) 0px 5px 15px;
  }

  &:active {
    transform: translateY(0);
    box-shadow: rgba(47, 128, 237, 0.8) 0px 0px 0px;
  }
`;
