import React, { createContext, useEffect, useReducer, useState } from 'react';
import todosReducer from './todosReducer';
import dummyData from './dummyData';

export const TodosContext = createContext();

const initialState =
  localStorage.getItem('todos') == null ? dummyData : JSON.parse(localStorage.getItem('todos'));

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return <TodosContext.Provider value={{ state, dispatch }}>{children}</TodosContext.Provider>;
};
