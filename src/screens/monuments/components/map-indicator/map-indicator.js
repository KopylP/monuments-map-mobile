import React from "react";
import { connect } from "react-redux";
import AbsoluteIndicator from "../../../../components/template/indicators/absolute-indicator/absolute-indicator";

function MapIndicator({ loading }) {
  return (
    <>
      {loading && (
        <AbsoluteIndicator backgroundColor="rgba(100, 100, 100, 0.3)" />
      )}
    </>
  );
}

const bindStateToProps = ({ monuments: { loading } }) => ({ loading });

export default connect(bindStateToProps)(MapIndicator);
