import React from "react";
import { View, Image } from "react-native";
import { Dimensions } from "react-native";

const SCREEN_WIDTH = Math.round(Dimensions.get("window").width);

export default function AboutAppImage() {
  return (
    <View style={{ width: "100%",}}>
      <Image
        source={require("../../../assets/splash.png")}
        style={{
          alignSelf: "center",
          width: SCREEN_WIDTH - 20,
          height: SCREEN_WIDTH / 2,
        }}
        resizeMode="contain"
      />
    </View>
  );
}
