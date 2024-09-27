import { useState, useEffect } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.css';

function App() {
  const [feedBack, setFeedBack] = useState(() => {
    return JSON.parse(localStorage.getItem('saved-feedbacks')) ?? 0;
  });

  const updateFeedback = feedbackType => {
    setFeedBack({ ...feedBack, [feedbackType]: feedBack[feedbackType] + 1 });
  };

  const totalFeedback = feedBack.good + feedBack.neutral + feedBack.bad;

  const resetFeedBack = () => {
    setFeedBack({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-feedbacks', JSON.stringify(feedBack));
  }, [feedBack]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedBack={resetFeedBack}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback feedBack={feedBack} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
