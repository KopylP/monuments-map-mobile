import React, { memo, useContext, useEffect, useState } from "react";
import { StyleSheet, View, Image, Platform, Text } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { DefaultTheme } from "../../../theme/default-theme";
import TouchableScale from "../../atoms/buttons/touchable-button/touchable-scale";
import ContentSpinner from "../../atoms/content-spinner/content-spinner";
import AppContext from "../../../context/app-context";
import useData from "../../hooks/use-data";
import { isIOS } from "../../../helpers/platform-helpers";
import CachedImage from "../../atoms/cached-image";
import { getPhotoUrlById } from "../../../services/photo-service";

function MonumentCard({
  monument,
  shareId,
  onPress = (p) => p,
}) {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    if (monument != null) {
      setKey(Math.random());
    }
  }, [monument]);

  const uri = getPhotoUrlById(monument && monument.majorPhotoImageId, 500);

  return (
    <TouchableScale
      activeScale={0.95}
      tension={50}
      friction={7}
      useNativeDriver
      onPress={
        (p) => onPress(monument)
      }
      style={styles.container}
    >
      <View style={{ flex: 1, borderRadius: 10, overflow: "hidden" }}>
        <SharedElement id={`image-${shareId}`} style={styles.image}>
          <CachedImage
            style={styles.image}
            key={key}
            cacheKey={(monument ? monument.id: 0) + ""}
            source={{ uri }}
          />
        </SharedElement>
        <View style={styles.dataContainer}>
          <Text style={styles.title}>{monument && monument.name}</Text>
        </View>
      </View>
      {/* {loading && <ContentSpinner borderRadius={10} />} */}
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
    flex: 1,
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
    fontWeight: isIOS ? "600": "700",
  },
});

export default memo(MonumentCard);
