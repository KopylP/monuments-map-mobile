import React from "react";
import { Icon, SearchBar } from "react-native-elements";
import { DefaultTheme } from "../../../theme/default-theme";

export default function SearchBarIOS({ placeholder, value = "", onChange = p => p, style={} }) {
  return (
    <SearchBar
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      platform="ios"
      containerStyle={{
        ...style,
        backgroundColor: "transparent",
      }}
      placeholderTextColor={DefaultTheme.pallete.colors.primary.extraLight}
      inputStyle={{
        color: "white",
      }}
      searchIcon={
        <Icon
          name="ios-search"
          type="ionicon"
          color={DefaultTheme.pallete.colors.primary.extraLight}
        />
      }
      clearIcon={
        <Icon
          name="ios-close-circle"
          type="ionicon"
          size={18}
          color={DefaultTheme.pallete.colors.primary.extraLight}
        />
      }
      labelStyle={{
        fontSize: 12,
      }}
      cancelButtonTitle="Закрити"
      inputContainerStyle={{
        height: 20,
        backgroundColor: DefaultTheme.pallete.colors.primary.dark,
      }}
    />
  );
}
