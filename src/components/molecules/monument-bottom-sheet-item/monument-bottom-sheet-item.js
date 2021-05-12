import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import FastImage from "react-native-fast-image";
import { getPhotoUrlById } from "../../../services/photo-service";
import { DefaultTheme } from "../../../theme/default-theme";
import CloseButton from "../../atoms/close-button";
import HandleIcon from "../../atoms/handle-icon";

function MonumentBottomSheetItem({
  monument,
  onOpenMonument = (monumentId) => monumentId,
  onClose,
}) {
  return (
    <View style={{ flex: 1 }}>
      <BlurView
        intensity={90}
        style={{
          flex: 1,
          borderRadius: 10,
          overflow: "hidden",
          paddingBottom: 15,
        }}
        tint="light"
      >
        <FastImage
          style={{ flex: 1 }}
          source={{ uri: getPhotoUrlById(monument.majorPhotoImageId, 500) }}
        />
        <Text
          style={{
            color: "black",
            padding: 15,
            fontSize: 22,
            fontWeight: "600",
          }}
        >
          {monument.name}
        </Text>
        <Button
          style={{
            marginHorizontal: 15,
            borderRadius: 12,
            overflow: "hidden",
          }}
          buttonStyle={{
            backgroundColor: DefaultTheme.palette.colors.primary.main,
          }}
          mode="contained"
          onPress={() => onOpenMonument(monument)}
          title="Відкрити"
        />
        <HandleIcon
          style={{
            position: "absolute",
            top: 8,
            alignSelf: "center",
          }}
        />
        <CloseButton
          style={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onClose={onClose}
        />
      </BlurView>
    </View>
  );
}

export default memo(MonumentBottomSheetItem);
