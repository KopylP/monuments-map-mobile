import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";

const withRouteParams = () => (Wrapper) => (props) => {
  const { params } = useRoute();
  return <Wrapper {...props} params={params}/>;
};

export default withRouteParams;
