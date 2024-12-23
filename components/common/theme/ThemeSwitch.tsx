'use client';

import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-6 h-6 absolute top-4 right-4"></div>;

  if (resolvedTheme === 'dark') {
    return (
      <Sun
        onClick={() => setTheme('light')}
        className="absolute top-4 right-4"
      />
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <Moon
        onClick={() => setTheme('dark')}
        className="absolute top-4 right-4"
      />
    );
  }
};
