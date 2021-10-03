import { useEffect } from "react";

function ScrollTo({ options = {} }) {
  useEffect(() => {
    window.scrollTo({
      top: options.top || 0,
      left: options.left || 0,
      behavior: options.behavior || 'smooth'
    });
  },[])
  return null
}

export default ScrollTo