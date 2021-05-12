import React, { memo, useEffect, useState } from "react";
import { StyleSheet, View, Platform, Text } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { DefaultTheme } from "../../../theme/default-theme";
import TouchableScale from "../../atoms/buttons/touchable-button/touchable-scale";
import { isIOS } from "../../../helpers/platform-helpers";
import { getPhotoUrlById } from "../../../services/photo-service";
import FastImage from "react-native-fast-image";

function MonumentCard({
  majorPhotoImageId,
  shareId,
  id,
  name,
  onPress = (p) => p,
  style = {},
}) {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    if (majorPhotoImageId != null) {
      setKey(Math.random());
    }
  }, [majorPhotoImageId]);

  const uri = getPhotoUrlById(majorPhotoImageId, 500);

  return (
    <TouchableScale
      activeScale={0.95}
      tension={50}
      friction={7}
      useNativeDriver
      onPress={(p) => onPress({ id, majorPhotoImageId, name })}
      style={{ ...styles.container, ...style }}
    >
      <SharedElement id={`image-${shareId}`} style={styles.image}>
        <FastImage
          style={styles.image}
          key={key}
          cacheKey={(id ? id : 0) + ""}
          source={{ uri }}
        />
      </SharedElement>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableScale>
  );
}

const shadow = Platform.select({
  ios: {
    shadowColor: DefaultTheme.palette.colors.secondary.main,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  android: {},
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    ...shadow,
  },
  image: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: DefaultTheme.palette.colors.screenBackground.main,
  },
  dataContainer: {
    backgroundColor: "white",
    width: "100%",
  },
  title: {
    padding: 20,
    fontSize: 22,
    fontWeight: isIOS ? "600" : "700",
    color: "black",
  },
});

export default memo(MonumentCard);
