import { useEffect, useState } from 'react'
import { Button, Col, Container, ListGroup, } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import ApiService from '../js/ApiService'

const Wiki = () => {
  const [tags, setTags] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    ApiService.getTags()
      .then(data => {
        console.log(data)
        setTags(data)
      })
  }, [])

  useEffect(() => {
    ApiService.getArticles()
      .then(data => {
        console.log(data)
        setPosts(data)
      })
  }, [])

  // page content
  const pageTitle = 'Wiki'
  const pageDescription = 'welcome to react bootstrap template'

  const Tags = tags.map(tag => {
    return (
      <Button variant="brand-primary" size="sm" className="flex-fill" >
        {tag.title}
      </Button>
    )
  })

  const Posts = posts.map(post => {
    return (
      <ListGroup.Item as="a" action="true" href={`post/${post.nid[0].value}`}>
        {post.title[0].value}
      </ListGroup.Item>
    )
  })

  return (
    <div>
      <Meta title={pageTitle} />
      <PageTitle head={pageTitle} description={pageDescription} />

      <Container>
        <Col md={8} className="mx-auto">
          <div className="d-flex flex-wrap gap-2 mb-5">
            {Tags}
          </div>

          <h2 className="text-center">Recent</h2>
          <ListGroup>
            {Posts}
          </ListGroup>
        </Col>
      </Container>

    </div>
  )
}

export default Wiki