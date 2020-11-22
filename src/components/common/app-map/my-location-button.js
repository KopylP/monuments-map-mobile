import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { DefaultTheme } from "../../../theme/default-theme";

export default function MyLocationButton({ onPress }) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        alignSelf: "center",
      }}
    >
      <Button
        onPress={onPress}
        buttonStyle={{
          backgroundColor: DefaultTheme.pallete.colors.primary.main,
          padding: 0,
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
        icon={{
          name: "md-locate",
          type: "ionicon",
          size: 20,
          color: "white",
        }}
      />
    </View>
  );
}
