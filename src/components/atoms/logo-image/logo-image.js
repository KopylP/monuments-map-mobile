import React, { memo } from "react";
import { Image } from "react-native";

function LogoImage() {
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

export default memo(LogoImage);
