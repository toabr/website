import { Link } from 'react-router-dom'

import { Button, Card, Col, Row } from 'react-bootstrap'

import useTagTitles from '../hooks/useTagTitles'
import { useThemeContext } from '../hooks/useThemeContext'
import { formatUTC } from '../js/helper'
import FaIcon from './FaIcon'


/**
 * teaser cards (on frontpage)
 * @param {string} variant - big format
 * @param {object} node - content data
 * @returns one card
 * TODO: not agile
 */
const Article = ({ variant, node }) => {

  const { darkMode } = useThemeContext()
  const btnVariant = (darkMode) ? "outline-" : ""

  // external || internal link
  const link = `/node/${node.nid[0].value}`
  const summary = node.body[0].summary ? node.body[0].summary :
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'

  // add titles to field_tags
  const field_tags = useTagTitles(node.field_tags).map((tag) => (
    <Link
      to={`/wiki?q=${tag.title.toLowerCase()}`}
      key={tag.target_id}
      className="pe-2 text-decoration-none text-capitalize">
      <FaIcon className="me-1" />{tag.title}
    </Link>
  ))

  const resource = (
    <Button
      href={node.field_resource[0]?.uri}
      target="_blank"
      rel="noreferrer"
      className="rounded-circle"
      variant={'highlight'}
      title={node.field_resource[0]?.title}
      alt={node.field_resource[0]?.title}
      size="">
      <FaIcon name={node.field_resource[0]?.title} className="" />
    </Button>
  )


  if (variant === 'teaser') {
    return (
      <Card as="article" bg="accent-1" className="border-0 shadow-slim shadow-drop">
        <Row className="row g-0">
          <Col md={8}>
            <Link to={link}>
              <Card.Img
                style={{ width: '100%', height: '21rem', objectFit: 'cover' }}
                src={node.field_image[0].url}
              />
            </Link>
          </Col>
          <Col md={4}>
            <Card.Body className="" style={{ fontSize: '0.85rem' }}>
              <div className="text-primary mb-2">
                {field_tags}
              </div>
              <Card.Title className="fw-bold">
                <Link to={link} className="text-body text-decoration-none">
                  {node.title[0].value}
                </Link>
              </Card.Title>
              <Card.Subtitle as="small" className="mb-2 text-muted">
                {formatUTC(node.changed[0].value)}
              </Card.Subtitle>
              <Card.Text className="font-serif text-accent-3 m-0">
                {summary}
              </Card.Text>
              <div className="text-end">
                {node.field_resource[0] && resource}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>

    )
  }


  return (
    <Card as="article" bg="accent-1" className="h-100 border-0 shadow-slim shadow-drop">
      <Link to={link} className="d-flex justify-content-center bg-primary bg-gradient p-3" style={{ height: '15rem' }}>
        <Card.Img
          variant="top"
          className="align-self-center img-fluid shadow-slim"
          style={{ width: 'auto', maxHeight: '100%', objectFit: 'contain' }}
          src={node.field_image[0].url} />
      </Link>
      <Card.Body className="pt-1" style={{ fontSize: '0.85rem' }}>
        <div className="d-flex justify-content-between position-relative">
          <div className="text-primary fw-bolder my-2">
            {field_tags}
          </div>
          <div className="position-absolute" style={{ top: '-23px', right: '-8px' }} >
            {node.field_resource[0] && resource}
          </div>
        </div>
        <Card.Title className="fw-bold">
          <Link to={link} className="text-body text-decoration-none">
            {node.title[0].value}
          </Link>
        </Card.Title>
        <Card.Subtitle as="small" className="mb-2 text-muted">
          {formatUTC(node.changed[0].value)}
        </Card.Subtitle>
        <Card.Text className="font-serif text-accent-3 py-1 m-0">
          {summary}
        </Card.Text>
        <div className="text-end">

        </div>
      </Card.Body>
    </Card >
  )
}

export default Article