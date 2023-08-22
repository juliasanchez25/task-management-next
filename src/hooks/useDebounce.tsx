import { useEffect, useRef, useState } from 'react';

const useDebounce = (search: string, delay: number = 1000): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(search);
  const timerRef = useRef<NodeJS.Timeout | undefined>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(search), delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [search, delay]);

  return debouncedValue;
};

export default useDebounce;
