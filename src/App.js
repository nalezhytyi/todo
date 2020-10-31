import React, { useState, useEffect, useReducer } from 'react';
import TodoList from './components/TodoList';
import { Context } from './context';
import reducer, { initialState } from './reducer';

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

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className='container'>
        <h1>Твои проблемы</h1>
        <div className='input-field'>
          <input
            type='text'
            value={todoTitle}
            minLength='3'
            maxLength='150'
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
          />
          <label>Чо надо сделать ?</label>
        </div>
        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}
