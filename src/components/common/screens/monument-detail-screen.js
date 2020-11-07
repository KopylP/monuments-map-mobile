import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { getPhotoUrlById } from "../../../services/photo-service";
import { DefaultTheme } from "../../../theme/default-theme";
import ImageAnimatedHeader from "../../template/animated-header/image-animated-header";

const MonumentDetailScreen = ({ route }) => {
  const { monument, shareId } = route.params;
  const navigation = useNavigation();
  const [headerBackground, setHeaderBackground] = useState();

  useEffect(() => {
    setTimeout(() => {
      setHeaderBackground(DefaultTheme.pallete.colors.primary.main);
    }, 450);
  }, [monument]);

  return (
    <View style={StyleSheet.absoluteFill}>
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
          uri: getPhotoUrlById(monument.majorPhotoImageId, 700),
        }}
      >
        <Text
          style={[
            {
              paddingHorizontal: 20,
              paddingBottom: 20,
              paddingTop: Platform.OS === "android" ? 40 : 20,
              fontSize: 26,
              fontWeight: "600",
            },
          ]}
        >
          { monument.name }
        </Text>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 2000,
          }}
        ></View>
      </ImageAnimatedHeader>
    </View>
  );
};

export default MonumentDetailScreen;
