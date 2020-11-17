import React, { useContext, useState } from 'react';
import { Context } from '../context';
import { declOfNum } from '../helpers/declareOfNumber';

const Footer = () => {
  const [checkAll, setCheckAll] = useState(false);
  const { state: todos, dispatch } = useContext(Context);

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

  return (
    <div className='footer-wrapper'>
      {todos.length === 0 ? (
        <h6>Поздравляю, вы порешали все свои проблемы, и теперь вам нечего делать!</h6>
      ) : (
        <div className='row'>
          <label className='col s6 m4 l3'>
            <input className='filled-in' type='checkbox' onChange={handleChangeAll} />
            <span>выбрать всe</span>
          </label>
          <p className='col s6 m4 l6 center'>
            {`${unfinishedTodos.length} ${declOfNum(unfinishedTodos.length, [
              'проблема',
              'проблемы',
              'проблем',
            ])}`}
          </p>
          <button
            disabled={unfinishedTodos.length >= todos.length}
            className='waves-effect waves-light btn-small col s12 m4 l3'
            onClick={deleteTodos}
          >
            удалить завершенные
          </button>
        </div>
      )}
    </div>
  );
};

export default Footer;
