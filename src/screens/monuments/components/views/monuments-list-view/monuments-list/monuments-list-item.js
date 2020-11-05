import React from "react";
import { View } from "react-native";
import MonumentCard from "../../../../../../components/common/monuments/monument-card";

export default function MonumentListItem({ monument }) {
  return (
    <View style={{
        width: "100%",
        height: 250,
    }}>
      <MonumentCard monument={monument} />
    </View>
  );
}
