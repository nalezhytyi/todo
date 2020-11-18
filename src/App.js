import React from 'react';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { ContextProvider } from './context';
import { useTranslation } from 'react-i18next';
import Settings from './components/Settings';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <h1 className='title'>{t('title')}</h1>
      <Settings />
      <ContextProvider>
        <FormInput />
        <TodoList />
        <Footer />
      </ContextProvider>
    </div>
  );
};

export default App;
