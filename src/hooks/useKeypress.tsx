import { useEffect } from 'react';

type Key = string;

export default function useKeypress(key: Key, action: () => void): void {
  useEffect(() => {
    function onKeyup(e: KeyboardEvent): void {
      if (e.key === key) action();
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [key, action]);
}
