import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = ({ language, setLanguage }) => {
  const { i18n } = useTranslation();

  const onLanguageHandle = (e) => {
    let newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <ul className='switch'>
      <li>
        <label>
          <input
            value='en'
            checked={language === 'en'}
            className='with-gap'
            name='language'
            type='radio'
            onChange={(e) => onLanguageHandle(e)}
          />
          <span>English</span>
        </label>
      </li>
      <li>
        <label>
          <input
            value='ru'
            checked={language === 'ru'}
            className='with-gap'
            name='language'
            type='radio'
            onChange={(e) => onLanguageHandle(e)}
          />
          <span>Русский</span>
        </label>
      </li>
      <li>
        <label>
          <input
            value='de'
            checked={language === 'de'}
            className='with-gap'
            name='language'
            type='radio'
            onChange={(e) => onLanguageHandle(e)}
          />
          <span>Deutsch</span>
        </label>
      </li>
    </ul>
  );
};

export default LanguageSwitch;
