import { useState } from "react";

const Forms = () => {

const [name,setName] = useState('');
const [ssh,setSsh] = useState('');

const handleSubmit = (event) =>{
    alert("E-mail: "+name+"\nKey: "+ssh);
    event.preventDefault();
}

const handleChange = (event) =>{
    setName(event.target.value);
    console.log(name);
}

const handleChangeSsh = (event) =>{
    setSsh(event.target.value);
    console.log(ssh);
}


    return ( 
<div className="Forms-homepage">
    <form onSubmit={handleSubmit}>

       <span className="label-forms"> E-mail</span>
        <input 
            className="input-email" 
            type="email" 
            placeholder="Type email"  
            value={name}  
            onChange={handleChange} 
            required 
        />
        <span className="label-forms"> Key</span>
        <input 
            className="input-key" 
            type="text" 
            placeholder="Type key"  
            value={ssh} 
            onChange={handleChangeSsh} 
            required
        />
    <a href="/" className="forgot-password">Forgot key?</a>

        <input 
            className="btn"     
            type="submit"  
            value="Submit"  
        />

    </form>
</div>

         );
}
 
export default Forms;