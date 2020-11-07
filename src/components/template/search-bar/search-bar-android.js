import React from "react";
import { Icon, SearchBar } from "react-native-elements";
import { DefaultTheme } from "../../../theme/default-theme";

export default function SearchBarAndroid({ placeholder, value = "", onChange = p => p, style={} }) {
  return (
    <SearchBar
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      platform="android"
      containerStyle={{
        ...style,
        backgroundColor: "transparent",
      }}
      inputContainerStyle={{
        backgroundColor: "white",
        elevation: 5,
        borderRadius: 5,
      }}
    />
  );
}
