import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import TempBottomSheet from "../../../../components/template/temp-bottom-sheet/temp-bottom-sheet";
import MapMonumentCard from "../views/monument-map-view/map-monument-card/map-monument-card";

function MonumentsBottomSheet({ selectedMonument }) {
  const bottomRef = useRef();

  useEffect(() => {
    if (selectedMonument) {
      setTimeout(() => {
        bottomRef.current.open();
      }, 100); 
    }
  }, [selectedMonument]);

  return (
    <TempBottomSheet ref={bottomRef}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        <MapMonumentCard />
      </View>
    </TempBottomSheet>
  );
}

const bindStateToProps = ({ selectedMonument }) => ({ selectedMonument });

export default connect(bindStateToProps)(MonumentsBottomSheet);
