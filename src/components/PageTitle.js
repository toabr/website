import { Container, Spinner } from 'react-bootstrap'

const PageTitle = ({ head, description, isLoading }) => {
  return (
    <Container>
      <div className='text-center my-4'>
        <h1 className="pb-3">{head}</h1>
        <p className='lead text-capitalize'>{description}</p>
        {isLoading && <Spinner animation="grow" variant="highlight" size="sm" /> }
      </div>
    </Container>
  )
}

export default PageTitle
