

import TimeInfo from '../components/TimeInfo';
import '../styles/playground.css'
import {useState} from 'react';

function Playground() {

const [show,setShow] = useState(false);

const handleClick = () => {
    setShow(x => !x);
};

return (
<div className="test">
    <input type="button" value="Click" onClick={handleClick}/>
    <div>{show && <TimeInfo/>}</div>
</div>
)};

export default Playground;
