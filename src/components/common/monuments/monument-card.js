import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Image, Platform, Text } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import { DefaultTheme } from "../../../theme/default-theme";
import TouchableScale from "../../template/buttons/touchable-scale";
import ContentSpinner from "../content-spinner/content-spinner";
import AppContext from "../../../context/app-context";
import timeout from "../../../helpers/timeout-promise";

export default function MonumentCard({
  monument,
  shareId,
  onPress = (p) => p,
}) {
  const [loading, setLoading] = useState(true);
  const {
    monumentService: { getPhoto },
  } = useContext(AppContext);
  const [imageBase64, setImageBase64] = useState(null);
  const [key, setKey] = useState(Math.random());
  const makecancelable = useCancelablePromise();

  useEffect(() => {
    if (monument) {
      setLoading(true);
      makecancelable(getPhoto(monument.majorPhotoImageId, 700))
        .then((img) => {
          setImageBase64(img.image);
          makecancelable(timeout(100)).then(() => {
            setLoading(false);
          });
        })
        .catch((e) => {
          // TODO handle error
          setLoading(false);
        });
      setKey(Math.random());
    }
  }, [monument]);

  return (
    <TouchableScale
      activeScale={0.9}
      tension={50}
      friction={7}
      useNativeDriver
      onPress={loading ? (p) => p : (p) => onPress(monument, imageBase64)}
      style={styles.container}
    >
      <View style={{ flex: 1, borderRadius: 10, overflow: "hidden" }}>
        <SharedElement id={`image-${shareId}`} style={styles.image}>
          <Image style={styles.image} key={key} source={{ uri: imageBase64 }} />
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
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "#fdfdfd",
  },
  dataContainer: {
    backgroundColor: "#fdfdfd",
    width: "100%",
  },
  title: {
    padding: 20,
    fontSize: 24,
    fontWeight: "600",
  },
});
