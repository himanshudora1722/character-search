webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/features/SearchDetail/SearchDetail.js":
/*!**************************************************************!*\
  !*** ./src/components/features/SearchDetail/SearchDetail.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
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
    return characters && __jsx(_organism_SearchDetail__WEBPACK_IMPORTED_MODULE_9__["default"], {
      characters: characters,
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 4
      }
    });
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

/***/ })

})
//# sourceMappingURL=index.js.ab5a5220b4dc9b7465cd.hot-update.js.map