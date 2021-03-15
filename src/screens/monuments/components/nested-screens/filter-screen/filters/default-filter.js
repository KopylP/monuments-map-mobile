import React from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import { Icon } from "react-native-elements";
import { logEvent } from "expo-firebase-analytics";
import FilterTitle from "./filter-title";

export default function DefaultFilter({
  selectedValues,
  setSelectedValues,
  data,
  title,
  style = {},
}) {
  const isChipSelected = (id) => selectedValues.includes(id);

  const handleChipPress = (id) => {
    const index = selectedValues.indexOf(id);
    if (index < 0) {
      setSelectedValues([...selectedValues, id]);
    } else {
      const newValues = [...selectedValues];
      newValues.splice(index, 1);
      setSelectedValues(newValues);
    }
    logFilterClick(id);
  };

  const logFilterClick = (id) => {
    const filterChip = data.find((p) => p.id === id);
    logEvent("FilterPressed", { name: filterChip.abbreviation });
  };

  const { background, main } = DefaultTheme.palette.colors.primary;

  return (
    <View style={[{ width: "100%" }, style]}>
      <FilterTitle title={title} />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {data &&
          data.map((option, i) => {
            return (
              <Chip
                key={i}
                style={{
                  margin: 5,
                  maxWidth: "90%",
                  backgroundColor: isChipSelected(option.id)
                    ? main
                    : background,
                }}
                textStyle={{
                  color: "white",
                }}
                icon={({ size }) =>
                  isChipSelected(option.id) && (
                    <Icon
                      type="font-awesome"
                      name="check"
                      size={size}
                      color="white"
                    />
                  )
                }
                onPress={() => handleChipPress(option.id)}
                selected={isChipSelected(option.id)}
                selectedColor={main}
                mode="outlined"
              >
                {option.name}
              </Chip>
            );
          })}
      </View>
    </View>
  );
}
