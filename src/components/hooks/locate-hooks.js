import { useContext } from "react";
import { arabToRoman } from "roman-numbers";
import { LocateContext } from "../../context/locate-context";
import Period from "../../models/period";

export const useLocate = () => {
  return useContext(LocateContext);
};

export const useLocateYear = (year, period) => {
  const { t } = useLocate();

  let locatedYear;
  switch (period) {
    case Period.StartOfCentury:
      locatedYear = t("Early of century", { century: arabToRoman(year) });
      break;
    case Period.MiddleOfCentury:
      locatedYear = t("Middle of the century", { century: arabToRoman(year) });
      break;
    case Period.EndOfCentury:
      locatedYear = t("End of the century", { century: arabToRoman(year) });
      break;
    case Period.Year:
      locatedYear = t("simple year", { year });
      break;
    case Period.Decades:
      locatedYear = t("Years of the century", {
        decade: year % 100,
        century: arabToRoman(+("" + year).slice(0, 2) + 1),
      });
      break;
    default:
      locatedYear = "";
      break;
  }

  return locatedYear;
};
