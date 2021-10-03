import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container fluid='md' className='mt-5'>
      <Row>
        <Col>
          <Card className='bg-accent-1'>
            <Card.Header className='bg-body'>404</Card.Header>
            <Card.Body className=''>
              <Card.Title className=''>Page not found</Card.Title>
              <Card.Text className=''>
                <p>Error code 404</p>
                <code>dont contact the admin</code>
              </Card.Text>
              <Link to='/'>
                <Button className=''>Home Page</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
