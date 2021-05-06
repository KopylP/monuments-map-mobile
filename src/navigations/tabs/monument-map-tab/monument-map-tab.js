import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import MonumentMapStack from "../../stacks/monument-map-stack";

function MonumentMapTab() {
  return <MonumentMapStack />;
}

export default memo(MonumentMapTab);

export const mapTabOptions = {
  tabBarIcon: ({ color, size }) => (
    <Icon name="landmark" type="font-awesome-5" size={size} color={color} />
  ),
};
