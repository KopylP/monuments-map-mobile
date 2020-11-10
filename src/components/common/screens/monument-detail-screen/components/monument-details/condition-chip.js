import React from "react";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import Chip from "../../../../../template/chips/chip";

export default function ConditionChip({ condition, destroyYear, style = {} }) {
  let color;

  switch (condition.abbreviation) {
    case "good-condition":
      color = DefaultTheme.pallete.colors.primary.main;
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
      color = DefaultTheme.pallete.colors.primary.main;
  }

  const title = condition.name;

  return <Chip style={style} color={color} title={title}/>
}
