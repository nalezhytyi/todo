import React, { useState, useEffect, useReducer } from 'react';
import TodoList from './components/TodoList';
import ThemeSwitch from './components/ThemeSwitch';
import reducer, { initialState } from './reducer';
import { Context } from './context';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  const addTodo = (event) => {
    if (event.key === 'Enter' && event.target.value.length >= 3) {
      dispatch({
        type: 'add',
        payload: todoTitle,
      });
      setTodoTitle('');
    }
  };

  const loseFocus = (event) => {
    if (event.key === 'Enter') {
      event.target.blur();
    }
  };

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className='container'>
        <h1>Твои проблемы</h1>
        <ThemeSwitch />
        <div className='input-field'>
          <input
            id='adding'
            className='validate'
            type='text'
            value={todoTitle}
            minLength='3'
            maxLength='120'
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
            onKeyUp={(event) => loseFocus(event)}
          />
          <label>Чо надо сделать ?</label>
          <span
            className='helper-text'
            data-error='Алло, введи минимум 3 символа!'
            data-success='Нажми Ввод (Return) (Enter)'
          />
        </div>
        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}
