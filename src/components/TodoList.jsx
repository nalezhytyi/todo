import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { Slide } from 'react-awesome-reveal';
import { TodosContext } from '../context/todosContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TodoList = () => {
  const { state: todos, dispatch } = useContext(TodosContext);

  return (
    <ul className='todo-list'>
      <TransitionGroup>
        {[...todos].reverse().map((todo) => (
          <CSSTransition key={todo.id} timeout={500} classNames='animate'>
            <Slide direction='down' triggerOnce>
              <TodoItem todo={todo} dispatch={dispatch} />
            </Slide>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default TodoList;
