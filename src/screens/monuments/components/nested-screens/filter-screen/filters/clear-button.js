import React from "react";
import { Button } from "react-native-paper";
import { useLocate } from "../../../../../../components/hooks/locate-hooks";
import { clearFilters } from "../../../../../../redux/actions/filter-actions";

function ClearButton({ onClear = (p) => p }) {
  const { t } = useLocate();

  return (
    <Button color="white" onPress={onClear}>
      {t("Clear")}
    </Button>
  );
}

const mapDispatchToProps = { clearFilters };

export default ClearButton;
