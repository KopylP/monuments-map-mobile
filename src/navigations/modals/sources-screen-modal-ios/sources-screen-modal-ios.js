import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { useLocate } from "../../../components/hooks/locate-hooks";
import SourcesScreen from "../../../screens/sources-screen/sources-screen";
import { DefaultTheme } from "../../../theme/default-theme";
import { SOURCES_SCREEN } from "../../route-consts/monuments-detail-navigation-consts";

export default function SourcesScreenModalIOS({ route }) {
  const { t } = useLocate();
  const ModalStack = createNativeStackNavigator();

  return (
    <ModalStack.Navigator>
      <ModalStack.Screen
        component={SourcesScreen}
        name={SOURCES_SCREEN + "MODAL"}
        options={{
          title: t("sources"),
          headerStyle: {
            backgroundColor: DefaultTheme.palette.colors.primary.main,
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
        initialParams={route.params}
      />
    </ModalStack.Navigator>
  );
}
