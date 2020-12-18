import React from "react";
import { Alert } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import LogoImage from "./logo-image";
import { useLocate } from "../../../../components/hooks/locate-hooks";
import * as Linking from 'expo-linking';
import { host } from "../../../../config";

export default function Logo() {
  const { t } = useLocate();

  const handleGoButtonPress = () => {
    Linking.openURL(host);
  }

  const handlePress = () => {
    Alert.alert(
      t("Do you want to learn more about the project?"),
      t("All information is available on our website"),
      [
        {
          text: t("Go"),
          onPress: handleGoButtonPress
        },
        {
          text: t("Cancel"),
        },
      ]
    );
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
