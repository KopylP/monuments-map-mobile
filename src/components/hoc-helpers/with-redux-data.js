import React, { useEffect } from "react";
import ErrorScreen from "../common/screens/error-screen/error-screen";

const withReduxData = (bindPropsToActions = p => ({
    fetchAction: p.fetchAction,
    requestAction: p.requestAction,
}), bindPropsToParams = (p) => []) => (
  Wrapper
) => (props) => {
  const { requestFetch, error } = props;

  const { fetchAction, requestAction } = bindPropsToActions(props);
  const fetchParams = bindPropsToParams(props);

  const update = () => fetchAction(...fetchParams);

  useEffect(() => {
    if (requestFetch) update();
  }, [requestFetch]);

  if (error) {
    return <ErrorScreen error={error} onRefresh={requestAction} />;
  }

  return <Wrapper {...props} />;
};

export default withReduxData;
