import React from "react";
import { useUserLocation } from "../../hooks/location-hooks";

const withLocation = () => (Wrapper) => {
  return (props) => {
    const { location } = useUserLocation();
    return <Wrapper {...props} ref={props.ref} location={location} />;
  };
};

export default withLocation;
