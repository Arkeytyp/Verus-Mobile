import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectClaims, selectClaimCategories, selectSelectedClaims } from '../../../../selectors/identity';
import { setClaimVisibility, updateSelectedClaims, clearSelectedClaims } from '../../../../actions/actionCreators';

const mapStateToProps = (state) => ({
  claims: selectClaims(state),
  claimCategories: selectClaimCategories(state),
  selectedClaims: selectSelectedClaims(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      setClaimVisibility,
      updateSelectedClaims,
      clearSelectedClaims,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);