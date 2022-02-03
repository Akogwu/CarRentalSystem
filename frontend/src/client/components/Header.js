import React, {useRef, useState,useEffect} from 'react';
import Container from "@mui/material/Container";
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";
import {MdCarRental} from "react-icons/md";
import RegisterAndLoginDrawer from "./RegisterAndLoginDrawer";
import {FaCarAlt} from "react-icons/fa";
import {useSelector} from "react-redux";
import {AiOutlinePoweroff} from "react-icons/ai";

const Header = () => {
    const NavbarRef = useRef(null);
    const [open,setOpen] = useState(false);
    const [isLoggedOut,setIsLoggedOut] = useState(false);

    const {isAuth} = useSelector(state => state.login);

    const userId = localStorage.getItem('userId');
    const firstname = localStorage.getItem('firstName');

    useEffect(() => {
        if(isAuth){
            setOpen(false);
            setIsLoggedOut(false);
        }
    },[isAuth])

    const setOpenDrawer = () => {
      setOpen(true);
    }

    const setCloseDrawer = () => {
      setOpen(false);
    }

    const logout = () =>{
      localStorage.clear();
      setIsLoggedOut(true);
    }


    return (
        <HeaderContainer >
            <Navbar className="fixed-top sticky-top position-absolute navbar-0 position-relative" ref={NavbarRef}>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center gap-2">
                                    <MdCarRental style={{ fontSize:'2rem' }}/>
                                    <span>
                                        Smart Car<br/>Rentals
                                    </span>
                                </Navbar.Brand>
                            </Nav>
                            <Nav>
                                <Nav.Link icon={<FaCarAlt/>}>Our fleet</Nav.Link>
                                
                                { 
                                (userId && !isLoggedOut)?  <Nav.Link icon={<FaCarAlt/>} eventKey={2}>
                                {firstname} | <AiOutlinePoweroff title='logout' style={{ fontWeight:"bold"}} onClick={ ()=> logout() }/>
                            </Nav.Link>:
                                <Nav.Link icon={<FaCarAlt/>} eventKey={2} onClick={setOpen}>
                                Account
                                </Nav.Link>
                              }
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                <RegisterAndLoginDrawer NavbarRef={NavbarRef.current} openDrawer={setOpenDrawer} closeDrawer={setCloseDrawer} open={open}/>
                </Navbar>
        </HeaderContainer>
    );
};


const HeaderContainer = styled.div`
   .navbar-0{
     margin-top: 3rem;
     a.navbar-brand{
       color: #fff;
       font-size: 1rem;
       opacity: .8;
       text-transform: uppercase;
     }
     
     .navbar-nav a{
       color: #fff;
       opacity: .8;
       text-transform: uppercase;
       font-size: 70%;
       &:hover, &:focus, &:active{
         color: #f1f1f1;
       }
       
       &:before{
         content: ${props => props.icon};
       }
       
       &.active::before{
         content: ${props => props.icon};
       }
       
     }
   }
`;




export default Header;