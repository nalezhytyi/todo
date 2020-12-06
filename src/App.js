import React, { useEffect } from 'react';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { TodoProvider } from './context/todosContext';
import { SettingsProvider } from './context/settingsContext';
import { useTranslation } from 'react-i18next';
import M from 'materialize-css';

const App = () => {
  const { t } = useTranslation();

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className='container'>
      <div className='fixed-action-btn'>
        <div
          data-target='slide-out'
          className='btn-floating pulse btn-large cyan darken-4 waves-effect waves-light sidenav-trigger'
        >
          <i className='material-icons'>vertical_split</i>
        </div>
      </div>
      <h1 className='title'>{t('title')}</h1>
      <SettingsProvider>
        <Nav />
      </SettingsProvider>
      <TodoProvider>
        <FormInput />
        <TodoList />
        <Footer />
      </TodoProvider>
    </div>
  );
};

export default App;
