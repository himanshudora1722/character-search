webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./src/components/organism/SearchDetail/SearchDetail.view.js":
/*!*******************************************************************!*\
  !*** ./src/components/organism/SearchDetail/SearchDetail.view.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _molecules_Filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/Filters */ "./src/components/molecules/Filters/index.js");
/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Input */ "./src/components/atoms/Input/index.js");
/* harmony import */ var _atoms_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Label */ "./src/components/atoms/Label/index.js");

var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/organism/SearchDetail/SearchDetail.view.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class SearchDetailView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getUniqueGenderValueofCharacter", characterArray => characterArray && [...new Set(characterArray.map(a => a.gender))]);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getUniqueSpeciesValueofCharacter", characterArray => characterArray && [...new Set(characterArray.map(a => a.species))]);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getUniqueOriginValueofCharacter", characterArray => characterArray && [...new Set(characterArray.map(a => a.origin.name))]);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getDateDiffInYears", date => {
      const createdDate = new Date(date);
      const currentDate = new Date();
      return Math.abs(new Date(currentDate - createdDate).getUTCFullYear() - 1970);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", e => {
      this.setState({
        sortValue: e.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "compare", (postA, postB) => {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSearchChange", e => {
      this.setState({
        searchValue: e.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleClick", () => {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getFilterValue", (key, filterObject) => {
      return filterObject && filterObject.map(value => {
        return __jsx("div", {
          className: "truncate",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 5
          }
        }, __jsx(_atoms_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "checkbox",
          id: "".concat(key, "-").concat(value),
          handleChange: this.handleFilterChange,
          name: value,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 6
          }
        }), __jsx(_atoms_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
          for: value,
          className: "search-checkbox",
          text: value,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 6
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 8
          }
        }));
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFilterChange", e => {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getRemovedResult", toDeleteArray => {
      const {
        post
      } = this.state;
      const toDelete = new Set(toDeleteArray.map(item => item.id));
      return post.filter(obj => !toDelete.has(obj.id));
    });

    this.state = {
      sortValue: 'ascending',
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
    let posts = post.length > 0 ? post : characters;
    const filterObject = {
      gender: this.getUniqueGenderValueofCharacter(posts),
      species: this.getUniqueSpeciesValueofCharacter(posts),
      origin: this.getUniqueOriginValueofCharacter(posts)
    };
    posts = posts && sortValue === 'ascending' ? posts.sort(this.compare) : posts && posts.reverse();
    return posts && posts.length > 0 ? __jsx("div", {
      className: "".concat(className, " o-searchDetail"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-3 col-xs-12 fc-black",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 6
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 7
      }
    }, "Filters"), Object.keys(filterObject).map(key => {
      return __jsx(_molecules_Filters__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filterObject: filterObject,
        keys: key,
        getFilterValue: this.getFilterValue,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 9
        }
      });
    })), __jsx("div", {
      className: "col-md-9 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "row search-sort-section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 7
      }
    }, __jsx("h1", {
      className: "col-xs-12 pl-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 8
      }
    }, "Selected Filters"), __jsx("div", {
      className: "col-xs-6 mt30 pl-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 8
      }
    }, __jsx("label", {
      for: "search",
      className: "search-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }
    }, "Search By Name"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 76
      }
    }), __jsx("input", {
      type: "text",
      id: "search",
      name: "search",
      className: "search-input",
      onChange: this.handleSearchChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }
    }), __jsx("button", {
      type: "button",
      value: "Submit",
      className: "search-button",
      onClick: this.handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }
    }, "Search")), __jsx("div", {
      className: "col-xs-6 mt30 relative",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 8
      }
    }, __jsx("select", {
      id: "sort",
      name: "sort",
      className: "sort",
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }
    }, __jsx("option", {
      value: "ascending",
      selected: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 10
      }
    }, "Ascending"), __jsx("option", {
      value: "decending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 10
      }
    }, "Decending")))), __jsx("div", {
      className: "row items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 7
      }
    }, posts.map(character => __jsx("div", {
      className: "character-block col-md-3 col-xs-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 10
      }
    }, __jsx("img", {
      className: "full-image",
      src: character.image,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "character-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 10
      }
    }, character.name, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }
    }), __jsx("span", {
      className: "label-size",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }
    }, "id: "), __jsx("span", {
      className: "label-size",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 11
      }
    }, "".concat(character.id, " - ")), __jsx("span", {
      className: "label-size",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 11
      }
    }, "created ", this.getDateDiffInYears(character.created), " years ago")), __jsx("div", {
      className: "character-detail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 10
      }
    }, __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 13
      }
    }, "Status")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 12
      }
    }, character.status)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 13
      }
    }, "Species")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 12
      }
    }, character.species)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 13
      }
    }, "Gender")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 12
      }
    }, character.gender)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }
    }, "Origin")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 12
      }
    }, character.origin.name)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 13
      }
    }, "Last Location")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 12
      }
    }, character.location.name))))))))) : null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchDetailView);

/***/ })

})
//# sourceMappingURL=index.js.b79b92ed5e6f9c3506c1.hot-update.js.map