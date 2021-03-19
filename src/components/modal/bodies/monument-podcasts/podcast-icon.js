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
import pocketcast from "../../../../../assets/icons/pocketcast.png";

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
    case "pocketcast":
      source = pocketcast;
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
      style={{ ...style, width: size, height: size }}
      width={size}
      height={size}
      source={source}
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
    "pocketcast",
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
    case SourceType.PODCASTS_POCKETCASTS:
      return "pocketcast"
    default:
      return "default";
  }
}

export default PodcastIcon;
