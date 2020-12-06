import React, { useContext } from 'react';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';
import { SettingsContext } from '../context/settingsContext';
import { useTranslation } from 'react-i18next';
import avatar from '../assets/images/user.jpeg';
import background from '../assets/images/Kander.svg';

const Nav = () => {
  const { darkMode, setDarkMode, language, setLanguage } = useContext(SettingsContext);
  const { t } = useTranslation();

  return (
    <ul id='slide-out' className='sidenav'>
      <li>
        <div className='user-view'>
          <div className='background'>
            <img src={background} alt='background' />
          </div>
          <a href='https://github.com/nalezhytyi' target='_blank' rel='noopener noreferrer'>
            <img className='circle' src={avatar} alt='user' />
          </a>
          <span className='name'>
            <a href='https://github.com/nalezhytyi' target='_blank' rel='noopener noreferrer'>
              Andrii Nalezhytyi
            </a>
          </span>
          <span className='email'>
            <a href='mailto:kawory05@gmail.com'>kawory05@gmail.com</a>
          </span>
          <div className='sidenav-close'>
            <i className='material-icons red-text'>close</i>
          </div>
        </div>
      </li>
      <li>
        <div className='nav-item'>
          <h4>
            <i className='material-icons'>settings</i> {t('settings.title')}
          </h4>
        </div>
      </li>
      <div className='divider' />
      <li>
        <div className='subheader nav-item'>{t('nav.theme')}</div>
      </li>
      <li>
        <div className='nav-item'>
          <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </li>
      <div className='divider' />
      <li>
        <div className='subheader nav-item'>{t('nav.language')}</div>
      </li>
      <li>
        <div className='nav-item'>
          <LanguageSwitch language={language} setLanguage={setLanguage} />
        </div>
      </li>
      <div className='divider' />
      <ul className='collapsible collapsible-accordion'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'>arrow_drop_down</i>TBD...
          </div>
          <div className='collapsible-body'>
            <ul>
              <li>
                <div className='nav-item tbd'>Sign in and Sign up with Google.</div>
              </li>
              <li>
                <div className='nav-item tbd'>Store todos in Firebase.</div>
              </li>
              <li>
                <div className='nav-item tbd'>More languages.</div>
              </li>
              <li>
                <div className='nav-item tbd'>Refactoring.</div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </ul>
  );
};

export default Nav;
