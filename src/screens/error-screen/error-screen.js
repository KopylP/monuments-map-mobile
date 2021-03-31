import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useLocate } from "../../components/hooks/locate-hooks";
import BackButton from "../../components/atoms/buttons/back-button/back-button";
import { DefaultTheme } from "../../theme/default-theme";

export default function ErrorScreen({
  error = null,
  onRefresh = (p) => p,
  showClose = true,
}) {
  const { t } = useLocate();
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      {showClose && (
        <BackButton
          iconColor={DefaultTheme.palette.colors.primary.main}
          withBackButton={false}
          containerStyle={styles.backButtonContainerStyle}
          onPress={() => goBack()}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.errorText}>{t("Lost Internet connection")}</Text>
      </View>

      <TouchableOpacity onPress={onRefresh} style={styles.refreshOpacity}>
        <Text style={styles.refreshText}>{t("Refresh")}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonContainerStyle: {
    position: "absolute",
    left: 20,
    top: 20,
    zIndex: 2,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: DefaultTheme.palette.colors.primary.dark,
    textAlign: "center",
    fontSize: 16,
  },
  refreshOpacity: {
    backgroundColor: DefaultTheme.palette.colors.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginBottom: 30,
  },
  refreshText: {
    color: "white",
    fontSize: 16,
  },
});
