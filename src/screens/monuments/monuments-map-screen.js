import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppMap from "../../components/common/app-map/app-map";
import SelectedTabs from "../../components/common/selected-tabs/selected-tabs";
import { DefaultTheme } from "../../theme/default-theme";

export default function MonumentsMapScreen() {
  const [tab, setTab] = useState(0);

  return (
    <View style={StyleSheet.absoluteFill}>
      <AppMap></AppMap>
      {tab == 1 && (
        <View style={{...StyleSheet.absoluteFill, backgroundColor: "white"}}>
          <View style={{ width: "100%", height: 100, backgroundColor: DefaultTheme.pallete.colors.primary.main }}/>
          <Text>This is will be list</Text>
        </View>
      )}
      <SelectedTabs
        firstTabTitle="Map"
        secondTabTitle="List"
        style={{
          position: "fixed",
          top: 50,
          alignSelf: "center",
        }}
        onChangeTab={setTab}
      />
    </View>
  );
}
