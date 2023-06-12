import { useRef } from 'react';

export const useDebounce = (callback: () => void, delay: number) => {
  let timer = useRef<ReturnType<typeof setTimeout>>();

  const debouncedInput = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    const newTimer = setTimeout(() => {
      callback();
    }, delay);

    timer.current = newTimer;
  };

  return debouncedInput;
};
