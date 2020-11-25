import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shopdata/shopdata.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import ShoppageGrid from '../shoppage-grids/shoppage-grids.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const ShoppageGridContainer = compose(connect(mapStateToProps), WithSpinner)(ShoppageGrid);

export default ShoppageGridContainer;