import React from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { connect } from "react-redux";
import { DefaultTheme } from "../../../../theme/default-theme";

function MapIndicator({ loading }) {
  return (
    <>
      {loading && (
        <View pointerEvents="none" style={styles.container}>
          <View style={styles.indicatorContainer}>
            <ActivityIndicator
              color={DefaultTheme.pallete.colors.primary.main}
              size="large"
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorContainer: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

const bindStateToProps = ({ monuments: { loading } }) => ({ loading });

export default connect(bindStateToProps)(MapIndicator);
