import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './hero.scss'


const Hero = () => {
  const heroRef = useRef(null)
  const [pos, setPos] = useState({})

  useEffect(() => {
    const win = { width: window.innerWidth, height: window.innerHeight }
    const mouseMoveHandler = (e) => {
      // console.log('move')
      setPos({
        xVal: -1 / (win.height / 2) * e.clientY + 1,
        yVal: 1 / (win.width / 2) * e.clientX - 1,
        transX: 16 / (win.width) * e.clientX - 8,
        transY: 10 / (win.height) * e.clientY - 3,
        transZ: 60 / (win.height) * e.clientY - 35
      })
    }

    const mouseMove = throttle(mouseMoveHandler, 300)

    window.addEventListener('mousemove', mouseMove)
    return function cleanup() {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  useLayoutEffect(() => {
    heroRef.current.style.transform = `
      perspective(1000px)
      translate3d(${pos.transX}px,${pos.transY}px,${pos.transZ}px)
      rotate3d(${pos.xVal},${pos.yVal},0,2deg)
      `
  }, [pos])

  // from http://www.sberry.me/articles/javascript-event-throttling-debouncing
  const throttle = (fn, delay) => {
    var allowSample = true;

    return (e) => {
      if (allowSample) {
        allowSample = false;
        setTimeout(function () { allowSample = true; }, delay);
        fn(e);
      }
    }
  }



  return (
    <div className="hero rounded-circle mx-auto mt-0">
      <div className="hero__back hero__back--static"></div>
      <div ref={heroRef} className="hero__back hero__back--mover" ></div>
    </div>
  )
}

export default Hero
