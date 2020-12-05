import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { DefaultTheme } from "../../../../theme/default-theme";
import ImageAnimatedHeader from "../../../template/animated-header/image-animated-header";
import Loader from "./components/loader";
import MonumentDetails from "./components/monument-details/monument-details";
import timeout from "../../../../helpers/timeout-promise";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import { compose } from "redux";
import withMsGetMethod from "../../../hoc-helpers/with-ms-get-method";
import withRouteParams from "../../../hoc-helpers/with-route-params";
import withData from "../../../hoc-helpers/with-data";
import withParamsScreenLog from "../../../hoc-helpers/analytics/with-params-screen-log";

const MonumentDetailScreen = ({ data, loading, params }) => {
  const { monument, shareId, imageBase64 } = params;
  const [headerBackground, setHeaderBackground] = useState(null);
  const makeCancelable = useCancelablePromise();
  const navigation = useNavigation();

  const handleSetBackground = () => {
    makeCancelable(timeout(200)).then(() => {
      setHeaderBackground(DefaultTheme.pallete.colors.primary.main);
    });
  };

  useEffect(() => {
    handleSetBackground();
  }, []);

  const handleBack = () => {
    navigation.goBack();
    setHeaderBackground(null);
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <ImageAnimatedHeader
        maxHeight={250}
        shareId={`image-${shareId}`}
        title={monument.name}
        onBack={handleBack}
        headerBackground={headerBackground}
        source={{
          uri: imageBase64,
        }}
      >
        <View style={{ flex: 1 }}>
          {data && <MonumentDetails monument={data} />}
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
