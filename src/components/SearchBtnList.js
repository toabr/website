import React from 'react';

// button icons
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faDocker, faDrupal, faJs, faLinux, faReact, faSass } from '@fortawesome/free-brands-svg-icons'

import TagBtn from './TagBtn';


const SearchBtnList = ({ action, className }) => {
  const data = [
    { title: "linux", faIcon: faLinux, variant: "brand-primary" },
    { title: "drupal", faIcon: faDrupal, variant: "brand-primary" },
    { title: "es6", faIcon: faJs, variant: "brand-primary" },
    { title: "scss", faIcon: faSass, variant: "brand-primary" },
    { title: "react", faIcon: faReact, variant: "brand-primary" },
    { title: "bash", faIcon: faHashtag, variant: "brand-primary" },
    { title: "docker", faIcon: faDocker, variant: "brand-primary" },
  ]

  return (
    <div className={`d-flex flex-wrap gap-2 ${className}`}>

      {data.map((item, index) =>
        <TagBtn {...item} onClick={() => action(item.title)} key={index} />
      )}

      {TagBtn({ title: "...", variant: "brand-secondary", as: "a", href: "wiki" })}

    </div>
  )
}

export default SearchBtnList
