import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Badge, ListGroup } from "react-bootstrap"


const TitleList = ({ nodes }) => {

  const Titles = nodes.map((node, index) => {
    return (
      <LinkContainer to={`node/${node.nid[0].value}`} key={index}>
        <ListGroup.Item action="true" className="" >
          {node.title[0].value}
          <span className="float-end">
            {node.field_tags.map(tag =>
              <Badge className="bg-secondary-light rounded ms-1" key={tag.target_id}>
                # {tag.target_id}
              </Badge>
            )}
          </span>
        </ListGroup.Item>
      </LinkContainer>
    )
  })

  return (
    <ListGroup variant="" className="text-start">

      {!!nodes.length && Titles}

      {/* TODO: nedds to lift up */}
      {nodes.length > 5 &&
        <LinkContainer to="wiki">
          <ListGroup.Item active="false" action="true" className="text-center" >more...</ListGroup.Item>
        </LinkContainer>
      }

    </ListGroup>
  )
}

export default TitleList