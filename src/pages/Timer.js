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
  const [timeList,setTimeList] = useState([]); 
  const [show,setShow] = useState(false);
  const [index,setIndex] = useState(null);
  const [exactime,setExacTime] = useState(null);


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
      

const seconds = (time/1000).toString().split('.');


const handleClick = () => {
    if (isRunning === false) 
    { 
      setTime(0);
      getScramble();
    } 
    else setTimeList(oldArray => [...oldArray,timeParser(time)]);
    setIsRunnging(r => !r);
};
// parser czasow do stringa
  const timeParser = () => {
      if(time <= 60000){
          const timeInSeconds = (time/1000).toString();
          return timeInSeconds;   
      }else{
                  const min = (time/60000).toString().split('.')[0];
                  const secon = (time/1000-(min*60)).toString().split(".")[0];
                  const asd = (time/1000).toString().split(".")[1];
                  const times = min+":"+secon+"."+asd;
                  return times;
      }
  };



  const handleInfoClick = (index,event,number) => {
    const ind = index+1;
    setIndex(ind);
    setExacTime(number);
    event.preventDefault();
    setShow(x=>!x);

  };

//dodawanie czasow do menu z lewej strony
  const addtime = timeList.map((number,index) => 
    <div key={index}className="small-brick">
      <div className="one">{index+1}.</div>
      <div className="two">{number}</div>
      <div className="three" ><button className="info-btn" onClick={(event)=>handleInfoClick(index,event,number)}>i</button></div>
    </div>);



  const getScramble = () => {
    const scr = document.getElementById('t').textContent;
    arr.push(scr);
  };

  return (
    <div className="timer">
      <div className="scramble"> 
        <div className="scramble-inside">{!isRunning && <Scramble a={isRunning} />}</div>
      </div>
      <div className="test">
      <div className="timelist">
        <h3>Times</h3>
        <div className="wrap-xd">{addtime}</div>
      </div>  
      <div className="clock"> 
          <div className="time"><code>{isRunning ? seconds[0]:(time/1000).toFixed(2)}</code></div>
          {show && <TimeInfo time={exactime} id={index} scramble={arr} show={setShow}/>}
          <button className="btn-timer" onClick={handleClick}>{isRunning?"Stop":"Start"}</button>
      </div>
      </div>
    </div>
  );
}
 
export default Timer;