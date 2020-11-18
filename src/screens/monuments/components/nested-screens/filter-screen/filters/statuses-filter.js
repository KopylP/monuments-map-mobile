import React from "react";
import { connect } from "react-redux";
import DefaultFilter from "./default-filter";

function StatusesFilter({ selectedStatuses, data, changeStatuses, style = {} }) {
  return (
    <DefaultFilter
      title="Statuses"
      selectedValues={selectedStatuses}
      setSelectedValues={changeStatuses}
      data={data}
      style={style}
    />
  );
}

const bindStateToProps = ({ statuses }) => ({
  data: statuses.statuses,
});
export default connect(bindStateToProps)(StatusesFilter);

