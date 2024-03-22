import { THEMES, albums, useThemes } from '@timothy-alison/shared';
import React from 'react';
import User from '../user';

export const Home = () => {
  const themeList = Object.entries(THEMES).map((theme) => theme[1]);
  const { theme, switchTheme } = useThemes();
  return (
    <div>
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

      <User />
    </div>
  );
};
