import { ReactNode, createContext, useState } from 'react';
import { albums, TTheme } from '../../types';
import { LocalStorage } from '../../utils';
import { THEMES } from '../../ui/themes/configs';
import classes from './styles.module.scss';

type TThemeContextProps = {
  currentTheme: TTheme;
  switchTheme: (theme: albums) => void;
};

export const ThemeContext = createContext<TThemeContextProps>({
  currentTheme: THEMES.taylorSwift,
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
  const themeList = Object.entries(THEMES).map((theme) => theme[1]);
  const currentTheme =
    themeList.find((theme) => theme.id === themeName) || THEMES.taylorSwift;

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
      <div className={classes['theme-provider']} data-theme={currentTheme.id}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
