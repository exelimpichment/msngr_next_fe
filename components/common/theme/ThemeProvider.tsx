'use client';

import { ThemeProvider as LibraryThemeProvider } from 'next-themes';

type ThemeProviderProps = { children: React.ReactNode };

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <LibraryThemeProvider attribute={'class'} defaultTheme="system">
      {children}
    </LibraryThemeProvider>
  );
};
