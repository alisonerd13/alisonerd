import { useContext } from 'react';
import { ThemeContext } from '../context/alisonerd-theme';

export const useThemes = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemes must be used within a ThemesProvider');
  }
  return context;
};
