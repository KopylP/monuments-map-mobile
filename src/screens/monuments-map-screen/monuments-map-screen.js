import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import MonumentsMapFilterButton from "./components/monuments-map-fitler-button";
import withMonumentService from "../../components/hoc-helpers/with-monument-service";
import {
  fetchMonuments,
  requestMonumentsFetch,
} from "../../redux/actions/monuments-actions";
import withReduxData from "../../components/hoc-helpers/with-redux-data";
import Logo from "./components/logo/logo";
import { closeSelectedMonumentDialog } from "../../redux/actions/selected-monument-actions";
import MonumentsListWithMap from "../../components/organisms/monuments-list-with-map/monuments-list-with-map";
import { useNavigation } from "@react-navigation/native";
import { navigateToMonumentsDetailScreen } from "../monument-detail-screen/monument-detail-screen";

function MonumentsMapScreen({ monuments, loading }) {

  const { navigate } = useNavigation();

  const handleMonumentPress = (monument, image, shareId) => {
    navigateToMonumentsDetailScreen(navigate)(monument, image, shareId);
  };

  return (
    <MonumentsListWithMap
      monuments={monuments}
      loading={loading}
      onMonumentPress={handleMonumentPress}
      enableClick={true}
      LeftComponent={<Logo/>}
      RightComponent={<MonumentsMapFilterButton/>}
    />
  );
}

const bindDispatchToProps = (dispatch, { monumentService }) => {
  return bindActionCreators(
    {
      fetchAction: fetchMonuments(monumentService),
      requestAction: requestMonumentsFetch,
      closeSelectedMonumentDialog: closeSelectedMonumentDialog,
    },
    dispatch
  );
};

const bindStateToProps = ({
  monuments: { requestFetch, error, monuments, loading },
  filter: { statuses, conditions, cities, yearsRange },
}) => ({
  requestFetch,
  statuses,
  conditions,
  cities,
  yearsRange,
  error,
  monuments,
  loading,
});

const bindPropsToActions = (p) => ({
  fetchAction: p.fetchAction,
  requestAction: p.requestAction,
});

const bindPropsToParams = ({ statuses, conditions, cities, yearsRange }) => [
  cities,
  statuses,
  conditions,
  yearsRange,
];

const composed = compose(
  withMonumentService(),
  connect(bindStateToProps, bindDispatchToProps),
  withReduxData(bindPropsToActions, bindPropsToParams)
);

export default composed(MonumentsMapScreen);
