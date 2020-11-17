import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const initialLanguage =
  localStorage.getItem('language') == null ? 'ru' : JSON.parse(localStorage.getItem('language'));

const LanguageSwitch = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const { i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify(language));
  }, [language, i18n]);

  const onLanguageHandle = (e) => {
    let newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <p>
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
      </p>
      <p>
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
      </p>
      <p>
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
      </p>
    </div>
  );
};

export default LanguageSwitch;
