import React, { memo } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import CategoryItem from "../../../../components/atoms/category-item";
import { SCREEN_WIDTH } from "../../../../helpers/dimensions-helpers";

function CategoryList({ categories }) {
  return (
    <View style={styles.container}>
      {categories.map((category, i) => {
        return (
          <CategoryItem
            imageSource={{
              uri: `https://picsum.photos/20${Math.floor(Math.random() * 11)}`,
            }}
            style={styles.category}
            title="Hello world"
            color="red"
            key={i}
          />
        );
      })}
      <CategoryItem
        imageSource={{
          uri: `https://picsum.photos/80${Math.floor(Math.random() * 11)}`,
        }}
        style={styles.fullWidthCategory}
        title="Hello world"
        color="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  category: {
    width: SCREEN_WIDTH / 2 - 30,
    height: (SCREEN_WIDTH / 2 - 20) / 1.618,
    margin: 10,
  },
  fullWidthCategory: {
    width: SCREEN_WIDTH - 40,
    height: (SCREEN_WIDTH / 2 - 20) / 1.618,
    margin: 10,
  },
});

export default memo(CategoryList);
