import React from "react";
import { connect } from "react-redux";
import { useLocate } from "../../../../components/hooks/locate-hooks";
import ChipFilterList from "../../../../components/molecules/chip-filter-list/chip-filter-list";

function StatusesFilter({ selectedStatuses, data, changeStatuses, style = {} }) {

  const { t } = useLocate();

  return (
    <ChipFilterList
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

