import Sidebar from '@/components/Sidebar';
import './../styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <ToastContainer />
      <div className='page-content'>
        <Sidebar />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}