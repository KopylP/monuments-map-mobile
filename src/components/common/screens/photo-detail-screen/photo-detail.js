import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { compose } from "redux";
import { DefaultTheme } from "../../../../theme/default-theme";
import withData from "../../../hoc-helpers/with-data";
import withMsGetMethod from "../../../hoc-helpers/with-ms-get-method";
import { useLocate } from "../../../hooks/locate-hooks";
import ImageAnimatedHeader from "../../../template/animated-header/image-animated-header";
import AbsoluteIndicator from "../../../template/indicators/absolute-indicator/absolute-indicator";
import CopyableText from "../../copyable-text/copyable-text";
import DetailYear from "../../dates/year-detail";
import SourcesButton from "../../sources-button/sources-button";
import PhotoViewButton from "./photo-view-button";

const SIZE = Math.floor(Dimensions.get("window").width);

function PhotoDetail({
  photo,
  description,
  year,
  period,
  sources,
  title,
  touchable,
  data,
  loading,
}) {
  const { t } = useLocate();

  return (
    <>
      {data && (
        <ImageAnimatedHeader
          maxHeight={Math.min(SIZE / photo.imageScale, 400)}
          imageHeight={SIZE / photo.imageScale}
          title={title}
          headerBackground={DefaultTheme.pallete.colors.primary.main}
          showBackButton={false}
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
              <Text style={styles.year}>{t("Photo")}: </Text>
              <DetailYear year={year} period={period} style={styles.year} />
            </View>
            <View style={styles.buttonsContainer}>
              <PhotoViewButton canPress={touchable} imageBase64={data.image} />
              <SourcesButton style={styles.rightButton} sources={sources} />
            </View>
            <CopyableText style={styles.description}>{description}</CopyableText>
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

const composed = compose(
  withMsGetMethod(p => p.getFullSizePhoto),
  withData((_, props) => [props.photoId])
);

export default composed(PhotoDetail);

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
