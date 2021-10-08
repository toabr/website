import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import SmallContainer from '../layout/SmallContainer'

const NotFound = () => {
  return (
      <SmallContainer className="my-5">
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
      </SmallContainer>
  )
}

export default NotFound
