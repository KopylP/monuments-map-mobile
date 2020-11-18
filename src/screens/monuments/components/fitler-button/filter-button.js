import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Button, Badge } from "react-native-elements";
import { DefaultTheme } from "../../../../theme/default-theme";
import { connect } from "react-redux";

function FilterButton({ filters }) {
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate("Filters");
  };

  const countOfFilters = () => {
    const { cities, statuses, conditions } = filters;
    return cities.length + statuses.length + conditions.length;
  };

  const filterCounts = countOfFilters();

  return (
    <View
      style={{
        position: "absolute",
        top: 24,
        right: 15,
        alignSelf: "center",
      }}
    >
      <Button
        onPress={handlePress}
        buttonStyle={{
          backgroundColor: DefaultTheme.pallete.colors.primary.main,
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
          textStyle={{
            marginLeft: 1,
            marginTop: 1,
          }}
          containerStyle={{ position: "absolute", top: -8, right: -8, }}
        ></Badge>
      )}
    </View>
  );
}

const bindStateToProps = ({ filter }) => ({ filters: filter });

export default connect(bindStateToProps)(FilterButton);
