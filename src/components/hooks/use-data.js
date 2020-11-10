import useCancelablePromise from "@rodw95/use-cancelable-promise";
import { useEffect, useState } from "react";
import timeout from "../../helpers/timeout-promise";

export default function useData(
  getData,
  options = {
    delay: 0,
    params: [],
  },
  recall = {}
) {
  const makeCancelable = useCancelablePromise();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { delay, params } = options;

  useEffect(() => {
    makeCancelable(getData(...params))
      .then((data) => {
        makeCancelable(timeout(delay)).then(() => {
          setData(data);
          setLoading(false);
          setError(null);
        });
      })
      .catch((error) => {
        setData(null);
        setError(error);
        setLoading(false);
      });
  }, [recall]);

  return {
    data,
    loading,
    error,
  };
}
