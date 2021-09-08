import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Row } from 'react-bootstrap'

import './article.scss'


const Article = ({ variant, node }) => {

  const link = `node/${node.nid[0].value}`

  const FieldTags = node.field_tags.map((tag) => {
    return (
      <a key={tag.target_id} className="ps-1 text-secondary text-decoration-none" href={`/tag/${tag.target_id}`}>
        <small>#{tag.target_id}</small>
      </a>
    )
  })

  if (variant === 'teaser') {
    return (
      <LinkContainer to={link}>
        <Card as="article" bg="" className="border-0 shadow">
          <Row className="row g-0">
            <Col md={8}>
              <Card.Img style={{ width: '100%', height: '18rem', objectFit: 'cover' }} src={node.field_image[2].url} />
            </Col>
            <Col md={4}>
              <Card.Body className="d-flex h-100 flex-column justify-content-between mb-2">
                <div className="text-primary mb-2"><small>development</small></div>
                <Card.Title>
                  <a href={link} className="text-body text-decoration-none">{node.title[0].value}</a>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {node.created[0].locale}
                </Card.Subtitle>
                <Card.Text>
                  <span dangerouslySetInnerHTML={{ __html: node.body[0].processed }} />
                </Card.Text>
                <div className="text-end">
                  {FieldTags}
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </LinkContainer>
    )
  }


  return (
    <LinkContainer to={link}>
      <Card as="article" bg="" className="h-100 border-0 shadow">
        <a href={link}>
          <Card.Img
            variant="top"
            className="img-fluid"
            src={node.field_image[0].url}
            style={{ width: '100%', height: '18rem', objectFit: 'cover' }}
          />
        </a>
        <Card.Body className="py-1 pe-2">
          <div className="text-primary mb-2"><small>development</small></div>
          <Card.Title className="mb-0">
            <a href={link} className="text-body text-decoration-none">{node.title[0].value}</a>
          </Card.Title>
          <Card.Subtitle as="small" className="mb-2 text-muted">
            updated {node.changed[0].locale}
          </Card.Subtitle>
          <Card.Text className="py-1">
            Monitor and filter the logs of multiple remote Drupal installations from your localhost.
          </Card.Text>
          <div className="text-end">
            {FieldTags}
          </div>
        </Card.Body>
      </Card >
    </LinkContainer>
  )
}

export default Article