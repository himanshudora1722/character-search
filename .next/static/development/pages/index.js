(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./lib/configureStore.js":
/*!*******************************!*\
  !*** ./lib/configureStore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./lib/reducers.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // import globalSaga from '../src/components/features/SearchDetail/SearchDetail.saga';

const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_3__["default"])();
const middlewares = [sagaMiddleware];
const enhancers = [Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares)]; // Choose compose method depending upon environment and platform

const composeEnhancers =  true ? redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"] : undefined;
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
    throw new Error("".concat(BaseComponent.displayName, " needs to be passed with a key"));
  } //   const hasReducer = !!options.reducer;


  const hasSaga = !!options.saga; //   const reducer = hasKey && hasReducer ? { [options.key]: options.reducer } : {};

  const configureStore = (initialState = {}) => {
    const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(options.reducer, initialState, composeEnhancers(...enhancers)); // Keep access to 'run' method of saga task in store so thats its available globally with store

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

  return Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(configureStore)(BaseComponent);
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * @function createReducer - Combine reducer for given page level component with global ones
 * @param {Object} injectedReducers
 * @returns {function}
 */

function createReducer(injectedReducers) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({}, injectedReducers));
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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n  ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


/* The component send styles in form of an object
e.g. withStyles(WrappedComponent, {
  <desktop styles>
});

Note: Keys are defined in constants

If the component doesn't want to send 2 styles, it can send styles directly and not as keyed object.
*/

/* harmony default export */ __webpack_exports__["default"] = ((WrappedComponent, styles) => Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(WrappedComponent)(_templateObject(), props => styles ? styles[props.theme] || styles : '', props => {
  if (!props.inheritedStyles) {
    return '';
  }

  if (props.inheritedStyles instanceof Array) {
    return props.inheritedStyles;
  }

  return props.inheritedStyles[props.theme] || '';
}));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/io-6de156f3.js":
/*!***********************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/io-6de156f3.js ***!
  \***********************************************************/
/*! exports provided: $, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, a0, a1, a2, a3, a4, a5, a6, a7, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return FORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return buffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return sliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return RACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return effectTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return takeMaybe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return putResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACTION_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return expanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMetaInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return createAllStyleChildCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return createEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return none; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return assignWithSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return shouldComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return asyncIteratorSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return shouldCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return shouldTerminate; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");





var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue =
/*#__PURE__*/
konst(true);

var noop = function noop() {};

if ( true && typeof Proxy !== 'undefined') {
  noop =
  /*#__PURE__*/
  new Proxy(noop, {
    set: function set() {
      throw internalErr('There was an attempt to assign a property to internal `noop` function.');
    }
  });
}
var identity = function identity(v) {
  return v;
};
var hasSymbol = typeof Symbol === 'function';
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : '@@asyncIterator';
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols(target, source) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(target, source);

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function (s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap(mapper, arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    fn();
  };
}

var kThrow = function kThrow(err) {
  throw err;
};

var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};

function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }

  if (name === void 0) {
    name = 'iterator';
  }

  var iterator = {
    meta: {
      name: name
    },
    next: next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };

  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}
function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;

  /*eslint-disable no-console*/
  console.error(error);
  console.error(sagaStack);
}
var internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n"; // creates empty, but not-holey array

var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    if (true) {
      check(action, function (ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }

    return dispatch(Object.defineProperty(action, _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"], {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"];
};
var shouldCancel = function shouldCancel(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"];
};
var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;

  if (true) {
    check(totalCount, function (c) {
      return c > 0;
    }, 'createAllStyleChildCallbacks: get an empty array or object');
  }

  var completedCount = 0;
  var completed;
  var results = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};

  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }

  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };

    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });

  parentCallback.cancel = function () {
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCallbacks[key].cancel();
      });
    }
  };

  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]];
}

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};

function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];

    while (length) {
      items.push(take());
    }

    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;

        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);

          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;

          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;

          default: // DROP

        }
      }
    },
    take: take,
    flush: flush
  };
}

var none = function none() {
  return zeroBuffer;
};
var fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

var buffers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  none: none,
  fixed: fixed,
  dropping: dropping,
  sliding: sliding,
  expanding: expanding
});

var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var effectTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TAKE: TAKE,
  PUT: PUT,
  ALL: ALL,
  RACE: RACE,
  CALL: CALL,
  CPS: CPS,
  FORK: FORK,
  JOIN: JOIN,
  CANCEL: CANCEL,
  SELECT: SELECT,
  ACTION_CHANNEL: ACTION_CHANNEL,
  CANCELLED: CANCELLED,
  FLUSH: FLUSH,
  GET_CONTEXT: GET_CONTEXT,
  SET_CONTEXT: SET_CONTEXT
});

var TEST_HINT = '\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)';

var makeEffect = function makeEffect(type, payload) {
  var _ref;

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};

var isForkEffect = function isForkEffect(eff) {
  return Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["effect"])(eff) && eff.type === FORK;
};

var detach = function detach(eff) {
  if (true) {
    check(eff, isForkEffect, 'detach(eff): argument must be a fork effect');
  }

  return makeEffect(FORK, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'take(patternOrChannel): patternOrChannel is undefined');
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["multicast"])(patternOrChannel) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(multicastPattern) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }

  if (true) {
    throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
  }
}
var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel$1, action) {
  if (true) {
    if (arguments.length > 1) {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument channel is undefined');
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "put(channel, action): argument " + channel$1 + " is not a valid channel");
      check(action, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument action is undefined');
    } else {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(action): argument action is undefined');
    }
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["undef"])(action)) {
    action = channel$1; // `undefined` instead of `null` to make default parameter work

    channel$1 = undefined;
  }

  return makeEffect(PUT, {
    channel: channel$1,
    action: action
  });
}
var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};
function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}
function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
} // this match getFnCallDescriptor logic

var validateFnDescriptor = function validateFnDescriptor(effectName, fnDescriptor) {
  check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument fn is undefined or null");

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    return;
  }

  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"])(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": argument fn is not function");
    return;
  }

  if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn)) {
    check(context[fn], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": context arguments has no such method - \"" + fn + "\"");
    return;
  }

  check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};

function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }

    if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(context[fn])) {
      fn = context[fn];
    }
  }

  return {
    context: context,
    fn: fn,
    args: args
  };
}

var isNotDelayEffect = function isNotDelayEffect(fn) {
  return fn !== delay;
};

function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var arg0 = typeof args[0] === 'number' ? args[0] : 'ms';
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor('call', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }

  var fnDescriptor = [context, fn];

  if (true) {
    validateFnDescriptor('apply', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  if (true) {
    validateFnDescriptor('cps', fnDescriptor);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  if (true) {
    validateFnDescriptor('fork', fnDescriptor);
    check(fnDescriptor, function (arg) {
      return !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["effect"])(arg);
    }, 'fork: argument must not be an effect');
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  if (true) {
    validateFnDescriptor('spawn', fnDescriptor);
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  if (true) {
    if (arguments.length > 1) {
      throw new Error('join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"];
  }

  if (true) {
    if (arguments.length > 1) {
      throw new Error('cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else if (taskOrTasks !== _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"] && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(taskOrTasks)) {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(CANCEL, taskOrTasks);
}
function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }

  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'select(selector, [...]): argument selector is undefined');
    check(selector, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], "select(selector, [...]): argument " + selector + " is not a function");
  }

  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/

function actionChannel(pattern$1, buffer$1) {
  if (true) {
    check(pattern$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"], 'actionChannel(pattern,...): argument pattern is not valid');

    if (arguments.length > 1) {
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'actionChannel(pattern, buffer): argument buffer is undefined');
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["buffer"], "actionChannel(pattern, buffer): argument " + buffer$1 + " is not a valid buffer");
    }
  }

  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern$1,
    buffer: buffer$1
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel$1) {
  if (true) {
    check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "flush(channel): argument " + channel$1 + " is not valid channel");
  }

  return makeEffect(FLUSH, channel$1);
}
function getContext(prop) {
  if (true) {
    check(prop, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"], "getContext(prop): argument " + prop + " is not a string");
  }

  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  if (true) {
    check(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"], createSetContextWarning(null, props));
  }

  return makeEffect(SET_CONTEXT, props);
}
var delay =
/*#__PURE__*/
call.bind(null, _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__["default"]);




/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js ***!
  \*******************************************************************/
/*! exports provided: CANCEL, SAGA_LOCATION, buffers, detach, default, END, channel, eventChannel, isEnd, multicastChannel, runSaga, stdChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return eventChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return multicastChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return runSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return stdChannel; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./io-6de156f3.js */ "./node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["I"]; });

/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux-saga/deferred */ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");











var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/

var semaphore = 0;
/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/

function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}
/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/


function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}
/**
 * Puts the scheduler in a `suspended` state and executes a task immediately.
 */

function immediately(task) {
  try {
    suspend();
    return task();
  } finally {
    flush();
  }
}
/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/

function suspend() {
  semaphore++;
}
/**
  Puts the scheduler in a `released` state.
**/


function release() {
  semaphore--;
}
/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/


function flush() {
  release();
  var task;

  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

var array = function array(patterns) {
  return function (input) {
    return patterns.some(function (p) {
      return matcher(p)(input);
    });
  };
};
var predicate = function predicate(_predicate) {
  return function (input) {
    return _predicate(input);
  };
};
var string = function string(pattern) {
  return function (input) {
    return input.type === String(pattern);
  };
};
var symbol = function symbol(pattern) {
  return function (input) {
    return input.type === pattern;
  };
};
var wildcard = function wildcard() {
  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["k"];
};
function matcher(pattern) {
  // prettier-ignore
  var matcherCreator = pattern === '*' ? wildcard : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["string"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(pattern) ? array : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["stringableFunc"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(pattern) ? predicate : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["symbol"])(pattern) ? symbol : null;

  if (matcherCreator === null) {
    throw new Error("invalid pattern: " + pattern);
  }

  return matcherCreator(pattern);
}

var END = {
  type: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"]
};
var isEnd = function isEnd(a) {
  return a && a.type === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"];
};
var CLOSED_CHANNEL_WITH_TAKERS = 'Cannot have a closed channel with pending takers';
var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";
function channel(buffer$1) {
  if (buffer$1 === void 0) {
    buffer$1 = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["e"])();
  }

  var closed = false;
  var takers = [];

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["buffer"], INVALID_BUFFER);
  }

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }

    if (takers.length && !buffer$1.isEmpty()) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (takers.length === 0) {
      return buffer$1.put(input);
    }

    var cb = takers.shift();
    cb(input);
  }

  function take(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.take's callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
    } else if (!buffer$1.isEmpty()) {
      cb(buffer$1.take());
    } else {
      takers.push(cb);

      cb.cancel = function () {
        Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.flush' callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
      return;
    }

    cb(buffer$1.flush());
  }

  function close() {
    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      return;
    }

    closed = true;
    var arr = takers;
    takers = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      var taker = arr[i];
      taker(END);
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close
  };
}
function eventChannel(subscribe, buffer) {
  if (buffer === void 0) {
    buffer = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["n"])();
  }

  var closed = false;
  var unsubscribe;
  var chan = channel(buffer);

  var close = function close() {
    if (closed) {
      return;
    }

    closed = true;

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(unsubscribe)) {
      unsubscribe();
    }

    chan.close();
  };

  unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }

    chan.put(input);
  });

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(unsubscribe, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'in eventChannel: subscribe should return a function to unsubscribe');
  }

  unsubscribe = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(unsubscribe);

  if (closed) {
    unsubscribe();
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}
function multicastChannel() {
  var _ref;

  var closed = false;
  var currentTakers = [];
  var nextTakers = currentTakers;

  function checkForbiddenStates() {
    if (closed && nextTakers.length) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }
  }

  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
    if (nextTakers !== currentTakers) {
      return;
    }

    nextTakers = currentTakers.slice();
  };

  var close = function close() {
    if (true) {
      checkForbiddenStates();
    }

    closed = true;
    var takers = currentTakers = nextTakers;
    nextTakers = [];
    takers.forEach(function (taker) {
      taker(END);
    });
  };

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]] = true, _ref.put = function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (isEnd(input)) {
      close();
      return;
    }

    var takers = currentTakers = nextTakers;

    for (var i = 0, len = takers.length; i < len; i++) {
      var taker = takers[i];

      if (taker[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }, _ref.take = function take(cb, matcher) {
    if (matcher === void 0) {
      matcher = wildcard;
    }

    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      cb(END);
      return;
    }

    cb[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]] = matcher;
    ensureCanMutateNextTakers();
    nextTakers.push(cb);
    cb.cancel = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(function () {
      ensureCanMutateNextTakers();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(nextTakers, cb);
    });
  }, _ref.close = close, _ref;
}
function stdChannel() {
  var chan = multicastChannel();
  var put = chan.put;

  chan.put = function (input) {
    if (input[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]) {
      put(input);
      return;
    }

    asap(function () {
      put(input);
    });
  };

  return chan;
}

var RUNNING = 0;
var CANCELLED = 1;
var ABORTED = 2;
var DONE = 3;

function resolvePromise(promise, cb) {
  var cancelPromise = promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]];

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(cancelPromise)) {
    cb.cancel = cancelPromise;
  }

  promise.then(cb, function (error) {
    cb(error, true);
  });
}

var current = 0;
var nextSagaId = (function () {
  return ++current;
});

var _effectRunnerMap;

function getIteratorMetaInfo(iterator, fn) {
  if (iterator.isSagaIterator) {
    return {
      name: iterator.meta.name
    };
  }

  return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn);
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  // catch synchronous failures; see #152 and #441
  try {
    var result = fn.apply(context, args); // i.e. a generator function returns an iterator

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      return result;
    }

    var resolved = false;

    var next = function next(arg) {
      if (!resolved) {
        resolved = true; // Only promises returned from fork will be interpreted. See #1573

        return {
          value: result,
          done: !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)
        };
      } else {
        return {
          value: arg,
          done: true
        };
      }
    };

    return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(next);
  } catch (err) {
    // do not bubble up synchronous failures for detached forks
    // instead create a failed task. See #152 and #441
    return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(function () {
      throw err;
    });
  }
}

function runPutEffect(env, _ref2, cb) {
  var channel = _ref2.channel,
      action = _ref2.action,
      resolve = _ref2.resolve;

  /**
   Schedule the put in case another saga is holding a lock.
   The put will be executed atomically. ie nested puts will execute after
   this put has terminated.
   **/
  asap(function () {
    var result;

    try {
      result = (channel ? channel.put : env.dispatch)(action);
    } catch (error) {
      cb(error, true);
      return;
    }

    if (resolve && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
    } else {
      cb(result);
    }
  }); // Put effects are non cancellables
}

function runTakeEffect(env, _ref3, cb) {
  var _ref3$channel = _ref3.channel,
      channel = _ref3$channel === void 0 ? env.channel : _ref3$channel,
      pattern = _ref3.pattern,
      maybe = _ref3.maybe;

  var takeCb = function takeCb(input) {
    if (input instanceof Error) {
      cb(input, true);
      return;
    }

    if (isEnd(input) && !maybe) {
      cb(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"]);
      return;
    }

    cb(input);
  };

  try {
    channel.take(takeCb, Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(pattern) ? matcher(pattern) : null);
  } catch (err) {
    cb(err, true);
    return;
  }

  cb.cancel = takeCb.cancel;
}

function runCallEffect(env, _ref4, cb, _ref5) {
  var context = _ref4.context,
      fn = _ref4.fn,
      args = _ref4.args;
  var task = _ref5.task;

  // catch synchronous failures; see #152
  try {
    var result = fn.apply(context, args);

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
      return;
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      // resolve iterator
      proc(env, result, task.context, current, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn),
      /* isRoot */
      false, cb);
      return;
    }

    cb(result);
  } catch (error) {
    cb(error, true);
  }
}

function runCPSEffect(env, _ref6, cb) {
  var context = _ref6.context,
      fn = _ref6.fn,
      args = _ref6.args;

  // CPS (ie node style functions) can define their own cancellation logic
  // by setting cancel field on the cb
  // catch synchronous failures; see #152
  try {
    var cpsCb = function cpsCb(err, res) {
      if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["undef"])(err)) {
        cb(res);
      } else {
        cb(err, true);
      }
    };

    fn.apply(context, args.concat(cpsCb));

    if (cpsCb.cancel) {
      cb.cancel = cpsCb.cancel;
    }
  } catch (error) {
    cb(error, true);
  }
}

function runForkEffect(env, _ref7, cb, _ref8) {
  var context = _ref7.context,
      fn = _ref7.fn,
      args = _ref7.args,
      detached = _ref7.detached;
  var parent = _ref8.task;
  var taskIterator = createTaskIterator({
    context: context,
    fn: fn,
    args: args
  });
  var meta = getIteratorMetaInfo(taskIterator, fn);
  immediately(function () {
    var child = proc(env, taskIterator, parent.context, current, meta, detached, undefined);

    if (detached) {
      cb(child);
    } else {
      if (child.isRunning()) {
        parent.queue.addTask(child);
        cb(child);
      } else if (child.isAborted()) {
        parent.queue.abort(child.error());
      } else {
        cb(child);
      }
    }
  }); // Fork effects are non cancellables
}

function runJoinEffect(env, taskOrTasks, cb, _ref9) {
  var task = _ref9.task;

  var joinSingleTask = function joinSingleTask(taskToJoin, cb) {
    if (taskToJoin.isRunning()) {
      var joiner = {
        task: task,
        cb: cb
      };

      cb.cancel = function () {
        if (taskToJoin.isRunning()) Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(taskToJoin.joiners, joiner);
      };

      taskToJoin.joiners.push(joiner);
    } else {
      if (taskToJoin.isAborted()) {
        cb(taskToJoin.error(), true);
      } else {
        cb(taskToJoin.result());
      }
    }
  };

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    if (taskOrTasks.length === 0) {
      cb([]);
      return;
    }

    var childCallbacks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(taskOrTasks, cb);
    taskOrTasks.forEach(function (t, i) {
      joinSingleTask(t, childCallbacks[i]);
    });
  } else {
    joinSingleTask(taskOrTasks, cb);
  }
}

function cancelSingleTask(taskToCancel) {
  if (taskToCancel.isRunning()) {
    taskToCancel.cancel();
  }
}

function runCancelEffect(env, taskOrTasks, cb, _ref10) {
  var task = _ref10.task;

  if (taskOrTasks === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"]) {
    cancelSingleTask(task);
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    taskOrTasks.forEach(cancelSingleTask);
  } else {
    cancelSingleTask(taskOrTasks);
  }

  cb(); // cancel effects are non cancellables
}

function runAllEffect(env, effects, cb, _ref11) {
  var digestEffect = _ref11.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);

  if (keys.length === 0) {
    cb(Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? [] : {});
    return;
  }

  var childCallbacks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(effects, cb);
  keys.forEach(function (key) {
    digestEffect(effects[key], effectId, childCallbacks[key], key);
  });
}

function runRaceEffect(env, effects, cb, _ref12) {
  var digestEffect = _ref12.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);
  var response = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(keys.length) : {};
  var childCbs = {};
  var completed = false;
  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(res)) {
        // Race Auto cancellation
        cb.cancel();
        cb(res, isErr);
      } else {
        cb.cancel();
        completed = true;
        response[key] = res;
        cb(response);
      }
    };

    chCbAtKey.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    childCbs[key] = chCbAtKey;
  });

  cb.cancel = function () {
    // prevents unnecessary cancellation
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCbs[key].cancel();
      });
    }
  };

  keys.forEach(function (key) {
    if (completed) {
      return;
    }

    digestEffect(effects[key], effectId, childCbs[key], key);
  });
}

function runSelectEffect(env, _ref13, cb) {
  var selector = _ref13.selector,
      args = _ref13.args;

  try {
    var state = selector.apply(void 0, [env.getState()].concat(args));
    cb(state);
  } catch (error) {
    cb(error, true);
  }
}

function runChannelEffect(env, _ref14, cb) {
  var pattern = _ref14.pattern,
      buffer = _ref14.buffer;
  var chan = channel(buffer);
  var match = matcher(pattern);

  var taker = function taker(action) {
    if (!isEnd(action)) {
      env.channel.take(taker, match);
    }

    chan.put(action);
  };

  var close = chan.close;

  chan.close = function () {
    taker.cancel();
    close();
  };

  env.channel.take(taker, match);
  cb(chan);
}

function runCancelledEffect(env, data, cb, _ref15) {
  var task = _ref15.task;
  cb(task.isCancelled());
}

function runFlushEffect(env, channel, cb) {
  channel.flush(cb);
}

function runGetContextEffect(env, prop, cb, _ref16) {
  var task = _ref16.task;
  cb(task.context[prop]);
}

function runSetContextEffect(env, props, cb, _ref17) {
  var task = _ref17.task;
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(task.context, props);
  cb();
}

var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["T"]] = runTakeEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["P"]] = runPutEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["A"]] = runAllEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["R"]] = runRaceEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["C"]] = runCallEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["a"]] = runCPSEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["F"]] = runForkEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["J"]] = runJoinEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["b"]] = runCancelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["S"]] = runSelectEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["d"]] = runChannelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["f"]] = runCancelledEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["g"]] = runFlushEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["G"]] = runGetContextEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["h"]] = runSetContextEffect, _effectRunnerMap);

/**
 Used to track a parent task and its forks
 In the fork model, forked tasks are attached by default to their parent
 We model this using the concept of Parent task && main Task
 main task is the main flow of the current Generator, the parent tasks is the
 aggregation of the main tasks + all its forked tasks.
 Thus the whole model represents an execution tree with multiple branches (vs the
 linear execution tree in sequential (non parallel) programming)

 A parent tasks has the following semantics
 - It completes if all its forks either complete or all cancelled
 - If it's cancelled, all forks are cancelled as well
 - It aborts if any uncaught error bubbles up from forks
 - If it completes, the return value is the one returned by the main task
 **/

function forkQueue(mainTask, onAbort, cont) {
  var tasks = [];
  var result;
  var completed = false;
  addTask(mainTask);

  var getTasks = function getTasks() {
    return tasks;
  };

  function abort(err) {
    onAbort();
    cancelAll();
    cont(err, true);
  }

  function addTask(task) {
    tasks.push(task);

    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(tasks, task);
      task.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];

      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }

        if (!tasks.length) {
          completed = true;
          cont(result);
        }
      }
    };
  }

  function cancelAll() {
    if (completed) {
      return;
    }

    completed = true;
    tasks.forEach(function (t) {
      t.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: getTasks
  };
}

// there can be only a single saga error created at any given moment

function formatLocation(fileName, lineNumber) {
  return fileName + "?" + lineNumber;
}

function effectLocationAsString(effect) {
  var location = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["v"])(effect);

  if (location) {
    var code = location.code,
        fileName = location.fileName,
        lineNumber = location.lineNumber;
    var source = code + "  " + formatLocation(fileName, lineNumber);
    return source;
  }

  return '';
}

function sagaLocationAsString(sagaMeta) {
  var name = sagaMeta.name,
      location = sagaMeta.location;

  if (location) {
    return name + "  " + formatLocation(location.fileName, location.lineNumber);
  }

  return name;
}

function cancelledTasksAsString(sagaStack) {
  var cancelledTasks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["u"])(function (i) {
    return i.cancelledTasks;
  }, sagaStack);

  if (!cancelledTasks.length) {
    return '';
  }

  return ['Tasks cancelled due to error:'].concat(cancelledTasks).join('\n');
}

var crashedEffect = null;
var sagaStack = [];
var addSagaFrame = function addSagaFrame(frame) {
  frame.crashedEffect = crashedEffect;
  sagaStack.push(frame);
};
var clear = function clear() {
  crashedEffect = null;
  sagaStack.length = 0;
}; // this sets crashed effect for the soon-to-be-reported saga frame
// this slightly streatches the singleton nature of this module into wrong direction
// as it's even less obvious what's the data flow here, but it is what it is for now

var setCrashedEffect = function setCrashedEffect(effect) {
  crashedEffect = effect;
};
/**
  @returns {string}

  @example
  The above error occurred in task errorInPutSaga {pathToFile}
  when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
      created by fetchSaga {pathToFile}
      created by rootSaga {pathToFile}
*/

var toString = function toString() {
  var firstSaga = sagaStack[0],
      otherSagas = sagaStack.slice(1);
  var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : '');
  return [errorMessage].concat(otherSagas.map(function (s) {
    return "    created by " + sagaLocationAsString(s.meta);
  }), [cancelledTasksAsString(sagaStack)]).join('\n');
};

function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
  var _task;

  if (cont === void 0) {
    cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  }

  var status = RUNNING;
  var taskResult;
  var taskError;
  var deferredEnd = null;
  var cancelledDueToErrorTasks = [];
  var context = Object.create(parentContext);
  var queue = forkQueue(mainTask, function onAbort() {
    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue.getTasks().map(function (t) {
      return t.meta.name;
    }));
  }, end);
  /**
   This may be called by a parent generator to trigger/propagate cancellation
   cancel all pending tasks (including the main task), then end the current task.
    Cancellation propagates down to the whole execution tree held by this Parent task
   It's also propagated to all joiners of this task and their execution tree/joiners
    Cancellation is noop for terminated/Cancelled tasks tasks
   **/

  function cancel() {
    if (status === RUNNING) {
      // Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
      // effects in the iterator's finally block will still be executed
      status = CANCELLED;
      queue.cancelAll(); // Ending with a TASK_CANCEL will propagate the Cancellation to all joiners

      end(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"], false);
    }
  }

  function end(result, isErr) {
    if (!isErr) {
      // The status here may be RUNNING or CANCELLED
      // If the status is CANCELLED, then we do not need to change it here
      if (result === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) {
        status = CANCELLED;
      } else if (status !== CANCELLED) {
        status = DONE;
      }

      taskResult = result;
      deferredEnd && deferredEnd.resolve(result);
    } else {
      status = ABORTED;
      addSagaFrame({
        meta: meta,
        cancelledTasks: cancelledDueToErrorTasks
      });

      if (task.isRoot) {
        var sagaStack = toString(); // we've dumped the saga stack to string and are passing it to user's code
        // we know that it won't be needed anymore and we need to clear it

        clear();
        env.onError(result, {
          sagaStack: sagaStack
        });
      }

      taskError = result;
      deferredEnd && deferredEnd.reject(result);
    }

    task.cont(result, isErr);
    task.joiners.forEach(function (joiner) {
      joiner.cb(result, isErr);
    });
    task.joiners = null;
  }

  function setContext(props) {
    if (true) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["w"])('task', props));
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  }

  function toPromise() {
    if (deferredEnd) {
      return deferredEnd.promise;
    }

    deferredEnd = Object(_redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__["default"])();

    if (status === ABORTED) {
      deferredEnd.reject(taskError);
    } else if (status !== RUNNING) {
      deferredEnd.resolve(taskResult);
    }

    return deferredEnd.promise;
  }

  var task = (_task = {}, _task[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue, _task.cancel = cancel, _task.cont = cont, _task.end = end, _task.setContext = setContext, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
    return status === RUNNING;
  }, _task.isCancelled = function isCancelled() {
    return status === CANCELLED || status === RUNNING && mainTask.status === CANCELLED;
  }, _task.isAborted = function isAborted() {
    return status === ABORTED;
  }, _task.result = function result() {
    return taskResult;
  }, _task.error = function error() {
    return taskError;
  }, _task);
  return task;
}

function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
  if ( true && iterator$1[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["x"]]) {
    throw new Error("redux-saga doesn't support async generators, please use only regular ones");
  }

  var finalRunEffect = env.finalizeRunEffect(runEffect);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/

  next.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  /** Creates a main task to track the main flow */

  var mainTask = {
    meta: meta,
    cancel: cancelMain,
    status: RUNNING
  };
  /**
   Creates a new task descriptor for this generator.
   A task is the aggregation of it's mainTask and all it's forked tasks.
   **/

  var task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
  var executingContext = {
    task: task,
    digestEffect: digestEffect
  };
  /**
    cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
  **/

  function cancelMain() {
    if (mainTask.status === RUNNING) {
      mainTask.status = CANCELLED;
      next(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/


  if (cont) {
    cont.cancel = task.cancel;
  } // kicks up the generator


  next(); // then return the task descriptor to the caller

  return task;
  /**
   * This is the generator driver
   * It's a recursive async/continuation function which calls itself
   * until the generator terminates or throws
   * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
   * @param {boolean} isErr - the flag shows if effect finished with an error
   *
   * receives either (command | effect result, false) or (any thrown thing, true)
   */

  function next(arg, isErr) {
    try {
      var result;

      if (isErr) {
        result = iterator$1.throw(arg); // user handled the error, we can clear bookkept values

        clear();
      } else if (Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["y"])(arg)) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.status = CANCELLED;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/

        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/

        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) : {
          done: true,
          value: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]
        };
      } else if (Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["z"])(arg)) {
        // We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return() : {
          done: true
        };
      } else {
        result = iterator$1.next(arg);
      }

      if (!result.done) {
        digestEffect(result.value, parentEffectId, next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        if (mainTask.status !== CANCELLED) {
          mainTask.status = DONE;
        }

        mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.status === CANCELLED) {
        throw error;
      }

      mainTask.status = ABORTED;
      mainTask.cont(error, true);
    }
  }

  function runEffect(effect, effectId, currCb) {
    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(effect)) {
      resolvePromise(effect, currCb);
    } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(effect)) {
      // resolve iterator
      proc(env, effect, task.context, effectId, meta,
      /* isRoot */
      false, currCb);
    } else if (effect && effect[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]]) {
      var effectRunner = effectRunnerMap[effect.type];
      effectRunner(env, effect.payload, currCb, executingContext);
    } else {
      // anything else returned as is
      currCb(effect);
    }
  }

  function digestEffect(effect, parentEffectId, cb, label) {
    if (label === void 0) {
      label = '';
    }

    var effectId = nextSagaId();
    env.sagaMonitor && env.sagaMonitor.effectTriggered({
      effectId: effectId,
      parentEffectId: parentEffectId,
      label: label,
      effect: effect
    });
    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/

    var effectSettled; // Completion callback passed to the appropriate effect runner

    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      if (env.sagaMonitor) {
        if (isErr) {
          env.sagaMonitor.effectRejected(effectId, res);
        } else {
          env.sagaMonitor.effectResolved(effectId, res);
        }
      }

      if (isErr) {
        setCrashedEffect(effect);
      }

      cb(res, isErr);
    } // tracks down the current cancel


    currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // setup cancellation logic on the parent cb

    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      currCb.cancel(); // propagates cancel downward

      currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
    };

    finalRunEffect(effect, effectId, currCb);
  }
}

var RUN_SAGA_SIGNATURE = 'runSaga(options, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";
function runSaga(_ref, saga) {
  var _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      sagaMonitor = _ref.sagaMonitor,
      effectMiddlewares = _ref.effectMiddlewares,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["B"] : _ref$onError;

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(saga, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], NON_GENERATOR_ERR);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator$1 = saga.apply(void 0, args);

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(iterator$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"], NON_GENERATOR_ERR);
  }

  var effectId = nextSagaId();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.rootSagaStarted({
      effectId: effectId,
      saga: saga,
      args: args
    });
  }

  if (true) {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(dispatch)) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(dispatch, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'dispatch must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(getState)) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(getState, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'getState must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(effectMiddlewares)) {
      var MIDDLEWARE_TYPE_ERROR = 'effectMiddlewares must be an array of functions';
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddlewares, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"], MIDDLEWARE_TYPE_ERROR);
      effectMiddlewares.forEach(function (effectMiddleware) {
        return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddleware, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], MIDDLEWARE_TYPE_ERROR);
      });
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(onError, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'onError passed to the redux-saga is not a function!');
  }

  var finalizeRunEffect;

  if (effectMiddlewares) {
    var middleware = redux__WEBPACK_IMPORTED_MODULE_5__["compose"].apply(void 0, effectMiddlewares);

    finalizeRunEffect = function finalizeRunEffect(runEffect) {
      return function (effect, effectId, currCb) {
        var plainRunEffect = function plainRunEffect(eff) {
          return runEffect(eff, effectId, currCb);
        };

        return middleware(plainRunEffect)(effect);
      };
    };
  } else {
    finalizeRunEffect = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["E"];
  }

  var env = {
    channel: channel,
    dispatch: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["D"])(dispatch),
    getState: getState,
    sagaMonitor: sagaMonitor,
    onError: onError,
    finalizeRunEffect: finalizeRunEffect
  };
  return immediately(function () {
    var task = proc(env, iterator$1, context, effectId, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(saga),
    /* isRoot */
    true, undefined);

    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task);
    }

    return task;
  });
}

function sagaMiddlewareFactory(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      sagaMonitor = _ref.sagaMonitor,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["context", "channel", "sagaMonitor"]);

  var boundRunSaga;

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(channel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["channel"], 'options.channel passed to the Saga middleware is not a channel');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;
    boundRunSaga = runSaga.bind(null, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
      context: context,
      channel: channel,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor
    }));
    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }

        var result = next(action); // hit reducers

        channel.put(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    if ( true && !boundRunSaga) {
      throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
    }

    return boundRunSaga.apply(void 0, arguments);
  };

  sagaMiddleware.setContext = function (props) {
    if (true) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["w"])('sagaMiddleware', props));
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  };

  return sagaMiddleware;
}

/* harmony default export */ __webpack_exports__["default"] = (sagaMiddlewareFactory);



/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js ***!
  \**********************************************************************/
/*! exports provided: actionChannel, all, apply, call, cancel, cancelled, cps, delay, effectTypes, flush, fork, getContext, join, put, putResolve, race, select, setContext, spawn, take, takeMaybe, debounce, retry, takeEvery, takeLatest, takeLeading, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return takeLeading$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle$1; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./io-6de156f3.js */ "./node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["X"]; });

/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");







var done = function done(value) {
  return {
    done: true,
    value: value
  };
};

var qEnd = {};
function safeName(patternOrChannel) {
  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return 'channel';
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["stringableFunc"])(patternOrChannel)) {
    return String(patternOrChannel);
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(patternOrChannel)) {
    return patternOrChannel.name;
  }

  return String(patternOrChannel);
}
function fsmIterator(fsm, startState, name) {
  var stateUpdater,
      errorState,
      effect,
      nextState = startState;

  function next(arg, error) {
    if (nextState === qEnd) {
      return done(arg);
    }

    if (error && !errorState) {
      nextState = qEnd;
      throw error;
    } else {
      stateUpdater && stateUpdater(arg);
      var currentState = error ? fsm[errorState](error) : fsm[nextState]();
      nextState = currentState.nextState;
      effect = currentState.effect;
      stateUpdater = currentState.stateUpdater;
      errorState = currentState.errorState;
      return nextState === qEnd ? done(arg) : effect;
    }
  }

  return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["q"])(next, function (error) {
    return next(null, error);
  }, name);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yFork(action)
      };
    }
  }, 'q1', "takeEvery(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["M"])(task)
    };
  };

  var task, action;

  var setTask = function setTask(t) {
    return task = t;
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return task ? {
        nextState: 'q3',
        effect: yCancel(task)
      } : {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    },
    q3: function q3() {
      return {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    }
  }, 'q1', "takeLatest(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLeading(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yCall = function yCall(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action;

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yCall(action)
      };
    }
  }, 'q1', "takeLeading(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, channel;
  var yActionChannel = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["O"])(pattern, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(1))
  };

  var yTake = function yTake() {
    return {
      done: false,
      value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(channel)
    };
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yDelay = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yActionChannel,
        stateUpdater: setChannel
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yTake(),
        stateUpdater: setAction
      };
    },
    q3: function q3() {
      return {
        nextState: 'q4',
        effect: yFork(action)
      };
    },
    q4: function q4() {
      return {
        nextState: 'q2',
        effect: yDelay
      };
    }
  }, 'q1', "throttle(" + safeName(pattern) + ", " + worker.name + ")");
}

function retry(maxTries, delayLength, fn) {
  var counter = maxTries;

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var yCall = {
    done: false,
    value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [fn].concat(args))
  };
  var yDelay = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yCall,
        errorState: 'q10'
      };
    },
    q2: function q2() {
      return {
        nextState: qEnd
      };
    },
    q10: function q10(error) {
      counter -= 1;

      if (counter <= 0) {
        throw error;
      }

      return {
        nextState: 'q1',
        effect: yDelay
      };
    }
  }, 'q1', "retry(" + fn.name + ")");
}

function debounceHelper(delayLength, patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, raceOutput;
  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };
  var yRace = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["V"])({
      action: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel),
      debounce: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
    })
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yNoop = function yNoop(value) {
    return {
      done: false,
      value: value
    };
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setRaceOutput = function setRaceOutput(ro) {
    return raceOutput = ro;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yRace,
        stateUpdater: setRaceOutput
      };
    },
    q3: function q3() {
      return raceOutput.debounce ? {
        nextState: 'q1',
        effect: yFork(action)
      } : {
        nextState: 'q2',
        effect: yNoop(raceOutput.action),
        stateUpdater: setAction
      };
    }
  }, 'q1', "debounce(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

var validateTakeEffect = function validateTakeEffect(fn, patternOrChannel, worker) {
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(patternOrChannel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a pattern or channel");
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a saga parameter");
};

function takeEvery$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeEvery$1, patternOrChannel, worker);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeEvery, patternOrChannel, worker].concat(args));
}
function takeLatest$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLatest$1, patternOrChannel, worker);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeLatest, patternOrChannel, worker].concat(args));
}
function takeLeading$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLeading$1, patternOrChannel, worker);
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeLeading, patternOrChannel, worker].concat(args));
}
function throttle$1(ms, pattern, worker) {
  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(pattern, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a pattern');
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a saga parameter');
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    args[_key4 - 3] = arguments[_key4];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [throttle, ms, pattern, worker].concat(args));
}
function retry$1(maxTries, delayLength, worker) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [retry, maxTries, delayLength, worker].concat(args));
}
function debounce(delayLength, pattern, worker) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [debounceHelper, delayLength, pattern, worker].concat(args));
}




/***/ }),

/***/ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js ***!
  \***************************************************************************/
/*! exports provided: default, arrayOfDeferred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfDeferred", function() { return arrayOfDeferred; });
function deferred() {
  var def = {};
  def.promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}
function arrayOfDeferred(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }

  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (deferred);



/***/ }),

/***/ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }

  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, ms, val);
  });

  promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]] = function () {
    clearTimeout(timeoutId);
  };

  return promise;
}

/* harmony default export */ __webpack_exports__["default"] = (delayP);


/***/ }),

/***/ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js ***!
  \***************************************************************/
/*! exports provided: array, buffer, channel, effect, func, iterable, iterator, multicast, notUndef, number, object, observable, pattern, promise, sagaAction, string, stringableFunc, symbol, task, undef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "func", function() { return func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterable", function() { return iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notUndef", function() { return notUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaAction", function() { return sagaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringableFunc", function() { return stringableFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "task", function() { return task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undef", function() { return undef; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


var undef = function undef(v) {
  return v === null || v === undefined;
};
var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};
var func = function func(f) {
  return typeof f === 'function';
};
var number = function number(n) {
  return typeof n === 'number';
};
var string = function string(s) {
  return typeof s === 'string';
};
var array = Array.isArray;
var object = function object(obj) {
  return obj && !array(obj) && typeof obj === 'object';
};
var promise = function promise(p) {
  return p && func(p.then);
};
var iterator = function iterator(it) {
  return it && func(it.next) && func(it.throw);
};
var iterable = function iterable(it) {
  return it && func(Symbol) ? func(it[Symbol.iterator]) : array(it);
};
var task = function task(t) {
  return t && t[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]];
};
var sagaAction = function sagaAction(a) {
  return Boolean(a && a[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]);
};
var observable = function observable(ob) {
  return ob && func(ob.subscribe);
};
var buffer = function buffer(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var pattern = function pattern(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(pattern));
};
var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc(f) {
  return func(f) && f.hasOwnProperty('toString');
};
var symbol = function symbol(sym) {
  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var multicast = function multicast(ch) {
  return channel(ch) && ch[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]];
};
var effect = function effect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]];
};




/***/ }),

/***/ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js ***!
  \*************************************************************************/
/*! exports provided: CANCEL, CHANNEL_END_TYPE, IO, MATCH, MULTICAST, SAGA_ACTION, SAGA_LOCATION, SELF_CANCELLATION, TASK, TASK_CANCEL, TERMINATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_END_TYPE", function() { return CHANNEL_END_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTICAST", function() { return MULTICAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return SAGA_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELF_CANCELLATION", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_CANCEL", function() { return TASK_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMINATE", function() { return TERMINATE; });
var createSymbol = function createSymbol(name) {
  return "@@redux-saga/" + name;
};

var CANCEL =
/*#__PURE__*/
createSymbol('CANCEL_PROMISE');
var CHANNEL_END_TYPE =
/*#__PURE__*/
createSymbol('CHANNEL_END');
var IO =
/*#__PURE__*/
createSymbol('IO');
var MATCH =
/*#__PURE__*/
createSymbol('MATCH');
var MULTICAST =
/*#__PURE__*/
createSymbol('MULTICAST');
var SAGA_ACTION =
/*#__PURE__*/
createSymbol('SAGA_ACTION');
var SELF_CANCELLATION =
/*#__PURE__*/
createSymbol('SELF_CANCELLATION');
var TASK =
/*#__PURE__*/
createSymbol('TASK');
var TASK_CANCEL =
/*#__PURE__*/
createSymbol('TASK_CANCEL');
var TERMINATE =
/*#__PURE__*/
createSymbol('TERMINATE');
var SAGA_LOCATION =
/*#__PURE__*/
createSymbol('LOCATION');




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/next-redux-wrapper/es6/index.js":
/*!******************************************************!*\
  !*** ./node_modules/next-redux-wrapper/es6/index.js ***!
  \******************************************************/
/*! exports provided: HYDRATE, STOREKEY, createWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYDRATE", function() { return HYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOREKEY", function() { return STOREKEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWrapper", function() { return createWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__';
var STOREKEY = '__NEXT_REDUX_WRAPPER_STORE__';
var getIsServer = function () { return typeof window === 'undefined'; };
var getDeserializedState = function (initialState, _a) {
    var deserializeState = (_a === void 0 ? {} : _a).deserializeState;
    return deserializeState ? deserializeState(initialState) : initialState;
};
var getSerializedState = function (state, _a) {
    var serializeState = (_a === void 0 ? {} : _a).serializeState;
    return serializeState ? serializeState(state) : state;
};
var getStoreKey = function (_a) {
    var storeKey = (_a === void 0 ? {} : _a).storeKey;
    return storeKey || STOREKEY;
};
var initStore = function (_a) {
    var makeStore = _a.makeStore, context = _a.context, config = _a.config;
    var storeKey = getStoreKey(config);
    var createStore = function () { return makeStore(context); };
    if (getIsServer()) {
        var c = context;
        var req = void 0;
        if (c.req)
            req = c.req;
        if (c.ctx && c.ctx.req)
            req = c.ctx.req;
        if (req) {
            // ATTENTION! THIS IS INTERNAL, DO NOT ACCESS DIRECTLY ANYWHERE ELSE
            // @see https://github.com/kirill-konshin/next-redux-wrapper/pull/196#issuecomment-611673546
            if (!req.__nextReduxWrapperStore)
                req.__nextReduxWrapperStore = createStore();
            return req.__nextReduxWrapperStore;
        }
        return createStore();
    }
    // Memoize store if client
    if (!(storeKey in window)) {
        window[storeKey] = createStore();
    }
    return window[storeKey];
};
var createWrapper = function (makeStore, config) {
    if (config === void 0) { config = {}; }
    var makeProps = function (_a) {
        var callback = _a.callback, context = _a.context, _b = _a.isApp, isApp = _b === void 0 ? false : _b;
        return __awaiter(void 0, void 0, void 0, function () {
            var store, initialProps, _c, state;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        store = initStore({ context: context, makeStore: makeStore, config: config });
                        if (config.debug)
                            console.log("1. getProps created store with state", store.getState());
                        _c = callback;
                        if (!_c) return [3 /*break*/, 2];
                        return [4 /*yield*/, callback(
                            // merging store into context instead of just passing as another argument because it's impossible to override getInitialProps signature
                            isApp ? __assign(__assign({}, context), { ctx: __assign(__assign({}, context.ctx), { store: store }) }) : __assign(__assign({}, context), { store: store }))];
                    case 1:
                        _c = (_d.sent());
                        _d.label = 2;
                    case 2:
                        initialProps = (_c) ||
                            {};
                        if (config.debug)
                            console.log("3. getProps after dispatches has store state", store.getState());
                        state = store.getState();
                        return [2 /*return*/, {
                                initialProps: initialProps,
                                initialState: getIsServer() ? getSerializedState(state, config) : state,
                            }];
                }
            });
        });
    };
    var getInitialPageProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (context.store) {
                console.warn('No need to wrap pages if _app was wrapped');
                return [2 /*return*/, callback(context)];
            }
            return [2 /*return*/, makeProps({ callback: callback, context: context })];
        });
    }); }; };
    var getInitialAppProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, makeProps({ callback: callback, context: context, isApp: true })];
            case 1: return [2 /*return*/, (_a.sent())];
        }
    }); }); }; }; // this is just to convince TS
    var getStaticProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, props, settings, wrapperProps;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, makeProps({ callback: callback, context: context })];
                case 1:
                    _a = _c.sent(), _b = _a.initialProps, props = _b.props, settings = __rest(_b, ["props"]), wrapperProps = __rest(_a, ["initialProps"]);
                    return [2 /*return*/, __assign(__assign({}, settings), { props: __assign(__assign({}, wrapperProps), props) })];
            }
        });
    }); }; };
    var getServerSideProps = function (callback) { return getStaticProps(callback); }; // just not to repeat myself
    var withRedux = function (Component) {
        //TODO Check if pages/_app was wrapped so there's no need to wrap a page itself
        var Wrapper = function (_a, context) {
            var _b;
            var initialState = _a.initialState, initialProps = _a.initialProps, props = __rest(_a, ["initialState", "initialProps"]);
            var isFirstRender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
            // this happens when App has page with getServerSideProps/getStaticProps
            var initialStateFromGSPorGSSR = (_b = props === null || props === void 0 ? void 0 : props.pageProps) === null || _b === void 0 ? void 0 : _b.initialState;
            if (config.debug)
                console.log('4. WrappedApp.constructor created new store with', {
                    initialState: initialState,
                    initialStateFromGSPorGSSR: initialStateFromGSPorGSSR,
                });
            var store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initStore({ makeStore: makeStore, config: config, context: context }));
            var hydrate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
                store.current.dispatch({
                    type: HYDRATE,
                    payload: getDeserializedState(initialState, config),
                });
                // ATTENTION! This code assumes that Page's getServerSideProps is executed after App.getInitialProps
                // so we dispatch in this order
                if (initialStateFromGSPorGSSR)
                    store.current.dispatch({
                        type: HYDRATE,
                        payload: getDeserializedState(initialStateFromGSPorGSSR, config),
                    });
            }, [initialStateFromGSPorGSSR, initialState]);
            // apply synchronously on first render (both server side and client side)
            if (isFirstRender.current)
                hydrate();
            // apply async in case props have changed, on navigation for example
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
                if (isFirstRender.current) {
                    isFirstRender.current = false;
                    return;
                }
                hydrate();
            }, [hydrate]);
            // order is important! Next.js overwrites props from pages/_app with getStaticProps from page
            // @see https://github.com/zeit/next.js/issues/11648
            if (initialProps && initialProps.pageProps)
                props.pageProps = __assign(__assign({}, initialProps.pageProps), props.pageProps);
            // just some cleanup to prevent passing it as props
            if (initialStateFromGSPorGSSR)
                delete props.pageProps.initialState;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], { store: store.current },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, __assign({}, initialProps, props))));
        };
        Wrapper.displayName = "withRedux(" + (Component.displayName || Component.name || 'Component') + ")";
        if ('getInitialProps' in Component)
            Wrapper.getInitialProps = function (context) { return __awaiter(void 0, void 0, void 0, function () {
                var callback;
                return __generator(this, function (_a) {
                    callback = Component.getInitialProps;
                    return [2 /*return*/, (context.ctx ? getInitialAppProps(callback) : getInitialPageProps(callback))(context)];
                });
            }); };
        return Wrapper;
    };
    return {
        getServerSideProps: getServerSideProps,
        getStaticProps: getStaticProps,
        withRedux: withRedux,
    };
};
// Legacy
/* harmony default export */ __webpack_exports__["default"] = (function (makeStore, config) {
    if (config === void 0) { config = {}; }
    console.warn('/!\\ You are using legacy implementaion. Please update your code: use createWrapper() and wrapper.withRedux().');
    return createWrapper(makeStore, config).withRedux;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fhimdora%2FDocuments%2FAssignment%2FHimanshu%2Fpages%2Findex.js!./":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fhimdora%2FDocuments%2FAssignment%2FHimanshu%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

const amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode({
  ampFirst = false,
  hybrid = false,
  hasQuery = false
} = {}) {
  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

const side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

const amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

const head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

const amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead(inAmpMode = false) {
  const head = [react_1.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      const key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;
    return react_1.default.cloneElement(c, {
      key
    });
  });
}

const Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head({
  children
}) {
  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, ampState => react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, updateHead => react_1.default.createElement(Effect, {
    reduceComponentsToState: reduceComponents,
    handleStateChange: updateHead,
    inAmpMode: amp_1.isInAmpMode(ampState)
  }, children)));
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const isServer = false;

exports.default = () => {
  const mountedInstances = new Set();
  let state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState([...mountedInstances], component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return class extends react_1.Component {
    // Used when server rendering
    static rewind() {
      const recordedState = state;
      state = undefined;
      mountedInstances.clear();
      return recordedState;
    }

    constructor(props) {
      super(props);

      if (isServer) {
        mountedInstances.add(this);
        emitChange(this);
      }
    }

    componentDidMount() {
      mountedInstances.add(this);
      emitChange(this);
    }

    componentDidUpdate() {
      emitChange(this);
    }

    componentWillUnmount() {
      mountedInstances.delete(this);
      emitChange(this);
    }

    render() {
      return null;
    }

  };
};

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");





var Provider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Provider, _Component);

  function Provider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var store = props.store;
    _this.state = {
      storeState: store.getState(),
      store: store
    };
    return _this;
  }

  var _proto = Provider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this.subscribe();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
    this._isMounted = false;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.store !== prevProps.store) {
      if (this.unsubscribe) this.unsubscribe();
      this.subscribe();
    }
  };

  _proto.subscribe = function subscribe() {
    var _this2 = this;

    var store = this.props.store;
    this.unsubscribe = store.subscribe(function () {
      var newStoreState = store.getState();

      if (!_this2._isMounted) {
        return;
      }

      _this2.setState(function (providerState) {
        // If the value is the same, skip the unnecessary state update.
        if (providerState.storeState === newStoreState) {
          return null;
        }

        return {
          storeState: newStoreState
        };
      });
    }); // Actions might have been dispatched between render and mount - handle those

    var postMountStoreState = store.getState();

    if (postMountStoreState !== this.state.storeState) {
      this.setState({
        storeState: postMountStoreState
      });
    }
  };

  _proto.render = function render() {
    var Context = this.props.context || _Context__WEBPACK_IMPORTED_MODULE_3__["ReactReduxContext"];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Context.Provider, {
      value: this.state
    }, this.props.children);
  };

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Provider.propTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    subscribe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    getState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }),
  context: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");









function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_8__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  invariant__WEBPACK_IMPORTED_MODULE_5___default()(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React dev tools profiling extension");
  invariant__WEBPACK_IMPORTED_MODULE_5___default()(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
  var customStoreWarningMessage = 'To use a custom Redux store for specific components,  create a custom React context with ' + "React.createContext(), and pass the context object to React-Redux's Provider and specific components" + ' like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
  invariant__WEBPACK_IMPORTED_MODULE_5___default()(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (true) {
      invariant__WEBPACK_IMPORTED_MODULE_5___default()(Object(react_is__WEBPACK_IMPORTED_MODULE_7__["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;
    var OuterBaseComponent = react__WEBPACK_IMPORTED_MODULE_6__["Component"];
    var FinalWrappedComponent = WrappedComponent;

    if (pure) {
      OuterBaseComponent = react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"];
    }

    function makeDerivedPropsSelector() {
      var lastProps;
      var lastState;
      var lastDerivedProps;
      var lastStore;
      var sourceSelector;
      return function selectDerivedProps(state, props, store) {
        if (pure && lastProps === props && lastState === state) {
          return lastDerivedProps;
        }

        if (store !== lastStore) {
          lastStore = store;
          sourceSelector = selectorFactory(store.dispatch, selectorFactoryOptions);
        }

        lastProps = props;
        lastState = state;
        var nextProps = sourceSelector(state, props);

        if (lastDerivedProps === nextProps) {
          return lastDerivedProps;
        }

        lastDerivedProps = nextProps;
        return lastDerivedProps;
      };
    }

    function makeChildElementSelector() {
      var lastChildProps, lastForwardRef, lastChildElement;
      return function selectChildElement(childProps, forwardRef) {
        if (childProps !== lastChildProps || forwardRef !== lastForwardRef) {
          lastChildProps = childProps;
          lastForwardRef = forwardRef;
          lastChildElement = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FinalWrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, childProps, {
            ref: forwardRef
          }));
        }

        return lastChildElement;
      };
    }

    var Connect =
    /*#__PURE__*/
    function (_OuterBaseComponent) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Connect, _OuterBaseComponent);

      function Connect(props) {
        var _this;

        _this = _OuterBaseComponent.call(this, props) || this;
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(forwardRef ? !props.wrapperProps[storeKey] : !props[storeKey], 'Passing redux store in props has been removed and does not do anything. ' + customStoreWarningMessage);
        _this.selectDerivedProps = makeDerivedPropsSelector();
        _this.selectChildElement = makeChildElementSelector();
        _this.renderWrappedComponent = _this.renderWrappedComponent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)));
        return _this;
      }

      var _proto = Connect.prototype;

      _proto.renderWrappedComponent = function renderWrappedComponent(value) {
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(value, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
        var storeState = value.storeState,
            store = value.store;
        var wrapperProps = this.props;
        var forwardedRef;

        if (forwardRef) {
          wrapperProps = this.props.wrapperProps;
          forwardedRef = this.props.forwardedRef;
        }

        var derivedProps = this.selectDerivedProps(storeState, wrapperProps, store);
        return this.selectChildElement(derivedProps, forwardedRef);
      };

      _proto.render = function render() {
        var ContextToUse = this.props.context || Context;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ContextToUse.Consumer, null, this.renderWrappedComponent);
      };

      return Connect;
    }(OuterBaseComponent);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Connect, {
          wrapperProps: props,
          forwardedRef: ref
        });
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js ***!
  \***********************************************************************/
/*! exports provided: CANCEL, SAGA_LOCATION, buffers, detach, END, channel, eventChannel, isEnd, multicastChannel, runSaga, stdChannel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core */ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["buffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["detach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "END", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["channel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["eventChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["isEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["multicastChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["runSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["stdChannel"]; });






/* harmony default export */ __webpack_exports__["default"] = (_redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js ***!
  \**************************************************************************/
/*! exports provided: actionChannel, all, apply, call, cancel, cancelled, cps, delay, effectTypes, flush, fork, getContext, join, put, putResolve, race, select, setContext, spawn, take, takeMaybe, debounce, retry, takeEvery, takeLatest, takeLeading, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["actionChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["effectTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["putResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["race"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["spawn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeMaybe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["retry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLeading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"]; });




/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return __PRIVATE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.0";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  true ? errorMap : undefined;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (false) {} else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if ( true && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}
function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(props.children) : undefined));
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  false && false;
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (true) dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (true) {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if ( true && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  true ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"];
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (true) {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if ( true && react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if ( true && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var ServerStyleSheet = /*#__PURE__*/function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  // eslint-disable-next-line consistent-return
  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    {
      return throwStyledComponentsError(3);
    }
  };

  return ServerStyleSheet;
}();

// export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax

var withTheme = (function (Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if ( true && themeProp === undefined) {
      // eslint-disable-next-line no-console
      console.warn("[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"" + getComponentName(Component) + "\"");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
});

// 

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
};

// 
var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
};

// 
/* Define bundle version for export */

var version = "5.1.0";
/* Warning if you've imported this file on React Native */

if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ( true && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchDetail.constants */ "./src/components/features/SearchDetail/SearchDetail.constants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const initialState = {
  product: null
};

const productDetailPageData = (state = initialState, action) => {
  switch (action.type) {
    case _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_1__["FAILURE"]:
      return _objectSpread({}, state, {
        error: _objectSpread({}, action.json)
      });

    case _SearchDetail_constants__WEBPACK_IMPORTED_MODULE_1__["LOAD_PRODUCT_INFO_SUCCESS"]:
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
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  &.o-searchDetail {\n    color: ", ";\n    padding: 0 ", "px;\n\n    .character-block {\n      padding: ", "px;\n      position: relative;\n    }\n\n    .search-sort-section {\n      color: ", ";\n      margin-bottom: ", "px;\n\n      .search-label {\n        font-size: ", ";\n      }\n      \n      .search-input {\n        margin-top: ", "px;\n        width: 50%;\n        height: 35px;\n        border-color: ", ";\n      }\n\n      .search-button {\n        width: 20%;\n        min-width: 50px;\n        height: 41px;\n        font-size: ", ";\n        margin-left: 10%;\n        border-radius: 10px;\n        background: ", ";\n\n        @media only screen and (min-width: 1025px)  {\n          font-size: ", ";\n        }\n      }\n\n      .mt30 {\n        margin-top: ", "px;\n      }\n\n      .relative {\n        position: relative;\n      }\n\n      .sort {\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        width: 40%;\n        height: 40px;\n        min-width: 80px;\n        border: 1px solid ", ";\n      }\n\n      .pl-0 {\n        padding-left: 0;\n      }\n    }\n\n    .items {\n      background-color: ", ";\n    }\n\n    .character-detail {\n      background: ", ";\n      margin-top: -4px;\n      padding: ", "px;\n      border-bottom-right-radius: 10px;\n      border-bottom-left-radius: 10px;\n      min-height: 300px;\n    }\n\n    .character-name {\n      position: absolute;\n      background: ", ";\n      opacity: 0.6;\n      padding: ", "px ", "px;\n      font-size: ", ";\n      top: 291px;\n\n      @media only screen and (min-width: 768px)  {\n        top: 274px\n      }\n\n      @media only screen and (min-width: 1025px)  {\n        padding: ", "px;\n        font-size: ", ";\n        top: 259px;\n      }\n    }\n\n    .label-size {\n      font-size: ", ";\n\n      @media only screen and (min-width: 768px)  {\n        font-size: ", ";\n      }\n    }\n\n    .full-image {\n      width: 100%;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px;\n      min-height: 320px;\n    }\n\n    .details {\n      text-transform: uppercase;\n    }\n\n    .value {\n      right: 36px;\n    }\n\n    .wrap {\n      font-size: ", ";\n      border-bottom: 1px solid ", ";\n      padding: 12px 0;\n      margin: 0;\n\n      &:last-child {\n        border: none;\n      }\n\n\n      @media only screen and (min-width: 769px) {\n        font-size: ", ";\n      }\n\n      @media only screen and (min-width: 1025px)  {\n        font-size: ", ";\n      }\n    }\n\n    .align-right {\n      text-align: right;\n      color: ", ";\n    }\n\n    .adjust-padding-right {\n      padding-right: 0;\n    }\n\n    .adjust-padding-left {\n      padding-left: 0;\n    }\n\n    .darkgray {\n      color: ", ";\n    }\n\n    .fc-black {\n      color: ", ";\n    }\n\n    .filter-border {\n      border: 1px solid ", ";\n      font-size: ", ";\n      line-height: 1.5;\n      padding: ", "px;\n      max-width: 50%;\n      margin: 25px 0;\n\n      .truncate {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .search-checkbox {\n        margin-left: ", "px;\n      }\n    }\n\n    .filter-keys {\n      font-weight: 800;\n      text-transform: capitalize;\n      font-size: ", ";\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), props => props.theme.colors.secondary, props => props.theme.padding.p15, props => props.theme.padding.p15, props => props.theme.colors.primary, props => props.theme.padding.p20, props => props.theme.font.f20, props => props.theme.padding.p10, props => props.theme.colors.tertiary, props => props.theme.font.f10, props => props.theme.colors.gray, props => props.theme.font.f16, props => props.theme.padding.p30, props => props.theme.colors.tertiary, props => props.theme.colors.primary, props => props.theme.colors.lightgray, props => props.theme.padding.p15, props => props.theme.colors.primary, props => props.theme.padding.p5, props => props.theme.padding.p10, props => props.theme.font.f14, props => props.theme.padding.p10, props => props.theme.font.f24, props => props.theme.font.f10, props => props.theme.font.f14, props => props.theme.font.f6, props => props.theme.colors.primarygray, props => props.theme.font.f10, props => props.theme.font.f14, props => props.theme.colors.secondarygray, props => props.theme.colors.darkgray, props => props.theme.colors.primary, props => props.theme.colors.primary, props => props.theme.font.f20, props => props.theme.padding.p10, props => props.theme.padding.p10, props => props.theme.font.f24));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ }),

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _molecules_Filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/Filters */ "./src/components/molecules/Filters/index.js");
/* harmony import */ var _molecules_SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/SearchBox */ "./src/components/molecules/SearchBox/index.js");
/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Input */ "./src/components/atoms/Input/index.js");
/* harmony import */ var _atoms_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/Label */ "./src/components/atoms/Label/index.js");
/* harmony import */ var _atoms_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/Select */ "./src/components/atoms/Select/index.js");
/* harmony import */ var _CharacterListingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CharacterListingPage */ "./src/components/organism/CharacterListingPage/index.js");

var _jsxFileName = "/Users/himdora/Documents/Assignment/Himanshu/src/components/organism/SearchDetail/SearchDetail.view.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class SearchDetailView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getUniqueGenderValueofCharacter", characterArray => characterArray && [...new Set(characterArray.map(a => a.gender))]);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getUniqueSpeciesValueofCharacter", characterArray => characterArray && [...new Set(characterArray.map(a => a.species))]);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getUniqueOriginValueofCharacter", characterArray => characterArray && [...new Set(characterArray.map(a => a.origin.name))]);

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
            lineNumber: 76,
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
            lineNumber: 77,
            columnNumber: 6
          }
        }), __jsx(_atoms_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      return __jsx(_molecules_Filters__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    }, __jsx(_molecules_SearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    }, __jsx(_atoms_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }, posts.map(character => __jsx(_CharacterListingPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
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

/***/ 1:
/*!******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fhimdora%2FDocuments%2FAssignment%2FHimanshu%2Fpages%2Findex.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fhimdora%2FDocuments%2FAssignment%2FHimanshu%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fhimdora%2FDocuments%2FAssignment%2FHimanshu%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map