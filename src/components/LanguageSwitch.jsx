import React from 'react';
import { useTranslation } from 'react-i18next';

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

const LanguageSwitch = ({ language, setLanguage }) => {
  const { i18n } = useTranslation();

  const onLanguageHandle = (e) => {
    let newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <ul className='switch'>
      {languages.map(({ title, value }) => (
        <li>
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
