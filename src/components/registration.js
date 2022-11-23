import { useState } from "react";
import '../styles/registration.css';
const Registration = () => {

const [username,setUsername] = useState('');
const [password,setPassword] = useState('');




const handleSubmit = (event) =>{
    event.preventDefault();
    fetch('http://localhost:3000/registration_req',{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
        username: username,
        password: password,
  })
    }).then(() => {
        console.log("Credentials sent");
        });
}

const handleChange = (event) =>{
    setUsername(event.target.value);
}

const handleChangeSsh = (event) =>{
    setPassword(event.target.value);
};

    return (  
    <>
    <form onSubmit={handleSubmit}>
       <span className="label-forms"> E-mail</span>
        <input 
            className="input-email" 
            type="email" 
            placeholder="Type email"  
            value={username}  
            onChange={handleChange} 
            required 
        />
        <span className="label-forms"> Password</span>
        <input 
            className="input-key" 
            type="password" 
            placeholder="Type password"  
            value={password} 
            onChange={handleChangeSsh} 
            required
        />
        <input 
            className="btn"     
            type="submit"  
            value="Submit"
        />

    </form>
    </>
);
}
 
export default Registration;
