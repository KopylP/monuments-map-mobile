import React, { Component } from "react";
import BottomSheet from "reanimated-bottom-sheet";
import MonumentsCarousel from "../monuments-carousel/monuments-carousel";

export default class MonumentsBottomSheet extends Component {
  renderContent = () => (
    <MonumentsCarousel />
  );

  sheetRef = React.createRef(null);

  open() {
      this.sheetRef.current.snapTo(0);
  }

  close() {
      this.sheetRef.current.snapTo(1);
  }

  render() {
    return (
      <BottomSheet
        ref={this.sheetRef}
        snapPoints={[300, 0]}
        borderRadius={10}
        callbackThreshold={0.3}
        renderContent={this.renderContent}
      />
    );
  }
}
