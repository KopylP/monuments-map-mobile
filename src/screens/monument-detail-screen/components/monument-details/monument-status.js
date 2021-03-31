import React from "react";
import { Text } from "react-native";

export default function MonumentStatus({ status, protectionNumber = "", style }) {
  
  const protectionNumberString =
    protectionNumber === "" ? "" : `(${protectionNumber})`;

  return (
    <Text style={style}>
      {status && status.name} {protectionNumberString}
    </Text>
  );
}
