// src/context/ThemeContext.jsx
import  { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { resolveSeason } from '../config/seasons';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  const [seasonPreference, setSeasonPreference] = useState(() => localStorage.getItem('season') || 'auto');
  const season = resolveSeason(seasonPreference);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('season', seasonPreference);
    if (season) {
      document.documentElement.dataset.season = season.id;
    } else {
      delete document.documentElement.dataset.season;
    }
  }, [seasonPreference, season]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, season, seasonPreference, setSeasonPreference }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
