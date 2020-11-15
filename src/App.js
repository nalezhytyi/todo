import React, { useEffect, useReducer } from 'react';
import TodoList from './components/TodoList';
import ThemeSwitch from './components/ThemeSwitch';
import reducer from './reducer';
import { Context } from './context';
import FormInput from './components/FormInput';
import Footer from './components/Footer';

const initialState =
  localStorage.getItem('todos') == null
    ? [
        {
          id: 1,
          title: 'Добавить себе ещё проблем',
          completed: false,
        },
      ]
    : JSON.parse(localStorage.getItem('todos'));

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className='container'>
        <h2>Твои проблемы</h2>
        <ThemeSwitch />
        <FormInput />
        <TodoList todos={state} />
        <Footer todos={state} />
      </div>
    </Context.Provider>
  );
}
