import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { DefaultTheme } from "../../theme/default-theme";
import CollapsedToolbar from "../../components/atoms/collapsed-toolbar/collapsed-toolbar";
import MonumentDetails from "./components/monument-details/monument-details";
import useValueWithDelay from "../../components/hooks/use-value-with-delay";
import { MONUMENT_DETAIL_SCREEN } from "../../navigations/route-consts/monuments-detail-navigation-consts";
import { getPhotoUrlWithSize } from "../../services/photo-service";
import timeout from "../../helpers/timeout-promise";
import { isIOS } from "../../helpers/platform-helpers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { memo } from "react";
import { OptimizedHeavyScreen } from "react-navigation-heavy-screen";

const maxHeight = isIOS ? 250 : 200;

const MonumentDetailScreen = () => {
  const {
    params: { monument },
  } = useRoute();
  const { top } = useSafeAreaInsets();

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
        maxHeight={maxHeight + top}
        title={monument.name}
        onBack={handleBack}
        cacheKey={monument.id + ""}
        headerBackground={imageBackground}
        source={{
          uri:  getPhotoUrlWithSize(monument.majorPhotoImageUrl, 500),
        }}
      >
        <View style={{ flex: 1 }}>
          <OptimizedHeavyScreen>
            <MonumentDetails />
          </OptimizedHeavyScreen>
        </View>
      </CollapsedToolbar>
    </View>
  );
};

export const navigateToMonumentsDetailScreen = (navigate) => (monument) => {
  navigate(MONUMENT_DETAIL_SCREEN, {
    monument,
  });
};

export default memo(MonumentDetailScreen);
