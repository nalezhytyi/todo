import React, { useContext, useState } from 'react';
import { Context } from '../context';

const Footer = ({ todos }) => {
  const [checkAll, setCheckAll] = useState(false);
  const { dispatch } = useContext(Context);

  const unfinishedTodos = todos.filter((todo) => todo.completed === false);

  const handleChangeAll = () => {
    dispatch({
      type: 'toggleAll',
      payload: checkAll,
    });
    setCheckAll(!checkAll);
  };

  const deleteTodos = () => {
    if (unfinishedTodos) {
      dispatch({ type: 'removeCompletedTodo' });
      setCheckAll(false);
    }
  };

  const declOfNum = (n, text_forms) => {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 === 1) {
      return text_forms[0];
    }
    return text_forms[2];
  };

  return (
    <div className='footer-wrapper'>
      {todos.length === 0 ? (
        <h6>Поздравляю, вы порешали все свои проблемы, и теперь вам нечего делать!</h6>
      ) : (
        <div className='row'>
          <label className='col s6 m4 l3'>
            <input className='filled-in' type='checkbox' onChange={handleChangeAll} />
            <span>Выбрать всe</span>
          </label>
          <p className='col s6 m4 l6 center-align'>
            {unfinishedTodos.length}{' '}
            {declOfNum(unfinishedTodos.length, ['проблема', 'проблемы', 'проблем'])}
          </p>
          <button
            disabled={unfinishedTodos.length >= todos.length}
            className='waves-effect waves-light btn-small col s12 m4 l3'
            onClick={deleteTodos}
          >
            Удалить завершенные
          </button>
        </div>
      )}
    </div>
  );
};

export default Footer;
