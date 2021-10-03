import { useEffect } from "react";

function ScrollOnMount({ top, smooth, options = {} }) {
  useEffect(() => {
    window.scrollBy({
      top: top ? -window.scrollY : options.top,
      left: options.left || 0,
      behavior: smooth ? 'smooth' : options.behavior || 'instant'
    });
  },[])
  return null
}

export default ScrollOnMount