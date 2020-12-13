import React, { useContext } from 'react';
import Delay from './Delay';
import { TodosContext } from '../context/todosContext';
import { declOfNum } from '../helpers/declareOfNumber';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  const { state: todos, dispatch, checkAll, setCheckAll, unfinishedTodos } = useContext(
    TodosContext
  );

  const { t } = useTranslation();

  const handleChangeAll = () => {
    dispatch({
      type: 'toggleAll',
      payload: checkAll,
    });
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
            <input
              className='filled-in'
              type='checkbox'
              onChange={handleChangeAll}
              checked={unfinishedTodos.length === 0}
            />
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
