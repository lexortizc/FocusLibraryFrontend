import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" className='mt-5'>
            <Container>
                <Navbar.Brand href="#home" className="w-100 text-center">Lex Ortiz | Focus 2022</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;