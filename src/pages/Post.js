import { Card, Col, Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import { useFetch } from '../hooks/useFetch'

// TODO: build posts array in state
// TODO: add tags buttons...
// TODO: use MDX

const Post = (props) => {

  const url = `${process.env.REACT_APP_API_URL}/api2/articles/${props.match.params.nid}`
  const { status, data, error } = useFetch(url)
  const post = data[0]
  
  const title = `Post ${props.match.params.nid}`
  let description = ''
  let isLoading = true

  if (status === 'error') {
    console.error(error)
  }
  
  if (status === 'fetched') {
    console.log('post', post)
    description = (!!data.length) ? post.title[0].value : 'nothing here'
    isLoading = false
  }


  return (
    <>
      <Meta title={title} />
      <PageTitle head={title} description={description} isLoading={isLoading} />

      {status === 'fetched' && !!data.length &&
        <Container>
          <Col md={8} className="mx-auto">
            <Card>
              <Card.Body>
                <div dangerouslySetInnerHTML={{ __html: post.body[0].value }} />
              </Card.Body>
            </Card>

          </Col>
        </Container>
      }
    </>
  )
}

export default Post