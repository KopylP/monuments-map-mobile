import useCancelablePromise from "@rodw95/use-cancelable-promise";
import { useEffect, useRef, useState } from "react";
import { InteractionManager } from "react-native";
import timeout from "../../helpers/timeout-promise";

export default function useData(
  getData,
  options = {
    delay: 0,
    params: [],
    defaultValue: null,
    numberOfAttempts: 0,
    useInteractionManagerDelay: true,
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
  const [loadingData, setLoadingData] = useState(false);

  const currentAttempt = useRef(0);

  const handleSuccess = (data) => {
    setData(data);
    makeCancelable(timeout(delay)).then(() => {
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
      setLoadingData(false);
    }
  };

  const enableLoading = () => {
    if (!loading) setLoading(true);
    if (error) setError(null);
  };

  const checkEffectParamsOnNull = () => {
    return effectParams.filter((p) => p).length != 0;
  };

  const update = () => {
    if (effectParams.length > 0 && !checkEffectParamsOnNull()) return;
    InteractionManager.runAfterInteractions(() => {
      enableLoading();
      makeCancelable(getData(...params))
        .then(handleSuccess)
        .catch(handleError);
    });
  };

  useEffect(update, effectParams);

  return {
    data,
    loading,
    error,
  };
}
