import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: any }>`

  * {
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.mainBackground};
  }
`;
