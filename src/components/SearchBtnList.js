import React from 'react';

// button icons
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faDocker, faDrupal, faJs, faLinux, faReact, faSass } from '@fortawesome/free-brands-svg-icons'

import TagBtn from './TagBtn';
import { LinkContainer } from 'react-router-bootstrap';


const SearchBtnList = ({ action, className }) => {
  const data = [
    { title: "linux", term: ["linux"], faIcon: faLinux },
    { title: "drupal", term: ["drupal"], faIcon: faDrupal },
    { title: "es6", term: ["javascript"], faIcon: faJs },
    { title: "scss", term: ["scss"], faIcon: faSass },
    { title: "react", term: ["react"], faIcon: faReact },
    { title: "bash", term: ["bash"], faIcon: faHashtag },
    { title: "docker", term: ["docker"], faIcon: faDocker },
  ]

  return (
    <div className={`d-flex flex-wrap gap-2 ${className}`}>

      {data.map((item, index) =>
        <TagBtn {...item} onClick={() => action(item.term[0])} variant="outline-primary" key={index} />
      )}
      <LinkContainer to="/wiki">
        {TagBtn({ title: "...", variant: "outline-secondary", as: "a", href: "wiki" })}
      </LinkContainer>

    </div>
  )
}

export default SearchBtnList
