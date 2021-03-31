import React from "react";
import { View } from "react-native";
import { Badge, Button } from "react-native-elements";
import { isIOS } from "../../../../helpers/platform-helpers";

export default function ButtonWithBadge({
  onPress,
  style = {},
  badgeCount,
  icon,
  buttonStyle
}) {
  return (
    <View
      style={{
        ...style,
        alignSelf: "center",
      }}
    >
      <Button
        onPress={onPress}
        buttonStyle={buttonStyle}
        icon={icon}
      />
      {badgeCount !== 0 && (
        <Badge
          status="error"
          value={badgeCount}
          badgeStyle={{
            borderWidth: 0,
          }}
          textStyle={
            isIOS
              ? {
                  marginLeft: 1,
                  marginTop: 1,
                }
              : {}
          }
          containerStyle={{ position: "absolute", top: -8, right: -8 }}
        />
      )}
    </View>
  );
}
