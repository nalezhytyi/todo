import React, { createContext, useEffect, useState } from 'react';

export const SettingsContext = createContext();

export const initialTheme =
  localStorage.getItem('darkMode') == null ? true : JSON.parse(localStorage.getItem('darkMode'));

export const initialLanguage =
  localStorage.getItem('language') == null ? 'ru' : JSON.parse(localStorage.getItem('language'));

const languages = [
  {
    title: 'Русский',
    value: 'ru',
  },
  {
    title: 'Українська',
    value: 'ua',
  },
  {
    title: 'English',
    value: 'en',
  },
  {
    title: 'Deutsch',
    value: 'de',
  },
];

export const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    darkMode
      ? document.querySelector('html').setAttribute('data-theme', 'dark')
      : document.querySelector('html').removeAttribute('data-theme');
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify(language));
  }, [language]);

  return (
    <SettingsContext.Provider value={{ darkMode, setDarkMode, language, setLanguage, languages }}>
      {children}
    </SettingsContext.Provider>
  );
};
