import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Image, Platform, Text } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { DefaultTheme } from "../../../theme/default-theme";
import TouchableScale from "../../template/buttons/touchable-scale";
import ContentSpinner from "../content-spinner/content-spinner";
import AppContext from "../../../context/app-context";
import useData from "../../hooks/use-data";
import { isIOS } from "../../../helpers/platform-helpers";

export default function MonumentCard({
  monument,
  shareId,
  onPress = (p) => p,
}) {
  const {
    monumentService: { getPhoto },
  } = useContext(AppContext);

  const [key, setKey] = useState(Math.random());

  const { data, loading, error } = useData(getPhoto, {
    params: [monument && monument.majorPhotoImageId, 700],
    delay: 100,
    numberOfAttempts: 3,
  }, [monument]);
  /* TODO handle error */

  useEffect(() => {
    if (data != null) {
      setKey(Math.random());
    }
  }, [data]);

  return (
    <TouchableScale
      activeScale={0.95}
      tension={50}
      friction={7}
      useNativeDriver
      onPress={
        loading && !error ? (p) => p : (p) => onPress(monument, data.image)
      }
      style={styles.container}
    >
      <View style={{ flex: 1, borderRadius: 10, overflow: "hidden" }}>
        <SharedElement id={`image-${shareId}`} style={styles.image}>
          <Image
            style={styles.image}
            key={key}
            source={{ uri: data && data.image }}
          />
        </SharedElement>
        <View style={styles.dataContainer}>
          <Text style={styles.title}>{monument && monument.name}</Text>
        </View>
      </View>
      {loading && <ContentSpinner borderRadius={10} />}
    </TouchableScale>
  );
}

const shadow = Platform.select({
  ios: {
    shadowColor: DefaultTheme.pallete.colors.secondary.main,
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
    backgroundColor: "white",
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
