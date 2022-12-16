import Homenavbar from "../components/HomeNavbar";
import '../styles/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

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

  

const Homepage = () => {
    return (  
        <div className='hp'>
           
               
                {[ 'start'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
            </div>
       
        );
}
 
export default Homepage;



