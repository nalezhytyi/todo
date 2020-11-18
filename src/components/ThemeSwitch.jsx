import React from 'react';
import { useTranslation } from 'react-i18next';

const ThemeSwitch = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div className='switch'>
      <label>
        <input type='checkbox' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <span className='lever' />
        {darkMode ? `${t('theme.light')}` : `${t('theme.dark')}`}
      </label>
    </div>
  );
};

export default ThemeSwitch;
