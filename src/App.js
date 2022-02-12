
import { useEffect, useState } from 'react';
import './App.css';
import './timer.css'

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isStart, setIsStart] = useState(false)
  let timer;

  useEffect(() => {
    if (isStart == true) {
      timer = setInterval(() => {
        setSeconds(seconds + 1)
        if (seconds === 59) {
          setMinutes(minutes + 1)
          setSeconds(0)
        }
      }, 1000)

      return () => clearInterval(timer)
    }

  })

  const handleReset = () => {
    setSeconds(0);
    setMinutes(0)
    setIsStart(false);
  }

  return (
    <div className="App">
      <div className="timer">
        <h1 className='time'>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
        <br></br>
        <div className='buttons'>
          <button className='button' onClick={() => { setIsStart(true) }}>Start</button>
          <button className='button' onClick={() => { clearInterval(timer) }}>Stop</button>
          <button className='button' onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
