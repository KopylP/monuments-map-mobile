import React, { Component } from "react";
import BottomSheet from "reanimated-bottom-sheet";

export default class AppBottomSheet extends Component {
  renderContent = () => <>{this.props.children}</>;

  sheetRef = React.createRef(null);

  open() {
    this.sheetRef.current.snapTo(0);
  }

  close() {
    this.sheetRef.current.snapTo(1);
  }

  render() {
    const { dialogHeight = 300 } = this.props;
    return (
      <BottomSheet
        ref={this.sheetRef}
        snapPoints={[dialogHeight, 0]}
        borderRadius={10}
        callbackThreshold={0.3}
        renderContent={this.renderContent}
      />
    );
  }
}
