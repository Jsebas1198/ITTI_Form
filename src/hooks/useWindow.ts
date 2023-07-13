import { useEffect, useState } from 'react';

export const useWindow = () => {
  const [windowsWidth, setWindowsWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 769);
  const [windowsHeight, setWindowsHeight] = useState<number>(
    window.innerHeight
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowsWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 769);
      setWindowsHeight(window.innerHeight);
    });
  }, []);

  return { windowsWidth, isMobile, windowsHeight };
};
