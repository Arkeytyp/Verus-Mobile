import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectClaimCategoriesToDisplay, selectShowEmptyClaimCategories, selectClaimsByCategoryId } from '../../../selectors/identity';
import { setActiveClaimCategory, setShowEmptyClaimCategories, addNewCategory } from '../../../actions/actionCreators';

const mapStateToProps = (state) => ({
  claimCategories: selectClaimCategoriesToDisplay(state),
  showEmptyClaimCategories: selectShowEmptyClaimCategories(state),
  claims: selectClaimsByCategoryId(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      setActiveClaimCategory,
      setShowEmptyClaimCategories,
      addNewCategory,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
