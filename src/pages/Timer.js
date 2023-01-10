
import React, { useState } from "react";
import '../styles/timer.css';
import { useEffect } from 'react';
import Scramble from "../components/Scramble";
import TimeInfo from "../components/TimeInfo";
import { Link } from "react-router-dom";
import MainScreen from "../webcam/MainScreen";


const arr = [];


function send_time(params) {
  const url = process.env.REACT_APP_BASE_URL;
  const response = fetch(url + '/timer_collect', {
    method: 'POST',
    mode: 'no-cors',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      time: params.time,
      scramble: params.scramble,
      parsedTime: params.parsedTime,
      cookie: document.cookie
    })
  });
}

function Timer() {
  const [time, setTime] = useState(0);
  const [isPaused] = useState(true);
  const [isRunning, setIsRunnging] = useState(false);
  const [show, setShow] = useState(false);
  const seconds = (time / 1000).toString().split('.');
  const [index, setIndex] = useState(0);
  const [singleScramble, setSingleScramble] = useState();
  const [i, seti] = useState(1);
  const [data, setdata] = useState([]);
  const [average, setaverage] = useState(0.00);
  const [ao12, setao12] = useState(0.00);



  useEffect(() => {
    let interval = null;
    console.log(data)
    if (isRunning && !isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {

      clearInterval(interval);
      handleaverageClick();
      handleaverageClick12();

    }
    return () => {
      clearInterval(interval);
    }
  }, [isRunning, isPaused])



  // parser czasow do stringa
  function timeParser() {
    if (time <= 60000) {
      return (time / 1000).toString();
    } else {
      const min = (time / 60000).toString().split('.')[0];
      const secon = (time / 1000 - (min * 60)).toString().split(".")[0];
      const asd = (time / 1000).toString().split(".")[1];
      return min + ":" + secon + "." + asd;
    }
  }

  function handleInfoClick(event, idex) {
    event.preventDefault();
    setShow(x => !x);
    setIndex(idex);
  };

  const handleaverageClick = () => {
    let sum = 0;
    let arr = [];
    if (data.length >= 5) {
      for (let i = data.length - 1; i > data.length - 6; i--) arr.push(data[i].time);
      arr.sort(); arr.pop(); arr.shift();
      for (let i = 0; i < arr.length; i++) sum += arr[i];
      setaverage((sum / 3));
    }
  }
  const handleaverageClick12 = () => {
    let sum = 0;
    let arr = [];
    if (data.length >= 12) {
      for (let i = data.length - 1; i > data.length - 13; i--) arr.push(data[i].time);
      arr.sort(); arr.pop(); arr.shift();
      for (let i = 0; i < arr.length; i++) sum += arr[i];
      setao12((sum / 10));
    }
  }

  const handleKeyDown = event => {
    if(event.key && isRunning){
      setIsRunnging(false)
      setdata(oldArray => [...oldArray, { "id": i, "time": (time / 1000), "scramble": singleScramble, "parsedTime": timeParser() }]);
      send_time({ "id": i, "time": (time / 1000), "scramble": singleScramble, "parsedTime": timeParser() });
      seti(i => i + 1)
    }
    if (event.key === '<'  ) {
       const scr = document.getElementById('t').textContent;
       setSingleScramble(scr);
       arr.push(scr);
       setTime(0);
       setIsRunnging(true)
    }
    // if (event.key === 'Shift' ) {
    //   let timeoutId = null
    //   const shiftPressed = () => {
    //     timeoutId = setTimeout(() => {
    //       const scr = document.getElementById('t').textContent;
    //       setSingleScramble(scr);
    //       arr.push(scr);
    //       setTime(0);
    //       setIsRunnging(true)
    //     }, 1000)
    //   }
    //   const shiftReleased = () => {
    //     if (timeoutId) {
    //       clearTimeout(timeoutId)
    //     }
    //   }
    //   document.addEventListener('keydown', shiftPressed)
    //   document.addEventListener('keyup', shiftReleased)
    // }

}



useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
       document.removeEventListener('keydown', handleKeyDown);
    };
});

  const add = data.map((val, index) =>
    <div key={index} className="small-brick">
      <button className="two" onClick={(event) => handleInfoClick(event, index)}>{val.parsedTime}</button>
    </div>);

return (
      <div className="timer">
        <div className="times">
          {add}
        </div>
        <div id="clock">
          <div className="scramble">
          {!isRunning && <Scramble a={isRunning} />}
          </div>
          <div className="stoper">
         <div className="digites">
         {isRunning ? seconds[0] : (time / 1000).toFixed(2)}</div>
            <code >Ao5:{average.toFixed(2)}</code>
            <code >Ao12:{ao12.toFixed(2)}</code>
          </div>
        </div>
        <div className="zoom">
          <MainScreen />
        </div>
      </div>
  );
}

export default Timer;
