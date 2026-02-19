import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the three color palettes from your git history
export const ThemeConfig = {
  theme1: {
    name: 'Midnight Blue & Silver',
    colors: {
      charcoal: '#000511',
      midnight: '#000511',
      oat: '#E8EAF6',
      cream: '#E8EAF6',
      pistachio: '#5C6BC0',
      matcha: '#5C6BC0',
      blush: '#9FA8DA',
      apricot: '#9FA8DA',
      plum: '#3949AB',
      glassWhite: 'rgba(232, 234, 246, 0.35)',
      glassOat: 'rgba(232, 234, 246, 0.4)',
      glassBorder: 'rgba(232, 234, 246, 0.5)',
    },
  },
  theme2: {
    name: 'Pastel Dream',
    colors: {
      charcoal: '#4A4063',
      midnight: '#4A4063',
      oat: '#FFF0F5',
      cream: '#FFF0F5',
      pistachio: '#B5EAD7',
      matcha: '#B5EAD7',
      blush: '#FFDAC1',
      apricot: '#FFDAC1',
      plum: '#C7CEEA',
      glassWhite: 'rgba(255, 240, 245, 0.35)',
      glassOat: 'rgba(255, 240, 245, 0.4)',
      glassBorder: 'rgba(255, 240, 245, 0.5)',
    },
  },
  theme3: {
    name: 'Olive Grove',
    colors: {
      charcoal: '#354F42',
      midnight: '#354F42',
      oat: '#F1F7ED',
      cream: '#F1F7ED',
      pistachio: '#93C572',
      matcha: '#93C572',
      blush: '#C1D7AE',
      apricot: '#C1D7AE',
      plum: '#5E8C61',
      glassWhite: 'rgba(241, 247, 237, 0.35)',
      glassOat: 'rgba(241, 247, 237, 0.4)',
      glassBorder: 'rgba(241, 247, 237, 0.5)',
    },
  },
  theme4: {
    name: 'Sunset Coral',
    colors: {
      charcoal: '#2D1B2E',
      midnight: '#2D1B2E',
      oat: '#FFF5F0',
      cream: '#FFF5F0',
      pistachio: '#FF6B6B',
      matcha: '#FF6B6B',
      blush: '#FFB4A2',
      apricot: '#FFB4A2',
      plum: '#D64545',
      glassWhite: 'rgba(255, 245, 240, 0.35)',
      glassOat: 'rgba(255, 245, 240, 0.4)',
      glassBorder: 'rgba(255, 245, 240, 0.5)',
    },
  },
} as const;

export type ThemeKey = keyof typeof ThemeConfig;

interface ThemeContextType {
  currentTheme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
  themeColors: typeof ThemeConfig[ThemeKey]['colors'];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ThemeKey;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialTheme = 'theme1'  // ← Only used if main.tsx doesn't pass a prop
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>(initialTheme);

  useEffect(() => {
    const theme = ThemeConfig[currentTheme];
    const root = document.documentElement;

    // Apply CSS variables to :root
    root.style.setProperty('--color-charcoal', theme.colors.charcoal);
    root.style.setProperty('--color-midnight', theme.colors.midnight);
    root.style.setProperty('--color-oat', theme.colors.oat);
    root.style.setProperty('--color-cream', theme.colors.cream);
    root.style.setProperty('--color-pistachio', theme.colors.pistachio);
    root.style.setProperty('--color-matcha', theme.colors.matcha);
    root.style.setProperty('--color-blush', theme.colors.blush);
    root.style.setProperty('--color-apricot', theme.colors.apricot);
    root.style.setProperty('--color-plum', theme.colors.plum);
    root.style.setProperty('--glass-white', theme.colors.glassWhite);
    root.style.setProperty('--glass-oat', theme.colors.glassOat);
    root.style.setProperty('--glass-border', theme.colors.glassBorder);

    // Derived colors for Tailwind
    root.style.setProperty('--color-primary', theme.colors.pistachio);
    root.style.setProperty('--color-secondary', theme.colors.plum);
    root.style.setProperty('--color-text-dark', theme.colors.charcoal);
    root.style.setProperty('--color-text-light', theme.colors.oat);
    root.style.setProperty('--color-background-light', theme.colors.cream);
    root.style.setProperty('--color-background-dark', theme.colors.charcoal);
  }, [currentTheme]);

  const setTheme = (theme: ThemeKey) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        themeColors: ThemeConfig[currentTheme].colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
