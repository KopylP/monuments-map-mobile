import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { DefaultTheme } from "../../../theme/default-theme";

export default function MyLocationButton({ onPress, bottomInset = 0 }) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 30 + bottomInset,
        right: 20,
        alignSelf: "center",
      }}
    >
      <Button
        onPress={onPress}
        buttonStyle={{
          backgroundColor: DefaultTheme.palette.colors.primary.main,
          padding: 0,
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
        icon={{
          name: "md-locate",
          type: "ionicon",
          size: 25,
          color: "white",
        }}
      />
    </View>
  );
}
