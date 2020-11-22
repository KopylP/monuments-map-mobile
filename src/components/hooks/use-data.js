import useCancelablePromise from "@rodw95/use-cancelable-promise";
import { useEffect, useRef, useState } from "react";
import timeout from "../../helpers/timeout-promise";

export default function useData(
  getData,
  options = {
    delay: 0,
    params: [],
    defaultValue: null,
    numberOfAttempts: 0,
  },
  effectParams = []
) {
  const {
    delay = 0,
    params = [],
    defaultValue = null,
    numberOfAttempts = 0,
  } = options;

  const makeCancelable = useCancelablePromise();
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentAttempt = useRef(0);

  const handleSuccess = (data) => {
    makeCancelable(timeout(delay)).then(() => {
      setData(data);
      setLoading(false);
      setError(null);
    });
  };

  const handleError = (error) => {
    if (currentAttempt.current < numberOfAttempts) {
      currentAttempt.current = currentAttempt.current + 1;
      update();
    } else {
      setData(null);
      setError(error);
      setLoading(false);
    }
  };

  const enableLoading = () => {
    if (!loading) setLoading(true);
  };

  const checkEffectParamsOnNull = () => {
    return effectParams.filter((p) => p).length != 0;
  };

  const update = () => {
    console.log("update");
    if (effectParams.length > 0 && !checkEffectParamsOnNull()) return;
    enableLoading();
    makeCancelable(getData(...params))
      .then(handleSuccess)
      .catch(handleError);
  };

  useEffect(update, effectParams);

  return {
    data,
    loading,
    error,
  };
}
