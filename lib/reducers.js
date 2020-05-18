import { combineReducers } from 'redux';

/**
 * @function createReducer - Combine reducer for given page level component with global ones
 * @param {Object} injectedReducers
 * @returns {function}
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    ...injectedReducers,
  });
}