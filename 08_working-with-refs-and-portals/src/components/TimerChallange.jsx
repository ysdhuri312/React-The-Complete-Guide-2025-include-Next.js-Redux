/** @format */

import { useRef, useState } from 'react';

const TimerChallange = ({ title, targetTime }) => {
  const timer = useRef();

  const [timeStarted, setTimeStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleClick() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimeStarted(false);
  }

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timerExpired ? <p>You lost!</p> : ''}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timeStarted ? handleStop : handleClick}>
          {timerExpired ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p>{timeStarted ? 'Timmer running...' : 'Timer stopped...'}</p>
    </section>
  );
};
export default TimerChallange;
