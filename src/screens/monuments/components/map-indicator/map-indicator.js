import React from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { connect } from "react-redux";
import AbsoluteIndicator from "../../../../components/template/indicators/absolute-indicator/absolute-indicator";
import { DefaultTheme } from "../../../../theme/default-theme";

function MapIndicator({ loading }) {
  return (
    <>
      {loading && (
        <View
          pointerEvents="none"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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

const bindStateToProps = ({ monuments: { loading } }) => ({ loading });

export default connect(bindStateToProps)(MapIndicator);
