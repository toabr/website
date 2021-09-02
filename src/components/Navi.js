import { useState } from 'react';
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
            <Nav.Link href="/home#home" className="">Home</Nav.Link>
            <Nav.Link href="/home#blog" className="">blog</Nav.Link>
            <Nav.Link eventKey="contact" onClick={handleModalShow}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Contact show={modalShow} handleClose={handleModalClose} handleSubmit={handleFormSubmit} />
    </>
  )
}

export default Navi
