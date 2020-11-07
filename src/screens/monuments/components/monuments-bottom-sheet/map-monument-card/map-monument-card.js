import { useNavigation } from "@react-navigation/native";
import React from "react";
import { connect } from "react-redux";
import MonumentCard from "../../../../../components/common/monuments/monument-card";

function MapMonumentCard({ selectedMonument }) {
  const navigation = useNavigation();
  const shareId = `map-${selectedMonument ? selectedMonument.id : 0}`;
  return (
    <MonumentCard
      monument={selectedMonument}
      shareId={shareId}
      onPress={() => {
        navigation.navigate("Detail", {
          monument: selectedMonument,
          shareId,
        });
      }}
    />
  );
}

const bindStateToProps = ({ selectedMonument: { monument } }) => ({
  selectedMonument: monument,
});

export default connect(bindStateToProps)(MapMonumentCard);
