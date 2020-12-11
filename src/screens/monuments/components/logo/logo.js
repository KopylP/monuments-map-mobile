import React from "react";
import { Alert } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import LogoImage from "./logo-image";
// import * as StoreReview from 'expo-store-review';

export default function Logo() {
  const handlePress = () => {
    Alert.alert("Хочете більше дізнатися про проєкт?", "Вся інформація доступна на нашому сайті.", [
      {
        text: "Перейти",
      },
      {
        text: "Закрити"
      }
    ])
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <LogoImage />
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 15,
    top: 23,
    width: 35,
    height: 35,
    borderRadius: 25 / 2,
  },
});
