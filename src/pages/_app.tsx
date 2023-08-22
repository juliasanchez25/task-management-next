/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { Sidebar } from '@/components/sidebar/Sidebar';
import './../styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { lightModeTheme, darkModeTheme } from '../theme/theme';
import { GlobalStyles } from '@/theme/global-styles';

export default function App({ Component, pageProps }: any) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }, [theme]);

  useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightModeTheme : darkModeTheme}>
      <GlobalStyles />
      <>
        <ToastContainer />
        <div className="page-content">
          <Sidebar theme={theme} toggleTheme={toggleTheme} />
          <div>
            <Component {...pageProps} />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}
