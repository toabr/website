import React, { useRef, useState } from 'react';

// button icons
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faDocker, faDrupal, faJs, faLinux, faReact, faSass } from '@fortawesome/free-brands-svg-icons'

import TagBtn from './TagBtn';


const SearchBtnList = ({action}) => {
  const tagBtnData = [
    { title: "linux", faIcon: faLinux, variant: "brand-primary" },
    { title: "drupal", faIcon: faDrupal, variant: "brand-primary" },
    { title: "es6", faIcon: faJs, variant: "brand-primary" },
    { title: "scss", faIcon: faSass, variant: "brand-primary" },
    { title: "react", faIcon: faReact, variant: "brand-primary" },
    { title: "bash", faIcon: faHashtag, variant: "brand-primary" },
    { title: "docker", faIcon: faDocker, variant: "brand-primary" },
  ]

  return (
    <div className="d-flex flex-wrap gap-2 mb-3">
      {tagBtnData.map(tag => TagBtn({ ...tag, onClick: () => action(tag.title) }))}
      {TagBtn({ title: "...", variant: "brand-secondary", as: "a", href: "wiki" })}
    </div>
  )
}

export default SearchBtnList
