import React from 'react'
import css from "./Feedback.module.css"

const Feedback = ({ feedback, totalFeedback, positivePercent }) => {
  return (
    <div>
      <p className={css.paragraf}>Good: {feedback.good}</p>
      <p className={css.paragraf}>Neutral: {feedback.neutral}</p>
      <p className={css.paragraf}>Bad: {feedback.bad}</p>
      <p className={css.paragraf}>Total: {totalFeedback}</p>
      <p className={css.paragraf}>Positive: {positivePercent}%</p>
    </div>
  );
}


export default Feedback