import styled from 'styled-components';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { pxToRem } from '@/utils/px-to-rem';

export const Title = styled.h4`
  margin: 0 0 ${pxToRem(22)};
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
  gap: 0.6rem;
`;

export const Container = styled.div`
  padding: ${pxToRem(15)};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.linkHover};
`;

export const StyledDateCalendar = styled(DateCalendar)`
  color: ${({ theme }) => theme.title};

  .MuiButtonBase-root {
    color: ${({ theme }) => theme.title};
  }

  .MuiTypography-root {
    color: ${({ theme }) => theme.title};
  }
`;

export const StyledLocalizationProvider = styled(LocalizationProvider)`
  color: ${({ theme }) => theme.title};
  background-color: ${({ theme }) => theme.background};

  .MuiButtonBase-root {
    color: ${({ theme }) => theme.title};
  }
`;
