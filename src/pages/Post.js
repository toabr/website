import { useEffect, useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'

import { Card, Col, Container, Spinner } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Meta from '../components/Meta'
import ApiService from '../js/ApiService'

const Post = (props) => {
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [available, setAvailable] = useState(true)
  const [pageTitle, setPageTitle] = useState(`Post ${props.match.params.nid}`)
  const [pageDescription, setPageDescription] = useState('Loading ...')
  const nid = useRef(props.match.params.nid)

  useEffect(() => {
    const setData = (post) => {
      console.log(post)
      if (post.length) {
        setIsLoading(false)
        setPost(post)
        setPageTitle(`Post ${nid.current}`)
        setPageDescription(post[0].title[0].value)
      } else {
        setIsLoading(false)
        setPageTitle(prev => `${prev} not available`)
        setPageDescription('redirecting ...')
        // time delay ...
        setTimeout(() => { setAvailable(false) }, 3000);
      }
    }

    const getArticle = () => {
      return ApiService.getArticles({ ids: [nid.current] })
    }

    getArticle()
      .then(post => setData(post))

  }, [])

  // redirect when post not available
  if (!available) {
    return <Redirect to='/home' />
  }

  return (
    <div>
      <Meta title={pageTitle} />
      <PageTitle head={pageTitle} description={pageDescription} isLoading={isLoading} />

      {(post.length > 0) &&
        <Container>
          <Col md={8} className="mx-auto">
            <Card>
              <Card.Body><div dangerouslySetInnerHTML={{ __html: post[0].body[0].value }} /></Card.Body>
            </Card>

          </Col>
        </Container>
      }

    </div>
  )
}

export default Post