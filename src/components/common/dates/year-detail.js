import React from "react";
import { Text } from "react-native";
import { useLocateYear } from "../../hooks/locate-hooks";

export default function DetailYear({ year, period, style={} }) {

  const locatedYear = useLocateYear(year, period);

  return <Text style={style}>{locatedYear}</Text>;
}
