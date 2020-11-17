import React, { useState } from 'react';

const TodoItem = ({ todo, dispatch }) => {
  const [edit, setEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.title);

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

  const saveHandler = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      saveTodo();
    }
  };

  if (!edit) {
    return (
      <li className='todo'>
        <label>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
          />
          <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
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
      <li className='todo editable'>
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
        </label>
        <div className='icons-group'>
          <i className='material-icons edit-icon' onClick={saveTodo}>
            {editedTodo ? 'save' : 'delete'}
          </i>
        </div>
      </li>
    );
  }
};

export default TodoItem;
