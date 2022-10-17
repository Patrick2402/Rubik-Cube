import { useState } from "react";
import '../styles/timer.css'

function Timer() {
  const [sec, setSec] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [running,setRunning] = useState(false);
  const [timelists,setTimeLists] = useState([]);

 const startTimer = (e) => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0); 
      setRunning(false);
      const x = sec/1000;
      setTimeLists(oldArray => [...oldArray,x ]);
      console.log(timelists);
      return;
    }
 const newIntervalId = setInterval(() => {setSec(prevCount => prevCount + 10);}, 10);
    setIntervalId(newIntervalId);
    setRunning(true);
    setSec(0);
    e.preventDefault();
  };

let moveturn = ["R","U","L","D","B","F","D'","U'","L'","R'","F'","B'","U2","D2","B2","F2","R2","L2"];
const seconds = (sec/1000).toString().split('.');
let array = [];
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
    return  array;
};

const xd = timelists.map((number) => <div className="small-brick">{number}</div>);

  return (
    <div className="timer" >
      <div className="scramble"> 
        <p>{!running && chooseturn()}</p>
      </div>
      <div className="test">
      <div className="timelist">
        {xd}
      </div>  
      <div className="clock"> 
          <p className="time">{intervalId ? seconds[0]:(sec/1000).toFixed(2)}</p>
          <button className="btn-timer" onClick={startTimer} >{intervalId ? "Stop":"Start"}</button>
      </div>
      </div>
    </div>
  );
}
 
export default Timer;