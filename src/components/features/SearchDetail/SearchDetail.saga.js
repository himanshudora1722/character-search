import { put, takeEvery, all } from 'redux-saga/effects';
import { LOAD_PRODUCT_INFO, LOAD_PRODUCT_INFO_SUCCESS } from './SearchDetail.constants';

export function* loadProductDetailSaga() {
  const json = yield fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json(),);    
  yield put({ type: LOAD_PRODUCT_INFO_SUCCESS, json: json.results, });
}
export default function* productDetailPageSaga() {
  try {
    yield all([takeEvery(LOAD_PRODUCT_INFO, loadProductDetailSaga)]);
  } catch (err) {
      console.log('Error Occured')
  }
}
