import React from 'react'
import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.options}>
      <button className={css.button} type="button" onClick={() => updateFeedback('good')}>Good</button>
      <button className={css.button} type="button" onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={css.button} type="button" onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button className={css.button} type="button" onClick={resetFeedback}>Reset</button>}
    </div>
  );
}

export default Options