import { Form, Col, Modal, Button } from "react-bootstrap"

const Contact = ({ show = false, handleClose, handleSubmit }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
        contentClassName="bg-body border-0">

        <Modal.Header>
          <Modal.Title>
            <h2 className="h1">Contact</h2>
          </Modal.Title>
          <Button variant="close" onClick={handleClose} />
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} className="row g-3 mb-5">
            <Col md={6} className="form-floating">
              <Form.Control type="text" className="" id="name" placeholder="Name" required />
              <Form.Label for="name">Name</Form.Label>
            </Col>

            <Col md={6} className="form-floating">
              <Form.Control type="email" className="" id="email" placeholder="name@example.com" required />
              <Form.Label for="email">Email address</Form.Label>
            </Col>

            <Col xs={12} className="form-floating">
              <Form.Control as="textarea" className="" placeholder="Leave a message here" id="message" style={{ height: "100px" }} required />
              <Form.Label for="message">Message</Form.Label>
            </Col>

            <Col className="d-flex justify-content-center">
              <Button type="submit" variant="primary" className="text-white px-5">Submit</Button>
            </Col>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  )
}

export default Contact