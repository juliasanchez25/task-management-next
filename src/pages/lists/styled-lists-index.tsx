import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const Container = styled.div`
  margin-left: 4%;
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  margin: ${pxToRem(15)} 0 ${pxToRem(20)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  width: 25%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: ${pxToRem(30)};
  color: ${({ theme }) => theme.title};
`;

export const CreateListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.offWhite};
  font-size: ${pxToRem(20)};
  font-weight: 400;
  transition: 0.2s all ease-in;
  cursor: pointer;

  &:hover {
    background-color: #8800b5;
  }
`;
