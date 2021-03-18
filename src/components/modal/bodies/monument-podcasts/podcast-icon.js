import React from "react";
import PropTypes from "prop-types";
import SourceType from "../../../../models/source-type";
import { Icon } from "react-native-elements";
import { DefaultTheme } from "../../../../theme/default-theme";
import { Image } from "react-native";
import apple from "../../../../../assets/icons/apple_podcasts.webp";
import google from "../../../../../assets/icons/google_podcasts.png";
import castbox from "../../../../../assets/icons/castbox.png";
import spotify from "../../../../../assets/icons/spotify_podcasts.png";

function PodcastIcon({ type, size = 40, onPress = (p) => p, style = {} }) {
  let source = null;

  switch (type) {
    case "apple":
      source = apple;
      break;
    case "google":
      source = google;
      break;
    case "spotify":
      source = spotify;
      break;
    case "castbox":
      source = castbox;
      break;
    default:
      return (
        <Icon
          type="font-awesome-5"
          name="podcast"
          size={size}
          style={style}
          color={DefaultTheme.palette.colors.primary.light}
        />
      );
  }

  return (
    <Image
      style={{ ...style }}
      width={size}
      height={size}
      source={source}
      // onPress={onPress}
    />
  );
}

PodcastIcon.propTypes = {
  type: PropTypes.oneOf([
    "apple",
    "google",
    "spotify",
    "podlink",
    "castbox",
    "default",
  ]),
  size: PropTypes.number,
};

export function convertSourceTypeToIconType(sourceType) {
  switch (sourceType) {
    case SourceType.PODCASTS_APPLE:
      return "apple";
    case SourceType.PODCASTS_GOOGLE:
      return "google";
    case SourceType.PODCASTS_CASTBOX:
      return "castbox";
    case SourceType.PODCASTS_SPOTIFY:
      return "spotify";
    default:
      return "default";
  }
}

export default PodcastIcon;
