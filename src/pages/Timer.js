
import React, { useState } from "react";
import '../styles/timer.css';
import {useEffect} from 'react';
import Scramble from "../components/Scramble";
import TimeInfo from "../components/TimeInfo";
import { Link } from "react-router-dom";


const arr = [];


function send_time(params) {
  const response = fetch('http://localhost:3000/timer_collect',{
      method:'POST',
      mode: 'no-cors',
      headers:{"Content-Type": "application/json"},
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
  const [isRunning,setIsRunnging] = useState(false);
  const [show,setShow] = useState(false);
  const seconds = (time/1000).toString().split('.');
  const [index,setIndex] = useState(0);
  const [singleScramble,setSingleScramble] = useState();
  const [i,seti] = useState(1);
  const [data,setdata] = useState([]);
  const [average,setaverage] = useState(0.00);
  const [ao12,setao12] = useState(0.00);
  


  useEffect(() => {
      let interval = null;
      if(isRunning && !isPaused === false){
          interval = setInterval(() => {
      setTime((time) => time + 10); }, 10);
      }else{
          
          clearInterval(interval);   
          handleaverageClick();
          handleaverageClick12();

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
        send_time({"id":i,"time":(time/1000),"scramble":singleScramble,"parsedTime":timeParser()});
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

const handleaverageClick = () => {
  let sum = 0;
  let arr = [];
  if(data.length >= 5 ){
    for(let i = data.length-1 ; i > data.length-6; i--) arr.push(data[i].time);
    arr.sort(); arr.pop(); arr.shift();
    for(let i = 0 ; i < arr.length ; i++) sum +=arr[i];
    setaverage((sum/3));
  }
}
const handleaverageClick12 = () => {
  let sum = 0;
  let arr = [];
  if(data.length >= 12 ){
    for(let i = data.length-1 ; i > data.length-13; i--) arr.push(data[i].time);
    arr.sort(); arr.pop(); arr.shift();
    for(let i = 0 ; i < arr.length ; i++) sum +=arr[i];
    setao12((sum/10));
  }
}



const add =  data.map( (val,index) =>
    <div key={index} className="small-brick">
      <button className="two"onClick={(event)=>handleInfoClick(event,index)}>{val.parsedTime}</button>
    </div>);

  return (
    <div className="timer">
      <div className="scramble">
        <Link to="/"className="back-to-menu">Menu</Link> 
        <div className="back-to-menu"></div> 
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
        <code>Ao5:{average.toFixed(2)}</code>
        <code>Ao12:{ao12.toFixed(2)}</code>
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
