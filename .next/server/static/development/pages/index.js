module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/configureStore.js":
/*!*******************************!*\
  !*** ./lib/configureStore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./lib/reducers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import globalSaga from '../src/components/features/SearchDetail/SearchDetail.saga';

const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
const middlewares = [sagaMiddleware];
const enhancers = [Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares)]; // Choose compose method depending upon environment and platform

const composeEnhancers =  false ? undefined : redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
/**
 * Create redux store with the middlewares and enhancers
 *
 * @param {Object} options
 * @param {Object} options.key - Unique key to recognize the page component
 * @param {Object} options.reducer - Reducers associated with the page commponent
 * @param {Object} options.saga - Sagas associated with the page commponent
 */

/* harmony default export */ __webpack_exports__["default"] = (options => BaseComponent => {
  const hasKey = !!options.key;

  if (!hasKey) {
    throw new Error(`${BaseComponent.displayName} needs to be passed with a key`);
  } //   const hasReducer = !!options.reducer;


  const hasSaga = !!options.saga; //   const reducer = hasKey && hasReducer ? { [options.key]: options.reducer } : {};

  const configureStore = (initialState = {}) => {
    const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(options.reducer, initialState, composeEnhancers(...enhancers)); // Keep access to 'run' method of saga task in store so thats its available globally with store

    store.runSaga = sagaMiddleware.run; // Keep record of reducer injected in store associated with unique key

    store.injectedReducers = options.reducer; // if (globalSaga) {
    //   // Run global saga and keep the task returned by running saga to access later while cancelling
    //   store.globalSaga = { globalSaga, task: store.runSaga(globalSaga) };
    // }
    // Keep record of saga injected in store associated with unique key

    store.injectedSagas = {};

    if (hasSaga) {
      // Run saga and keep the task returned by running saga to access later while cancelling
      store.injectedSagas[options.key] = _objectSpread({}, options.saga, {
        task: store.runSaga(options.saga)
      });
    }

    return store;
  };

  return next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(configureStore)(BaseComponent);
});

/***/ }),

/***/ "./lib/reducers.js":
/*!*************************!*\
  !*** ./lib/reducers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * @function createReducer - Combine reducer for given page level component with global ones
 * @param {Object} injectedReducers
 * @returns {function}
 */

function createReducer(injectedReducers) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_objectSpread({}, injectedReducers));
}

/***/ }),

/***/ "./lib/withStyles/index.js":
/*!*********************************!*\
  !*** ./lib/withStyles/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* The component send styles in form of an object
e.g. withStyles(WrappedComponent, {
  <desktop styles>
});

Note: Keys are defined in constants

If the component doesn't want to send 2 styles, it can send styles directly and not as keyed object.
*/

/* harmony default export */ __webpack_exports__["default"] = ((WrappedComponent, styles) => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(WrappedComponent)`
  ${props => styles ? styles[props.theme] || styles : ''};
  ${props => {
  if (!props.inheritedStyles) {
    return '';
  }

  if (props.inheritedStyles instanceof Array) {
    return props.inheritedStyles;
  }

  return props.inheritedStyles[props.theme] || '';
}};
`);

/***/ }),

/***/ "./pages/SearchDetail.js":
/*!*******************************!*\
  !*** ./pages/SearchDetail.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_pages_SearchDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/SearchDetail */ "./src/pages/SearchDetail/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _src_pages_SearchDetail__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchDetail */ "./pages/SearchDetail.js");
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home() {
  return __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Get Details"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  })), __jsx(_SearchDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/atoms/Button/button.js":
/*!***********************************************!*\
  !*** ./src/components/atoms/Button/button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/atoms/Button/button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Button = ({
  className,
  value,
  handleClick,
  text
}) => {
  return __jsx("button", {
    type: "button",
    value: value,
    className: className,
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/atoms/Button/index.js":
/*!**********************************************!*\
  !*** ./src/components/atoms/Button/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/atoms/Button/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/Input/index.js":
/*!*********************************************!*\
  !*** ./src/components/atoms/Input/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/components/atoms/Input/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _input__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/Input/input.js":
/*!*********************************************!*\
  !*** ./src/components/atoms/Input/input.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/atoms/Input/input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Input = ({
  className,
  type,
  text,
  id,
  handleChange,
  onKeyPress,
  name
}) => {
  return __jsx("input", {
    id: id,
    type: type,
    className: className,
    onChange: handleChange,
    name: name,
    onKeyPress: onKeyPress,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/atoms/Label/index.js":
/*!*********************************************!*\
  !*** ./src/components/atoms/Label/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label */ "./src/components/atoms/Label/label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _label__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/Label/label.js":
/*!*********************************************!*\
  !*** ./src/components/atoms/Label/label.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/atoms/Label/label.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Label = ({
  className,
  forLabel,
  text
}) => {
  return __jsx("label", {
    for: forLabel,
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./src/components/atoms/Select/index.js":
/*!**********************************************!*\
  !*** ./src/components/atoms/Select/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./src/components/atoms/Select/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _select__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/Select/select.js":
/*!***********************************************!*\
  !*** ./src/components/atoms/Select/select.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/atoms/Select/select.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Select = ({
  id,
  name,
  className,
  onChange,
  value
}) => {
  return __jsx("select", {
    id: id,
    name: name,
    className: className,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, value.map(item => {
    return __jsx("option", {
      value: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, item);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./src/components/features/SearchDetail/SearchDetail.action.js":
/*!*********************************************************************!*\
  !*** ./src/components/features/SearchDetail/SearchDetail.action.js ***!
  \*********************************************************************/
/*! exports provided: failure, loadProductInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProductInfo", function() { return loadProductInfo; });
/* harmony import */ var _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchDetail.constants */ "./src/components/features/SearchDetail/SearchDetail.constants.js");

const failure = error => ({
  type: _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_0__["FAILURE"],
  error
});
const loadProductInfo = data => ({
  type: _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_0__["LOAD_PRODUCT_INFO"],
  data
});
/* harmony default export */ __webpack_exports__["default"] = (loadProductInfo);

/***/ }),

/***/ "./src/components/features/SearchDetail/SearchDetail.constants.js":
/*!************************************************************************!*\
  !*** ./src/components/features/SearchDetail/SearchDetail.constants.js ***!
  \************************************************************************/
/*! exports provided: LOAD_PRODUCT_INFO, FAILURE, LOAD_PRODUCT_INFO_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_INFO", function() { return LOAD_PRODUCT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILURE", function() { return FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_INFO_SUCCESS", function() { return LOAD_PRODUCT_INFO_SUCCESS; });
const LOAD_PRODUCT_INFO = 'LOAD_PRODUCT_INFO';
const FAILURE = 'FAILURE';
const LOAD_PRODUCT_INFO_SUCCESS = 'LOAD_PRODUCT_INFO_SUCCESS';

/***/ }),

/***/ "./src/components/features/SearchDetail/SearchDetail.js":
/*!**************************************************************!*\
  !*** ./src/components/features/SearchDetail/SearchDetail.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/configureStore */ "./lib/configureStore.js");
/* harmony import */ var _SearchDetail_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchDetail.saga */ "./src/components/features/SearchDetail/SearchDetail.saga.js");
/* harmony import */ var _SearchDetail_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchDetail.reducer */ "./src/components/features/SearchDetail/SearchDetail.reducer.js");
/* harmony import */ var _SearchDetail_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchDetail.action */ "./src/components/features/SearchDetail/SearchDetail.action.js");
/* harmony import */ var _SearchDetail_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchDetail.style */ "./src/components/features/SearchDetail/SearchDetail.style.js");
/* harmony import */ var _lib_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../lib/withStyles */ "./lib/withStyles/index.js");
/* harmony import */ var _organism_SearchDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../organism/SearchDetail */ "./src/components/organism/SearchDetail/index.js");
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/features/SearchDetail/SearchDetail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











class SearchDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.props.showProductsDispatch();
  }

  render() {
    const {
      characters,
      className
    } = this.props;
    return characters ? __jsx(_organism_SearchDetail__WEBPACK_IMPORTED_MODULE_9__["default"], {
      characters: characters,
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 4
      }
    }) : null;
  }

}

const mapDispatchToProps = dispatch => ({
  showProductsDispatch: data => {
    dispatch(Object(_SearchDetail_action__WEBPACK_IMPORTED_MODULE_6__["default"])(data));
  }
});

const mapStateToProps = state => {
  return {
    characters: state && state.product
  };
};

const SearchDetailStyles = Object(_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(SearchDetail, _SearchDetail_style__WEBPACK_IMPORTED_MODULE_7__["default"]);
const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps);
const withRedux = Object(_lib_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"])({
  key: "SearchDetail",
  reducer: _SearchDetail_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  saga: _SearchDetail_saga__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(withRedux, withConnect)(SearchDetailStyles));

/***/ }),

/***/ "./src/components/features/SearchDetail/SearchDetail.reducer.js":
/*!**********************************************************************!*\
  !*** ./src/components/features/SearchDetail/SearchDetail.reducer.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchDetail.constants */ "./src/components/features/SearchDetail/SearchDetail.constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  product: null
};

const productDetailPageData = (state = initialState, action) => {
  switch (action.type) {
    case _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_0__["FAILURE"]:
      return _objectSpread({}, state, {
        error: _objectSpread({}, action.json)
      });

    case _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_0__["LOAD_PRODUCT_INFO_SUCCESS"]:
      {
        return _objectSpread({}, state, {
          product: [...action.json]
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (productDetailPageData);

/***/ }),

/***/ "./src/components/features/SearchDetail/SearchDetail.saga.js":
/*!*******************************************************************!*\
  !*** ./src/components/features/SearchDetail/SearchDetail.saga.js ***!
  \*******************************************************************/
/*! exports provided: loadProductDetailSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProductDetailSaga", function() { return loadProductDetailSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productDetailPageSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchDetail.constants */ "./src/components/features/SearchDetail/SearchDetail.constants.js");


function* loadProductDetailSaga() {
  const json = yield fetch('https://rickandmortyapi.com/api/character').then(response => response.json());
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
    type: _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_1__["LOAD_PRODUCT_INFO_SUCCESS"],
    json: json.results
  });
}
function* productDetailPageSaga() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_SearchDetail_constants__WEBPACK_IMPORTED_MODULE_1__["LOAD_PRODUCT_INFO"], loadProductDetailSaga)]);
  } catch (err) {
    console.log('Error Occured');
  }
}

/***/ }),

/***/ "./src/components/features/SearchDetail/SearchDetail.style.js":
/*!********************************************************************!*\
  !*** ./src/components/features/SearchDetail/SearchDetail.style.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
  &.o-searchDetail {
    color: ${props => props.theme.colors.secondary};
    padding: 0 ${props => props.theme.padding.p15}px;

    .character-block {
      padding: ${props => props.theme.padding.p15}px;
      position: relative;
    }

    .search-sort-section {
      color: ${props => props.theme.colors.primary};
      margin-bottom: ${props => props.theme.padding.p20}px;

      .search-label {
        font-size: ${props => props.theme.font.f20};
      }
      
      .search-input {
        margin-top: ${props => props.theme.padding.p10}px;
        width: 50%;
        height: 35px;
        border-color: ${props => props.theme.colors.tertiary};
      }

      .search-button {
        width: 20%;
        min-width: 50px;
        height: 41px;
        font-size: ${props => props.theme.font.f10};
        margin-left: 10%;
        border-radius: 10px;
        background: ${props => props.theme.colors.gray};

        @media only screen and (min-width: 1025px)  {
          font-size: ${props => props.theme.font.f16};
        }
      }

      .mt30 {
        margin-top: ${props => props.theme.padding.p30}px;
      }

      .relative {
        position: relative;
      }

      .sort {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40%;
        height: 40px;
        min-width: 80px;
        border: 1px solid ${props => props.theme.colors.tertiary};
      }

      .pl-0 {
        padding-left: 0;
      }
    }

    .items {
      background-color: ${props => props.theme.colors.primary};
    }

    .character-detail {
      background: ${props => props.theme.colors.lightgray};
      margin-top: -4px;
      padding: ${props => props.theme.padding.p15}px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      min-height: 300px;
    }

    .character-name {
      position: absolute;
      background: ${props => props.theme.colors.primary};
      opacity: 0.6;
      padding: ${props => props.theme.padding.p5}px ${props => props.theme.padding.p10}px;
      font-size: ${props => props.theme.font.f14};
      top: 291px;

      @media only screen and (min-width: 768px)  {
        top: 274px
      }

      @media only screen and (min-width: 1025px)  {
        padding: ${props => props.theme.padding.p10}px;
        font-size: ${props => props.theme.font.f24};
        top: 259px;
      }
    }

    .label-size {
      font-size: ${props => props.theme.font.f10};

      @media only screen and (min-width: 768px)  {
        font-size: ${props => props.theme.font.f14};
      }
    }

    .full-image {
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      min-height: 320px;
    }

    .details {
      text-transform: uppercase;
    }

    .value {
      right: 36px;
    }

    .wrap {
      font-size: ${props => props.theme.font.f6};
      border-bottom: 1px solid ${props => props.theme.colors.primarygray};
      padding: 12px 0;
      margin: 0;

      &:last-child {
        border: none;
      }


      @media only screen and (min-width: 769px) {
        font-size: ${props => props.theme.font.f10};
      }

      @media only screen and (min-width: 1025px)  {
        font-size: ${props => props.theme.font.f14};
      }
    }

    .align-right {
      text-align: right;
      color: ${props => props.theme.colors.secondarygray};
    }

    .adjust-padding-right {
      padding-right: 0;
    }

    .adjust-padding-left {
      padding-left: 0;
    }

    .darkgray {
      color: ${props => props.theme.colors.darkgray};
    }

    .fc-black {
      color: ${props => props.theme.colors.primary};
    }

    .filter-border {
      border: 1px solid ${props => props.theme.colors.primary};
      font-size: ${props => props.theme.font.f20};
      line-height: 1.5;
      padding: ${props => props.theme.padding.p10}px;
      max-width: 50%;
      margin: 25px 0;

      .truncate {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .search-checkbox {
        margin-left: ${props => props.theme.padding.p10}px;
      }
    }

    .filter-keys {
      font-weight: 800;
      text-transform: capitalize;
      font-size: ${props => props.theme.font.f24};
    }
  }
`);

/***/ }),

/***/ "./src/components/features/SearchDetail/index.js":
/*!*******************************************************!*\
  !*** ./src/components/features/SearchDetail/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchDetail */ "./src/components/features/SearchDetail/SearchDetail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SearchDetail__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/Filters/filters.js":
/*!*****************************************************!*\
  !*** ./src/components/molecules/Filters/filters.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/molecules/Filters/filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Filter = ({
  filterObject,
  keys,
  getFilterValue
}) => {
  return __jsx("div", {
    className: "filter-border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "filter-keys",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, keys), getFilterValue(keys, filterObject[keys]));
};

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/components/molecules/Filters/index.js":
/*!***************************************************!*\
  !*** ./src/components/molecules/Filters/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ "./src/components/molecules/Filters/filters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/SearchBox/index.js":
/*!*****************************************************!*\
  !*** ./src/components/molecules/SearchBox/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _searchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchBox */ "./src/components/molecules/SearchBox/searchBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _searchBox__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/SearchBox/searchBox.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/SearchBox/searchBox.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../atoms/Label */ "./src/components/atoms/Label/index.js");
/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../atoms/Input */ "./src/components/atoms/Input/index.js");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../atoms/Button */ "./src/components/atoms/Button/index.js");
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/molecules/SearchBox/searchBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const enterPressed = (e, handleClick) => {
  var code = e.keyCode || e.which;

  if (code === 13) {
    //13 is the enter keycode
    handleClick();
  }
};

const SearchBox = ({
  handleSearchChange,
  handleClick
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_atoms_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
    forLabel: "search",
    className: "search-label",
    text: "Search By Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }), __jsx(_atoms_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    id: "search",
    name: "search",
    className: "search-input",
    handleChange: handleSearchChange,
    onKeyPress: e => enterPressed(e, handleClick),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }), __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: "Submit",
    className: "search-button",
    handleClick: handleClick,
    text: "Search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./src/components/organism/CharacterListingPage/CharacterListingPage.view.js":
/*!***********************************************************************************!*\
  !*** ./src/components/organism/CharacterListingPage/CharacterListingPage.view.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/organism/CharacterListingPage/CharacterListingPage.view.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CharacterListingPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getDateDiffInYears", date => {
      const createdDate = new Date(date);
      const currentDate = new Date();
      return Math.abs(new Date(currentDate - createdDate).getUTCFullYear() - 1970);
    });
  }

  render() {
    const {
      character
    } = this.props;
    return __jsx("div", {
      className: "character-block col-sm-3 col-xs-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 4
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }
    }, __jsx("img", {
      className: "full-image",
      src: character.image,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 6
      }
    })), __jsx("div", {
      className: "character-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }
    }, character.name, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 6
      }
    }), __jsx("span", {
      className: "label-size",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 6
      }
    }, `id: `), __jsx("span", {
      className: "label-size",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 6
      }
    }, `${character.id} - `), __jsx("span", {
      className: "label-size",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 6
      }
    }, "created ", this.getDateDiffInYears(character.created), " years ago")), __jsx("div", {
      className: "character-detail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }
    }, __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 8
      }
    }, "Status")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, character.status)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 8
      }
    }, "Species")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, character.species)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 8
      }
    }, "Gender")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, character.gender)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 8
      }
    }, "Origin")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }, character.origin.name)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 8
      }
    }, "Last Location")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }, character.location.name))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CharacterListingPage);

/***/ }),

/***/ "./src/components/organism/CharacterListingPage/index.js":
/*!***************************************************************!*\
  !*** ./src/components/organism/CharacterListingPage/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CharacterListingPage_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharacterListingPage.view */ "./src/components/organism/CharacterListingPage/CharacterListingPage.view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CharacterListingPage_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organism/SearchDetail/SearchDetail.view.js":
/*!*******************************************************************!*\
  !*** ./src/components/organism/SearchDetail/SearchDetail.view.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _molecules_Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../molecules/Filters */ "./src/components/molecules/Filters/index.js");
/* harmony import */ var _molecules_SearchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/SearchBox */ "./src/components/molecules/SearchBox/index.js");
/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Input */ "./src/components/atoms/Input/index.js");
/* harmony import */ var _atoms_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Label */ "./src/components/atoms/Label/index.js");
/* harmony import */ var _atoms_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/Select */ "./src/components/atoms/Select/index.js");
/* harmony import */ var _CharacterListingPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CharacterListingPage */ "./src/components/organism/CharacterListingPage/index.js");
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/organism/SearchDetail/SearchDetail.view.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class SearchDetailView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "getUniqueGenderValueofCharacter", characterArray => characterArray && [...new Set(characterArray.map(a => a.gender))]);

    _defineProperty(this, "getUniqueSpeciesValueofCharacter", characterArray => characterArray && [...new Set(characterArray.map(a => a.species))]);

    _defineProperty(this, "getUniqueOriginValueofCharacter", characterArray => characterArray && [...new Set(characterArray.map(a => a.origin.name))]);

    _defineProperty(this, "handleChange", e => {
      this.setState({
        sortValue: e.target.value
      });
    });

    _defineProperty(this, "compare", (postA, postB) => {
      const bandA = postA.id;
      const bandB = postB.id;
      let comparison = 0;

      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }

      return comparison;
    });

    _defineProperty(this, "handleSearchChange", e => {
      this.setState({
        searchValue: e.target.value
      });
    });

    _defineProperty(this, "handleClick", () => {
      const {
        searchValue,
        post,
        searchedArray
      } = this.state;
      const {
        characters
      } = this.props;
      let charactersToBeSearched = characters;

      if (post.length > 0 && searchValue) {
        charactersToBeSearched = post;
      } else if (!searchValue && searchedArray.length > 0) {
        charactersToBeSearched = searchedArray;
      }

      const searchedPost = [];
      charactersToBeSearched.find(post => {
        if (post.name.toLowerCase().includes(searchValue.toLowerCase())) searchedPost.push(post);
      });
      this.setState({
        post: searchedPost
      });
    });

    _defineProperty(this, "getFilterValue", (key, filterObject) => {
      return filterObject && filterObject.map(value => {
        return __jsx("div", {
          className: "truncate",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 5
          }
        }, __jsx(_atoms_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "checkbox",
          id: `${key}-${value}`,
          handleChange: this.handleFilterChange,
          name: value,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 6
          }
        }), __jsx(_atoms_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
          forLabel: value,
          className: "search-checkbox",
          text: value,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 6
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 8
          }
        }));
      });
    });

    _defineProperty(this, "handleFilterChange", e => {
      const {
        characters
      } = this.props;
      const {
        post
      } = this.state;
      const key = e.target.id.split('-')[0];
      let uniqueArray;
      let toDeleteArray;
      let newArray;

      if (key.toLowerCase() === 'gender') {
        if (e.target.checked) {
          uniqueArray = new Set(post.concat(characters.filter(item => item.gender === e.target.name)));
          this.setState({
            post: [...uniqueArray],
            searchedArray: [...uniqueArray]
          });
        } else {
          toDeleteArray = characters.filter(item => item.gender === e.target.name);
          newArray = this.getRemovedResult(toDeleteArray);
          this.setState({
            post: [...newArray],
            searchedArray: [...newArray]
          });
        }
      } else if (key.toLowerCase() === 'species') {
        if (e.target.checked) {
          uniqueArray = new Set(post.concat(characters.filter(item => item.species === e.target.name)));
          this.setState({
            post: [...uniqueArray],
            searchedArray: [...uniqueArray]
          });
        } else {
          toDeleteArray = characters.filter(item => item.species === e.target.name);
          newArray = this.getRemovedResult(toDeleteArray);
          this.setState({
            post: [...newArray],
            searchedArray: [...newArray]
          });
        }
      } else {
        if (e.target.checked) {
          uniqueArray = new Set(post.concat(characters.filter(item => item.origin.name === e.target.name)));
          this.setState({
            post: [...uniqueArray],
            searchedArray: [...uniqueArray]
          });
        } else {
          toDeleteArray = characters.filter(item => item.origin.name === e.target.name);
          newArray = this.getRemovedResult(toDeleteArray);
          this.setState({
            post: [...newArray],
            searchedArray: [...newArray]
          });
        }
      }
    });

    _defineProperty(this, "getRemovedResult", toDeleteArray => {
      const {
        post
      } = this.state;
      const toDelete = new Set(toDeleteArray.map(item => item.id));
      return post.filter(obj => !toDelete.has(obj.id));
    });

    this.state = {
      sortValue: 'Ascending',
      searchValue: '',
      post: [],
      searchedArray: []
    };
  }

  render() {
    const {
      characters,
      className
    } = this.props;
    const {
      sortValue,
      post
    } = this.state;
    const sortValues = ['Ascending', 'Decending'];
    let posts = post.length > 0 ? post : characters;
    const filterObject = {
      gender: this.getUniqueGenderValueofCharacter(posts),
      species: this.getUniqueSpeciesValueofCharacter(posts),
      origin: this.getUniqueOriginValueofCharacter(posts)
    };
    posts = posts && sortValue === 'Ascending' ? posts.sort(this.compare) : posts && posts.reverse();
    return posts && posts.length > 0 ? __jsx("div", {
      className: `${className} o-searchDetail`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-sm-3 col-xs-12 fc-black",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 6
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 7
      }
    }, "Filters"), Object.keys(filterObject).map(key => {
      return __jsx(_molecules_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
        filterObject: filterObject,
        keys: key,
        getFilterValue: this.getFilterValue,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 9
        }
      });
    })), __jsx("div", {
      className: "col-sm-9 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "row search-sort-section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 7
      }
    }, __jsx("h1", {
      className: "col-xs-12 pl-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 8
      }
    }, "Search & Sort"), __jsx("div", {
      className: "col-xs-6 mt30 pl-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 8
      }
    }, __jsx(_molecules_SearchBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleSearchChange: this.handleSearchChange,
      handleClick: this.handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "col-xs-6 mt30 relative",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 8
      }
    }, __jsx(_atoms_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "sort",
      name: "sort",
      className: "sort",
      onChange: this.handleChange,
      value: sortValues,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }
    }))), __jsx("div", {
      className: "row items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 7
      }
    }, posts.map(character => __jsx(_CharacterListingPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      character: character,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }
    })))))) : null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchDetailView);

/***/ }),

/***/ "./src/components/organism/SearchDetail/index.js":
/*!*******************************************************!*\
  !*** ./src/components/organism/SearchDetail/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchDetail_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchDetail.view */ "./src/components/organism/SearchDetail/SearchDetail.view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SearchDetail_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/SearchDetail/SearchDetail.template.js":
/*!*********************************************************!*\
  !*** ./src/pages/SearchDetail/SearchDetail.template.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_features_SearchDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/features/SearchDetail */ "./src/components/features/SearchDetail/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_features_SearchDetail__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/SearchDetail/index.js":
/*!*****************************************!*\
  !*** ./src/pages/SearchDetail/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchDetail_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchDetail.template */ "./src/pages/SearchDetail/SearchDetail.template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SearchDetail_template__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/himdora/Documents/Assignment/Himanshu/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map