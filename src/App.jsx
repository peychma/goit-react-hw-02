import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
   const initialFeedback = JSON.parse(localStorage.getItem('feedback')) || {
    good: 0,
    neutral: 0,
    bad: 0
   };
  
  const [feedback, setFeedback] = useState(initialFeedback);
  
   useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);


  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercent = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    const resetState = {
      good: 0,
      neutral: 0,
      bad: 0
    };
    setFeedback(resetState);
    localStorage.setItem('feedback', JSON.stringify(resetState));
  };
  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positivePercent={positivePercent}/>
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App
