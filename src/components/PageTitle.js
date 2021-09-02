import { Container, Spinner } from 'react-bootstrap'

const PageTitle = ({ head, description, isLoading }) => {
  return (
    <Container>
      <div className='text-center mt-5'>
        <h1>{head}</h1>
        <p className='lead text-capitalize'>{description}</p>
        {isLoading && <Spinner animation="grow" variant="" size="sm" /> }
      </div>
    </Container>
  )
}

export default PageTitle
