import { useEffect, useRef, useState } from 'react'
import './reveal-btn.scss'

import { Button } from 'react-bootstrap'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const PageRevealBtn = () => {
  const [isOpen, _setIsOpen] = useState(false)
  const isOpenRef = useRef(isOpen)
  const btnRef = useRef(null)

  const iconRotation = useRef(210)

  useEffect(() => {
    const bodyClickhandler = (e) => {
      const isOpen = isOpenRef.current
      // console.log('isOpen', isOpen)
  
      if (!isOpen && e.composedPath().includes(btnRef.current)) {
        document.body.classList.add('open', 'overflow-hidden')
        setIsOpen(true)
        return
      }
  
      if (isOpen) {
        document.body.classList.remove('open', 'overflow-hidden')
        setIsOpen(false)
        return
      }
    }

    window.addEventListener('click', bodyClickhandler)
    return function cleanup() {
      window.removeEventListener('click', bodyClickhandler)
    }
  }, [])

  const setIsOpen = (val) => {
    isOpenRef.current = val
    _setIsOpen(val)
  }

  return (
    <Button id="reveal-btn" ref={btnRef} variant="link" className="fs-5 rounded-circle">
      <FontAwesomeIcon
        icon={faReply}
        style={{ transform: `rotate(${iconRotation.current}deg)`, transition: "all .1s linear .3s" }}
      />
    </Button>
  )
}

export default PageRevealBtn
