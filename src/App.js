import React from 'react';
import ThemeSwitch from './components/ThemeSwitch';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { ContextProvider } from './context';

const App = () => {
  return (
    <div className='container'>
      <h2>Твои проблемы</h2>
      <ThemeSwitch />
      <ContextProvider>
        <FormInput />
        <TodoList />
        <Footer />
      </ContextProvider>
    </div>
  );
};

export default App;
