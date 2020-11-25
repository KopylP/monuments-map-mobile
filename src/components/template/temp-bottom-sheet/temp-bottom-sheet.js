import React, { Component } from "react";
import { Dimensions, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

export default class TempBottomSheet extends Component {
  state = {
    open: false,
  };

  renderContent = () => {
    const screenHeight = Math.round(Dimensions.get("window").height);
    const { height = screenHeight / 2 - 45 } = this.props;

    return (
      <View
        style={{
          width: "100%",
          height: height,
        }}
      >
        {this.props.children}
      </View>
    );
  };

  sheetRef = React.createRef();

  open() {
    this.sheetRef.current.expand();
  }

  close() {
    this.sheetRef.current.close();
  }

  _handleChange = (index) => {
    const { onChange = (p) => p } = this.props;
    onChange(index);
    this.setState({
      open: index === 1,
    });
  };

  render() {
    const screenHeight = Math.round(Dimensions.get("window").height);
    const { height = screenHeight, renderHeader = () => <View />, enabled =  true } = this.props;
    const { open } = this.state;

    return (
      <BottomSheet
        ref={this.sheetRef}
        initialSnapIndex={0}
        enabled={enabled}
        handleComponent={renderHeader}
        snapPoints={[0, height / 2 - 45]}
        animationDuration={open ? 200 : 300}
        onChange={this._handleChange}
      >
        {this.renderContent()}
      </BottomSheet>
    );
  }
}
