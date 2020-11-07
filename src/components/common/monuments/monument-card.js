import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Platform } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { getPhotoUrlById } from "../../../services/photo-service";
import { DefaultTheme } from "../../../theme/default-theme";
import TouchableScale from "../../template/buttons/touchable-scale";
import ContentSpinner from "../content-spinner/content-spinner";

export default function MonumentCard({
  monument,
  shareId,
  onPress = (p) => p,
}) {
  const [loading, setLoading] = useState(true);

  const [source, setSource] = useState(null);
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    if (monument) {
      setLoading(true);
      setKey(Math.random());
      setSource({
        uri: getPhotoUrlById(monument.majorPhotoImageId, 700),
      });
    }
  }, [monument]);

  const handleLoadingEnd = () => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <TouchableScale
      activeScale={0.9}
      tension={50}
      friction={7}
      useNativeDriver
      onPress={loading ? p => p : onPress}
      style={styles.container}
    >
      <View style={{ flex: 1, borderRadius: 10, overflow: "hidden" }}>
        <SharedElement id={`image-${shareId}`} style={styles.image}>
          <Image
            style={styles.image}
            key={key}
            source={source}
            onLoadEnd={handleLoadingEnd}
          />
        </SharedElement>
        <View style={styles.dataContainer}></View>
      </View>
      {loading && <ContentSpinner borderRadius={10}/>}
    </TouchableScale>
  );
}

const shadow = Platform.select({
  ios: {
    shadowColor: DefaultTheme.pallete.colors.primary.dark,
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
    zIndex: 999,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "#fdfdfd",
  },
  dataContainer: {
    backgroundColor: "#fdfdfd",
    width: "100%",
    height: 80,
  },
});
