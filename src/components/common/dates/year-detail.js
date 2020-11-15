import React from "react";
import { Text } from "react-native";
import Period from "../../../models/period";
import { arabToRoman } from "roman-numbers";
import { useLocate } from "../../hooks/locate-hooks";

export default function DetailYear({ year, period, style={} }) {

  const { t } = useLocate();

  let dateText;
  switch (period) {
    case Period.StartOfCentury:
      dateText = t("Early of century", { century: arabToRoman(year) });
      break;
    case Period.MiddleOfCentury:
      dateText = t("Middle of the century", { century: arabToRoman(year) });
      break;
    case Period.EndOfCentury:
      dateText = t("End of the century", { century: arabToRoman(year) });
      break;
    case Period.Year:
      dateText = t("simple year", { year });
      break;
    case Period.Decades:
      dateText = t("Years of the century", {
        decade: year % 100,
        century: arabToRoman(+("" + year).slice(0, 2) + 1),
      });
      break;
    default:
      dateText = "";
      break;
  }

  return <Text style={style}>{dateText}</Text>;
}
