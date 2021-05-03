import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { compose } from "redux";
import CopyableText from "../../components/atoms/copyable-text/copyable-text";
import DetailYear from "../../components/atoms/dates/year-detail";
import SourcesButton from "../../components/molecules/sources-button/sources-button";
import withData from "../../components/hoc-helpers/with-data";
import withMsGetMethod from "../../components/hoc-helpers/with-ms-get-method";
import { useLocate } from "../../components/hooks/locate-hooks";
import CollapsedToolbar from "../../components/atoms/collapsed-toolbar/collapsed-toolbar";
import { SCREEN_WIDTH } from "../../helpers/dimensions-helpers";
import { DefaultTheme } from "../../theme/default-theme";
import Loader from "./loader";
import PhotoViewButton from "./photo-view-button";

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

  if (loading) return <Loader imageHeight={SCREEN_WIDTH / photo.imageScale} />;

  if (data)
    return (
      <CollapsedToolbar
        maxHeight={SCREEN_WIDTH / photo.imageScale}
        imageHeight={SCREEN_WIDTH / photo.imageScale}
        title={title}
        showBackButton={false}
        headerBackground={DefaultTheme.palette.colors.primary.main}
        cacheKey={photo.id + ""}
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
            <SourcesButton
              canPress={touchable}
              style={styles.rightButton}
              sources={sources}
            />
          </View>
          <CopyableText style={styles.description}>
            {description || ""}
          </CopyableText>
        </View>
      </CollapsedToolbar>
    );
}

const composed = compose(
  withMsGetMethod((p) => p.getFullSizePhoto),
  withData((_, props) => [props.photoId])
);

export default memo(
  composed(PhotoDetail),
  (prevProps, nextProps) => prevProps.id === nextProps.id
);

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
    color: "black"
  },
  yearContainer: {
    flexDirection: "row",
  },
  year: {
    fontWeight: "700",
    fontSize: 18,
    marginTop: 20,
    color: "black"
  },
});
