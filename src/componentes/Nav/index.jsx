import { } from "react";
import { NavLink } from 'react-router-dom'
import { BsFillBagFill, BsFillHouseFill, BsFillPersonFill } from "react-icons/bs";
import './Nav.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/logo.png'

const Navegacao = () => {

  return (
    <>
      <Navbar expand="md" className="navegacao">
        <Container className="gap-5 navegation" >
          <img className="logo-img" src={logo} alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto ">
              <Nav.Link>
                <NavLink className="link" to='/'>Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="link" to='QuemSomos'>Quem Somos</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="link" to='Cadastro'>Cadastro</NavLink>
              </Nav.Link>
              <NavDropdown title="Saude" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <NavLink className="link" to='Saude'>Saude</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <NavLink className="link" to='Prevencao'>Prevencao</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <NavLink className="link" to='MapaPoluicao'>Mapa de Poluicao</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <NavLink className="link" to='Login'>Login</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )

}

export default Navegacao