import React from "react";
import GalleryButton from "../gallery-button";

export default function InfoButton({ onClick = (p) => p, style = {} }) {
  return (
    <GalleryButton
      style={style}
      onClick={onClick}
      iconType="ionicon"
      iconName="ios-information"
    />
  );
}
