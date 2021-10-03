import { Container, Spinner } from 'react-bootstrap'

const PageTitle = ({ head, description, isLoading }) => {
  return (
    <Container>
      <div className='text-center my-3'>
        <h1 className="">{head}</h1>
        {description && <p className='lead text-capitalize'>{description}</p>}
        {isLoading && <Spinner animation="grow" variant="highlight" size="sm" /> }
      </div>
    </Container>
  )
}

export default PageTitle
