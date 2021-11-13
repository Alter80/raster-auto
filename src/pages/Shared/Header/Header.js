import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Nav, Navbar, Button, DropdownButton, ButtonGroup, NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {

    const { user, admin, isLoading, authError, registerUser, loginUser, logout } = useAuth()

    console.log(user.displayName);
    console.log(admin);

    const history = useHistory();


    const logOutButton = () => {
        logout();
        history.push('/login')

    }

    // const isAdmin = () => {
    //     if (admin === true) {
    //         return <Nav.Link><Link className='text-decoration-none text-muted' to="/dashboard">Dashboard</Link></Nav.Link>
    //     }
    //     else {
    //         return
    //     }
    // }

    return (
        <div className='mx-auto'>
            <Navbar bg="white" expand="lg" sticky="top" >
                <Container className='mx-auto my-2'><Link className='text-decoration-none text-muted' to="/home">
                    <Navbar.Brand to="/"> <img src='https://i.ibb.co/DbmsS5r/Raster-1.png' alt="" srcset="" height='50' width='auto' fluid /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll" className='d-md-flex justify-content-between'>
                        <Nav
                            className=" my-2 me-4 my-lg-0"
                            style={{ maxHeight: '300px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link className='text-decoration-none text-muted' to="/home">Home</Link></Nav.Link>

                            <Nav.Link><Link className='text-decoration-none text-muted' to="/allcars">All Cars</Link></Nav.Link>

                            <Nav.Link><Link className='text-decoration-none text-muted' to="/">Dealers</Link></Nav.Link>

                            <Nav.Link><Link className='text-decoration-none text-muted' to="/about">About Us</Link></Nav.Link>
                        </Nav>

                        <span className=''>

                            {user?.email ? <p></p> :
                                <Link to='/login'><Button variant='outline-dark'>Login</Button></Link>}

                        </span>
                        {user?.email &&
                            <div className='d-md-flex'>

                                <div>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                            <span>Welcome,</span> <FaUserCircle /> {user.displayName}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='text-center'>
                                            <Nav.Link><Link className='text-decoration-none text-muted' to="/dashboard">My Dashboard</Link></Nav.Link>
                                            <Nav.Link><Link className='text-decoration-none text-muted' to="/myorders">My Orders</Link></Nav.Link>
                                            <Dropdown.Item href="#/action-3"><Button variant='outline-dark' onClick={logOutButton}>Logout</Button></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;