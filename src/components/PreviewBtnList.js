import React from 'react';
import { Button } from 'react-bootstrap'

// button icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const PreviewBtnList = ({ arr, action }) => arr.map(item => {
  if (item.title === '...') {
    return <Button 
      variant="brand-secondary" 
      as="a" 
      href="wiki" 
      className="font-monospace py-2 flex-fill">{item.title}</Button>
  } else {
    return <Button 
      variant="brand-primary" 
      className="font-monospace py-2 flex-fill" 
      onClick={() => action(item.title)}>
      <FontAwesomeIcon icon={item.faIcon} className=""/> {item.title}</Button>
  }
})

export default PreviewBtnList
