import { ReactNode, createContext, useState } from 'react';
import { TThemes, albums } from '../../types';
import { LocalStorage } from '../../utils';

export const THEMES: TThemes = {
  taylorSwift: {
    id: 'taylorSwift',
    name: 'Taylor Swift',
    symbol: ['🦋'],
    color: [],
  },
  fearlessTV: {
    id: 'fearlessTV',
    name: 'Fearless(TV)',
    symbol: ['🎸'],
    color: [],
  },
  speakNowTV: {
    id: 'speakNowTV',
    name: 'Speak Now (TV)',
    symbol: ['🏰'],
    color: [],
  },
  redTV: {
    id: 'redTV',
    name: 'RED (TV)',
    symbol: ['🧣'],
    color: [],
  },
  one989TV: {
    id: 'one989TV',
    name: '1989 (TV)',
    symbol: ['🗽'],
    color: [],
  },
  reputation: {
    id: 'reputation',
    name: 'reputation',
    symbol: ['🐍'],
    color: [],
  },
  lover: {
    id: 'lover',
    name: 'Lover',
    symbol: ['💘'],
    color: [],
  },
  folklore: {
    id: 'folklore',
    name: 'folklore',
    symbol: ['🪩'],
    color: [],
  },
  evermore: {
    id: 'evermore',
    name: 'evermore',
    symbol: ['🍂'],
    color: [],
  },
  midnights: {
    id: 'midnights',
    name: 'Midnights',
    symbol: ['🕰️'],
    color: [],
  },
};
type ThemeContextProps = {
  theme: albums;
  switchTheme: (theme: albums) => void;
};
export const ThemeContext = createContext<ThemeContextProps>({
  theme: THEMES.taylorSwift.name as albums,
  switchTheme: (theme) => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const switchTheme = (newTheme: albums) => {
    setThemeName(newTheme);
    setLocalTheme(newTheme);
  };
  const getLocalTheme = () => {
    return (LocalStorage.get('alisonTheme') as albums) || THEMES.taylorSwift.id;
  };
  const setLocalTheme = (newTheme: albums) => {
    LocalStorage.set('alisonTheme', newTheme);
  };
  const [themeName, setThemeName] = useState<albums>(getLocalTheme());
  return (
    <ThemeContext.Provider value={{ theme: themeName, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

