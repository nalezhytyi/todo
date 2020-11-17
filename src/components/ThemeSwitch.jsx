import React, { useEffect, useState } from 'react';

export const initialTheme =
  localStorage.getItem('darkMode') == null ? false : JSON.parse(localStorage.getItem('darkMode'));

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    darkMode
      ? document.querySelector('html').setAttribute('data-theme', 'dark')
      : document.querySelector('html').removeAttribute('data-theme');
  }, [darkMode]);

  return (
    <div className='switch'>
      <label>
        <input type='checkbox' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <span className='lever' />
        {darkMode ? 'Светлая' : 'Темная'} тема
      </label>
    </div>
  );
};

export default ThemeSwitch;