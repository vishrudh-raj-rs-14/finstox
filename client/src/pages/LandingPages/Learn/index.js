import { setLayout } from "context";
import { useMaterialUIController } from "context";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Learn() {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();
  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);
  return <h1>Coming soon</h1>;
}

export default Learn;
