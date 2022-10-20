import { useState } from "react";
import '../styles/timer.css';
import {useEffect} from 'react';

function Timer() {

const [time, setTime] = useState(0);
const [isPaused] = useState(true);
const [isRunning,setIsRunnging] = useState(false);
const [timeList,setTimeList] = useState([]);
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
      



let moveturn = ["R","U","L","D","B","F","D'","U'","L'","R'","F'","B'","U2","D2","B2","F2","R2","L2"];
const seconds = (time/1000).toString().split('.');
let array = [];

// generator scrambli 
const chooseturn = () =>{
    
    for (let x = 0; array.length < 21; x++) {
        if(array.length === 0){
            array.push(moveturn[Math.floor(Math.random()*moveturn.length)]); 
        }else{
            const y = moveturn[Math.floor(Math.random()*moveturn.length)];
            const z = y.split("'");
            const a = y.split("2");
            if(array[array.length-1].includes(z[0])) continue;
            if(array[array.length-1].includes(a[0])) continue;
            else  array.push(y);
        }
    };
    return array;
};

//funkcja ktora startuje i zatrzymyje timer

const handleClick = () => {
    if (isRunning === false) setTime(0);
    else setTimeList(oldArray => [...oldArray,timeParser(time)]);
    setIsRunnging(r => !r)
    //const something = timeParser();
};
// parser czasow do stringa
const timeParser = () => {
    if(time <= 6000){
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
//dodawanie czasow do menu z lewej strony
const addtime = timeList.map((number,index) => 
  <div key={index}className="small-brick">
    <div className="one">{index+1}.</div>
    <div className="two">{number}</div>
    <div className="three" onClick={console.log()}>X</div>
  </div>);
// rendering 


  return (
    <div className="timer">
      <div className="scramble"> 
        <div className="scramble-inside">{!isRunning && chooseturn()}</div>
      </div>
      <div className="test">
      <div className="timelist">
        <h3>Times</h3>
        <div className="wrap-xd">{addtime}</div>
      </div>  
      <div className="clock"> 
          <div className="time"><code>{isRunning ? seconds[0]:(time/1000).toFixed(2)}</code></div>
          <button className="btn-timer" onClick={handleClick}>{isRunning?"Stop":"Start"}</button>
      </div>
      </div>
    </div>
  );
}
 
export default Timer;