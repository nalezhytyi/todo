import React, { useEffect, useState } from 'react';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';
import { useTranslation } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';

export const initialTheme =
  localStorage.getItem('darkMode') == null ? false : JSON.parse(localStorage.getItem('darkMode'));
export const initialLanguage =
  localStorage.getItem('language') == null ? 'ru' : JSON.parse(localStorage.getItem('language'));

const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [darkMode, setDarkMode] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);

  const { t } = useTranslation();

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
    <div>
      <div className='switch'>
        <label>
          <input
            type='checkbox'
            checked={showSettings}
            onChange={() => setShowSettings(!showSettings)}
          />
          <span className='lever' />
          {showSettings ? `${t('settings.hide')}` : `${t('settings.show')}`}
        </label>
      </div>
      {showSettings ? (
        <Slide direction='down'>
          <ul>
            <li>
              <h4>{t('settings.title')}</h4>
            </li>
            <li>
              <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            </li>
            <li>
              <LanguageSwitch language={language} setLanguage={setLanguage} />
            </li>
          </ul>
        </Slide>
      ) : null}
    </div>
  );
};

export default Settings;
