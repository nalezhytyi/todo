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

  const saveTodo = () => {
    setEdit(false);
    if (editedTodo) {
      dispatch({
        type: 'edit',
        payload: editedTodo,
        todo,
      });
    } else {
      dispatch({ type: 'remove', payload: todo.id });
    }
  };

  const saveHandler = (event) => {
    if (event.key === 'Enter' && event.target.value) {
      saveTodo();
    }
  };

  if (!edit) {
    return (
      <li className={cls.join(' ')}>
        <label>
          <input
            className='todo__checkbox'
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
          />
          <span>{todo.title}</span>
        </label>
        <div className='icons-group'>
          <a href={'#edit'} onClick={() => setEdit(true)}>
            <i className='material-icons'>edit</i>
          </a>
          <i
            className='material-icons red-text'
            onClick={() => dispatch({ type: 'remove', payload: todo.id })}
          >
            delete
          </i>
        </div>
      </li>
    );
  } else {
    return (
      <li className='todo todo-editable'>
        <label>
          <input
            autoFocus
            id='edit'
            className='validate'
            type='text'
            value={editedTodo}
            minLength='1'
            maxLength='350'
            onChange={(e) => setEditedTodo(e.target.value)}
            onKeyPress={saveHandler}
            onBlur={saveTodo}
          />
          <span
            className='helper-text'
            data-error='Алло, напиши хоть чёто!'
            data-success='Нажми Ввод (Return) (Enter) или тыцни кнопку справа!'
          />
        </label>
        <div className='icons-group'>
          <i className='material-icons edit-icon' onClick={saveTodo}>
            {editedTodo ? 'save' : 'delete'}
          </i>
        </div>
      </li>
    );
  }
}
