// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useContext, useEffect, useState } from 'react';
import styles from './app.module.scss';
import { THEMES, albums, useThemes } from '@timothy-alison/ui';
import clsx from 'clsx';
import SpotifyAuthButton from '../components/SpotifyAuthButton';
export function App() {
  const themeList = Object.entries(THEMES).map((theme) => theme[1]);
  const { theme, switchTheme } = useThemes();

  return (
    <div className={clsx(styles.app, styles[theme])}>
      <h1 className="text-3xl font-bold ">{THEMES[theme].symbol}</h1>
      <select
        onChange={(e) => {
          switchTheme(e.target.value as albums);
        }}
      >
        {themeList.map((theme) => {
          return (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          );
        })}
      </select>
      <SpotifyAuthButton />
    </div>
  );
}

export default App;
