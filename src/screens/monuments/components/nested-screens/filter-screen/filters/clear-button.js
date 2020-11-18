import React from "react";
import { Button } from "react-native-paper";
import { clearFilters } from "../../../../../../redux/actions/filter-actions";

function ClearButton({ onClear = (p) => p }) {
  return (
    <Button color="white" onPress={onClear}>
      Clear
    </Button>
  );
}

const mapDispatchToProps = { clearFilters };

export default ClearButton;
