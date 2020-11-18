import React from 'react';
import ThemeSwitch from './components/ThemeSwitch';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { ContextProvider } from './context';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './components/LanguageSwitch';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <h1 className='title'>{t('title')}</h1>
      <ThemeSwitch />
      <LanguageSwitch />
      <ContextProvider>
        <FormInput />
        <TodoList />
        <Footer />
      </ContextProvider>
    </div>
  );
};

export default App;
