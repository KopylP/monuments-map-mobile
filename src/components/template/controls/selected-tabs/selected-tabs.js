import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { DefaultTheme } from "../../../../theme/default-theme";

export default function SelectedTabs({
  firstTabTitle,
  secondTabTitle,
  onChangeTab = (tabIndex) => tabIndex,
  style={}
}) {
  const [selectedTab, setSelectedTab] = useState(0);
  const backTransAnim = useRef(new Animated.Value(0)).current;
  const handleSelectTab = (index) => {
    animateBack(index);
    setSelectedTab(index);
    onChangeTab(index);
  };

  const translateX = backTransAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const animateBack = (index) => {
    Animated.timing(backTransAnim, {
      toValue: index,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={[styles.root, style]}>
      <Animated.View
        style={[
          styles.animatedBackgroundStyle,
          { transform: [{ translateX }] },
        ]}
      />
      <Tab
        title={firstTabTitle}
        selected={selectedTab === 0}
        onTabSelected={() => handleSelectTab(0)}
      />
      <Tab
        title={secondTabTitle}
        selected={selectedTab === 1}
        onTabSelected={() => handleSelectTab(1)}
      />
    </View>
  );
}

const Tab = ({ title, selected, onTabSelected }) => {
  return (
    <TouchableOpacity style={{ width: 100 }} onPress={onTabSelected}>
      <Text
        style={[
          styles.tabTitle,
          {
            color: selected ? "white" : "black",
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 200,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: DefaultTheme.pallete.colors.primary.dark,
  },
  tabTitle: {
    fontWeight: "500",
    maxWidth: 100,
    paddingVertical: 5,
    textAlign: "center",
  },
  animatedBackgroundStyle: {
    position: "absolute",
    backgroundColor: DefaultTheme.pallete.colors.primary.dark,
    height: "100%",
    width: 100,
    left: 0,
  },
});
