import React, { useEffect, useReducer } from 'react';
import TodoList from './components/TodoList';
import ThemeSwitch from './components/ThemeSwitch';
import reducer, { initialState } from './reducer';
import { Context } from './context';
import FormInput from './components/FormInput';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className='container'>
        <h1>Твои проблемы</h1>
        <ThemeSwitch />
        <FormInput />
        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}
