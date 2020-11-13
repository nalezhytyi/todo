import React, { useContext, useState } from 'react';
import { Context } from '../context';

export default function TodoItem({ todo }) {
  const [edit, setEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.title);
  const { dispatch } = useContext(Context);

  const cls = ['todo'];
  if (todo.completed) {
    cls.push('completed');
  }

  const saveTodo = (event) => {
    if ((event.key === 'Enter' && event.target.value.length >= 3) || event.type === 'click') {
      dispatch({
        type: 'edit',
        payload: editedTodo,
        todo,
      });
      setEdit(false);
    }
  };

  if (!edit) {
    return (
      <li className={cls.join(' ')}>
        <label>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
          />
          <span>{todo.title}</span>
        </label>
        <div className='icons-group'>
          <button
            className='waves-effect btn-flat btn-floating waves-light'
            onClick={() => setEdit(true)}
          >
            <i className='material-icons'>edit</i>
          </button>
          <button
            className='btn-flat btn-floating'
            onClick={() => dispatch({ type: 'remove', payload: todo.id })}
          >
            <i className='material-icons red-text'>delete</i>
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li className={cls.join(' ')}>
        <label>
          <input
            className='validate'
            type='text'
            value={editedTodo}
            minLength='3'
            maxLength='120'
            onChange={(event) => setEditedTodo(event.target.value)}
            onKeyPress={saveTodo}
          />
          <span
            className='helper-text'
            data-error='Алло, введи минимум 3 символа!'
            data-success='Нажми Ввод (Return) (Enter) или тыцни кнопку справа!'
          />
        </label>
        <div className='icons-group'>
          <button
            className='btn-large btn-flat waves-effect waves-light btn-floating'
            disabled={editedTodo.length < 3}
            onClick={(event) => saveTodo(event)}
          >
            <i className='material-icons'>save</i>
          </button>
        </div>
      </li>
    );
  }
}
