import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import AppContext from "../../../../context/app-context";
import { DefaultTheme } from "../../../../theme/default-theme";
import useData from "../../../hooks/use-data";
import ImageAnimatedHeader from "../../../template/animated-header/image-animated-header";
import AbsoluteIndicator from "../../../template/indicators/absolute-indicator/absolute-indicator";
import DetailYear from "../../dates/year-detail";
import SourcesButton from "../../sources-button/sources-button";
import PhotoViewButton from "./photo-view-button";

const SIZE = Math.floor(Dimensions.get("window").width);

export default function PhotoDetail({
  photoId,
  photo,
  description,
  year,
  period,
  title,
  touchable,
}) {
  const { goBack } = useNavigation();
  const {
    monumentService: { getFullSizePhoto },
  } = useContext(AppContext);
  const { data, loading, error /* TODO handle error */ } = useData(
    getFullSizePhoto,
    {
      params: [photoId],
    }
  );

  return (
    <>
      {!loading && data && (
        <ImageAnimatedHeader
          maxHeight={Math.min(SIZE / photo.imageScale, 400)}
          imageHeight={SIZE / photo.imageScale}
          title={title}
          headerBackground={DefaultTheme.pallete.colors.primary.main}
          onBack={goBack}
          source={{
            uri: data.image,
          }}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              paddingBottom: 20,
            }}
          >
            <View style={styles.yearContainer}>
              <Text style={styles.year}>Фото: </Text>
              <DetailYear year={year} period={period} style={styles.year} />
            </View>
            <View style={styles.buttonsContainer}>
              <PhotoViewButton canPress={touchable} imageBase64={data.image}/>
              <SourcesButton style={styles.rightButton}/>
            </View>
            <Text style={styles.description}>{description}</Text>
          </View>
        </ImageAnimatedHeader>
      )}
      {loading && (
        <AbsoluteIndicator
          backgroundColor={DefaultTheme.pallete.colors.screenBackground.main}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  rightButton: {
    marginLeft: 10,
  },
  description: {
    marginTop: 20,
    fontSize: 16,
  },
  yearContainer: {
    flexDirection: "row",
  },
  year: {
    fontWeight: "700",
    fontSize: 18,
    marginTop: 20,
  },
});
