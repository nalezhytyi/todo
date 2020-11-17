import React, { useContext, useState } from 'react';
import { Context } from '../context';
import { declOfNum } from '../helpers/declareOfNumber';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [checkAll, setCheckAll] = useState(false);
  const { state, dispatch } = useContext(Context);

  const { t } = useTranslation();

  const unfinishedTodos = state.filter((todo) => todo.completed === false);

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

  let problem = `${t('footer.problem')}`;
  let problems = `${t('footer.problems')}`;
  let probleme = `${t('footer.probleme')}`;

  return (
    <div className='footer-wrapper'>
      {state.length === 0 ? (
        <h6>{t('footer.empty')}</h6>
      ) : (
        <div className='row'>
          <label className='col s6 m4 l3'>
            <input className='filled-in' type='checkbox' onChange={handleChangeAll} />
            <span>{t('footer.checkAll')}</span>
          </label>
          <p className='col s6 m4 l6 center'>
            {`${unfinishedTodos.length} ${declOfNum(unfinishedTodos.length, [
              problem,
              problems,
              probleme,
            ])}`}
          </p>
          <button
            disabled={unfinishedTodos.length >= state.length}
            className='waves-effect waves-light btn-small col s12 m4 l3'
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
