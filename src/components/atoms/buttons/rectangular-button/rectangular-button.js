import React, { memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";


function RectangularButton({
  color,
  iconName,
  iconType,
  title,
  textColor = "white",
  style,
  onPress  = p => p,
  disabled = false
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disabled}
      style={[
        {
          backgroundColor: color,
          ...style,
        },
        styles.container,
      ]}
    >
      <View>
        <Icon name={iconName} type={iconType} color={textColor} size={30}/>
        <Text
          style={{
            color: textColor,
            ...styles.text,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },
  text: {
    fontWeight: "600",
    margin: 2,
    fontSize: 12,
  },
});

export default memo(RectangularButton);
