import React from "react";
import { connect } from "react-redux";
import { changeStatuses } from "../../../../../../redux/actions/filter-actions";
import DefaultFilter from "./default-filter";

function StatusesFilter({ selectedValues, data, changeStatuses, style = {} }) {
  return (
    <DefaultFilter
      title="Statuses"
      selectedValues={selectedValues}
      setSelectedValues={changeStatuses}
      data={data}
      style={style}
    />
  );
}

const bindStateToProps = ({ filter, statuses }) => ({
  selectedValues: filter.statuses,
  data: statuses.statuses,
});
const bindDispatchToProps = { changeStatuses };

export default connect(bindStateToProps, bindDispatchToProps)(StatusesFilter);

