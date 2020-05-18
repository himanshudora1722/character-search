import {
    LOAD_PRODUCT_INFO,
    FAILURE,
  } from './SearchDetail.constants';
  
  export const failure = error => ({
    type: FAILURE,
    error,
  });
  
  export const loadProductInfo = data => ({
    type: LOAD_PRODUCT_INFO,
    data,
  });
  
  export default loadProductInfo;
  