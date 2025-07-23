import React from 'react'
import './Mynavbar.css'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
export default function Mynavbar() {
    const expand="md"
  return (
    <div>
         <Navbar  expand={expand} className="bg-primary mb-3">
          <Container >
            <Navbar.Brand href="#" className='fw-bold'>بلاگ نکست وان کد</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavLink to="/" className='man'>صفحه اصلی</NavLink>
          <NavLink to="/about" className='man'>درباره ما</NavLink>
          <NavLink to="/addarticle" className='man'>ساخت مقاله</NavLink>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  )
}
