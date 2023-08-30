import Image from 'next/image';
import notFound from '../../public/assets/images/not-found-route.svg';

export default function NotFound () {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      pointerEvents: 'none'
    }}>
      <Image src={notFound} alt="Página não encontrada" />
    </div>
  );
};