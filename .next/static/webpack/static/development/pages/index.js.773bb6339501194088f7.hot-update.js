webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/organism/CharacterListingPage/CharacterListingPage.view.js":
/*!***********************************************************************************!*\
  !*** ./src/components/organism/CharacterListingPage/CharacterListingPage.view.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/organism/CharacterListingPage/CharacterListingPage.view.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class CharacterListingPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getDateDiffInYears", date => {
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
      className: "character-block col-md-3 col-xs-6",
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
    }, "id: "), __jsx("span", {
      className: "label-size",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 6
      }
    }, "".concat(character.id, " - ")), __jsx("span", {
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

/***/ })

})
//# sourceMappingURL=index.js.773bb6339501194088f7.hot-update.js.map