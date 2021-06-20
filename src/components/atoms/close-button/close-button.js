import React from "react";
import GalleryButton from "../gallery-button";

export default function CloseButton({ onClick = (p) => p, style = {} }) {
  return (
    <GalleryButton
      style={style}
      onClick={onClick}
      iconType="ionicon"
      iconName="ios-close"
    />
  );
}
