import React from 'react';
import './Header.css';
import {useHistory} from 'react-router-dom'
import { Button, Navbar, Container, Offcanvas, NavDropdown, Nav, FormControl, Form} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import useAuthContext from '../AuthContext/UseAuthContext';




const Header = () => {

  const {user, logOut} = useAuthContext();






  const history = useHistory();

  const logInBtn = ()=>{

    history.push('/login')

  }

  const singUp = ()=>{
    history.push('/register');

  }

  const logOutBtn = ()=>{
      logOut();
  }


    











    return (
        <div>

            <div className="desctop-header-container">

            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand><img className='logoimage' src="https://i.ibb.co/0QZBjzP/dailycourier-logo.png" alt="" width='90px'/> <span>DailyCourier</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to='/home'>Home</NavLink>
    
      {user?.email?<NavLink to="/upload-service">Add Service</NavLink>:null}

      {user?.email? <NavLink to='/manage-all-orders'>Manage Orders</NavLink>
      :null}

      {user?.email?<NavLink to="/your-orders">Your Orders</NavLink>:null}
     
    </Nav>
    <Nav>
      <div className="after-login">
        
      {!user?.email?<div className="loginbtn">
      <button onClick={logInBtn}>Login</button>
      </div>
    :null}
    {!user?.email?<div className="registerbtn">
      <button onClick={singUp}>Sing Up</button>
      </div>:null}

      {!user?.displayName? <div className='displayName'><p >{user.email}</p></div>:null}
  
    

      {user.displayName && user.email? <div className='displayName'><p >{user.displayName}</p></div>:null}
      {user?.email?<div className="registerbtn">
      <button onClick={logOutBtn}>Log Out</button>
      </div>:null}

      {user.photoURL ?<div className='user-photo'><img src={user.photoURL} alt="" /></div>:null}
      {user?.email && user.photoURL==null?<div className='default-user-photo'><img src='https://i.ibb.co/8NXwsrx/teacher-Image-Icon.png' alt="" /></div>:null}

      </div>
   


     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

            </div>

        </div>
    );
};

export default Header;