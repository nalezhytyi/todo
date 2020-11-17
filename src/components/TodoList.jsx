import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { Slide } from 'react-awesome-reveal';
import { Context } from '../context';

const TodoList = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <ul className='todo-list'>
      {[...state].reverse().map((todo) => (
        <Slide direction='down' triggerOnce key={todo.id}>
          <TodoItem todo={todo} dispatch={dispatch} />
        </Slide>
      ))}
    </ul>
  );
};

export default TodoList;
