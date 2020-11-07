import { useNavigation } from "@react-navigation/native";
import React from "react";
import { connect } from "react-redux";
import MonumentCard from "../../../../../components/common/monuments/monument-card";

function MapMonumentCard({ selectedMonument, transition }) {
  const navigation = useNavigation();
  const shareId = `map-${selectedMonument ? selectedMonument.id : 0}`;
  return (
    <MonumentCard
      monument={selectedMonument}
      shareId={shareId}
      onPress={() => {
        if (!transition) {
          navigation.navigate("Detail", {
            monument: selectedMonument,
            shareId,
          });
        }
      }}
    />
  );
}

const bindStateToProps = ({
  selectedMonument: { monument },
  transition: { transition },
}) => ({
  selectedMonument: monument,
  transition,
});

export default connect(bindStateToProps)(MapMonumentCard);
