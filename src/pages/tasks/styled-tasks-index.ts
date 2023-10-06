import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { Search } from '@mui/icons-material';

export const Container = styled.div`
  margin-left: 4%;
  width: 100vw;
`;

export const Main = styled.main`
  margin: ${pxToRem(15)} 0 ${pxToRem(20)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  border-radius: 20px;
  width: 85%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: ${pxToRem(30)};
  color: ${({ theme }) => theme.title};
`;

export const SearchBox = styled.div`
  padding: ${pxToRem(10)} ${pxToRem(20)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${pxToRem(300)};
  border-radius: 20px;
  border: 1px solid #cccc;
  background-color: transparent;

  &__icon {
    color: ${({ theme }) => theme.gray};
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.title};
`;

export const CreateTaskButton = styled.button`
  width: ${pxToRem(200)};
  max-width: 100%;
  height: ${pxToRem(50)};
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.offWhite};
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

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-right: ${pxToRem(165)};

  p {
    font-size: ${pxToRem(20)};
    color: ${({ theme }) => theme.title};
    margin-left: ${pxToRem(15)};
  }
`;

export const SearchIcon = styled(Search)`
  color: ${({ theme }) => theme.title};
`;
