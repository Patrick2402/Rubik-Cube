import '../styles/infotime.css'

const TimeInfo = ({time,id,scramble,show}) => {
console.log(scramble);

const handleClick = () =>{
    show(close=>!close); // closing windows
}

    return (
        <div className="info-box">
            <button className="delete-btn" onClick={handleClick}>X</button>
            <code className='showtime'>Time:{time}</code>
            <div className="showscramble"><code><b>Scramble:</b>{scramble[id-1]}</code></div>

        </div>
      );
}
 
export default TimeInfo;
