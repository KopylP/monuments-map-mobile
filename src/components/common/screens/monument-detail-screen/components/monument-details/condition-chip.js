import React from "react";
import { useLocateYear } from "../../../../../hooks/locate-hooks";
import Chip from "../../../../../template/chips/chip";

export default function ConditionChip({
  condition,
  destroyYear,
  destroyPeriod,
  style = {},
}) {
  let color;
  const locatedYear = useLocateYear(destroyYear, destroyPeriod);

  switch (condition.abbreviation) {
    case "good-condition":
      color = "#57CC99";
      break;
    case "lost":
      color = "#dc0a14";
      break;
    case "lost-recently":
      color = "#dc0a14";
      break;
    case "verge-of-loss":
      color = "#f4c430";
      break;
    case "needs-repair":
      color = "#f4c430";
      break;
    default:
      color = "#57CC99";
  }

  const title =
    condition.name + (!destroyYear ? "" : ` (${locatedYear})`);

  return <Chip style={style} color={color} title={title} />;
}
