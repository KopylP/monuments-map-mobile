import React, { memo } from "react";
import { connect } from "react-redux";
import { useLocate } from "../../../../components/hooks/locate-hooks";
import ChipFilterList from "../../../../components/molecules/chip-filter-list/chip-filter-list";

function ConditionsFilter({ selectedConditions, data, changeConditions, style = {} }) {

  const { t } = useLocate();

  return (
    <ChipFilterList
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

export default connect(bindStateToProps)(memo(ConditionsFilter));
