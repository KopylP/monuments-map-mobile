import { useState, useEffect } from "react";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import timeout from "../../helpers/timeout-promise";

export default function useValueWithDelay(
  value,
  defaultValue = null,
  delay = 300
) {
  const makeCancelable = useCancelablePromise();
  const [mutableValue, setMutableValue] = useState(defaultValue);

  const handleSetValue = () => {
    makeCancelable(timeout(delay)).then(() => {
      setMutableValue(value);
    });
  };

  useEffect(() => {
    handleSetValue();
  }, []);

  return mutableValue;
}
