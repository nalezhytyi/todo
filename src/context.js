import React, { createContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import dummyData from './dummyData';

export const Context = createContext();

const initialState =
  localStorage.getItem('todos') == null ? dummyData : JSON.parse(localStorage.getItem('todos'));

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
