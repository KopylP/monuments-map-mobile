import React, { useContext, useEffect, useState } from "react";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme } from "../../../../theme/default-theme";
import AppContext from "../../../../context/app-context";
import ContentLoader, { Rect } from "react-content-loader/native";
import { Icon } from "react-native-elements";

export default function MonumentAddress({ latitude, longitude, style = {} }) {
  const {
    geocoderService: { getAddressInformationFromLatLng },
  } = useContext(AppContext);
  const makeCancelable = useCancelablePromise();

  const [address, setAddress] = useState(null);

  useEffect(() => {
    makeCancelable(getAddressInformationFromLatLng(latitude, longitude))
      .then((e) => setAddress(e.address))
      .catch(/* TODO handle error */);
  }, []);

  return (
    <View style={style}>
      {!address && (
        <ContentLoader style={{ width: 100, height: 20 }}>
          <Rect x="0" y="0" rx="5" ry="5" width={100} height={10} />
        </ContentLoader>
      )}
      {address && (
        <View style={styles.dataContainer}>
          <Icon
            name="map-marker-alt"
            type="font-awesome-5"
            style={styles.icon}
            size={20}
            color={DefaultTheme.palette.colors.primary.main}
          />
          <Text style={styles.text}>
            {address.city}, {address.road} {address.house_number}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: DefaultTheme.palette.colors.subtitle.main,
    fontSize: 15,
    minHeight: 20,
  },
  icon: {
    marginRight: 5,
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
