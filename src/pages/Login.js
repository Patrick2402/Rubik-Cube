import Forms from "../components/Forms";
import Homenavbar from "../components/HomeNavbar";
import Navbar from "../components/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Login = () => {


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
           <Homenavbar />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
    return (
    
    <div className="canva">
      <div className="box-one">
      {[ 'start'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
      </div>
      <Forms />
    </div>
  );
}
 
export default Login;