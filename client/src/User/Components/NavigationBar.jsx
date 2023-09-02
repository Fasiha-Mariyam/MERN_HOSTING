import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import { useContext } from 'react';

function NavigationBar() {

  const { state, dispatch } = useContext(GlobalContext)

  return (
    <Navbar  className="bg-dark sticky-top">
      <Container>
        <Link className='navbar-brand' to="#home"><img className="img-thumbnail" width={150} src="https://tse4.mm.bing.net/th?id=OIP.YMgL5O3ts2czCUCeoyZHbwAAAA&pid=Api&P=0&h=220" alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Link className='nav-link text-white ' to="/">Home</Link>
            <Link className='nav-link text-white ' to="/products">Products</Link>
            <Link className='nav-link text-white ' to="/brands">Brands</Link>
            <Link className='nav-link text-white ' to="/categories">Categories</Link>
            </Nav>
            <Nav className="ms-auto ">
            <Link className='ms-3 btn btn-info fw-bold' to='/cart'>Cart</Link>
            <Link className='ms-3 btn btn-info fw-bold' onClick={() => dispatch({ type: "USER_LOGOUT" })}>Logout</Link>
            
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;