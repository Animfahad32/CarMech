import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const  {user, logOut} = useAuth()
    return (
       
            <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand as={Link} to="/home">CarMech</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home" className="text-light">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services" className="text-light">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts" className="text-light">Experts</Nav.Link>
      <Nav.Link as={Link} to="/addService" className="text-light">Add Service</Nav.Link>
      <Nav.Link as={Link} to="/manageServices" className="text-light">Manage Service</Nav.Link>
      {
        user?.email ? 
        <Button onClick={logOut} variant="danger">Log out </Button> :
        <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link>
      }
     
     {user?.email &&
      <Navbar.Text className="mx-2">
      Signed in as: <a href="#login">{user?.displayName}</a>
   </Navbar.Text>
     } 
    

    
    </Navbar.Collapse>
    
    </Container>
  </Navbar>
 
</>
    
    );
};

export default Header;