import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import { Navbar, Nav, Container } from 'react-bootstrap'

import Contact from './Contact'
import RevealBtn from './RevealBtn'


const Navi = () => {
  const [modalShow, setModalShow] = useState(false)
  const [validated, setValidated] = useState(false);

  const handleModalShow = () => setModalShow(true)
  const handleModalClose = () => setModalShow(false)

  const handleFormSubmit = (e) => {
    console.log(e)
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <>
      <Navbar expand variant >
        <Container className="border-bottom">
          <RevealBtn />
          <Nav className="">
            <LinkContainer to="/" >
              <Nav.Link className="">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/wiki">
              <Nav.Link className="">Wiki</Nav.Link>
            </LinkContainer>
            <Nav.Link eventKey="contact" onClick={handleModalShow}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Contact show={modalShow} handleClose={handleModalClose} handleSubmit={handleFormSubmit} />
    </>
  )
}

export default Navi
