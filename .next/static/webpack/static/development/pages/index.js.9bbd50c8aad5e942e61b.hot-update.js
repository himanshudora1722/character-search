webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _molecules_SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/SearchBox */ "./src/components/molecules/SearchBox/index.js");
/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Input */ "./src/components/atoms/Input/index.js");
/* harmony import */ var _atoms_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/Label */ "./src/components/atoms/Label/index.js");
/* harmony import */ var _atoms_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/Select */ "./src/components/atoms/Select/index.js");

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
            lineNumber: 81,
            columnNumber: 5
          }
        }, __jsx(_atoms_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "checkbox",
          id: "".concat(key, "-").concat(value),
          handleChange: this.handleFilterChange,
          name: value,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 6
          }
        }), __jsx(_atoms_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
          forLabel: value,
          className: "search-checkbox",
          text: value,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 6
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
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
      className: "".concat(className, " o-searchDetail"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-3 col-xs-12 fc-black",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 6
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
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
          lineNumber: 185,
          columnNumber: 9
        }
      });
    })), __jsx("div", {
      className: "col-md-9 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "row search-sort-section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 7
      }
    }, __jsx("h1", {
      className: "col-xs-12 pl-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 8
      }
    }, "Selected Filters"), __jsx("div", {
      className: "col-xs-6 mt30 pl-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 8
      }
    }, __jsx(_molecules_SearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleSearchChange: this.handleSearchChange,
      handleClick: this.handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "col-xs-6 mt30 relative",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 8
      }
    }, __jsx(_atoms_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "sort",
      name: "sort",
      className: "sort",
      onChange: this.handleChange,
      value: sortValues,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }
    }))), __jsx("div", {
      className: "row items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 7
      }
    }, posts.map(character => __jsx("div", {
      className: "character-block col-md-3 col-xs-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 10
      }
    }, __jsx("img", {
      className: "full-image",
      src: character.image,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "character-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 10
      }
    }, character.name, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 11
      }
    }), __jsx("span", {
      className: "label-size",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 11
      }
    }, "id: "), __jsx("span", {
      className: "label-size",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 11
      }
    }, "".concat(character.id, " - ")), __jsx("span", {
      className: "label-size",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 11
      }
    }, "created ", this.getDateDiffInYears(character.created), " years ago")), __jsx("div", {
      className: "character-detail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 10
      }
    }, __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 13
      }
    }, "Status")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 12
      }
    }, character.status)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 13
      }
    }, "Species")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 12
      }
    }, character.species)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 13
      }
    }, "Gender")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 12
      }
    }, character.gender)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 13
      }
    }, "Origin")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 12
      }
    }, character.origin.name)), __jsx("div", {
      class: "row wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-xs-6 adjust-padding-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 12
      }
    }, __jsx("span", {
      className: "details darkgray",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 13
      }
    }, "Last Location")), __jsx("div", {
      className: "col-xs-6 align-right adjust-padding-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 12
      }
    }, character.location.name))))))))) : null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchDetailView);

/***/ })

})
//# sourceMappingURL=index.js.9bbd50c8aad5e942e61b.hot-update.js.map