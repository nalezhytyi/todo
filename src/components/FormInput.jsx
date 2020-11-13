import React, { useContext, useState } from 'react';
import { Context } from '../context';

const FormInput = () => {
  const [todoTitle, setTodoTitle] = useState('');

  const { dispatch } = useContext(Context);

  const addTodo = () => {
    if (todoTitle) {
      dispatch({
        type: 'add',
        payload: todoTitle,
      });
      setTodoTitle('');
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
          minLength='1'
          maxLength='120'
          onChange={(e) => setTodoTitle(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? addTodo() : null)}
        />
        <label>Чо надо сделать ?</label>
        <span
          className='helper-text'
          data-error='Алло, напиши хоть чёто!'
          data-success='Давай, добавь себе ещё проблем!'
        />
      </div>
      <div className='icons-group'>
        <button className='btn-flat btn-floating btn-large waves-effect' onClick={addTodo}>
          <i className='material-icons'>send</i>
        </button>
      </div>
    </div>
  );
};

export default FormInput;
