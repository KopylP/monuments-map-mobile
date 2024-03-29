import React, { memo } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

function ShadowButton(props) {
  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}
    >
      <Button {...props} />
    </View>
  );
}

export default memo(ShadowButton);
