import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RedirectOnRefresh() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialCheckDone = useRef(false);

  useEffect(() => {
    if (!initialCheckDone.current) {
      initialCheckDone.current = true;

      if (location.pathname !== "/") {
        navigate("/");
      }
    }
  }, []);
  return null;
}

export default RedirectOnRefresh;
