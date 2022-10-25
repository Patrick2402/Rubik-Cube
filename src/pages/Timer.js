/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import '../styles/timer.css';
import {useEffect} from 'react';
import Scramble from "../components/Scramble";
import TimeInfo from "../components/TimeInfo";


const arr = [];




function Timer() {
  const [time, setTime] = useState(0);
  const [isPaused] = useState(true);
  const [isRunning,setIsRunnging] = useState(false);
  const [show,setShow] = useState(false);
  const seconds = (time/1000).toString().split('.');
  const [index,setIndex] = useState(0);
  const [singleScramble,setSingleScramble] = useState();
  const [i,seti] = useState(1);
  const [data,setdata] = useState([]);


  useEffect(() => {
      let interval = null;
      if(isRunning && !isPaused === false){
          interval = setInterval(() => {
      setTime((time) => time + 10); }, 10);
      }else{
          
          clearInterval(interval);     
      }
    return () => {
      clearInterval(interval);
    }
  }, [isRunning, isPaused])

     
      
  function handleClick() {

    if (isRunning === false) {
      setTime(0);
      const scr = document.getElementById('t').textContent;
      setSingleScramble(scr);
      arr.push(scr);
    }
    else if(time !== 0){
        setdata(oldArray => [...oldArray,{"id":i,"time":(time/1000),"scramble":singleScramble,"parsedTime":timeParser()}]);
        seti(i=>i+1);
    }
    setIsRunnging(r => !r);

  }
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

  function handleInfoClick( event,idex) {
    event.preventDefault();
    setShow(x => !x);
    setIndex(idex);
  };

const add =  data.map( (val,index) =>
    <div key={index} className="small-brick">
      <div className="one">{index+1}.</div>
      <div className="two">{val.parsedTime}</div>
      <div className="three" >
        <button 
            className="info-btn" 
            onClick={(event)=>handleInfoClick(event,index)}>i</button>
        </div>
    </div>);

  return (
    <div className="timer">
      <div className="scramble">
        <div className="scramble-inside">{!isRunning && <Scramble a={isRunning} />}</div>
      </div>
      <div className="test">
      <div className="timelist">
        <h3>Times</h3>
        <div className="wrap-xd">{add}</div>
      </div>
      <div className="clock"> 
          <div className="time"><code>
        {isRunning ? seconds[0]:(time/1000).toFixed(2)}</code></div>
          {show && <TimeInfo
            ide={index} 
            show={setShow} 
            data={data}
            setdata={setdata}
            />}
          <button
            className="btn-timer" 
            onClick={handleClick}>
            {isRunning?"Stop":"Start"}
          </button>
      </div>
      </div>
    </div>
  );
}
 
export default Timer;