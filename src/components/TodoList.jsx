import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { Fade } from 'react-awesome-reveal';
import { Context } from '../context';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TodoList = () => {
  const { state: todos, dispatch } = useContext(Context);

  return (
    <ul className='todo-list'>
      <TransitionGroup>
        {[...todos].reverse().map((todo) => (
          <CSSTransition key={todo.id} timeout={500} classNames='animate'>
            <Fade direction='down' triggerOnce>
              <TodoItem todo={todo} dispatch={dispatch} />
            </Fade>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default TodoList;
