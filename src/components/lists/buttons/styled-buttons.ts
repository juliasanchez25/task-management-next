import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const Container = styled.div`
  margin-right: 4%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const CreateNewListButton = styled.button`
  width: ${pxToRem(200)};
  max-width: 100%;
  height: ${pxToRem(50)};
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue};
  color: #fff;
  font-size: ${pxToRem(16)};
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s all ease-in;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(47, 128, 237, 0.8) 0px 5px 15px;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DeleteListButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.title};
  gap: 0.5rem;
  transition: 0.2s all ease-in;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.red};
  }
`;
