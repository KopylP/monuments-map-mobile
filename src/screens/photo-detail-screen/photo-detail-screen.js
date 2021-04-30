import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../../components/atoms/buttons/back-button/back-button";
import AbsoluteIndicator from "../../components/atoms/indicators/absolute-indicator/absolute-indicator";
import PhotoDetail from "./photo-detail";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import timeout from "../../helpers/timeout-promise";
import PagerView from "react-native-pager-view";

export default function PhotoDetailScreen({ route }) {
  const { selectedIndex, monumentPhotos, title } = route.params;
  const { goBack } = useNavigation();
  const makeCancelable = useCancelablePromise();

  const { top } = useSafeAreaInsets();

  const [canTouch, setCanTouch] = useState(true);
  const [show, setShow] = useState(false);

  const enableTouch = () => {
    if (!canTouch) {
      setCanTouch(true);
    }
  };

  const disableTouch = () => {
    if (canTouch) {
      setCanTouch(false);
    }
  };

  useEffect(() => {
    makeCancelable(timeout(200)).then(() => setShow(true));
  }, []);

  const handlePageScrollStateChanged = (e) => {
    const { pageScrollState } = e.nativeEvent;
    switch (pageScrollState) {
      case "idle":
        enableTouch();
      default:
        disableTouch();
    }
  };

  const iconViewTop = 11 + top;

  if (!show) {
    return <AbsoluteIndicator />;
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <PagerView
        initialPage={selectedIndex}
        onPageScrollStateChanged={handlePageScrollStateChanged}
        style={{ flex: 1 }}
        offscreenPageLimit={3}
      >
        {monumentPhotos.map((monumentPhoto, i) => (
          <View style={{ flex: 1 }} key={i}>
            <PhotoDetail
              {...monumentPhoto}
              title={title}
              touchable={canTouch}
            />
          </View>
        ))}
      </PagerView>
      <BackButton
        containerStyle={[styles.iconView, { top: iconViewTop }]}
        onPress={goBack}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconView: {
    position: "absolute",
    left: 15,
  },
});
