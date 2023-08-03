import React, { useState, useEffect } from 'react';

const QuizTimer = ({ totalSeconds, onTimeUp, timeStopper }) => {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  useEffect(() => {
    let timer;
    if (secondsLeft > 0) {
        if(timeStopper){
            timer = setInterval(() => {
                setSecondsLeft(prevSeconds => prevSeconds - 1);
            }, 1000);
        }
     
    } else {
      onTimeUp(); // Callback to be executed when the time is up
    }

    return () => {
      clearInterval(timer); // Clean up the timer when the component unmounts
    };
  }, [secondsLeft]);

  // Helper function to format remaining time as "MM:SS"
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Time Remaining: {formatTime(secondsLeft)}</h2>
    </div>
  );
};

export default QuizTimer;
