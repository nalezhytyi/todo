import React from 'react';
import TodoItem from './TodoItem';
import { Slide } from 'react-awesome-reveal';

const TodoList = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos.map((item) => (
        <Slide direction='up' triggerOnce>
          <TodoItem key={item.id} {...item} />
        </Slide>
      ))}
    </ul>
  );
};

export default TodoList;
