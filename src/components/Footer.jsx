import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';

const Footer = (props) => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useState(props.todos);
  const { dispatch } = useContext(Context);

  useEffect(() => {
    setTodos(props.todos);
  }, [props.todos]);

  const handleChangeAll = () => {
    dispatch({
      type: 'toggleAll',
      payload: checkAll,
    });
    setCheckAll(!checkAll);
  };

  return (
    <div className='footer'>
      {todos.length === 0 ? (
        <h6>Поздравляю, вы порешали все свои проблемы, и теперь вам нечего делать!</h6>
      ) : (
        <div className='footer'>
          <label>
            <input className='filled-in' type='checkbox' onChange={handleChangeAll} />
            <span>Выбрать всe</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default Footer;
