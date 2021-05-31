import React, { useState } from "react";
import ErrorScreen from "../../screens/error-screen/error-screen";
import useData from "../hooks/use-data";

const withData =
  (bindRouteParamsToMethodParamList, options = {}) =>
  (Wrapper) =>
  (props) => {
    const { delay = 350, ErrorComponent = ErrorScreen } = options;
    const { getMethod, params } = props;
    const [refreshKey, setRefreshKey] = useState(-1);

    const methodParams = bindRouteParamsToMethodParamList(params, props);

    const handleRefresh = () => setRefreshKey(Math.random());

    const { loading, data, error, loadingData } = useData(
      getMethod,
      {
        params: methodParams,
        delay,
      },
      [refreshKey]
    );

    if (error) {
      return <ErrorComponent error={error} onRefresh={handleRefresh} />;
    }

    return (
      <Wrapper
        {...props}
        loading={loading}
        data={data}
        loadingData={loadingData}
      />
    );
  };

export default withData;
