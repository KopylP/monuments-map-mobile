import { isIOS } from "../../helpers/platform-helpers";
import { MONUMENT_DETAIL_SCREEN } from "../../navigations/route-consts/monuments-detail-navigation-consts";
import MonumentDetailScreen from "./monument-detail-screen";

export default function monumentDetailScreenOptions({
  onCloseTransitionStarts,
  initialRouteName,
  backTransitionShareIdIncludes,
}) {
  return {
    name: MONUMENT_DETAIL_SCREEN,
    options: {
      headerShown: false,
    },
    component: MonumentDetailScreen,
    listeners: {
      transitionStart: (e) => {
        if (e.data.closing) {
          onCloseTransitionStarts();
        }
      },
    },
    sharedElements: (route, otherRoute, showing) => {
      const { shareId } = route.params;
      if (
        route.name === MONUMENT_DETAIL_SCREEN &&
        otherRoute.name !== initialRouteName
      )
        return [{}];
      if (showing || shareId.includes(backTransitionShareIdIncludes)) {
        if (isIOS) {
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
