import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Button, Badge } from "react-native-elements";
import { DefaultTheme } from "../../../../theme/default-theme";
import { connect } from "react-redux";
import { isIOS } from "../../../../helpers/platform-helpers";
import { compose } from "redux";
import { yearsRange } from "../../../../config";
import { arraysAreEquals } from "../../../../helpers/array-helpers";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function FilterButton({ filters }) {
  const { navigate } = useNavigation();

  const { top } = useSafeAreaInsets();

  const handlePress = () => {
    navigate("Filters");
  };

  const countOfFilters = () => {
    const { cities, statuses, conditions } = filters;
    let count = cities.length + statuses.length + conditions.length;
    if (!arraysAreEquals(filters.yearsRange, yearsRange)) {
      count++;
    }
    return count;
  };

  const filterCounts = countOfFilters();

  return (
    <View
      style={{
        position: "absolute",
        top: 14 + top,
        right: 15,
        alignSelf: "center",
      }}
    >
      <Button
        onPress={handlePress}
        buttonStyle={{
          backgroundColor: DefaultTheme.palette.colors.primary.main,
          padding: 5,
          borderRadius: 5,
        }}
        icon={{
          name: "ios-options",
          type: "ionicon",
          size: 20,
          color: "white",
        }}
      />
      {filterCounts !== 0 && (
        <Badge
          status="error"
          value={filterCounts}
          badgeStyle={{
            borderWidth: 0,
          }}
          textStyle={
            isIOS
              ? {
                  marginLeft: 1,
                  marginTop: 1,
                }
              : {}
          }
          containerStyle={{ position: "absolute", top: -8, right: -8 }}
        ></Badge>
      )}
    </View>
  );
}

const bindStateToProps = ({ filter }) => ({ filters: filter });

const composed = compose(connect(bindStateToProps));

export default composed(FilterButton);
