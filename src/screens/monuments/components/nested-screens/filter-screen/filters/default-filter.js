import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip } from "react-native-paper";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import { Icon } from "react-native-elements";

export default function DefaultFilter({
  selectedValues,
  setSelectedValues,
  data,
  title,
  style = {}
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
  };

  const { background, main } = DefaultTheme.pallete.colors.primary;

  return (
    <View style={[{ width: "100%" }, style]}>
      <Text style={styles.text}>{title}</Text>
      <View style={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
      }}>
        {data && data.map((option, i) => {
          return (
            <Chip
              key={i}
              style={{
                margin: 5,
                backgroundColor: isChipSelected(option.id) ? main : background,
              }}
              textStyle={{
                  color: "white"
              }}
              icon={({size}) => isChipSelected(option.id) && <Icon type="font-awesome" size={size} name="check" color="white"/> }
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

const styles = StyleSheet.create({
    text: {
        margin: 5,
        fontSize: 20,
        fontWeight: "700"
    }
});
