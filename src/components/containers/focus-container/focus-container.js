import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

export default function FocusContainer({ children, onChange = (p) => p }) {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", () => {
      onChange(true);
    });

    const unsubscribeBlur = navigation.addListener("blur", () => {
      onChange(false);
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);

  return <>{children}</>;
}
