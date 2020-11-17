import React, { createContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

export const Context = createContext();

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

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
