import { Platform } from "react-native";
import timeout from "../../../../helpers/timeout-promise";
import MonumentDetailScreen from "./monument-detail-screen";

export default function monumentDetailScreenOptions(
  makeCancelable,
  transitionStart,
  transitionEnd
) {
  return {
    name: "Detail",
    options: {
      headerShown: false,
    },
    component: MonumentDetailScreen,
    listeners: {
      transitionStart: (e) => {
        if (e.data.closing) {
          transitionStart();
          makeCancelable(timeout(300)).then(() => {
            transitionEnd();
          });
        }
      },
    },
    sharedElementsConfig: (route, otherRoute, showing) => {
      const { shareId } = route.params;
      if (route.name === "Detail" && otherRoute.name !== "List") return [{}];
      if (route.name === "Detail" && (showing || shareId.includes("map"))) {
        if (Platform.OS === "ios") {
          return [
            {
              id: `image-${shareId}`,
              animation: "fade",
              resize: "none",
              align: "center-center",
            },
          ];
        }
      }
    },
  };
}
