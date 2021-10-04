import { LinkContainer } from 'react-router-bootstrap'
import { ListGroup } from "react-bootstrap"

import usePersistedState from '../hooks/usePersistedState';
import { addTagTitles, formatUTC } from '../js/helper';
import './title-list.scss'


/**
 * render fetched nodes in a list
 * @param {object} nodes - array of node objects
 * @returns 
 */
const TitleList = ({ nodes = [], children }) => {

  /**
   * look into the localstore for "tagList"
   * it works but ...
   * FIXME: probably needs useContext
   */
  const [tagList] = usePersistedState('tagList', [])


  /**
   * 
   */
  const Titles = nodes.map((node, index) => {
    const tags = addTagTitles(node.field_tags, tagList)

    return (
      <LinkContainer to={`node/${node.nid[0].value}`} key={index}>
        <ListGroup.Item action="true" className="text-body bg-body fw-bolder shadow pe-2" >

          <div className="d-sm-flex justify-content-between flex-wrap
            align-items-center border-1 mt-1">
            <small className="date d-sm-block pe-2 text-muted fw-light">
              {formatUTC(node.changed[0].value)}
            </small>
            <div className="title flex-fill">
              {node.title[0].value}
            </div>

            <div className="">
              {tags.map(tag =>
                <small
                  style={{ fontSize: '.75rem' }}
                  className="bg-accent-2 fw-lighter ms-1 p-1 rounded-pill text-highlight"
                  key={tag.target_id}
                >
                  #{tag.title}
                </small>
              )}
            </div>
          </div>

        </ListGroup.Item>
      </LinkContainer >
    )
  })

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