import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const pathName = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathName]);

  return null;
}
