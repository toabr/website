import { Link } from 'react-router-dom'

import { Button, Card } from 'react-bootstrap'

import useTagTitles from '../hooks/useTagTitles'
// import { useThemeContext } from '../hooks/useThemeContext'
import { formatUTC } from '../js/helper'
import FaIcon from './FaIcon'


/**
 * teaser cards (on frontpage)
 * @param {object} node - content data
 * @returns a Card
 */
const Article = ({ node }) => {
  // console.log(node)

  // const { darkMode } = useThemeContext()
  // const btnVariant = (darkMode) ? "outline-" : ""

  // external || internal link
  const link = `/node/${node.nid[0].value}`
  const summary = node.body[0].summary ? node.body[0].summary : 'Summary is missing ...'

  // add titles to field_tags
  const field_tags = useTagTitles(node.field_tags).map((tag) => (
    <Link
      to={`/wiki?q=${tag.title.toLowerCase()}`}
      key={tag.target_id}
      className="pe-2 text-decoration-none text-capitalize">
      <FaIcon className="me-1" />{tag.title}
    </Link>
  ))

  const resource = node.field_resource ? (
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
  ) : null

  return (
    <Card as="article" bg="accent-1" className="border-0 shadow-slim hover-drop">
      <div className="card__image bg-primary bg-gradient p-3" >
        <Link to={link} className="h-100 d-flex justify-content-center align-items-center">
          {node.teaser &&
            <img
              // width="325" height="325" 
              loading="lazy"
              className="img-fluid shadow-slim"
              style={{maxHeight: '100%'}}
              alt={node.title[0].value}
              src={node.teaser ? process.env.API_URL + node.teaser['650x650'] : ''} />
          }
        </Link>
      </div>

      <div className="card__body px-3 pt-2" style={{ fontSize: '0.85rem' }}>
        <div className="d-flex justify-content-between position-relative">
          <div className="text-primary fw-bolder my-2">
            {field_tags}
          </div>
          <div className="resource-icon">
            {resource}
          </div>
        </div>
        <Card.Title className="fw-bold">
          <Link to={link} className="text-body text-decoration-none">
            {node.title[0].value}
          </Link>
        </Card.Title>
        <Card.Subtitle as="small" className="mb-2 text-muted">
          {formatUTC(node.created[0].value)}
        </Card.Subtitle>
        <Card.Text className="font-serif text-accent-3 py-1 mb-3">
          {summary}
        </Card.Text>
        <div className="text-end">

        </div>
      </div>
    </Card >
  )
}

export default Article