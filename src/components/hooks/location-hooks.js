import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useUserLocation = (permissions) => {
  const [location, setLocation] = useState(null);

  const handleWatch = (location) => {
    setLocation(location);
  };

  useEffect(() => {
    if (permissions) {
      Location.watchPositionAsync(
        {
          timeInterval: 1000,
        },
        handleWatch
      ).then();
    }
  }, []);

  return {
    location,
  };
};
