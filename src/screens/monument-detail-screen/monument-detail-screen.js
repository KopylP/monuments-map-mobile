import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { DefaultTheme } from "../../theme/default-theme";
import CollapsedToolbar from "../../components/atoms/collapsed-toolbar/collapsed-toolbar";
import Loader from "./components/loader";
import MonumentDetails from "./components/monument-details/monument-details";
import { compose } from "redux";
import withMsGetMethod from "../../components/hoc-helpers/with-ms-get-method";
import withRouteParams from "../../components/hoc-helpers/with-route-params";
import withData from "../../components/hoc-helpers/with-data";
import withParamsScreenLog from "../../components/hoc-helpers/analytics/with-params-screen-log";
import useValueWithDelay from "../../components/hooks/use-value-with-delay";
import { MONUMENT_DETAIL_SCREEN } from "../../navigations/route-consts/monuments-detail-navigation-consts";
import { getPhotoUrlById } from "../../services/photo-service";
import { isIPhoneWithMonobrow } from "react-native-status-bar-height";
import timeout from "../../helpers/timeout-promise";

const MonumentDetailScreen = ({ data, loading, params }) => {
  const { monument } = params;

  const navigation = useNavigation();
  const imageBackground = useValueWithDelay(
    DefaultTheme.palette.colors.primary.main
  );

  const handleBack = () => {
    timeout(0).then(() => {
      navigation.goBack();
    });
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <CollapsedToolbar
        maxHeight={isIPhoneWithMonobrow ? 300 : 250}
        title={monument.name}
        onBack={handleBack}
        cacheKey={monument.id + ""}
        headerBackground={imageBackground}
        source={{
          uri: getPhotoUrlById(monument.majorPhotoImageId, 500),
        }}
      >
        <View style={{ flex: 1 }}>
          {!loading && data && <MonumentDetails monument={data} />}
          {loading && <Loader />}
        </View>
      </CollapsedToolbar>
    </View>
  );
};

const bindRouteParamsToMethodProps = ({ monument }) => [monument.id];
const bindRouteParamsToLogObject = ({ monument }) => ({
  id: monument.id,
  slug: monument.slug,
  localizedName: monument.name,
});

const composed = compose(
  withMsGetMethod((p) => p.getMonumentById),
  withRouteParams(),
  withParamsScreenLog("MonumentsDetailsScreen", bindRouteParamsToLogObject),
  withData(bindRouteParamsToMethodProps)
);

export const navigateToMonumentsDetailScreen = (navigate) => (monument) => {
  navigate(MONUMENT_DETAIL_SCREEN, {
    monument,
  });
};

export default composed(MonumentDetailScreen);
