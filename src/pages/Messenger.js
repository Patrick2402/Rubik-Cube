import '../styles/messenger.css'
import { useState } from 'react';
const Messenger = () => {

const [messeage, setMesseage] = useState('');
const [data, setdata] = useState([]);

const handlechange = (event) =>{
    setMesseage(event.target.value);
}

const handleClick = (event) => {
    event.preventDefault();
    setdata(oldArray => [...oldArray,messeage]);
    console.log(data);
    setMesseage('');
}


const showmesseages =  data.map( (val) => <div className="small-messeage">{val}</div>);

    return (  
        <div className="messenger-main-box">
           <div className="display-messeages">
               <>{showmesseages}</> 
            </div>
            <div className="display-messeages-two"> 
                <form  className="mess-form" onSubmit={handleClick}>
                        <input 
                            className="messeages-form" 
                            type="text" 
                            placeholder="Aaa..."  
                            value={messeage}  
                            onChange={handlechange} 
                            required />
                        <input 
                            className="messeages-form"     
                            type="submit"  
                            value="Submit" />
                </form>
            </div>
        </div>
    );
}
 
export default Messenger;