// import { useState } from 'react';
import { Container } from 'react-bootstrap';
import RevealBtn from './RevealBtn'
import ThemeSwitch from './ThemeSwitch';


const Navi = () => {
  // const [modalShow, setModalShow] = useState(false)
  // const [validated, setValidated] = useState(false);

  // const handleModalShow = () => setModalShow(true)
  // const handleModalClose = () => setModalShow(false)

  // const handleFormSubmit = (e) => {
  //   console.log(e)
  //   const form = e.currentTarget;
  //   if (form.checkValidity() === false) {
  //     e.preventDefault()
  //     e.stopPropagation()
  //   }

  //   // setValidated(true)
  // }

  return (
    <Container fluid className="pt-2">
      {/* <Nav.Link eventKey="contact" onClick={handleModalShow}>
        Contact
        </Nav.Link>
      <Contact show={modalShow} handleClose={handleModalClose} handleSubmit={handleFormSubmit} /> */}
      
      <div className="d-flex justify-content-between align-items-center">
        <RevealBtn />
        <ThemeSwitch />
      </div>
    </Container>
  )
}

export default Navi
