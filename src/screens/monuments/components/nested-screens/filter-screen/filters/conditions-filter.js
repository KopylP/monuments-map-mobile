import React from "react";
import { connect } from "react-redux";
import { useLocate } from "../../../../../../components/hooks/locate-hooks";
import DefaultFilter from "./default-filter";

function ConditionsFilter({ selectedConditions, data, changeConditions, style = {} }) {

  const { t } = useLocate();

  return (
    <DefaultFilter
      title={t("Monument condition")}
      selectedValues={selectedConditions}
      setSelectedValues={changeConditions}
      data={data}
      style={style}
    />
  );
}

const bindStateToProps = ({ conditions }) => ({
  data: conditions.conditions,
});

export default connect(bindStateToProps)(ConditionsFilter);
