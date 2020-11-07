import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import MonumentCard from "../../../../../../components/common/monuments/monument-card";

export default function MonumentListItem({ monument }) {
  const navigation = useNavigation();
  const shareId = `item-${monument.id}`;

  return (
    <View
      style={{
        width: "100%",
        height: 220,
      }}
    >
      <MonumentCard
        monument={monument}
        shareId={shareId}
        onPress={() =>
          navigation.navigate("Detail", {
            monument,
            shareId,
          })
        }
      />
    </View>
  );
}