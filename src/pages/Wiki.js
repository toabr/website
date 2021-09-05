import { useEffect, useState } from 'react'
import { Button, Col, Container, ListGroup, } from 'react-bootstrap'

import usePersistedState from '../hooks/usePersistedState'
import ApiService from '../js/ApiService'

import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'

// TODO: Layout!
// TODO: Searchbar


const Wiki = () => {
  const [tags, setTags] = usePersistedState('tagList', [])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if(!tags.length) {
      console.log('fetch tags')
      ApiService.getTags()
        .then(data => setTags(data))
    }
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