import React from "react";
import ContentLoader, { List, Rect } from "react-content-loader/native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { SCREEN_SIZE } from "../../../../helpers/dimensions-helpers";

export default function Loader({ imageHeight }) {
  return (
    <View style={StyleSheet.absoluteFill}>
      <ContentLoader
        width={SCREEN_SIZE}
        height={imageHeight}
        viewBox={`0 0 ${SCREEN_SIZE} ${imageHeight}`}
      >
        <Rect x="0" y="0" width={SCREEN_SIZE} height={imageHeight} />
      </ContentLoader>
      <List style={{ marginTop: 10 }} />
      <List style={{ marginTop: 10 }} />
      <List style={{ marginTop: 10 }} />
    </View>
  );
}
