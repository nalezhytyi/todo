import React from 'react';
import TodoItem from './TodoItem';
import { Slide } from 'react-awesome-reveal';

const TodoList = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <Slide triggerOnce key={todo.id}>
          <TodoItem {...todo} todo={todo} />
        </Slide>
      ))}
    </ul>
  );
};

export default TodoList;
