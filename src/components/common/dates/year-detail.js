import React from "react";
import { Text } from "react-native";
import Period from "../../../models/period";
// import { useTranslation } from "react-i18next";
import { arabToRoman } from "roman-numbers";

export default function DetailYear({ year, period, style={} }) {
  let dateText;
  switch (period) {
    case Period.StartOfCentury:
      dateText = arabToRoman(year);
      break;
    case Period.MiddleOfCentury:
      dateText = arabToRoman(year);
      break;
    case Period.EndOfCentury:
      dateText = arabToRoman(year);
      break;
    case Period.Year:
      dateText = year;
      break;
    case Period.Decades:
    //   dateText = t("Built in the years of the century", {
    //     decade: year % 100,
    //     century: arabToRoman(+("" + year).slice(0, 2) + 1),
    //   });
      break;
    default:
      dateText = "";
  }

  return <Text style={style}>{dateText}</Text>;
}
