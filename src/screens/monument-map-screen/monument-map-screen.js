import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import withMonumentService from "../../components/hoc-helpers/with-monument-service";
import {
  fetchMonuments,
  requestMonumentsFetch,
} from "../../redux/actions/monuments-actions";
import withReduxData from "../../components/hoc-helpers/with-redux-data";
import { navigateToMonumentsDetailScreen } from "../monument-detail-screen/monument-detail-screen";
import MonumentsMapWithModal from "../../components/organisms/monuments-map-with-modal";
import {
  fetchMonumentMap,
  requestMonumentMapFetch,
} from "../../redux/actions/monument-map-actions";

function MonumentMapScreen({ monuments, loading }) {
  // const { navigate } = useNavigation();

  // const handleMonumentPress = (monument, shareId) => {
  //   navigateToMonumentsDetailScreen(navigate)(monument, shareId);
  // };

  return (
    <MonumentsMapWithModal
      monuments={monuments}
      // loading={loading}
      // onMonumentPress={handleMonumentPress}
      // enableClick={true}
      // LeftComponent={<Logo/>}
      // RightComponent={<MonumentsMapFilterButton/>}
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
