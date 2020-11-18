import React from "react";
import { connect } from "react-redux";
import { useLocate } from "../../../../../../components/hooks/locate-hooks";
import DefaultFilter from "./default-filter";

function StatusesFilter({ selectedStatuses, data, changeStatuses, style = {} }) {

  const { t } = useLocate();

  return (
    <DefaultFilter
      title={t("Monument status")}
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

