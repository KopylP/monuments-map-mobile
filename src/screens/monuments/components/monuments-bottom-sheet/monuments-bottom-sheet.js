import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import TempBottomSheet from "../../../../components/template/temp-bottom-sheet/temp-bottom-sheet";
import { closeSelectedMonumentDialog } from "../../../../redux/actions/selected-monument-actions";
import MapMonumentCard from "./map-monument-card/map-monument-card";

function MonumentsBottomSheet({ openDialog, closeSelectedMonumentDialog }) {
  const bottomRef = useRef();

  useEffect(() => {
    if (openDialog) {
      setTimeout(() => {
        bottomRef.current.open();
      }, 100); 
    }
  }, [openDialog]);

  const handleChange = (index) => {
    if (index === 0) {
      closeSelectedMonumentDialog();
    }
  }

  return (
    <TempBottomSheet ref={bottomRef} onChange={handleChange}>
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

const bindStateToProps = ({ selectedMonument: { openDialog } }) => ({ openDialog });
const bindDispatchToProps = { closeSelectedMonumentDialog };

export default connect(bindStateToProps, bindDispatchToProps)(MonumentsBottomSheet);
