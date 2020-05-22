import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  selectClaimCategoriesToDisplay, selectShowEmptyClaimCategories, selectClaimsCountByCategory, selectClaimsByIdentityId, selectEmptyCategoryCount,
} from '../../../selectors/identity';
import { setActiveClaimCategory, setShowEmptyClaimCategories, addNewCategory, toggleShowHiddenClaims } from '../../../actions/actionCreators';

const mapStateToProps = (state) => ({
  claimCategories: selectClaimCategoriesToDisplay(state),
  showEmptyClaimCategories: selectShowEmptyClaimCategories(state),
  claims: selectClaimsByIdentityId(state),
  claimsCountByCategory: selectClaimsCountByCategory(state),
  emptyCategoryCount:selectEmptyCategoryCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      setActiveClaimCategory,
      setShowEmptyClaimCategories,
      addNewCategory,
      toggleShowHiddenClaims,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
