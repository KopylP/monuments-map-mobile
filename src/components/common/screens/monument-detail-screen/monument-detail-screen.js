import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { DefaultTheme } from "../../../../theme/default-theme";
import ImageAnimatedHeader from "../../../template/animated-header/image-animated-header";
import Loader from "./components/loader";
import AppContext from "../../../../context/app-context";
import MonumentDetails from "./components/monument-details/monument-details";
import timeout from "../../../../helpers/timeout-promise";
import useData from "../../../hooks/use-data";
import useCancelablePromise from "@rodw95/use-cancelable-promise";

const MonumentDetailScreen = ({ route }) => {
  const { monument, shareId, imageBase64 } = route.params;
  const [headerBackground, setHeaderBackground] = useState(null);
  const makeCancelable = useCancelablePromise();
  const navigation = useNavigation();
  const {
    monumentService: { getMonumentById },
  } = useContext(AppContext);

  const { data, error /* TODO handle error */, loading } = useData(getMonumentById, {
    delay: 100,
    params: [monument.id],
  });

  const handleSetBackground = () => {
    makeCancelable(timeout(200)).then(() => {
      setHeaderBackground(DefaultTheme.pallete.colors.primary.main);
    });
  };

  useEffect(() => {
    handleSetBackground();
  }, []);

  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: "white" }]}>
      <ImageAnimatedHeader
        maxHeight={250}
        shareId={`image-${shareId}`}
        title={monument.name}
        onBack={() => {
          navigation.goBack();
          setHeaderBackground(null);
        }}
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

export default MonumentDetailScreen;
