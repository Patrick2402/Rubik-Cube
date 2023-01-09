
const TimeInfo = ({ ide, show, data, setdata }) => {

    const handleClick = () => {
        show(close => !close); // closing windows
    };



    return (
        <div className="info-box">
            <button className="delete-btn" onClick={handleClick}>X</button>
            <div className="shownumber">No. {data[ide].id}</div>
            <div className="showtime">Time: {data[ide].time}</div>
            <div className="showscramble">Scramble:{data[ide].scramble}</div>

        </div>
    );
}

export default TimeInfo;
