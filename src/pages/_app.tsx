/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { Sidebar } from '@/components/sidebar/Sidebar';
import './../styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { lightModeTheme, darkModeTheme } from '../theme/theme';
import { GlobalStyles } from '@/theme/global-styles';
import { ThemeService } from '@/services/ThemeService';

export default function App({ Component, pageProps }: any) {
  const [theme, setTheme] = useState(ThemeService.getTheme());
  const [isMounted, setIsMounted] = useState(false);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  useEffect(() => {
    ThemeService.setTheme(theme);
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightModeTheme : darkModeTheme}>
      <GlobalStyles />
      <>
        <ToastContainer />
        {isMounted && (
          <div style={{
            display: 'flex',
          }}>
            <Sidebar theme={theme} toggleTheme={toggleTheme} />
            <Component {...pageProps} />
          </div>
        )}
      </>
    </ThemeProvider>
  );
}
