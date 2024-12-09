import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

const Menu=()=>{
    return (    
        <Navbar bg="white" fixed="top" data-bs-theme="light" className='navbarcont'>
            <Nav className="menu">
                <Nav.Link className="servicename" href="services"><strong>Services</strong></Nav.Link>
                <Nav.Link className="servicename" href="about">About</Nav.Link>
                <Nav.Link className="servicename" href="sendfeedback">Send Feedback</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Menu;