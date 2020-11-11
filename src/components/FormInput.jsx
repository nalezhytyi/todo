import React, { useContext, useState } from 'react';
import { Context } from '../context';

const FormInput = () => {
  const [todoTitle, setTodoTitle] = useState('');

  const { dispatch } = useContext(Context);

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
        onKeyUp={loseFocus}
      />
      <label>Чо надо сделать ?</label>
      <span
        className='helper-text'
        data-error='Алло, введи минимум 3 символа!'
        data-success='Нажми Ввод (Return) (Enter)'
      />
    </div>
  );
};

export default FormInput;
