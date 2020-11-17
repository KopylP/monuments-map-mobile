import React from "react";
import { connect } from "react-redux";
import { changeConditions } from "../../../../../../redux/actions/filter-actions";
import DefaultFilter from "./default-filter";

function ConditionsFilter({ selectedValues, data, changeConditions, style = {} }) {
  return (
    <DefaultFilter
      title="Conditions"
      selectedValues={selectedValues}
      setSelectedValues={changeConditions}
      data={data}
      style={style}
    />
  );
}

const bindStateToProps = ({ filter, conditions }) => ({
  selectedValues: filter.conditions,
  data: conditions.conditions,
});
const bindDispatchToProps = { changeConditions };

export default connect(bindStateToProps, bindDispatchToProps)(ConditionsFilter);
