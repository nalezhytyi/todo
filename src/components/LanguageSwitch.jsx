import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SettingsContext } from '../context/settingsContext';

const LanguageSwitch = ({ language, setLanguage }) => {
  const { languages } = useContext(SettingsContext);
  const { i18n } = useTranslation();

  const onLanguageHandle = (e) => {
    let newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <ul className='switch'>
      {languages.map(({ title, value }, index) => (
        <li key={index}>
          <label>
            <input
              value={value}
              checked={language === value}
              className='with-gap'
              name='language'
              type='radio'
              onChange={(e) => onLanguageHandle(e)}
            />
            <span>{title}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitch;
