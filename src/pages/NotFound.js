import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NotFound = () => {
  return (
    <Container fluid='md' className='mt-5'>
      <Row>
        <Col>
          <Card className=''>
            <Card.Header className=''>404</Card.Header>
            <Card.Body className=''>
              <Card.Title className=''>Custom Error Page</Card.Title>
              <Card.Text className=''>
                Edit Custom 404 error page <code>src/pages/NotFound.js</code>
              </Card.Text>
              <LinkContainer to='/home'>
                <Button className=''>Home Page</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
