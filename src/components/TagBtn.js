import React from 'react';
import { Button } from 'react-bootstrap'

// button icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TagBtn = ({ title, variant, faIcon, onClick, as, href, className }) => {
  return (
    <Button
      as={as}
      href={href}
      variant={variant}
      className="font-monospace py-2 flex-fill"
      onClick={onClick}>
      {faIcon && <FontAwesomeIcon icon={faIcon} className="me-2" />}
      <span className="">{title}</span>
    </Button>
  )
}

export default TagBtn
