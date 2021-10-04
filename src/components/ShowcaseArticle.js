import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useTagTitles from '../hooks/useTagTitles'


/**
 * teaser cards (on frontpage)
 * @param {string} variant - big format
 * @param {object} node - content data
 * @returns one card
 * TODO: not agile
 */
const Article = ({ variant, node }) => {

  // external || internal link
  const link = (!!node.field_resource?.length) ? node.field_resource[0].uri : `node/${node.nid[0].value}`

  // add titles to field_tags
  const field_tags = useTagTitles(node.field_tags).map((tag) => (
    <Link
      to={`/wiki?q=${tag.title.toLowerCase()}`}
      key={tag.target_id}
      className="ps-2 text-secondary text-decoration-none text-capitalize">
      <small>#{tag.title}</small>
    </Link>
  ))

  if (variant === 'teaser') {
    return (
      <LinkContainer to={link}>
        <Card as="article" bg="accent-1" className="border-0 shadow-slim shadow-drop">
          <Row className="row g-0">
            <Col md={8}>
              <a href={link} target="_blank" rel="nofollow">
                <Card.Img
                  style={{ width: '100%', height: '18rem', objectFit: 'cover' }}
                  src={node.field_image[2].url}
                />
              </a>
            </Col>
            <Col md={4}>
              <Card.Body className="d-flex h-100 flex-column justify-content-between mb-2">
                <div className="text-primary mb-2">
                  <small>development</small>
                </div>
                <Card.Title className="fw-bold">
                  <a href={link} className="text-body text-decoration-none">
                    {node.title[0].value}
                  </a>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {node.created[0].locale}
                </Card.Subtitle>
                <Card.Text className="font-serif text-accent-3">
                  <span dangerouslySetInnerHTML={{ __html: node.body[0].processed }} />
                </Card.Text>
                <div className="text-end">
                  {field_tags}
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
      <Card as="article" bg="accent-1" className="h-100 border-0 shadow-slim shadow-drop">
        <a href={link} target="_blank" rel="nofollow">
          <Card.Img
            variant="top"
            className="img-fluid"
            style={{ width: '100%', height: '18rem', objectFit: 'cover' }}
            src={node.field_image[0].url}
          />
        </a>
        <Card.Body className="py-1 pe-2">
          <div className="text-primary fw-bolder my-2">
            <small>development</small>
          </div>
          <Card.Title className="fw-bold">
            <a href={link} className="text-body text-decoration-none">
              {node.title[0].value}
            </a>
          </Card.Title>
          <Card.Subtitle as="small" className="mb-2 text-muted">
            updated {node.changed[0].locale}
          </Card.Subtitle>
          <Card.Text className="font-serif text-accent-3 py-1">
            Monitor and filter the logs of multiple remote Drupal installations from your localhost.
          </Card.Text>
          <div className="text-end">
            {field_tags}
          </div>
        </Card.Body>
      </Card >
    </LinkContainer>
  )
}

export default Article