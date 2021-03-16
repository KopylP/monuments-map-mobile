import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { DefaultTheme } from "../../../../theme/default-theme";
import ImageAnimatedHeader from "../../../template/animated-header/image-animated-header";
import Loader from "./components/loader";
import MonumentDetails from "./components/monument-details/monument-details";
import { compose } from "redux";
import withMsGetMethod from "../../../hoc-helpers/with-ms-get-method";
import withRouteParams from "../../../hoc-helpers/with-route-params";
import withData from "../../../hoc-helpers/with-data";
import withParamsScreenLog from "../../../hoc-helpers/analytics/with-params-screen-log";
import useValueWithDelay from "../../../hooks/use-value-with-delay";

const MonumentDetailScreen = ({ data, loading, params }) => {
  const { monument, shareId, imageBase64 } = params;

  const navigation = useNavigation();
  const imageBackground = useValueWithDelay(DefaultTheme.palette.colors.primary.main);

  const [backClicked, setBackClicked] = useState(false);

  const handleBack = () => {
    setBackClicked(true);
    navigation.goBack();
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <ImageAnimatedHeader
        maxHeight={250}
        shareId={`image-${shareId}`}
        title={monument.name}
        onBack={handleBack}
        headerBackground={backClicked ? null: imageBackground}
        source={{
          uri: imageBase64,
        }}
      >
        <View style={{ flex: 1 }}>
          {!loading && data && <MonumentDetails monument={data} />}
          {loading && <Loader />}
        </View>
      </ImageAnimatedHeader>
    </View>
  );
};

const bindRouteParamsToMethodProps = ({ monument }) => [monument.id];
const bindRouteParamsToLogObject = ({ monument }) => ({
  id: monument.id,
  slug: monument.slug,
  localizedName: monument.name
});

const composed = compose(
  withMsGetMethod((p) => p.getMonumentById),
  withRouteParams(),
  withParamsScreenLog("MonumentsDetailsScreen", bindRouteParamsToLogObject),
  withData(bindRouteParamsToMethodProps)
);

export default composed(MonumentDetailScreen);
