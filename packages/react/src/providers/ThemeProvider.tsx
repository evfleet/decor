import React, { createContext, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: any;
}

export const ThemeContext = createContext<any>(null);

const defaultTheme = {};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const [decorTheme, setDecorTheme] = useState('light');

  if (theme) {
    // combine themes
    setDecorTheme({
      ...defaultTheme,
      ...theme
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: decorTheme,
        setTheme: setDecorTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
