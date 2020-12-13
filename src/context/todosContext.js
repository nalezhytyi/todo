import React, { createContext, useEffect, useReducer, useState } from 'react';
import todosReducer from './todosReducer';
import dummyData from './dummyData';

export const TodosContext = createContext();

const initialState =
  localStorage.getItem('todos') == null ? dummyData : JSON.parse(localStorage.getItem('todos'));

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  const [checkAll, setCheckAll] = useState(false);

  const unfinishedTodos = [...state].filter((todo) => todo.completed === false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    unfinishedTodos.length === 0 ? setCheckAll(true) : setCheckAll(false);
  }, [unfinishedTodos.length]);

  return (
    <TodosContext.Provider value={{ state, dispatch, checkAll, setCheckAll, unfinishedTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
