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
      <li className='sidenav_user user-view'>
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
      </li>
      <li className='sidenav_nav-item'>
        <h4>
          <i className='material-icons'>settings</i> {t('settings.title')}
        </h4>
      </li>
      <div className='divider' />
      <li className='sidenav_nav-item subheader'>
        <i className='material-icons small-icon'>brightness_4</i> {t('nav.theme')}
      </li>
      <li className='sidenav_nav-item'>
        <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      </li>
      <div className='divider' />
      <li className='sidenav_nav-item subheader'>
        <i className='material-icons small-icon'>language</i> {t('nav.language')}
      </li>
      <li className='sidenav_nav-item'>
        <LanguageSwitch language={language} setLanguage={setLanguage} />
      </li>
      <div className='divider' />
      <ul className='collapsible collapsible-accordion'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'>arrow_drop_down</i>TBD...
          </div>
          <ul className='collapsible-body'>
            <li className='tbd'>Sign in and Sign up with Google.</li>
            <li className='tbd'>Store todos in Firebase.</li>
            <li className='tbd'>More languages.</li>
            <li className='tbd'>Refactoring.</li>
          </ul>
        </li>
      </ul>
    </ul>
  );
};

export default Nav;
