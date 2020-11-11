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
          <div className='icons-group'>
            <i className='material-icons' onClick={() => setEdit(true)}>
              edit
            </i>
            <i
              className='material-icons red-text'
              onClick={() => dispatch({ type: 'remove', payload: todo.id })}
            >
              delete
            </i>
          </div>
        </label>
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
            data-success='Нажми Ввод (Return) (Enter)'
          />
          <i className='material-icons' onClick={(event) => saveTodo(event)}>
            save
          </i>
        </label>
      </li>
    );
  }
}
