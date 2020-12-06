import React, { useContext, useState } from 'react';
import Delay from './Delay';
import { TodosContext } from '../context/todosContext';
import { declOfNum } from '../helpers/declareOfNumber';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  const [checkAll, setCheckAll] = useState(false);
  const { state: todos, dispatch } = useContext(TodosContext);

  const { t } = useTranslation();

  const unfinishedTodos = todos.filter((todo) => todo.completed === false);

  const handleChangeAll = () => {
    dispatch({
      type: 'toggleAll',
      payload: checkAll,
    });
    setCheckAll(!checkAll);
  };

  const deleteTodos = () => {
    if (unfinishedTodos) {
      dispatch({ type: 'removeCompletedTodo' });
      setCheckAll(false);
    }
  };

  const counter = `${unfinishedTodos.length} ${declOfNum(unfinishedTodos.length, [
    `${t('footer.problem')}`,
    `${t('footer.problems')}`,
    `${t('footer.probleme')}`,
  ])}`;

  return (
    <div className='footer-wrapper'>
      {!todos.length ? (
        <Delay>
          <Fade direction='up'>
            <h6>{t('footer.empty')}</h6>
          </Fade>
        </Delay>
      ) : (
        <div className='row'>
          <label className='col s6 m4 l3'>
            <input className='filled-in' type='checkbox' onChange={handleChangeAll} />
            <span>{t('footer.checkAll')}</span>
          </label>
          <p className='col s6 m4 l6 center'>{counter}</p>
          <button
            disabled={unfinishedTodos.length >= todos.length}
            className='waves-effect waves-light red btn-small col s12 m4 l3'
            onClick={deleteTodos}
          >
            {t('footer.delete')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Footer;