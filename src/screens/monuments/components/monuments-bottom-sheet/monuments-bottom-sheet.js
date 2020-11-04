import React, { Component } from "react";
import MonumentsCarousel from "../monuments-carousel/monuments-carousel";
import AppBottomSheet from "../../../../components/template/dialogs/bottom-sheet/app-bottom-sheet";

export default class MonumentsBottomSheet extends Component {
  renderContent = () => (
    <MonumentsCarousel />
  );

  sheetRef = React.createRef(null);

  open() {
      this.sheetRef.current.open();
  }

  close() {
      this.sheetRef.current.close();
  }

  render() {
    return (
      <AppBottomSheet
        ref={this.sheetRef}
      >
        <MonumentsCarousel />
      </AppBottomSheet>
    );
  }
}
