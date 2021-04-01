import { useNavigation } from "@react-navigation/native";
import React from "react";
import { connect } from "react-redux";
import MonumentCard from "../../../../components/molecules/monument-card/monument-card";
import { navigateToMonumentsDetailScreen } from "../../../monument-detail-screen/monument-detail-screen";

function MapMonumentCard({ selectedMonument, transition, onPress = (p) => p }) {
  const { navigate } = useNavigation();
  const shareId = `map-${selectedMonument ? selectedMonument.id : 0}`;
  return (
    <MonumentCard
      monument={selectedMonument}
      shareId={shareId}
      onPress={(monument, imageBase64) => {
        if (!transition) {
          onPress();
          navigateToMonumentsDetailScreen(navigate)(
            monument,
            imageBase64,
            shareId
          );
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
