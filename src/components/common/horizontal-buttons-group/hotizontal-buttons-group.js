import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SCREEN_SIZE } from "../../../helpers/dimensions-helpers";

export default function HorizontalButtonsGroup({
  children,
  buttonWidth,
  containerPaddingHorizontal,
  minButtonMargin,
  style = {},
}) {
  const screenWidth = SCREEN_SIZE;

  const delta = Math.floor(buttonWidth / 3);

  const screenWidthWithDelta = screenWidth + delta;

  const safeArea = screenWidth - containerPaddingHorizontal - minButtonMargin;

  let buttonsGroupWidth = containerPaddingHorizontal;
  let newButtonMargin = minButtonMargin;

  console.log("---------------");

  for (let i = 1; i <= children.length; i++) {
    buttonsGroupWidth += buttonWidth + minButtonMargin;
    console.log(buttonsGroupWidth, safeArea);
    if (
      buttonsGroupWidth > safeArea &&
      buttonsGroupWidth < screenWidthWithDelta
    ) {
      newButtonMargin = (screenWidthWithDelta - buttonWidth*i) / i / 2;
      break;
    }
  }

  var buttons = React.Children.map(children, (child, i) => {
    const style = {
      ...child.props.style,
      marginLeft: i == 0 ? 0 : newButtonMargin,
      marginRight: i == children.length - 1 ? 0 : newButtonMargin,
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
      }}
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
