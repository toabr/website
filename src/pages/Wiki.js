import { useEffect, useState } from 'react'
import { Button, Col, Container, ListGroup, } from 'react-bootstrap'

import usePersistedState from '../hooks/usePersistedState'
import { useFetch } from '../hooks/useFetch'
import ApiService from '../js/ApiService'

import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'

// TODO: Layout!
// TODO: Searchbar


const Wiki = () => {
  const [tagList, setTags] = usePersistedState('tagList', [])
  const [posts, setPosts] = useState([])

  const url = !tagList.length && `${process.env.REACT_APP_API_URL}/api/term`
  const { status, data, error } = useFetch(url)

  // use local storage or fetch it
  const tags = (!!tagList.length) ? tagList : data

  useEffect(() => {
    !tagList.length && ApiService.getArticles()
      .then(data => setPosts(data))
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
      <ListGroup.Item as="a" action="true" href={`node/${post.nid[0].value}`}>
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