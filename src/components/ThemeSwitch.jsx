import React, { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [currentTheme, setTheme] = useState('light');

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.querySelector('html').setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('html').removeAttribute('data-theme');
    }
  });

  return (
    <div className='switch'>
      <label>
        <input
          type='checkbox'
          checked={currentTheme === 'dark'}
          onChange={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        />
        <span className='lever' />
        Тёмная сторона
      </label>
    </div>
  );
};

export default ThemeSwitch;
