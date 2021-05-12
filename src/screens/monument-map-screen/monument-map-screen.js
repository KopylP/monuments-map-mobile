import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import withMonumentService from "../../components/hoc-helpers/with-monument-service";
import withReduxData from "../../components/hoc-helpers/with-redux-data";
import MonumentsMapWithModal from "../../components/organisms/monuments-map-with-modal";
import {
  fetchMonumentMap,
  requestMonumentMapFetch,
} from "../../redux/actions/monument-map-actions";
import { navigateToMonumentsDetailScreen } from "../monument-detail-screen/monument-detail-screen";

function MonumentMapScreen({ monuments, loading }) {
  const { navigate } = useNavigation();

  const handleMonumentPress = (monument) => {
    navigateToMonumentsDetailScreen(navigate)(monument);
  };

  return (
    <MonumentsMapWithModal
      monuments={monuments}
      loading={loading}
      onMonumentPress={handleMonumentPress}
    />
  );
}

const bindDispatchToProps = (dispatch, { monumentService }) => {
  return bindActionCreators(
    {
      fetchAction: fetchMonumentMap(monumentService),
      requestAction: requestMonumentMapFetch,
    },
    dispatch
  );
};

const bindStateToProps = ({
  monumentMap: { requestFetch, error, monuments, loading },
}) => ({
  requestFetch,
  error,
  monuments,
  loading,
});

const bindPropsToActions = (p) => ({
  fetchAction: p.fetchAction,
  requestAction: p.requestAction,
});

const composed = compose(
  withMonumentService(),
  connect(bindStateToProps, bindDispatchToProps),
  withReduxData(bindPropsToActions)
);

export default composed(MonumentMapScreen);
