import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import initRedux from '../../../../lib/configureStore';
import saga from './SearchDetail.saga';
import productDetailPageData from './SearchDetail.reducer';
import loadProductInfo from './SearchDetail.action';
import styles from './SearchDetail.style';
import withStyles from '../../../../lib/withStyles';
import SearchDetailView from '../../organism/SearchDetail'

class SearchDetail extends Component {
	componentDidMount() {
		this.props.showProductsDispatch();
	}

	render() {
		const { characters, className } = this.props;
		
		return characters ? (
			<SearchDetailView 
				characters={characters}
				className={className}
			/>
		): null;
	}
}
const mapDispatchToProps = dispatch => ({
  showProductsDispatch: (data) => {
		dispatch(loadProductInfo(data));
  },
});

const mapStateToProps = (state) => {
	return {
		characters: state && state.product,
	}
}

const SearchDetailStyles = withStyles(SearchDetail, styles);
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withRedux = initRedux({
	key: "SearchDetail",
	reducer: productDetailPageData,
	saga,
});

export default compose(
	withRedux,
	withConnect,
)(SearchDetailStyles);
