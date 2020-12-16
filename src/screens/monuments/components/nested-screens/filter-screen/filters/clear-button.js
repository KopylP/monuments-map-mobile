import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useLocate } from "../../../../../../components/hooks/locate-hooks";

function ClearButton({ onClear = (p) => p }) {
  const { t } = useLocate();

  return (
    <TouchableOpacity onPress={onClear}>
      <Text
        style={{
          color: "white",
          fontSize: 14,
          textTransform: "uppercase",
          fontWeight: "500",
          letterSpacing: 1,
          margin: 16,
        }}
      >
        {t("Clear")}
      </Text>
    </TouchableOpacity>
  );
}

export default ClearButton;
