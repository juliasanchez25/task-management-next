import { useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import './../styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Nightlight, LightMode } from '@mui/icons-material';

export default function App({ Component, pageProps }: any) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <>
      <ToastContainer />
      <div className='page-content'>
        <button onClick={toggleTheme} className='theme-toggle'>
          {isDarkMode ? <LightMode /> : <Nightlight />}
        </button>
        <Sidebar />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}