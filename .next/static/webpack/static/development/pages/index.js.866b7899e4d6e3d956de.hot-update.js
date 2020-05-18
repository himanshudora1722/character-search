webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/molecules/SearchBox/searchBox.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/SearchBox/searchBox.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=index.js.866b7899e4d6e3d956de.hot-update.js.map