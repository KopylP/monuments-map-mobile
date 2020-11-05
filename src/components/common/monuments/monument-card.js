import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Platform } from "react-native";
import { getPhotoUrlById } from "../../../services/photo-service";
import { DefaultTheme } from "../../../theme/default-theme";
import ContentSpinner from "../content-spinner/content-spinner";

export default function MonumentCard({ monument }) {
  const [loading, setLoading] = useState(true);

  const [source, setSource] = useState(null);
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    if (monument) {
      setLoading(true);
      setKey(Math.random());
      setSource({
        uri: getPhotoUrlById(monument.majorPhotoImageId),
      });
    }
  }, [monument]);

  const handleLoadingEnd = () => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, borderRadius: 10, overflow: "hidden" }}>
        <Image
          style={styles.image}
          key={key}
          source={source}
          onLoadEnd={handleLoadingEnd}
        />
        <View style={styles.dataContainer}></View>
        {loading && <ContentSpinner />}
      </View>
    </View>
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
  android: {
    elevation: 6,
  },
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flex: 1,
    ...shadow,
  },
  image: {
    flex: 1,
  },
  dataContainer: {
    backgroundColor: "#fdfdfd",
    width: "100%",
    height: 100,
  },
});
