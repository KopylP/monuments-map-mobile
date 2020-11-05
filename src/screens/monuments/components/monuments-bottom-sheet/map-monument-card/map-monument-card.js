import React from "react";
import { connect } from "react-redux";
import MonumentCard from "../../../../../components/common/monuments/monument-card";

function MapMonumentCard({ selectedMonument }) {
  return <MonumentCard monument={selectedMonument} />;
}

const bindStateToProps = ({ selectedMonument: { monument } }) => ({
  selectedMonument: monument,
});

export default connect(bindStateToProps)(MapMonumentCard);
