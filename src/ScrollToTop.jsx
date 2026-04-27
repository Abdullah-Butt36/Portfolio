import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the very top of the window on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant to ensure it's at the top before animation starts
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
