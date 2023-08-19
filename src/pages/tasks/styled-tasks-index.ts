import styled from '@emotion/styled';
import theme from '@/theme/theme';
import { pxToRem } from '@/utils/px-to-rem';

export const Main = styled.main`
  padding: ${pxToRem(20)} ${pxToRem(30)};
  margin: ${pxToRem(50)} 0 ${pxToRem(20)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.background};
  border-radius: 20px;
  width: 85%;
`;

export const MainTitle = styled.h1`
  font-size: ${pxToRem(30)};
  color: ${theme.title};
`;

export const SearchBox = styled.div`
  padding: ${pxToRem(10)} ${pxToRem(20)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${pxToRem(300)};
  border-radius: 20px;
  border: 1px solid #cccc;
  background-color: ${theme.title};

  &__icon {
    color: ${theme.gray};
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: #000000;
`;

export const CreateTaskButton = styled.button`
  width: ${pxToRem(200)};
  max-width: 100%;
  height: ${pxToRem(50)};
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${theme.purple};
  color: ${theme.offWhite};
  font-size: ${pxToRem(16)};
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s all ease-in;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(152, 84, 203, 0.8) 0px 5px 15px;
  }

  &:active {
    transform: translateY(0);
    box-shadow: rgba(152, 84, 203, 0.8) 0px 0px 0px;
  }
`;