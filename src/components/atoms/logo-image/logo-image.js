import React from "react";
import { Image } from "react-native";

export default function LogoImage() {
  return (
    <Image
      style={{
        width: "100%",
        height: "100%",
      }}
      source={require("../../../../assets/logo.png")}
    />
  );
}
