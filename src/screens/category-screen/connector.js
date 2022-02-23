import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "redux";
import withMonumentService from "../../components/hoc-helpers/with-monument-service";
import withReduxData from "../../components/hoc-helpers/with-redux-data";
import { fetchCategories, requestCategoriesFetch } from "../../redux/actions/categories-actions";

const bindDispatchToProps = (dispatch, { monumentService }) => {
    return bindActionCreators(
      {
        fetchAction: fetchCategories(monumentService),
        requestAction: requestCategoriesFetch,
      },
      dispatch
    );
  }
  
  const bindStateToProps = ({
    categories: { requestFetch, error, categories, loading },
  }) => ({
    requestFetch,
    error,
    categories,
    loading,
  });
  
  const bindPropsToActions = (p) => ({
    fetchAction: p.fetchAction,
    requestAction: p.requestAction,
  });
  
  export const connectData = compose(
    withMonumentService(),
    connect(bindStateToProps, bindDispatchToProps),
    withReduxData(bindPropsToActions)
  );