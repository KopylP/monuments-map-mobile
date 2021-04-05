import React, { memo } from "react";
import MonumentsCard from "../../molecules/monument-card";

function MonumentListItem({ majorPhotoImageId, id, name, onPress = (p) => p }) {
  const shareId = `item-${id}`;

  return (
    <MonumentsCard
      style={{ height: 250 }}
      id={id}
      majorPhotoImageId={majorPhotoImageId}
      name={name}
      shareId={shareId}
      onPress={onPress}
    />
  );
}

export default memo(
  MonumentListItem,
  (prevProps, nextProps) => prevProps.id === nextProps.id
);
