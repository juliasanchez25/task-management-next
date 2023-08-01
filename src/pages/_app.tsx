import './../styles/globals.scss';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <div className='page-content'>
        <Sidebar />
        <div>
          <SearchBar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}