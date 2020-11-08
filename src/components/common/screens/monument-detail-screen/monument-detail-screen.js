import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { DefaultTheme } from "../../../../theme/default-theme";
import ImageAnimatedHeader from "../../../template/animated-header/image-animated-header";
import Loader from "./components/loader";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import AppContext from "../../../../context/app-context";
import MonumentDetails from "./components/monument-details/monument-details";
import timeout from "../../../../helpers/timeout-promise";

const MonumentDetailScreen = ({ route }) => {
  const { monument, shareId, imageBase64 } = route.params;
  const navigation = useNavigation();
  const [headerBackground, setHeaderBackground] = useState();
  const {
    monumentService: { getMonumentById },
  } = useContext(AppContext);
  const [monumentDetails, setMonumentDetails] = useState(null);
  const makeCancelable = useCancelablePromise();

  const handleSetBackground = () => {
    makeCancelable(timeout(200)).then(() => {
      setHeaderBackground(DefaultTheme.pallete.colors.primary.main);
    });
  };

  const loadMonument = () => {
    makeCancelable(getMonumentById(monument.id))
      .then((monument) => {
        makeCancelable(timeout(100)).then(() => {
          setMonumentDetails(monument);
        });
      })
      .catch(/* TODO handle error*/);
  };

  useEffect(() => {
    handleSetBackground();
    loadMonument();
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
        <View style={{ flex: 1, padding: 20 }}>
          {monumentDetails && <MonumentDetails monument={monumentDetails} />}
          {!monumentDetails && <Loader />}
        </View>
      </ImageAnimatedHeader>
    </View>
  );
};

export default MonumentDetailScreen;
