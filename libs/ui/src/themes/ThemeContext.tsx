import { ReactNode, createContext, useContext, useState } from 'react';
export type TThemeAttr = {
  id: string;
  symbol: string[];
  color: string[];
  name: string;
};
export type albums =
  | 'taylorSwift'
  | 'fearlessTV'
  | 'speakNowTV'
  | 'redTV'
  | 'one989TV'
  | 'reputation'
  | 'lover'
  | 'folklore'
  | 'evermore'
  | 'midnights';
export type TThemes = {
  taylorSwift: TThemeAttr;
  fearlessTV: TThemeAttr;
  speakNowTV: TThemeAttr;
  redTV: TThemeAttr;
  one989TV: TThemeAttr;
  reputation: TThemeAttr;
  lover: TThemeAttr;
  folklore: TThemeAttr;
  evermore: TThemeAttr;
  midnights: TThemeAttr;
};
export const THEMES: TThemes = {
  taylorSwift: {
    id: "taylorSwift",
    name: 'Taylor Swift',
    symbol: ["🦋"],
    color: [],
  },
  fearlessTV: {
    id: "fearlessTV",
    name: 'Fearless(TV)',
    symbol: ["🎸"],
    color: [],
  },
  speakNowTV: {
    id: "speakNowTV",
    name: 'Speak Now (TV)',
    symbol: ["🏰"],
    color: [],
  },
  redTV: {
    id: "redTV",
    name: 'RED (TV)',
    symbol: ["🧣"],
    color: [],
  },
  one989TV: {
    id: "one989TV",
    name: '1989 (TV)',
    symbol: ["🗽"],
    color: [],
  },
  reputation: {
    id: "reputation",
    name: 'reputation',
    symbol: ["🐍"],
    color: [],
  },
  lover: {
    id: "lover",
    name: 'Lover',
    symbol: ["💘"],
    color: [],
  },
  folklore: {
    id: "folklore",
    name: 'folklore',
    symbol: ["🪩"],
    color: [],
  },
  evermore: {
    id: "evermore",
    name: 'evermore',
    symbol: ["🕰️"],
    color: [],
  },
  midnights: {
    id: "10",
    name: 'Midnights',
    symbol: [],
    color: [],
  },
};
type ThemeContextProps = {
  theme: albums,
  switchTheme: (theme: albums) => void
};
export const ThemeContext = createContext<ThemeContextProps>({
  theme: THEMES.taylorSwift.name as albums,
  switchTheme: (theme) => {}
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const switchTheme = (newTheme: albums) => {
    setThemeName(newTheme);
    setLocalTheme(newTheme);
  };
  const getLocalTheme = () => {
    return window.localStorage.getItem('alisonTheme') as albums || THEMES.taylorSwift.id;
  };
  const setLocalTheme = (newTheme: albums) => {
    window.localStorage.setItem('alisonTheme', newTheme);
  };
  const [themeName, setThemeName] = useState<albums>(getLocalTheme());
  return (
    <ThemeContext.Provider value={{theme:themeName, switchTheme }} >
      {children}
    </ThemeContext.Provider>
  );
};
const useThemes = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemes must be used within a ThemesProvider');
  }
  return context;
};
export { ThemeProvider, useThemes };
