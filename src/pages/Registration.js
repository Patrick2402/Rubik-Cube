import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Registration = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setrePassword] = useState('');

    const url= process.env.URL;
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === repassword) {
            fetch(url + '/registration_req', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            }).then(() => {
                console.log("Credentials sent");
            });
        } else alert("Hasla nie sa takie same");
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
            <h1>Sign up</h1>
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
                    className="btn-forms"
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    );
}

export default Registration;
