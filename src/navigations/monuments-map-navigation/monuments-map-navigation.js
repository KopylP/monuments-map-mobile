import React from "react";
import { connect } from "react-redux";
import {
  transitionEnd,
  transitionStart,
} from "../../redux/actions/transition-actions";
import MonumentsMapScreen from "../../screens/monuments-map-screen";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import { Icon } from "react-native-elements";
import { useLocate } from "../../components/hooks/locate-hooks";
import {
  MONUMENTS_MAP_SCREEN,
  FILTER_SCREEN,
} from "../route-consts/monuments-map-navigation-consts";
import CreateMonumentDetailNavigator from "../navigators/monument-details-navigator/create-monument-detail-navigator";
import MonumentsMapFilterScreen from "../../screens/monuments-map-filter-screen";
import timeout from "../../helpers/timeout-promise";

const Stack = CreateMonumentDetailNavigator();

const MonumentsMapNavigation = ({
  transitionStart,
  transitionEnd,
}) => {
  const makeCancelable = useCancelablePromise();
  const { t } = useLocate();

  const handleCloseTransitionStarts = () => {
    transitionStart();
    makeCancelable(timeout(300)).then(() => {
      transitionEnd();
    });
  };

  return (
    <Stack.Navigator
      onCloseTransitionStarts={handleCloseTransitionStarts}
      routeNameBeforeDetailsInStack={MONUMENTS_MAP_SCREEN}
      backTransitionShareIdIncludes="map"
    >
      <Stack.Screen
        name={MONUMENTS_MAP_SCREEN}
        component={MonumentsMapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={FILTER_SCREEN}
        options={{
          title: t("Filters"),
        }}
        component={MonumentsMapFilterScreen}
      />
    </Stack.Navigator>
  );
};

const bindDispatchToProps = { transitionStart, transitionEnd };

export default connect(null, bindDispatchToProps)(MonumentsMapNavigation);

export const mapTabOptions = {
  tabBarIcon: ({ color, size }) => (
    <Icon name="landmark" type="font-awesome-5" size={size} color={color} />
  ),
};
