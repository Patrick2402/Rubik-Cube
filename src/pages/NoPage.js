import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/nopage.css';
const NoPage = () => {

const [ lost, setlost ] = useState(false);

setTimeout(() => { setlost(true); },2000);

    return (  
        <div className="nopage">
            {lost && <h3><Link className="back" to="/timer">Click here to go back!</Link></h3>}
            {!lost && <h1 className="header">Sorry page not found!</h1>}
            <h1 className="header-lost">{
                lost && 
                <div className="render-lost">
                    <span className="white">Are</span>
                    <span className="red">you</span>
                    <span className="orange">lost</span>
                    <p className="question-mark">?</p>
                </div> }
            </h1>
        </div>
    );
}
 
export default NoPage;