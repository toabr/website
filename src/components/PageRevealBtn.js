import { useEffect, useRef, useState } from 'react'
import './reveal-btn.scss'

import { Button } from 'react-bootstrap'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/**
 * triggers attribute toggle on body
 * to show hidden about page
 */
const PageRevealBtn = () => {
  const [isOpen, _setIsOpen] = useState(false)
  const isOpenRef = useRef(isOpen)
  const btnRef = useRef(null)

  useEffect(() => {
    const bodyClickhandler = (e) => {
      const isOpen = isOpenRef.current
      // console.log('isOpen', isOpen)
  
      if (!isOpen && e.composedPath().includes(btnRef.current)) {
        document.body.toggleAttribute('open')
        setIsOpen(true)
        return
      }
  
      if (isOpen) {
        document.body.toggleAttribute('open')
        setIsOpen(false)
        return
      }
    }

    window.addEventListener('click', bodyClickhandler)

    return function cleanup() {
      window.removeEventListener('click', bodyClickhandler)
    }
  }, [])

  /**
   * mirror current state for inside useEffect
   * @param {boolean} val - open status
   */
  const setIsOpen = (val) => {
    isOpenRef.current = val
    _setIsOpen(val)
  }

  
  return (
    <Button id="reveal-btn" ref={btnRef} variant="link" className="fs-5 rounded-circle">
      <FontAwesomeIcon
        icon={faReply}
        style={{ transform: `rotate(210deg)`, transition: "all .1s linear .3s" }}
      />
    </Button>
  )
}

export default PageRevealBtn
