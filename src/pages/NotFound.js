import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const NotFound = () => {
  return (
      <div className="container-small my-5">
        <Card className='bg-accent-1'>
          <Card.Header className='bg-body'>404</Card.Header>
          <Card.Body className=''>
            <Card.Title className=''>Page not found</Card.Title>
            <Card.Text className=''>
              <p>Error code 404</p>
              <code>Please dont contact the admin</code>
            </Card.Text>
            <Link to='/'>
              <Button className=''>Home Page</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
  )
}

export default NotFound
