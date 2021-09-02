import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import { Badge, Button, ListGroup } from "react-bootstrap"


const TitleList = (articles) => {

  const stripTags = string => {
    return string.split(', ').map(tag => {
      return {
        tid: tag.split(':')[0],
        title: tag.split(':')[1],
      }
    });
  }

  const Titles = articles.map(item => {

    const tags = stripTags(item.tags).map((tag) => {
      return <Badge className="bg-secondary-light rounded ms-1">{tag.title}</Badge>
    })

    return (
      <LinkContainer to={`post/${item.nid}`}>
        <ListGroup.Item
          action="true"
          className="d-flex flex-wrap justify-content-between" >
          {item.title}
          <span className="text-right">{tags}</span>
        </ListGroup.Item>
      </LinkContainer>
    )
  })

  return (
    <ListGroup variant="" className="text-start mb-5">
      {Titles}
    </ListGroup>
  )
}

export default TitleList