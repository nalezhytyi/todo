import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
