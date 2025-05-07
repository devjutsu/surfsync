'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/hooks/useThemeStore';

export default function ThemeInitializer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setDarkMode = useThemeStore((state) => state.setDarkMode);
  const setRolling = useThemeStore((state) => state.setRolling);

  useEffect(() => {
    const darkModeSaved = localStorage.getItem('darkMode');
    const darkModeEnabled = darkModeSaved ? JSON.parse(darkModeSaved) : true;
    setDarkMode(darkModeEnabled);

    const rollingSaved = localStorage.getItem('rolling');
    const rollingEnabled = rollingSaved ? JSON.parse(rollingSaved) : false;
    setRolling(rollingEnabled);
    
  }, [setDarkMode, setRolling]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#F2490C]/80 via-[#0A3B59]/05 to-[#1DDDF2] pb-16 bg-panx">
      {/* Пульсирующее солнце */}
      {/* <div className="border-5 border-lime-500 absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-radial from-[#F2490C]/40 to-transparent rounded-full blur-3xl opacity-70"></div> */}

      {/* Линия горизонта */}
      {/* <div className="border-5 border-fuchsia-600 absolute bottom-0 left-0 w-full h-[2px] bg-[#F2490C]/40 blur-sm shadow-md shadow-[#F2490C]/40"></div> */}

      {/* Контент */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
}
