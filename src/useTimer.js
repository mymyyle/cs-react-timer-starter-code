import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  const active = useRef();
  const refInterval = useRef(null);
  const [isStart, setIsStart] = useState(false);
  const [laps, setLaps] = useState([]);

  const startTimer = () => {
    refInterval.current = setInterval(
      () => setTime((prevTime) => prevTime + 1),
      1000
    );
    setIsStart(true);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    refInterval.current = null;
    setIsStart(false);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    stopTimer();
    setIsStart(false);
    setLaps([]);
    setTime(0);
  };
  const lapTimer = () => {
    console.log(`lap`);
    setLaps((preLaps) => [...preLaps, time]);
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    lapTimer,
    isStart,
    laps,
    active,
  };
};
export default useTimer;
