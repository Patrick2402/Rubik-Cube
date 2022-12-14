import { useState } from "react";
import '../styles/registration.css';
import HomeNavbar from "../components/HomeNavbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Registration = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setrePassword] = useState('');


    function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <div className="menu-main">
            <button  onClick={handleShow} className="btn-menu">
                Menu
            </button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
               <HomeNavbar />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        );
      }

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
            <div className="box-one">
            {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
            </div>
            
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
                    className="btn-forms"
                    type="submit"
                    value="Register"
                />
            </form>
            </div> 
        </div>
    );
}

export default Registration;
