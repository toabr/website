import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ smooth }) {
  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'instant'
    });

  }, [pathname]);

  return null;
}