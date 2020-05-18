webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/molecules/Filters/filters.js":
/*!*****************************************************!*\
  !*** ./src/components/molecules/Filters/filters.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Input */ "./src/components/atoms/Input/index.js");
var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/molecules/Filters/filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const getFilterValue = (key, filterObject, handleFilterChange) => {
  return filterObject && filterObject.map(value => {
    console.log();
    return __jsx("div", {
      className: "truncate",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 4
      }
    }, __jsx(_atoms_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: "checkbox",
      id: "".concat(key, "-").concat(value),
      onChange: handleFilterChange,
      name: value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }
    }), __jsx("label", {
      for: value,
      className: "search-checkbox",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }
    }, value), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 67
      }
    }));
  });
};

const Filter = ({
  filterObject,
  keys,
  handleFilterChange
}) => {
  console.log('=========keyFilter', keys);
  return __jsx("div", {
    className: "filter-border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "filter-keys",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }, key));
};

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ })

})
//# sourceMappingURL=index.js.e3f7ae35c034a4796985.hot-update.js.map