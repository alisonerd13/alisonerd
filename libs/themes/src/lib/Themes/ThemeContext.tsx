import { ReactNode, createContext, useState } from 'react';

export const THEMES = {
  taylorSwift: 'taylorSwift',
  fearlessTV: 'fearlessTV',
  speakNowTV: 'speakNowTV',
  redTV: 'redTV',
  one989TV: 'one989TV',
  reputation: 'reputation',
  lover: 'lover',
  folklore: 'folklore',
  evermore: 'evermore',
  midnights: 'midnights',
};

export const ThemeContext = createContext({
  theme: THEMES.taylorSwift,
  switchTheme: (theme: string) => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(THEMES.taylorSwift);

  const switchTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
