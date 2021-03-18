import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SCREEN_SIZE } from "../../../helpers/dimensions-helpers";

export default function HorizontalButtonsGroup({
  children,
  buttonWidth,
  containerPaddingHorizontal,
  minButtonMargin,
  stretchMarginRequired = false,
  style = {},
  scrollEnabled = true,
  paddingBottom = 0
}) {
  const screenWidth = SCREEN_SIZE;

  const delta = Math.floor(buttonWidth / 3);

  const screenWidthWithDelta = screenWidth + delta;

  const safeArea = screenWidth - containerPaddingHorizontal - minButtonMargin;

  let buttonsGroupWidth = containerPaddingHorizontal;
  let newButtonMargin = minButtonMargin;

  let index = 1;
  while (buttonsGroupWidth < screenWidthWithDelta) {
    buttonsGroupWidth += buttonWidth + minButtonMargin;
    if (
      buttonsGroupWidth > safeArea &&
      buttonsGroupWidth < screenWidthWithDelta
    ) {
      newButtonMargin = (screenWidthWithDelta - buttonWidth*index) / index / 2;
      break;
    }

    index++;
  }

  let buttonMargin = minButtonMargin;
  if (children.length >= index || stretchMarginRequired)
  {
    buttonMargin = newButtonMargin;
  }

  var buttons = React.Children.map(children, (child, i) => {
    const style = {
      ...child.props.style,
      marginLeft: i == 0 ? 0 : buttonMargin,
      marginRight: i == children.length - 1 ? 0 : buttonMargin,
    };
    return React.cloneElement(child, { style });
  });

  return (
    <ScrollView
      horizontal
      style={[styles.container, style]}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: containerPaddingHorizontal,
        paddingBottom,
      }}
      scrollEnabled={scrollEnabled}
    >
      {buttons}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
  },
});
