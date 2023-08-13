import { createContext, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import './../styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactSwitch from 'react-switch';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function App({ Component, pageProps }: any) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <ToastContainer />
        <div className='page-content'>
          <Sidebar />
          <div>
            {/* <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} /> */}
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}