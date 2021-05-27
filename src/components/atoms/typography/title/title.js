import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { isIOS } from "../../../../helpers/platform-helpers";

function Title({ title, style = {} }) {
  return (
    <Text style={[styles.title, style]} selectable>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: "black",
    fontWeight: "700",
  },
});

export default memo(Title);
