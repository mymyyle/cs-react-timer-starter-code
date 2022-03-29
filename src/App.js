import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    lapTimer,
    isStart,
    laps,
    active,
  } = useTimer(0);

  return (
    <div className="App container">
      <div className="title">
        <span>Coder Timer </span>
        <img
          className="image"
          src={isStart ? "./moewdong.gif" : "./moew1.jpg"}
          alt="moew"
        />
      </div>

      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button stop" onClick={stopTimer}>
            Stop
          </button>
          <button className="button start" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button reset" onClick={resetTimer}>
            Reset
          </button>
          <button className="button lap-btn" onClick={lapTimer}>
            Lap
          </button>
        </div>
      </div>
      {laps.map((lap) => (
        <p className="lap">{formatTime(lap)}</p>
      ))}
    </div>
  );
}

export default App;
