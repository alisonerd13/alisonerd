import React from 'react';
import { Link } from 'react-router-dom';
import { albums, THEMES, useThemes } from '@timothy-alison/shared';
import classes from './styles.module.scss';
const Nav: React.FC = () => {
  const themeList = Object.entries(THEMES).map((theme) => theme[1]);
  const { currentTheme, switchTheme } = useThemes();
  return (
    <nav className={classes['nav-wrapper']}>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/spotify-analysis">About</Link>
        </li>
      </ul>
      <div>
        <h1 className="text-3xl font-bold ">{currentTheme.symbol}</h1>
        <select
          onChange={(e) => {
            switchTheme(e.target.value as albums);
          }}
          value={currentTheme.id}
        >
          {themeList.map((theme) => {
            return (
              <option key={theme.id} value={theme.id}>
                {theme.name}
              </option>
            );
          })}
        </select>
      </div>
    </nav>
  );
};

export default Nav;
