import React, { useContext, useState } from 'react';
import { Context } from '../context';

const FormInput = () => {
  const [todoTitle, setTodoTitle] = useState('');

  const { dispatch } = useContext(Context);

  const addTodo = (event) => {
    if ((event.key === 'Enter' && event.target.value.length >= 3) || event.type === 'click') {
      dispatch({
        type: 'add',
        payload: todoTitle,
      });
      setTodoTitle('');
      event.target.blur();
    }
  };

  return (
    <div className='form-input'>
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
        />
        <label>Чо надо сделать ?</label>
        <span
          className='helper-text'
          data-error='Алло, введи минимум 3 символа!'
          data-success='Хочешь еще проблем?'
        />
      </div>
      <div>
        <button
          className='btn-flat btn-floating btn-large waves-effect'
          onClick={addTodo}
          disabled={todoTitle.length < 3}
        >
          <i className='material-icons'>send</i>
        </button>
      </div>
    </div>
  );
};

export default FormInput;
