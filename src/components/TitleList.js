import { LinkContainer } from 'react-router-bootstrap'
import { ListGroup } from "react-bootstrap"

import { formatUTC } from '../js/helper';
import './title-list.scss'
import useTagTitles from '../hooks/useTagTitles';


const TitleListItem = ({ node }) => {
  // is using context :)
  const field_tags = useTagTitles(node.field_tags)
  return (
    <LinkContainer to={`node/${node.nid[0].value}`}>
      <ListGroup.Item action className="text-body bg-body fw-bolder shadow pe-2" >

        <div className="d-sm-flex justify-content-between flex-wrap
            align-items-center mt-1">
          <small className="date d-sm-block pe-2 text-muted fw-light">
            {formatUTC(node.changed[0].value)}
          </small>
          <div className="title flex-fill">
            {node.title[0].value}
          </div>

          <div className="tags text-highlight">
            {field_tags.map(tag =>
              <small
                style={{ fontSize: '.75rem' }}
                className="tag bg-accent-2 fw-lighter ms-1 p-1 rounded-pill"
                key={tag.target_id} >
                #{tag.title}
              </small>
            )}
          </div>
        </div>

      </ListGroup.Item>
    </LinkContainer >
  )
}

/**
 * render fetched nodes in a list
 * @param {object} nodes - array of node objects
 * @returns 
 */
const TitleList = ({ nodes = [], children }) => {
  const Titles = nodes ? nodes.map(node => <TitleListItem node={node} key={node.nid[0].value} />) : []
  return (
    <div className="title-list">
      <ListGroup variant="flush" className="text-start">
        {Titles}
        {children}
      </ListGroup>
    </div>
  )
}

export default TitleList