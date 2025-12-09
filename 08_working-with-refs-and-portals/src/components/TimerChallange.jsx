/** @format */

import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

const TimerChallange = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeStarted, setTimeStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleClick() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    // setTimeStarted(false);
  }

  return (
    <>
      {timerExpired && (
        <ResultModal ref={dialog} targetTime={targetTime} result='lost' />
      )}
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timeStarted ? handleStop : handleClick}>
            {timeStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p>{timeStarted ? 'Timmer running...' : 'Timer stopped...'}</p>
      </section>
    </>
  );
};
export default TimerChallange;
