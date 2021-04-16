import React from "react";
import { StyleSheet } from "react-native";
import { View, Image } from "react-native";
import { Dimensions } from "react-native";

const SCREEN_WIDTH = Math.round(Dimensions.get("window").width);

export default function AboutAppImage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/splash.png")}
        style={styles.imagePoltavaMonuments}
        resizeMode="contain"
      />
      <Image
        source={require("../../../assets/SavePoltava.png")}
        style={styles.imageSavePoltava}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  imagePoltavaMonuments: {
    width: SCREEN_WIDTH / 3 * 2 - 10,
    height: SCREEN_WIDTH / 2,
  },
  imageSavePoltava: {
    width: SCREEN_WIDTH / 3 - 10,
    height: SCREEN_WIDTH / 2,
  }
});
