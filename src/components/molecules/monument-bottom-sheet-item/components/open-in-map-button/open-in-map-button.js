import React, { memo } from "react";
import { Button } from "react-native-elements";
import openInMap from "../../../../../helpers/open-in-map";
import { DefaultTheme } from "../../../../../theme/default-theme";

function OpenInMapButton({
  style = {},
  latitude, longitude, name,
}) {

  function handlePress() {
    openInMap(latitude, longitude, name);
  };

  return (
    <Button
      icon={{
        name: "ios-navigate",
        type: "ionicon",
        size: 20,
        color: DefaultTheme.palette.colors.primary.main,
      }}
      buttonStyle={{
        ...style,
        borderColor: DefaultTheme.palette.colors.primary.main,
        borderRadius: 10,
        borderWidth: 1,
        overflow: "hidden"
      }}
      type="outline"
      onPress={handlePress}
    />
  );
}

export default memo(OpenInMapButton);
