import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { Select } from '@mui/material';

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
`;

export const MainTitle = styled.h1`
  font-size: ${pxToRem(30)};
  color: ${({ theme }) => theme.title};
`;

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: '300px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px !important',
    borderColor: `${theme.input} !important`,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: '2px !important',
    borderColor: `${theme.inputLabelFocus} !important`,
  },
  '& .MuiInputLabel-outlined': {
    color: `${theme.inputLabel} !important`,
  },
  '& .MuiSelect-root': {
    color: `${theme.inputLabel} !important`,
  },
  '& .MuiSelect-select': {
    color: `${theme.inputLabel} !important`,

    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  '& .MuiSelect-icon': {
    color: `${theme.input} !important`,
  },
  '&.Mui-focused .MuiSelect-icon': {
    color: `${theme.inputLabelFocus} !important`,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: `${theme.title} !important`,
  },
}));

export const CreateNewListButton = styled.button`
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
