import React, { memo, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TempBottomSheet from "../../atoms/temp-bottom-sheet/temp-bottom-sheet";
import MapMonumentCard from "../map-monument-card";
import { SCREEN_HEIGHT } from "../../../helpers/dimensions-helpers";

function MonumentsModal({
  open,
  monument,
  onChange = (p) => p, // true if open
  onCardPress = (p) => p,
  enabled,
  enableClick,
}) {
  const bottomRef = useRef();
  const { top } = useSafeAreaInsets();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (open && currentIndex === 0) bottomRef.current.open();
    else if (!open && currentIndex === 1) bottomRef.current.close();
  }, [open]);

  const handleChange = (index) => {
    setCurrentIndex(index);
    onChange(index === 1);
  };

  return (
    <TempBottomSheet
      ref={bottomRef}
      onChange={handleChange}
      enabled={enabled}
      height={SCREEN_HEIGHT / 2 - top - 20}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        <MapMonumentCard
          monument={monument}
          onPress={onCardPress}
          enabled={enableClick}
        />
      </View>
    </TempBottomSheet>
  );
}

export default memo(MonumentsModal);