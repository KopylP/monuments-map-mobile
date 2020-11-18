import React from "react";
import { connect } from "react-redux";
import DefaultFilter from "./default-filter";

function ConditionsFilter({ selectedConditions, data, changeConditions, style = {} }) {
  return (
    <DefaultFilter
      title="Conditions"
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
