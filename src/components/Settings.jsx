import React, { useContext, useState } from 'react';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';
import { SettingsContext } from '../context/settingsContext';

const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);
  const { darkMode, setDarkMode, language, setLanguage } = useContext(SettingsContext);
  const { t } = useTranslation();

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
      {showSettings && (
        <Fade direction='down'>
          <h4>
            <i className='material-icons'>settings</i> {t('settings.title')}
          </h4>
          <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
          <LanguageSwitch language={language} setLanguage={setLanguage} />
        </Fade>
      )}
    </div>
  );
};

export default Settings;
