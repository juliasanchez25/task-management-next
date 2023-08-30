import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';
import { Box, InputLabel, MenuItem, Select, TextField, TextareaAutosize } from '@mui/material';

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

export const Top = styled.div`
  display: flex;
  margin-bottom: ${pxToRem(20)};
`;

export const Title = styled.h3`
  margin-bottom: 0;
  color: ${({ theme }) => theme.title};
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

export const Label = styled.label`
  margin-bottom: -15px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: ${pxToRem(12)};
  color: ${({ theme }) => theme.inputLabel};
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

export const StyledTextField = styled(TextField)(({ theme }) => ({
  input: {
    color: theme.label,
  },
  '& label.Mui-focused': {
    color: `${theme.inputLabelFocus} !important`,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: `${theme.input} !important`,
  },
  '& .MuiInputLabel-root': {
    color: `${theme.inputLabel} !important`,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: `${theme.input} !important`,
    },
    '&:hover fieldset': {
      borderColor: `${theme.title} !important`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${theme.inputLabelFocus} !important`,
    },
  },
  '& .MuiOutlinedInput-input': {
    color: `${theme.inputLabel} !important`,
  },
  '& .MuiOutlinedInput-multiline': {
    color: `${theme.inputLabel} !important`,
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
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

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: `${theme.inputLabel} !important`,

  '&.Mui-focused': {
    color: `${theme.inputLabelFocus} !important`,
  },
}));
