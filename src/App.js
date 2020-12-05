import React from 'react';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Settings from './components/Settings';
import { TodoProvider } from './context/todosContext';
import { SettingsProvider } from './context/settingsContext';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <h1 className='title'>{t('title')}</h1>
      <SettingsProvider>
        <Settings />
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
