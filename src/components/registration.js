import { useState } from "react";
import '../styles/registration.css';
import Navbar from "../components/Navbar";

const Registration = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setrePassword] = useState('');




    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === repassword) {
            fetch('http://localhost:3000/registration_req', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            }).then(() => {
                console.log("Credentials sent");
            });
        }else alert("Hasla nie sa takie same");
    }

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    const handleChangeSsh = (event) => {
        setPassword(event.target.value);
    };
    const handleChangerepass = (event) => {
        setrePassword(event.target.value);
    };

    return (

        <div className="registration-page">
            <Navbar />
            <div className="box-two">
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
                    className="input-passwords"
                    type="password"
                    placeholder="Type password"
                    value={password}
                    onChange={handleChangeSsh}
                    required
                />
                <span className="label-forms"> Retype password</span>
                <input
                    className="input-passwords"
                    type="password"
                    placeholder="Retype password"
                    value={repassword}
                    onChange={handleChangerepass}
                    required
                />
                <input
                    className="btn"
                    type="submit"
                    value="Register"
                />

            </form>
            </div> 
        </div>
    );
}

export default Registration;
