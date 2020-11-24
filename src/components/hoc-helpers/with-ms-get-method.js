import React, { useContext } from "react";
import AppContext from "../../context/app-context";

const withMsGetMethod = (getServiceMethod) => (Wrapper) => {
  return function (props) {
    const { monumentService } = useContext(AppContext);
    return <Wrapper getMethod={getServiceMethod(monumentService)} {...props} />;
  };
};
export default withMsGetMethod;
