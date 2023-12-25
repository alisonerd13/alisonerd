// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useContext, useEffect, useState } from 'react';
import styles from './app.module.scss';
import clsx from 'clsx';
import {
  SpotifyAPI,
  SpotifyApiAxiosContext,
  THEMES,
  albums,
  useSpotifyAuth,
  useThemes,
} from '@timothy-alison/shared';
import User from '../pages/user';
export function App() {
  const themeList = Object.entries(THEMES).map((theme) => theme[1]);
  const { theme, switchTheme } = useThemes();
  const { token, logout, loginURL } = useSpotifyAuth();
  return (
    <div className={clsx(styles.app, styles[theme])}>
      <h1 className="text-3xl font-bold ">{THEMES[theme].symbol}</h1>
      <select
        onChange={(e) => {
          switchTheme(e.target.value as albums);
        }}
        value={THEMES[theme].id}
      >
        {themeList.map((theme) => {
          return (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          );
        })}
      </select>
      {!token ? (
        <a href={loginURL}>Login to Spotify</a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
      <SpotifyApiAxiosContext.Provider
        value={{ SpotifyAPI: SpotifyAPI, token: token }}
      >
        {token}
        <User />
      </SpotifyApiAxiosContext.Provider>
    </div>
  );
}

export default App;
