import { Button, Card, Col, Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import { useFetch } from '../hooks/useFetch'
import { urlBuilder } from '../js/helper'

// TODO: build posts array in state
// TODO: add tags buttons...
// TODO: use MDX

const Post = (props) => {

  const url = urlBuilder({ id: props.match.params.nid })
  const { status, data, error } = useFetch(url)
  const node = data[0]

  const title = `Post ${props.match.params.nid}`
  let description = ''
  let isLoading = true

  if (status === 'error') {
    console.error(error)
  }

  if (status === 'fetched') {
    console.log('post', node)
    description = (!!data.length) ? node.title[0].value : 'nothing here'
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
                {node.field_tags.map((tag) => <Button variant="brand-primary">#{tag.target_id}</Button>)}
              </Card.Body>
              <Card.Body>
                <div dangerouslySetInnerHTML={{ __html: node.body[0].value }} />
              </Card.Body>
            </Card>

          </Col>
        </Container>
      }
    </>
  )
}

export default Post