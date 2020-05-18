import {
    LOAD_PRODUCT_INFO_SUCCESS,
    FAILURE,
  } from './SearchDetail.constants';

  const initialState = {
    product: null,
  };
  
  const productDetailPageData = (state= initialState, action) => {
    switch (action.type) {
        case FAILURE:
            return { ...state, error: { ...action.json } };
        case LOAD_PRODUCT_INFO_SUCCESS: {
          return { ...state, product: [ ...action.json ] };
        }
        default:
            return state;
    }
  };

export default productDetailPageData;
