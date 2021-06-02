import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { isIOS } from "../../../../helpers/platform-helpers";
import Title from "../../../../components/atoms/typography/title";
import CopyableText from "../../../../components/atoms/copyable-text/copyable-text";
import DetailYear from "../../../../components/atoms/dates/year-detail";
import ButtonGroup from "./button-group";
import ConditionChip from "./condition-chip";
import MonumentAddress from "./monument-address";
import MonumentStatus from "./monument-status";
import withMsGetMethod from "../../../../components/hoc-helpers/with-ms-get-method";
import withRouteParams from "../../../../components/hoc-helpers/with-route-params";
import withData from "../../../../components/hoc-helpers/with-data";
import { compose } from "redux";
import Loader from "../loader";

function MonumentDetails({ data, loading, params }) {
  if (loading) return <Loader />;

  if (!data) return null;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Title title={data.name} style={styles.title} />
        <MonumentAddress {...data} style={styles.address} />
        <DetailYear {...data} style={styles.year} />
        <MonumentStatus style={styles.status} {...data} />
        <ButtonGroup monument={data} />
        <View style={styles.chips}>
          <ConditionChip {...data} />
        </View>
        <CopyableText style={styles.description}>
          {data.description || ""}
        </CopyableText>
      </View>
    </View>
  );
}

const bindRouteParamsToMethodProps = ({ monument }) => [monument.id];

const composed = compose(
  withMsGetMethod((p) => p.getMonumentById),
  withRouteParams(),
  withData(bindRouteParamsToMethodProps)
);

const marginHorizontal = 20;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  title: {
    marginHorizontal,
  },
  buttonsContainer: {
    marginTop: 15,
    flexDirection: "row",
    marginHorizontal,
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    marginHorizontal,
    color: "black",
  },
  status: {
    fontWeight: isIOS ? "600" : "700",
    marginTop: 5,
    marginHorizontal,
    color: "black",
  },
  year: {
    fontWeight: isIOS ? "600" : "700",
    marginTop: 15,
    marginHorizontal,
    color: "black",
  },
  address: {
    marginTop: 3,
    marginHorizontal,
  },
  chips: {
    marginTop: 10,
    alignItems: "flex-start",
    marginHorizontal,
  },
});

export default composed(memo(MonumentDetails));
