import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
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
      <Image
        style={styles.image}
        key={key}
        source={source}
        onLoadEnd={handleLoadingEnd}
      />
      <View style={styles.dataContainer}></View>
      {loading && <ContentSpinner borderRadius={10} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: DefaultTheme.pallete.colors.primary.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    elevation: 5,
    flex: 1,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
  },
  dataContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#fdfdfd",
    width: "100%",
    height: 100,
  },
});
