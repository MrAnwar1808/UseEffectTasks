
import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(10); // Countdown from 10 seconds
  const [isRunning, setIsRunning] = useState(false); // Timer initially not running

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1); // Decrement timeLeft every second
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval); // Stop the interval when countdown reaches 0
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isRunning, timeLeft]); // Effect depends on isRunning and timeLeft states

  const startTimer = () => setIsRunning(true); // Start the timer
  const stopTimer = () => setIsRunning(false); // Stop the timer
  const resetTimer = () => setTimeLeft(10); // Reset timer to 10 seconds

  return (
    <div>
      <h1>{timeLeft}s</h1>
      <button onClick={startTimer} disabled={isRunning || timeLeft === 0}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default CountdownTimer;
