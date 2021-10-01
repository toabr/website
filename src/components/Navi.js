import { useState } from 'react';
import { Container } from 'react-bootstrap';
import PageRevealBtn from './PageRevealBtn'
import ThemeSwitch from './ThemeSwitch';


const Navi = () => {
  const [modalShow, setModalShow] = useState(false)
  // const [validated, setValidated] = useState(false);

  const handleModalShow = () => setModalShow(true)
  const handleModalClose = () => setModalShow(false)

  const handleFormSubmit = (e) => {
    console.log(e)
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    // setValidated(true)
  }

  return (
    <Container fluid className="pt-2">
      <div className="d-flex justify-content-between align-items-center">
        <PageRevealBtn />
        <ThemeSwitch />
      </div>
      {/* <Navbar expand variant style={{ background: 'unset' }}>
        <Container fluid className="">
          <Col sm={11} md={10} lg={9} xl={8}>
            <Nav className="">
              <LinkContainer to="/" >
              <Nav.Link className="">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/wiki">
              <Nav.Link className="">Wiki</Nav.Link>
            </LinkContainer>
            <Nav.Link eventKey="contact" onClick={handleModalShow}>
              Contact
            </Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>
      <Contact show={modalShow} handleClose={handleModalClose} handleSubmit={handleFormSubmit} /> */}
    </Container>
  )
}

export default Navi
