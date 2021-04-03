import React, { memo } from "react";
import { Text } from "react-native";
import { useLocateYear } from "../../hooks/locate-hooks";

function DetailYear({ year, period, style={} }) {

  const locatedYear = useLocateYear(year, period);

  return <Text style={style}>{locatedYear}</Text>;
}

export default memo(DetailYear);
