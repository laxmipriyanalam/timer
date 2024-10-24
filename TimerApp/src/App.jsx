import React, { useState, useRef } from 'react';
import "./styles.css"

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isPaused) return; // If not paused, don't start another interval

    setIsPaused(false); // Change state to running
    timerRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsPaused(true); // Update state to paused
    }
  };

  const resetTimer = () => {
    pauseTimer(); // Pause the timer before resetting
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
        <button onClick={startTimer} disabled={!isPaused}>Start</button>
    
        <button onClick={pauseTimer} disabled={isPaused}>Pause</button>
   
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;