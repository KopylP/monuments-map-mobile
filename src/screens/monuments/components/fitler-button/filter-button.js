import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { DefaultTheme } from "../../../../theme/default-theme";

function FilterButton() {
  return (
    <View
      style={{
        position: "absolute",
        top: 25,
        right: 15,
        alignSelf: "center",
      }}
    >
      <Button
        buttonStyle={{
          backgroundColor: DefaultTheme.pallete.colors.primary.main,
          padding: 5,
          borderRadius: 5,
        }}
        icon={{
          name: "ios-options",
          type: "ionicon",
          size: 20,
          color: "white",
        }}
      />
    </View>
  );
}

export default connect()(FilterButton);
