
import React, { useState } from 'react';

function Stopwatch() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerInterval);
      setIsRunning(false);
    } else {
      const interval = setInterval(updateTime, 10);
      setTimerInterval(interval);
      setIsRunning(true);
    }
  };

  const updateTime = () => {
    setMilliseconds((prev) => {
      if (prev >= 99) {
        setSeconds((sec) => {
          if (sec >= 59) {
            setMinutes((min) => min + 1);
            return 0;
          }
          return sec + 1;
        });
        return 0;
      }
      return prev + 1;
    });
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    return time < 10 ? '0' + time : time;
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>

      <div id="display">
        <span id="minutes">{formatTime(minutes)}</span>:
        <span id="seconds">{formatTime(seconds)}</span>:
        <span id="milliseconds">{formatTime(milliseconds)}</span>
      </div>

      <div className="controls">
        <button id="start-stop" onClick={toggleTimer}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button id="reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
