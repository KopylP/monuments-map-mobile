import React, { useEffect } from "react";
import ErrorScreen from "../../screens/error-screen/error-screen";

const withReduxData =
  (
    bindPropsToActions = (p) => ({
      fetchAction: p.fetchAction,
      requestAction: p.requestAction,
    }),
    bindPropsToParams = (p) => [],
    settings = {}
  ) =>
  (Wrapper) =>
  (props) => {
    const { requestFetch, error } = props;

    const { goBackEnabled = true } = settings;

    const { fetchAction, requestAction } = bindPropsToActions(props);
    const fetchParams = bindPropsToParams(props);

    const update = () => fetchAction(...fetchParams);

    useEffect(() => {
      if (requestFetch) update();
    }, [requestFetch]);

    if (error) {
      return (
        <ErrorScreen
          error={error}
          onRefresh={requestAction}
          showClose={!goBackEnabled}
        />
      );
    }

    return <Wrapper {...props} />;
  };

export default withReduxData;
