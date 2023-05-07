import React from 'react'

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <header>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/009/170/419/original/a-unique-design-icon-of-employee-management-vector.jpg"
              width="60"
              height="60"
              className="d-inline-block me-3"
            />{' '}
            Employee Management App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
