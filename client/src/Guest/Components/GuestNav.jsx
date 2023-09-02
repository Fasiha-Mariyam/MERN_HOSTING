import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function GuestNav() {
    return (
        <Navbar className="bg-dark sticky-top">
            <Container>
 <Link className='navbar-brand'>
    <img className="img-thumbnail" width={150} 
    src="https://tse4.mm.bing.net/th?id=OIP.YMgL5O3ts2czCUCeoyZHbwAAAA&pid=Api&P=0&h=220" alt="" />
</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="ms-3">
                        <Link to='/' className='nav-link text-white'>Home</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Link to='/login' className='nav-link text-white'>Login</Link>
                    </Nav>
                    <Nav >
                        <Link to='/signup' className='nav-link text-white'>SignUp</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}