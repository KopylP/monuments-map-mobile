import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";


export default function RectangularButton({
  color,
  iconName,
  iconType,
  title,
  textColor = "white",
  style,
  onPress  = p => p
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
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
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
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
  },
});
