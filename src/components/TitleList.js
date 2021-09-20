import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Badge, ListGroup } from "react-bootstrap"
import usePersistedState from '../hooks/usePersistedState';
import { addTagTitles, formatUTC } from '../js/helper';

import './title-list.scss'


/**
 * render fetched nodes in a list
 * @param {object} nodes - array of node objects
 * @returns 
 */
const TitleList = ({ nodes = [] }) => {

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
        <ListGroup.Item action="true" className="" >

          <div className="d-sm-flex justify-content-between flex-wrap align-items-center border-1 mt-1">
            <small className="date d-sm-block pe-2 fs-6">{formatUTC(node.changed[0].value)}</small>
            <div className="title flex-fill">
              {node.title[0].value}
            </div>

            <div className="">
              {tags.map(tag =>
                <Badge className="rounded ms-1" key={tag.target_id}>
                  #{tag.title}
                </Badge>
              )}
            </div>
          </div>



        </ListGroup.Item>
      </LinkContainer >
    )
  })

  return (
    <div className="title-list">
      <ListGroup variant="" className="text-start">

        {!nodes.length || Titles}

        {/* TODO: nedds to lift up */}
        {nodes.length > 5 &&
          <LinkContainer to="wiki">
            <ListGroup.Item active="false" action="true" className="text-center" >more...</ListGroup.Item>
          </LinkContainer>
        }

      </ListGroup>
    </div>
  )
}

export default TitleList