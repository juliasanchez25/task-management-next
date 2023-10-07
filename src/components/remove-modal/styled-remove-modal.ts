import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { Box } from '@mui/material';

export const BoxContainer = styled(Box)`
  position: absolute;
  padding: ${pxToRem(20)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: ${pxToRem(500)};
  min-height: ${pxToRem(200)};
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
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ConfirmButton = styled.button`
  width: ${pxToRem(120)};
  max-width: 100%;
  height: ${pxToRem(40)};
  border: none;
  border-radius: 20px;
  font-size: ${pxToRem(16)};
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  background-color: #e65643;
  color: #fff;

  &:hover {
    background-color: #e64b37;
  }
`;

export const CancelButton = styled.button`
  font-size: ${pxToRem(16)};
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.title};
`;

export const SubTitle = styled.h2`
  font-size: ${pxToRem(16)};
  margin-top: -10px;
  color: ${({ theme }) => theme.description};
  font-weight: 400;
`;
