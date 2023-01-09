import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forms = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const response = fetch('http://localhost:3000/login_req', {
            method: 'POST',
            mode: 'no-cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });
        console.log(response.status)
        if (response.status === 200) {
            navigate("/");
        } else {
            alert("login failed");
        }
    }


    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    const handleChangeSsh = (event) => {
        setPassword(event.target.value);
    };
    return (
        <div className="forms">
            <form onSubmit={handleSubmit}>
                <label>
                    <span className="label-forms"> E-mail</span>
                    <input
                        className="input-email"
                        type="email"
                        placeholder="Type email"
                        value={username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <span className="label-forms"> Password</span>
                    <input
                        className="input-passwords"
                        type="password"
                        placeholder="Type password"
                        value={password}
                        onChange={handleChangeSsh}
                        required
                    />
                </label>
                <input
                    className="btn-forms"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>

    );
}

export default Forms;
