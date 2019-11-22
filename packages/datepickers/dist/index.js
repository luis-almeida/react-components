/*!
 * Copyright Zendesk, Inc.
 * 
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0
 */
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  zdColorBlack: '#000',
  zdColorGreen100: '#edf8f4',
  zdColorGreen200: '#d1e8df',
  zdColorGreen300: '#aecfc2',
  zdColorGreen400: '#5eae91',
  zdColorGreen500: '#228f67',
  zdColorGreen600: '#038153',
  zdColorGreen700: '#186146',
  zdColorGreen800: '#0b3b29',
  zdColorGrey100: '#f8f9f9',
  zdColorGrey200: '#e9ebed',
  zdColorGrey300: '#d8dcde',
  zdColorGrey400: '#c2c8cc',
  zdColorGrey500: '#87929d',
  zdColorGrey600: '#68737d',
  zdColorGrey700: '#49545c',
  zdColorGrey800: '#2f3941',
  zdColorBlue100: '#edf7ff',
  zdColorBlue200: '#cee2f2',
  zdColorBlue300: '#adcce4',
  zdColorBlue400: '#5293c7',
  zdColorBlue500: '#337fbd',
  zdColorBlue600: '#1f73b7',
  zdColorBlue700: '#144a75',
  zdColorBlue800: '#0f3554',
  zdColorKale100: '#f5fbfc',
  zdColorKale200: '#c1d6d9',
  zdColorKale300: '#819a9e',
  zdColorKale400: '#56777a',
  zdColorKale500: '#335d63',
  zdColorKale600: '#04444d',
  zdColorKale700: '#03363d',
  zdColorKale800: '#012b30',
  zdColorRed100: '#fff0f1',
  zdColorRed200: '#f5d5d8',
  zdColorRed300: '#f5b5ba',
  zdColorRed400: '#e35b66',
  zdColorRed500: '#d93f4c',
  zdColorRed600: '#cc3340',
  zdColorRed700: '#8c232c',
  zdColorRed800: '#681219',
  zdColorYellow100: '#fff8ed',
  zdColorYellow200: '#fff0db',
  zdColorYellow300: '#fcdba9',
  zdColorYellow400: '#ffb648',
  zdColorYellow500: '#f5a133',
  zdColorYellow600: '#ed961c',
  zdColorYellow700: '#ad5e18',
  zdColorYellow800: '#703b15',
  zdColorWhite: '#fff',
  zdColorSecondaryAzure400: '#3091ec',
  zdColorSecondaryAzure600: '#1371d6',
  zdColorSecondaryCrimson400: '#e34f32',
  zdColorSecondaryCrimson600: '#c72a1c',
  zdColorSecondaryFuschia400: '#d653c2',
  zdColorSecondaryFuschia600: '#a81897',
  zdColorSecondaryLemon400: '#ffd424',
  zdColorSecondaryLemon600: '#ffbb10',
  zdColorSecondaryLime400: '#43b324',
  zdColorSecondaryLime600: '#2e8200',
  zdColorSecondaryMint400: '#00a656',
  zdColorSecondaryMint600: '#058541',
  zdColorSecondaryOrange400: '#de701d',
  zdColorSecondaryOrange600: '#bf5000',
  zdColorSecondaryPink400: '#ec4d63',
  zdColorSecondaryPink600: '#d42054',
  zdColorSecondaryPurple400: '#b552e2',
  zdColorSecondaryPurple600: '#6a27b8',
  zdColorSecondaryRoyal400: '#5d7df5',
  zdColorSecondaryRoyal600: '#3353e2',
  zdColorSecondaryTeal400: '#02a191',
  zdColorSecondaryTeal600: '#028079',
  zdColorSecondaryAzureM400: '#5f8dcf',
  zdColorSecondaryAzureM600: '#3a70b2',
  zdColorSecondaryCrimsonM400: '#cc6c5b',
  zdColorSecondaryCrimsonM600: '#b24a3c',
  zdColorSecondaryFuschiaM400: '#cf62a8',
  zdColorSecondaryFuschiaM600: '#a8458c',
  zdColorSecondaryLemonM400: '#e7a500',
  zdColorSecondaryLemonM600: '#c38f00',
  zdColorSecondaryLimeM400: '#519e2d',
  zdColorSecondaryLimeM600: '#47782c',
  zdColorSecondaryMintM400: '#299c66',
  zdColorSecondaryMintM600: '#2e8057',
  zdColorSecondaryOrangeM400: '#d4772c',
  zdColorSecondaryOrangeM600: '#b35827',
  zdColorSecondaryPinkM400: '#d57287',
  zdColorSecondaryPinkM600: '#b23a5d',
  zdColorSecondaryPurpleM400: '#b072cc',
  zdColorSecondaryPurpleM600: '#9358b0',
  zdColorSecondaryRoyalM400: '#7986d8',
  zdColorSecondaryRoyalM600: '#4b61c3',
  zdColorSecondaryTealM400: '#2d9e8f',
  zdColorSecondaryTealM600: '#3c7873',
  zdColorChatOrange: '#f79a3e',
  zdColorConnectRed: '#eb6651',
  zdColorExploreBlue: '#30aabc',
  zdColorGatherPink: '#e7afa2',
  zdColorGuidePink: '#eb4962',
  zdColorMessageGreen: '#37b8af',
  zdColorSellGold: '#d4ae5e',
  zdColorSupportGreen: '#78a300',
  zdColorTalkYellow: '#efc93d',
  zdFontFamilyMonospace: 'SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace',
  zdFontFamilySystem: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",Arial,sans-serif',
  zdFontSizeSm: '12px',
  zdFontSizeMd: '14px',
  zdFontSizeLg: '18px',
  zdFontSizeXl: '22px',
  zdFontSizeXxl: '26px',
  zdFontSizeXxxl: '36px',
  zdFontSizeSmMonospace: '11px',
  zdFontSizeMdMonospace: '13px',
  zdFontSizeLgMonospace: '17px',
  zdFontWeightThin: '100',
  zdFontWeightExtralight: '200',
  zdFontWeightLight: '300',
  zdFontWeightRegular: '400',
  zdFontWeightMedium: '500',
  zdFontWeightSemibold: '600',
  zdFontWeightBold: '700',
  zdFontWeightExtrabold: '800',
  zdFontWeightBlack: '900',
  zdFontWeightUltralight: '200',
  zdFontWeightUltrabold: '800',
  zdFontWeightHeavy: '900',
  zdLineHeightSm: '16px',
  zdLineHeightMd: '20px',
  zdLineHeightLg: '24px',
  zdLineHeightXl: '28px',
  zdLineHeightXxl: '32px',
  zdLineHeightXxxl: '44px',
  zdSpacingXxs: '4px',
  zdSpacingXs: '8px',
  zdSpacingSm: '12px',
  zdSpacing: '20px',
  zdSpacingLg: '32px',
  zdSpacingXl: '40px',
  zdSpacingXxl: '48px'
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("date-fns/isSameDay");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/react-theming");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("date-fns/isBefore");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("date-fns/isValid");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("date-fns/compareAsc");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("date-fns/startOfMonth");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-utilities");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("date-fns/addMonths");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-menu":"index__c-menu___21t_c","is-open":"index__is-open___1rWvo","c-menu--down":"index__c-menu--down___1xrGd","zd-menu--down-open":"index__zd-menu--down-open___2T5Dd","zd-menu--down-open-arrow":"index__zd-menu--down-open-arrow___32Cgv","c-menu--left":"index__c-menu--left___2QX1T","zd-menu--left-open":"index__zd-menu--left-open___3vSwI","zd-menu--left-open-arrow":"index__zd-menu--left-open-arrow___3fyQD","c-menu--right":"index__c-menu--right___3RFRb","zd-menu--right-open":"index__zd-menu--right-open___ng_fa","zd-menu--right-open-arrow":"index__zd-menu--right-open-arrow___HjqC8","c-menu--up":"index__c-menu--up___1Y1Xx","zd-menu--up-open":"index__zd-menu--up-open___Q9PXG","zd-menu--up-open-arrow":"index__zd-menu--up-open-arrow___39iWl","is-rtl":"index__is-rtl___1_SHs","c-menu__item":"index__c-menu__item___2BVHw","c-menu--sm":"index__c-menu--sm___2-kkf","c-menu__item--add":"index__c-menu__item--add___2YeYd","c-menu__item--header":"index__c-menu__item--header___SSz-E","c-menu__item--previous":"index__c-menu__item--previous___3kVra","c-menu__item--header--icon":"index__c-menu__item--header--icon___32h1c","c-menu__item--header__icon":"index__c-menu__item--header__icon___9-aIG","c-menu__item--next":"index__c-menu__item--next___9maV8","is-checked":"index__is-checked___2-ixf","c-menu__item__meta":"index__c-menu__item__meta___2mqxZ","c-menu__item--media":"index__c-menu__item--media___1L3du","c-menu__item--media__figure":"index__c-menu__item--media__figure___Yl6Wt","c-menu__item--media__body":"index__c-menu__item--media__body___tk1Sz","is-focused":"index__is-focused___1mM7k","is-hovered":"index__is-hovered___1e5ch","is-disabled":"index__is-disabled___3guR2","is-expanded":"index__is-expanded___1vSb_","is-hidden":"index__is-hidden___2sQW3","c-menu__separator":"index__c-menu__separator___1XdRk"};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("date-fns/endOfMonth");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("date-fns/isAfter");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("date-fns/parse");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("date-fns/eachDayOfInterval");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("polished/lib/color/rgba");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("polished/lib/math/math");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("date-fns/startOfWeek");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("date-fns/endOfWeek");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("date-fns/addDays");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("date-fns/isToday");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("date-fns/isSameMonth");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("date-fns/subMonths");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("date-fns/subDays");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(3);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-popper"
var external_react_popper_ = __webpack_require__(25);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@zendeskgarden/container-utilities"
var container_utilities_ = __webpack_require__(10);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(6);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(27);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-menus/dist/index.css
var dist = __webpack_require__(12);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/styled/styled-menu.tsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var COMPONENT_ID = 'dropdowns.menu';

var retrieveMenuMargin = function retrieveMenuMargin(_ref) {
  var placement = _ref.placement;
  var marginAmount = '4px';

  if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
    return "margin-top: ".concat(marginAmount, ";");
  }

  if (placement === 'top' || placement === 'top-start' || placement === 'top-end') {
    return "margin-bottom: ".concat(marginAmount, ";");
  }

  if (placement === 'left' || placement === 'left-start' || placement === 'left-end') {
    return "margin-right: ".concat(marginAmount, ";");
  }

  if (placement === 'right' || placement === 'right-start' || placement === 'right-end') {
    return "margin-left: ".concat(marginAmount, ";");
  }

  return '';
};
/**
 * Accepts all `<ul>` props
 */


var StyledMenuView = external_styled_components_default.a.ul.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': "7.1.1",
    className: external_classnames_default()(dist_default.a['c-menu'], (_classNames = {}, _defineProperty(_classNames, dist_default.a['c-menu--sm'], props.small), _defineProperty(_classNames, dist_default.a['c-menu--up'], props.placement === 'top' || props.placement === 'top-start' || props.placement === 'top-end'), _defineProperty(_classNames, dist_default.a['c-menu--right'], props.placement === 'right' || props.placement === 'right-start' || props.placement === 'right-end'), _defineProperty(_classNames, dist_default.a['c-menu--left'], props.placement === 'left' || props.placement === 'left-start' || props.placement === 'left-end'), _defineProperty(_classNames, dist_default.a['c-menu--down'], props.placement === 'bottom' || props.placement === 'bottom-start' || props.placement === 'bottom-end'), _defineProperty(_classNames, dist_default.a['is-open'], props.animate), _defineProperty(_classNames, dist_default.a['is-hidden'], props.hidden), _defineProperty(_classNames, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "styled-menu__StyledMenuView",
  componentId: "sc-44el1m-0"
})(["&&{position:relative;padding:0;}:focus{outline:none;}", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(COMPONENT_ID, props);
});
var StyledMenuWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled-menu__StyledMenuWrapper",
  componentId: "sc-44el1m-1"
})(["", ";"], retrieveMenuMargin);
var StyledMaxHeightWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled-menu__StyledMaxHeightWrapper",
  componentId: "sc-44el1m-2"
})(["", ""], function (props) {
  return props.maxHeight && !props.height && "\n  overflow-y: auto;\n  max-height: ".concat(props.maxHeight, ";\n");
});
var StyledMenu = external_react_default.a.forwardRef(function (_ref2, ref) {
  var placement = _ref2.placement,
      maxHeight = _ref2.maxHeight,
      children = _ref2.children,
      other = _objectWithoutProperties(_ref2, ["placement", "maxHeight", "children"]);

  return external_react_default.a.createElement(StyledMenuWrapper, {
    placement: placement
  }, external_react_default.a.createElement(StyledMenuView, _extends({
    ref: ref,
    placement: placement
  }, other), external_react_default.a.createElement(StyledMaxHeightWrapper, {
    maxHeight: maxHeight
  }, children)));
});
// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-variables/dist/index.js
var css_variables_dist = __webpack_require__(1);

// EXTERNAL MODULE: external "polished/lib/color/rgba"
var rgba_ = __webpack_require__(17);
var rgba_default = /*#__PURE__*/__webpack_require__.n(rgba_);

// EXTERNAL MODULE: external "polished/lib/math/math"
var math_ = __webpack_require__(18);
var math_default = /*#__PURE__*/__webpack_require__.n(math_);

// CONCATENATED MODULE: ./src/styled/styled-datepicker.tsx
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var styled_datepicker_retrieveSpacing = function retrieveSpacing(_ref) {
  var isSmall = _ref.isSmall;

  if (isSmall) {
    return css_variables_dist["zdSpacingLg"];
  }

  return css_variables_dist["zdSpacingXl"];
};

var StyledDatepicker = external_styled_components_default.a.div.withConfig({
  displayName: "styled-datepicker__StyledDatepicker",
  componentId: "sc-5inq6n-0"
})(["padding:", ";color:", ";direction:", ";", ";"], function (props) {
  return props.isSmall ? math_default()("".concat(css_variables_dist["zdSpacingLg"], " / 2")) : css_variables_dist["zdSpacing"];
}, css_variables_dist["zdColorGrey800"], function (props) {
  return Object(react_theming_["isRtl"])(props) && 'rtl';
}, function (props) {
  return Object(react_theming_["retrieveTheme"])('datepickers.datepicker', props);
});
var StyledHeader = external_styled_components_default.a.div.withConfig({
  displayName: "styled-datepicker__StyledHeader",
  componentId: "sc-5inq6n-1"
})(["width:", ";display:flex;", ";"], function (props) {
  return math_default()("".concat(styled_datepicker_retrieveSpacing(props), " * 7"));
}, function (props) {
  return Object(react_theming_["retrieveTheme"])('datepickers.header', props);
});
var StyledHeaderPaddle = external_styled_components_default.a.div.withConfig({
  displayName: "styled-datepicker__StyledHeaderPaddle",
  componentId: "sc-5inq6n-2"
})(["width:", ";height:", ";display:flex;justify-content:center;align-items:center;color:", ";cursor:pointer;border-radius:50%;", ";:hover{color:", ";background-color:", ";}:active{background-color:", ";color:", ";}transform:", ";*{width:", ";height:", ";}", ";"], styled_datepicker_retrieveSpacing, styled_datepicker_retrieveSpacing, css_variables_dist["zdColorGrey600"], function (props) {
  return props.isHidden && "visibility: hidden;";
}, css_variables_dist["zdColorGrey800"], rgba_default()(css_variables_dist["zdColorBlue600"], 0.08), rgba_default()(css_variables_dist["zdColorBlue600"], 0.2), css_variables_dist["zdColorGrey800"], function (props) {
  return Object(react_theming_["isRtl"])(props) && 'rotate(180deg)';
}, math_default()("".concat(css_variables_dist["zdSpacingLg"], " / 2")), math_default()("".concat(css_variables_dist["zdSpacingLg"], " / 2")), function (props) {
  return Object(react_theming_["retrieveTheme"])('datepickers.header_paddle', props);
});
var boldedStyling = Object(external_styled_components_["css"])(["font-size:", ";font-weight:", ";line-height:", ";"], function (props) {
  return props.isSmall ? css_variables_dist["zdFontSizeSm"] : css_variables_dist["zdFontSizeMd"];
}, css_variables_dist["zdFontWeightSemibold"], css_variables_dist["zdLineHeightMd"]);
var StyledHeaderLabel = external_styled_components_default.a.div.withConfig({
  displayName: "styled-datepicker__StyledHeaderLabel",
  componentId: "sc-5inq6n-3"
})(["flex-grow:1;display:flex;align-items:center;justify-content:center;", ";", ";"], boldedStyling, function (props) {
  return Object(react_theming_["retrieveTheme"])('datepickers.header_label', props);
});
var StyledCalendar = external_styled_components_default.a.div.withConfig({
  displayName: "styled-datepicker__StyledCalendar",
  componentId: "sc-5inq6n-4"
})(["width:", ";", ";"], function (props) {
  return math_default()("".concat(styled_datepicker_retrieveSpacing(props), " * 7"));
}, function (props) {
  return Object(react_theming_["retrieveTheme"])('datepickers.calendar', props);
});
var StyledRangeCalendar = external_styled_components_default.a.div.withConfig({
  displayName: "styled-datepicker__StyledRangeCalendar",
  componentId: "sc-5inq6n-5"
})(["display:flex;overflow:auto;", "{padding:0;}", ":", "{margin-right:", ";}"], StyledDatepicker, StyledDatepicker, function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'last-of-type' : 'first-of-type';
}, css_variables_dist["zdSpacing"]);
var StyledCalendarItem = external_styled_components_default.a.div.withConfig({
  displayName: "styled-datepicker__StyledCalendarItem",
  componentId: "sc-5inq6n-6"
})(["display:inline-block;width:", ";height:", ";position:relative;vertical-align:top;", ";"], styled_datepicker_retrieveSpacing, styled_datepicker_retrieveSpacing, function (props) {
  return Object(react_theming_["retrieveTheme"])('datepickers.calendar_item', props);
});
var StyledDayLabel = external_styled_components_default.a.div.withConfig({
  displayName: "styled-datepicker__StyledDayLabel",
  componentId: "sc-5inq6n-7"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;", ";", ";"], boldedStyling, function (props) {
  return Object(react_theming_["retrieveTheme"])('datepickers.day_label', props);
});

var styled_datepicker_retrieveStyledDayColor = function retrieveStyledDayColor(_ref2) {
  var isDisabled = _ref2.isDisabled,
      isSelected = _ref2.isSelected,
      isToday = _ref2.isToday,
      isPreviousMonth = _ref2.isPreviousMonth;

  if (isDisabled) {
    return css_variables_dist["zdColorGrey400"];
  }

  if (isSelected && !isDisabled) {
    return css_variables_dist["zdColorWhite"];
  }

  if (isToday) {
    return 'inherit';
  }

  if (isPreviousMonth) {
    return css_variables_dist["zdColorGrey600"];
  }

  return css_variables_dist["zdColorBlue600"];
};

var styled_datepicker_retrieveBackgroundColor = function retrieveBackgroundColor(_ref3) {
  var isSelected = _ref3.isSelected,
      isDisabled = _ref3.isDisabled;

  if (isSelected && !isDisabled) {
    return css_variables_dist["zdColorBlue600"];
  }

  return 'inherit';
};

var StyledDay = external_styled_components_default.a.div.withConfig({
  displayName: "styled-datepicker__StyledDay",
  componentId: "sc-5inq6n-8"
})(["position:absolute;cursor:", ";width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%;font-size:", ";font-weight:", ";line-height:", ";color:", ";background-color:", ";", " ", ";"], function (props) {
  return props.isDisabled ? 'inherit' : 'pointer';
}, function (props) {
  return props.small ? css_variables_dist["zdFontSizeSm"] : css_variables_dist["zdFontSizeMd"];
}, function (props) {
  return props.isToday && !props.isDisabled ? css_variables_dist["zdFontWeightSemibold"] : 'inherit';
}, css_variables_dist["zdLineHeightMd"], styled_datepicker_retrieveStyledDayColor, styled_datepicker_retrieveBackgroundColor, function (props) {
  return !props.isSelected && !props.isDisabled && "\n  :hover {\n    background-color: ".concat(rgba_default()(css_variables_dist["zdColorBlue600"], 0.08), ";\n    color: ").concat(css_variables_dist["zdColorBlue800"], ";\n  }\n\n  :active {\n    background-color: ").concat(rgba_default()(css_variables_dist["zdColorBlue600"], 0.2), ";\n    color: ").concat(css_variables_dist["zdColorBlue800"], ";\n  }\n  ");
}, function (props) {
  return Object(react_theming_["retrieveTheme"])('datepickers.day', props);
});
var StyledHighlight = external_styled_components_default.a.div.withConfig({
  displayName: "styled-datepicker__StyledHighlight",
  componentId: "sc-5inq6n-9"
})(["position:absolute;top:0;left:0;width:100%;height:100%;", " ", " ", ""], function (props) {
  return props.isStart && "\n    border-radius: ".concat(Object(react_theming_["isRtl"])(props) ? '0 50% 50% 0' : '50% 0 0 50%', ";\n  ");
}, function (props) {
  return props.isEnd && "\n    border-radius: ".concat(Object(react_theming_["isRtl"])(props) ? '50% 0 0 50%' : '0 50% 50% 0', ";\n  ");
}, function (props) {
  return props.isHighlighted && "background-color: ".concat(rgba_default()(css_variables_dist["zdColorBlue600"], 0.08), ";");
});
// CONCATENATED MODULE: ./src/styled/index.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


// CONCATENATED MODULE: ./src/Datepicker/utils/garden-placements.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Convert Garden RTL aware placement to Popper.JS valid placement
 */
function getPopperPlacement(gardenPlacement) {
  switch (gardenPlacement) {
    case 'end':
      return 'right';

    case 'end-top':
      return 'right-start';

    case 'end-bottom':
      return 'right-end';

    case 'start':
      return 'left';

    case 'start-top':
      return 'left-start';

    case 'start-bottom':
      return 'left-end';

    default:
      return gardenPlacement;
  }
}
/**
 * Convert Garden RTL aware placement to RTL equivalent Popper.JS placement
 * @param {String} gardenPlacement
 */

function getRtlPopperPlacement(gardenPlacement) {
  var popperPlacement = getPopperPlacement(gardenPlacement);

  switch (popperPlacement) {
    case 'left':
      return 'right';

    case 'left-start':
      return 'right-start';

    case 'left-end':
      return 'right-end';

    case 'top-start':
      return 'top-end';

    case 'top-end':
      return 'top-start';

    case 'right':
      return 'left';

    case 'right-start':
      return 'left-start';

    case 'right-end':
      return 'left-end';

    case 'bottom-start':
      return 'bottom-end';

    case 'bottom-end':
      return 'bottom-start';

    default:
      return popperPlacement;
  }
}
// EXTERNAL MODULE: external "date-fns/startOfMonth"
var startOfMonth_ = __webpack_require__(9);
var startOfMonth_default = /*#__PURE__*/__webpack_require__.n(startOfMonth_);

// EXTERNAL MODULE: external "date-fns/endOfMonth"
var endOfMonth_ = __webpack_require__(13);
var endOfMonth_default = /*#__PURE__*/__webpack_require__.n(endOfMonth_);

// EXTERNAL MODULE: external "date-fns/startOfWeek"
var startOfWeek_ = __webpack_require__(19);
var startOfWeek_default = /*#__PURE__*/__webpack_require__.n(startOfWeek_);

// EXTERNAL MODULE: external "date-fns/endOfWeek"
var endOfWeek_ = __webpack_require__(20);
var endOfWeek_default = /*#__PURE__*/__webpack_require__.n(endOfWeek_);

// EXTERNAL MODULE: external "date-fns/eachDayOfInterval"
var eachDayOfInterval_ = __webpack_require__(16);
var eachDayOfInterval_default = /*#__PURE__*/__webpack_require__.n(eachDayOfInterval_);

// EXTERNAL MODULE: external "date-fns/addDays"
var addDays_ = __webpack_require__(21);
var addDays_default = /*#__PURE__*/__webpack_require__.n(addDays_);

// EXTERNAL MODULE: external "date-fns/isToday"
var isToday_ = __webpack_require__(22);
var isToday_default = /*#__PURE__*/__webpack_require__.n(isToday_);

// EXTERNAL MODULE: external "date-fns/isSameDay"
var isSameDay_ = __webpack_require__(2);
var isSameDay_default = /*#__PURE__*/__webpack_require__.n(isSameDay_);

// EXTERNAL MODULE: external "date-fns/isSameMonth"
var isSameMonth_ = __webpack_require__(23);
var isSameMonth_default = /*#__PURE__*/__webpack_require__.n(isSameMonth_);

// EXTERNAL MODULE: external "date-fns/isBefore"
var isBefore_ = __webpack_require__(5);
var isBefore_default = /*#__PURE__*/__webpack_require__.n(isBefore_);

// EXTERNAL MODULE: external "date-fns/isAfter"
var isAfter_ = __webpack_require__(14);
var isAfter_default = /*#__PURE__*/__webpack_require__.n(isAfter_);

// CONCATENATED MODULE: ./src/Datepicker/utils/useDatepickerContext.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

var DatepickerContext = Object(external_react_["createContext"])(undefined);
/**
 * Retrieve Dropdown component context
 */

var useDatepickerContext_useDatepickerContext = function useDatepickerContext() {
  return Object(external_react_["useContext"])(DatepickerContext);
};

/* harmony default export */ var utils_useDatepickerContext = (useDatepickerContext_useDatepickerContext);
// CONCATENATED MODULE: ./src/utils/calendar-utils.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
var REGION_MAPPINGS = {
  'ar-DZ': 0,
  'ar-SA': 0,
  'en-CA': 0,
  'en-GB': 1,
  'en-US': 0,
  'fa-IR': 0,
  'fr-CH': 1,
  'nl-BE': 1,
  'pt-BR': 0,
  'zh-CN': 1,
  'zh-TW': 1
};
var LANGUAGE_MAPPINGS = {
  af: 0,
  ar: 6,
  be: 1,
  bg: 1,
  bn: 0,
  ca: 1,
  cs: 1,
  da: 1,
  de: 1,
  el: 1,
  en: 0,
  eo: 1,
  es: 1,
  et: 1,
  fa: 0,
  fi: 1,
  fil: 0,
  fr: 1,
  gl: 1,
  he: 0,
  hr: 1,
  hu: 1,
  id: 1,
  is: 1,
  it: 1,
  ja: 1,
  ka: 1,
  ko: 0,
  lt: 1,
  lv: 1,
  mk: 1,
  ms: 1,
  nb: 1,
  nl: 1,
  nn: 1,
  pl: 1,
  pt: 0,
  ro: 1,
  ru: 1,
  sk: 1,
  sl: 1,
  sr: 1,
  sv: 1,
  th: 1,
  tr: 1,
  ug: 0,
  uk: 1,
  vi: 1,
  zh: 1
};
/**
 * Return start day of week based on locale
 */

function getStartOfWeek(locale) {
  if (!locale) {
    return 0;
  }
  /** Check is explicit region is mapped */


  for (var region in REGION_MAPPINGS) {
    if (locale.startsWith(region)) {
      return REGION_MAPPINGS[region];
    }
  }
  /** Check is generic lanuage is mapped */


  for (var language in LANGUAGE_MAPPINGS) {
    if (locale.startsWith(language)) {
      return LANGUAGE_MAPPINGS[language];
    }
  } // Return Sunday as default


  return 0;
}
// CONCATENATED MODULE: ./node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg
function chevron_left_stroke_extends() { chevron_left_stroke_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chevron_left_stroke_extends.apply(this, arguments); }



var chevron_left_stroke_ref =
/*#__PURE__*/
external_react_default.a.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  d: "M11.5 1L4.9 7.6c-.2.2-.2.5 0 .7l6.6 6.6"
});

var chevron_left_stroke_SvgChevronLeftStroke = function SvgChevronLeftStroke(props) {
  return external_react_default.a.createElement("svg", chevron_left_stroke_extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    focusable: "false"
  }, props), chevron_left_stroke_ref);
};

/* harmony default export */ var chevron_left_stroke = (chevron_left_stroke_SvgChevronLeftStroke);
// CONCATENATED MODULE: ./node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg
function chevron_right_stroke_extends() { chevron_right_stroke_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chevron_right_stroke_extends.apply(this, arguments); }



var chevron_right_stroke_ref =
/*#__PURE__*/
external_react_default.a.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  d: "M4.5 15l6.6-6.6c.2-.2.2-.5 0-.7L4.5 1"
});

var chevron_right_stroke_SvgChevronRightStroke = function SvgChevronRightStroke(props) {
  return external_react_default.a.createElement("svg", chevron_right_stroke_extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    focusable: "false"
  }, props), chevron_right_stroke_ref);
};

/* harmony default export */ var chevron_right_stroke = (chevron_right_stroke_SvgChevronRightStroke);
// CONCATENATED MODULE: ./src/Datepicker/components/MonthSelector.tsx
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var MonthSelector_MonthSelector = function MonthSelector(_ref) {
  var locale = _ref.locale,
      small = _ref.small;

  var _useDatepickerContext = utils_useDatepickerContext(),
      state = _useDatepickerContext.state,
      dispatch = _useDatepickerContext.dispatch;

  var headerLabelFormatter = Object(external_react_["useCallback"])(function (date) {
    var formatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric'
    });
    return formatter.format(date);
  }, [locale]);
  return external_react_default.a.createElement(StyledHeader, {
    isSmall: small
  }, external_react_default.a.createElement(StyledHeaderPaddle, {
    isSmall: small,
    onClick: function onClick() {
      dispatch({
        type: 'PREVIEW_PREVIOUS_MONTH'
      });
    }
  }, external_react_default.a.createElement(chevron_left_stroke, null)), external_react_default.a.createElement(StyledHeaderLabel, {
    isSmall: small
  }, headerLabelFormatter(state.previewDate)), external_react_default.a.createElement(StyledHeaderPaddle, {
    isSmall: small,
    onClick: function onClick() {
      dispatch({
        type: 'PREVIEW_NEXT_MONTH'
      });
    }
  }, external_react_default.a.createElement(chevron_right_stroke, null)));
};

/* harmony default export */ var components_MonthSelector = (MonthSelector_MonthSelector);
// CONCATENATED MODULE: ./src/Datepicker/components/Calendar.tsx
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

















var Calendar_Calendar = function Calendar(_ref) {
  var value = _ref.value,
      minValue = _ref.minValue,
      maxValue = _ref.maxValue,
      small = _ref.small,
      locale = _ref.locale;

  var _useDatepickerContext = utils_useDatepickerContext(),
      state = _useDatepickerContext.state,
      dispatch = _useDatepickerContext.dispatch;

  var weekStartsOn = getStartOfWeek(locale);
  var monthStartDate = startOfMonth_default()(state.previewDate);
  var monthEndDate = endOfMonth_default()(monthStartDate);
  var startDate = startOfWeek_default()(monthStartDate, {
    weekStartsOn: weekStartsOn
  });
  var endDate = endOfWeek_default()(monthEndDate, {
    weekStartsOn: weekStartsOn
  });
  var dayLabelFormatter = Object(external_react_["useCallback"])(function (date) {
    var formatter = new Intl.DateTimeFormat(locale, {
      weekday: 'short'
    });
    return formatter.format(date);
  }, [locale]);
  var dayLabels = eachDayOfInterval_default()({
    start: startDate,
    end: addDays_default()(startDate, 6)
  }).map(function (date) {
    var formattedDayLabel = dayLabelFormatter(date);
    return external_react_default.a.createElement(StyledCalendarItem, {
      key: "day-label-".concat(formattedDayLabel),
      isSmall: small
    }, external_react_default.a.createElement(StyledDayLabel, {
      isSmall: small
    }, formattedDayLabel));
  });
  var dayFormatter = Object(external_react_["useCallback"])(function (date) {
    var formatter = new Intl.DateTimeFormat(locale, {
      day: 'numeric'
    });
    return formatter.format(date);
  }, [locale]);
  var items = eachDayOfInterval_default()({
    start: startDate,
    end: endDate
  }).map(function (date, itemsIndex) {
    var formattedDayLabel = dayFormatter(date);
    var isCurrentDate = isToday_default()(date);
    var isPreviousMonth = !isSameMonth_default()(date, state.previewDate);
    var isSelected = value && isSameDay_default()(date, value);
    var isDisabled = false;

    if (minValue !== undefined) {
      isDisabled = isBefore_default()(date, minValue) && !isSameDay_default()(date, minValue);
    }

    if (maxValue !== undefined) {
      isDisabled = isDisabled || isAfter_default()(date, maxValue) && !isSameDay_default()(date, maxValue);
    }

    return external_react_default.a.createElement(StyledCalendarItem, {
      key: "day-".concat(itemsIndex),
      isSmall: small
    }, external_react_default.a.createElement(StyledDay, {
      isToday: isCurrentDate,
      isPreviousMonth: isPreviousMonth,
      isSelected: isSelected,
      isDisabled: isDisabled,
      small: small,
      onClick: function onClick() {
        if (!isDisabled) {
          dispatch({
            type: 'SELECT_DATE',
            value: date
          });
        }
      }
    }, formattedDayLabel));
  });
  return external_react_default.a.createElement(StyledDatepicker, {
    isSmall: small,
    onMouseDown: function onMouseDown(e) {
      /** Stop focus from escaping input */
      e.preventDefault();
    }
  }, external_react_default.a.createElement(components_MonthSelector, {
    locale: locale,
    small: small
  }), external_react_default.a.createElement(StyledCalendar, {
    isSmall: small
  }, dayLabels, items));
};

/* harmony default export */ var components_Calendar = (Calendar_Calendar);
// EXTERNAL MODULE: external "date-fns/addMonths"
var addMonths_ = __webpack_require__(11);
var addMonths_default = /*#__PURE__*/__webpack_require__.n(addMonths_);

// EXTERNAL MODULE: external "date-fns/subMonths"
var subMonths_ = __webpack_require__(24);
var subMonths_default = /*#__PURE__*/__webpack_require__.n(subMonths_);

// EXTERNAL MODULE: external "date-fns/isValid"
var isValid_ = __webpack_require__(7);
var isValid_default = /*#__PURE__*/__webpack_require__.n(isValid_);

// EXTERNAL MODULE: external "date-fns/parse"
var parse_ = __webpack_require__(15);
var parse_default = /*#__PURE__*/__webpack_require__.n(parse_);

// CONCATENATED MODULE: ./src/Datepicker/utils/datepicker-reducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { datepicker_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function datepicker_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/**
 * Parse string input value using current locale and date formats
 */

function parseInputValue(_ref) {
  var inputValue = _ref.inputValue,
      customParseDate = _ref.customParseDate;

  if (customParseDate) {
    return customParseDate(inputValue);
  }

  var MINIMUM_DATE = new Date(1001, 0, 0);
  var tryParseDate = parse_default()(inputValue, 'P', new Date());

  if (isValid_default()(tryParseDate) && !isBefore_default()(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse_default()(inputValue, 'PP', new Date());

  if (isValid_default()(tryParseDate) && !isBefore_default()(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse_default()(inputValue, 'PPP', new Date());

  if (isValid_default()(tryParseDate) && !isBefore_default()(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  return new Date(NaN);
}
/**
 * Format inputValue with the correct locale
 */


function formatInputValue(_ref2) {
  var date = _ref2.date,
      locale = _ref2.locale,
      formatDate = _ref2.formatDate;

  if (!date) {
    return '';
  }

  if (formatDate) {
    return formatDate(date);
  }

  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

var datepicker_reducer_datepickerReducer = function datepickerReducer(_ref3) {
  var value = _ref3.value,
      formatDate = _ref3.formatDate,
      locale = _ref3.locale,
      customParseDate = _ref3.customParseDate,
      onChange = _ref3.onChange;
  return function (state, action) {
    switch (action.type) {
      case 'OPEN':
        return _objectSpread({}, state, {
          isOpen: true,
          previewDate: value || new Date()
        });

      case 'CLOSE':
        {
          var inputValue = formatInputValue({
            date: value,
            locale: locale,
            formatDate: formatDate
          });
          return _objectSpread({}, state, {
            isOpen: false,
            inputValue: inputValue
          });
        }

      case 'PREVIEW_NEXT_MONTH':
        {
          var previewDate = addMonths_default()(state.previewDate, 1);
          return _objectSpread({}, state, {
            previewDate: previewDate
          });
        }

      case 'PREVIEW_PREVIOUS_MONTH':
        {
          var _previewDate = subMonths_default()(state.previewDate, 1);

          return _objectSpread({}, state, {
            previewDate: _previewDate
          });
        }

      case 'MANUALLY_UPDATE_INPUT':
        {
          var _inputValue = action.value;
          var currentDate = parseInputValue({
            inputValue: _inputValue,
            customParseDate: customParseDate
          });

          if (currentDate && isValid_default()(currentDate) && !isSameDay_default()(value, currentDate)) {
            onChange && onChange(currentDate);
          }

          return _objectSpread({}, state, {
            isOpen: true,
            inputValue: _inputValue
          });
        }

      case 'CONTROLLED_VALUE_CHANGE':
        {
          var _previewDate2 = action.value || new Date();

          var _inputValue2 = formatInputValue({
            date: action.value,
            locale: locale,
            formatDate: formatDate
          });

          if (action.value && isValid_default()(action.value) && !isSameDay_default()(value, action.value)) {
            onChange && onChange(action.value);
          }

          return _objectSpread({}, state, {
            previewDate: _previewDate2,
            inputValue: _inputValue2
          });
        }

      case 'CONTROLLED_LOCALE_CHANGE':
        {
          var _inputValue3 = formatInputValue({
            date: value,
            locale: locale,
            formatDate: formatDate
          });

          return _objectSpread({}, state, {
            inputValue: _inputValue3
          });
        }

      case 'SELECT_DATE':
        {
          var _inputValue4 = formatInputValue({
            date: action.value,
            locale: locale,
            formatDate: formatDate
          });

          if (action.value && isValid_default()(action.value) && !isSameDay_default()(value, action.value)) {
            onChange && onChange(action.value);
          }

          return _objectSpread({}, state, {
            isOpen: false,
            inputValue: _inputValue4
          });
        }

      /* istanbul ignore next */

      default:
        throw new Error();
    }
  };
};
/**
 * Retrieve initial state for the Datepicker reducer
 */

function retrieveInitialState(initialProps) {
  var previewDate = initialProps.value;

  if (previewDate === undefined || !isValid_default()(previewDate)) {
    previewDate = new Date();
  }

  var inputValue = '';

  if (initialProps.value !== undefined) {
    if (initialProps.formatDate) {
      inputValue = initialProps.formatDate(initialProps.value);
    } else {
      inputValue = new Intl.DateTimeFormat(initialProps.locale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(previewDate);
    }
  }

  return {
    isOpen: false,
    previewDate: previewDate,
    inputValue: inputValue
  };
}
// CONCATENATED MODULE: ./src/Datepicker/Datepicker.tsx
function Datepicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Datepicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Datepicker_ownKeys(source, true).forEach(function (key) { Datepicker_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Datepicker_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Datepicker_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */











var Datepicker_Datepicker = function Datepicker(props) {
  var children = props.children,
      placement = props.placement,
      popperModifiers = props.popperModifiers,
      eventsEnabled = props.eventsEnabled,
      zIndex = props.zIndex,
      animate = props.animate,
      refKey = props.refKey,
      value = props.value,
      small = props.small,
      onChange = props.onChange,
      formatDate = props.formatDate,
      minValue = props.minValue,
      maxValue = props.maxValue,
      locale = props.locale,
      customParseDate = props.customParseDate;
  var memoizedReducer = Object(external_react_["useCallback"])(datepicker_reducer_datepickerReducer({
    value: value,
    formatDate: formatDate,
    locale: locale,
    customParseDate: customParseDate,
    onChange: onChange
  }), [value, formatDate, locale, onChange, customParseDate]);

  var _useReducer = Object(external_react_["useReducer"])(memoizedReducer, retrieveInitialState(props)),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var scheduleUpdateRef = Object(external_react_["useRef"])(undefined);
  var inputRef = Object(external_react_["useRef"])(null);
  var isInputMouseDownRef = Object(external_react_["useRef"])(false);
  /**
   * Recalculate popper placement while open to allow animations to complete.
   * This must be ran every render to allow for the number of items to change
   * and still be placed correctly.
   **/

  Object(external_react_["useEffect"])(function () {
    if (state.isOpen) {
      scheduleUpdateRef.current && scheduleUpdateRef.current();
    }
  });
  /**
   * Dispatch update to reducer when controlled value is changed
   */

  Object(external_react_["useEffect"])(function () {
    dispatch({
      type: 'CONTROLLED_VALUE_CHANGE',
      value: value
    });
  }, [value]);
  Object(external_react_["useEffect"])(function () {
    dispatch({
      type: 'CONTROLLED_LOCALE_CHANGE'
    });
  }, [locale]);
  var popperPlacement = Object(react_theming_["isRtl"])(props) ? getRtlPopperPlacement(placement) : getPopperPlacement(placement);
  return external_react_default.a.createElement(DatepickerContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, external_react_default.a.createElement(external_react_popper_["Manager"], null, external_react_default.a.createElement(external_react_popper_["Reference"], null, function (_ref) {
    var _React$cloneElement;

    var ref = _ref.ref;
    return external_react_default.a.cloneElement(external_react_default.a.Children.only(children), (_React$cloneElement = {}, Datepicker_defineProperty(_React$cloneElement, refKey, function (refValue) {
      ref(refValue);
      inputRef.current = refValue;
    }), Datepicker_defineProperty(_React$cloneElement, "onMouseDown", function onMouseDown() {
      isInputMouseDownRef.current = true;
    }), Datepicker_defineProperty(_React$cloneElement, "onMouseUp", function onMouseUp() {
      setTimeout(function () {
        isInputMouseDownRef.current = false;
      }, 0);
    }), Datepicker_defineProperty(_React$cloneElement, "onClick", function onClick() {
      /** Ensure click/focus events from associated labels are not triggered */
      if (isInputMouseDownRef.current && !state.isOpen) {
        dispatch({
          type: 'OPEN'
        });
      }
    }), Datepicker_defineProperty(_React$cloneElement, "onBlur", function onBlur() {
      dispatch({
        type: 'CLOSE'
      });
    }), Datepicker_defineProperty(_React$cloneElement, "onChange", function onChange(e) {
      dispatch({
        type: 'MANUALLY_UPDATE_INPUT',
        value: e.target.value
      });
    }), Datepicker_defineProperty(_React$cloneElement, "onKeyDown", function onKeyDown(e) {
      switch (e.keyCode) {
        case container_utilities_["KEY_CODES"].ESCAPE:
        case container_utilities_["KEY_CODES"].ENTER:
          dispatch({
            type: 'CLOSE'
          });
          break;

        case container_utilities_["KEY_CODES"].UP:
        case container_utilities_["KEY_CODES"].DOWN:
        case container_utilities_["KEY_CODES"].SPACE:
          dispatch({
            type: 'OPEN'
          });
          break;
      }
    }), Datepicker_defineProperty(_React$cloneElement, "autoComplete", 'off'), Datepicker_defineProperty(_React$cloneElement, "value", state.inputValue), _React$cloneElement));
  }), state.isOpen && external_react_default.a.createElement(external_react_popper_["Popper"], {
    placement: popperPlacement,
    modifiers: popperModifiers // Disable position updating on scroll events while menu is closed
    ,
    eventsEnabled: state.isOpen && eventsEnabled
  }, function (_ref2) {
    var ref = _ref2.ref,
        style = _ref2.style,
        scheduleUpdate = _ref2.scheduleUpdate,
        currentPlacement = _ref2.placement;
    scheduleUpdateRef.current = scheduleUpdate;

    var popperStyle = Datepicker_objectSpread({}, style, {
      zIndex: zIndex
    });

    return external_react_default.a.createElement("div", {
      ref: ref,
      style: popperStyle,
      "data-garden-id": "datepickers.datepicker",
      "date-garden-version": "7.1.1"
    }, external_react_default.a.createElement(StyledMenu, {
      animate: state.isOpen && animate,
      placement: currentPlacement
    }, external_react_default.a.createElement(components_Calendar, {
      small: small,
      value: value,
      minValue: minValue,
      maxValue: maxValue,
      locale: locale
    })));
  })));
};

Datepicker_Datepicker.propTypes = {
  value: external_prop_types_default.a.any,
  onChange: external_prop_types_default.a.any,
  formatDate: external_prop_types_default.a.func,
  locale: external_prop_types_default.a.any,
  minValue: external_prop_types_default.a.any,
  maxValue: external_prop_types_default.a.any,
  small: external_prop_types_default.a.bool,
  customParseDate: external_prop_types_default.a.any,
  refKey: external_prop_types_default.a.string,
  placement: external_prop_types_default.a.oneOf(['auto', 'top', 'top-start', 'top-end', 'end', 'end-top', 'end-bottom', 'bottom', 'bottom-start', 'bottom-end', 'start', 'start-top', 'start-bottom']),
  popperModifiers: external_prop_types_default.a.any,
  animate: external_prop_types_default.a.bool,
  eventsEnabled: external_prop_types_default.a.bool,
  zIndex: external_prop_types_default.a.number
};
Datepicker_Datepicker.defaultProps = {
  placement: 'bottom-start',
  refKey: 'ref',
  animate: true,
  eventsEnabled: true,
  zIndex: 1000,
  locale: 'en-US'
};
/* harmony default export */ var src_Datepicker_Datepicker = (Object(react_theming_["withTheme"])(Datepicker_Datepicker));
// EXTERNAL MODULE: external "date-fns/compareAsc"
var compareAsc_ = __webpack_require__(8);
var compareAsc_default = /*#__PURE__*/__webpack_require__.n(compareAsc_);

// CONCATENATED MODULE: ./src/DatepickerRange/utils/datepicker-range-reducer.ts
function datepicker_range_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function datepicker_range_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { datepicker_range_reducer_ownKeys(source, true).forEach(function (key) { datepicker_range_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { datepicker_range_reducer_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function datepicker_range_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */










/**
 * Format date value to a localized string
 */

function formatValue(_ref) {
  var value = _ref.value,
      locale = _ref.locale,
      formatDate = _ref.formatDate;
  var stringValue = '';

  if (value !== undefined && isValid_default()(value)) {
    if (formatDate) {
      stringValue = formatDate(value);
    } else {
      stringValue = new Intl.DateTimeFormat(locale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(value);
    }
  }

  return stringValue;
}
/**
 * Parse string input value using current locale and date formats
 */


function datepicker_range_reducer_parseInputValue(_ref2) {
  var inputValue = _ref2.inputValue;
  var MINIMUM_DATE = new Date(1001, 0, 0);
  var tryParseDate = parse_default()(inputValue || '', 'P', new Date());

  if (isValid_default()(tryParseDate) && !isBefore_default()(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse_default()(inputValue || '', 'PP', new Date());

  if (isValid_default()(tryParseDate) && !isBefore_default()(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse_default()(inputValue || '', 'PPP', new Date());

  if (isValid_default()(tryParseDate) && !isBefore_default()(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  return new Date(NaN);
}

var datepicker_range_reducer_datepickerRangeReducer = function datepickerRangeReducer(_ref3) {
  var startValue = _ref3.startValue,
      endValue = _ref3.endValue,
      locale = _ref3.locale,
      formatDate = _ref3.formatDate,
      onChange = _ref3.onChange,
      customParseDate = _ref3.customParseDate;
  return function (state, action) {
    switch (action.type) {
      case 'START_FOCUS':
        {
          var previewDate = state.previewDate;

          if (startValue) {
            if (compareAsc_default()(startValue, startOfMonth_default()(state.previewDate)) === 1 && compareAsc_default()(startValue, addMonths_default()(endOfMonth_default()(state.previewDate), 1)) === -1) {
              previewDate = state.previewDate;
            } else {
              previewDate = startOfMonth_default()(startValue);
            }
          }

          return datepicker_range_reducer_objectSpread({}, state, {
            previewDate: previewDate,
            isStartFocused: true,
            isEndFocused: false
          });
        }

      case 'END_FOCUS':
        {
          var _previewDate = state.previewDate;

          if (endValue) {
            if (compareAsc_default()(endValue, startOfMonth_default()(state.previewDate)) === 1 && compareAsc_default()(endValue, addMonths_default()(endOfMonth_default()(state.previewDate), 1)) === -1) {
              _previewDate = state.previewDate;
            } else {
              _previewDate = startOfMonth_default()(endValue);
            }
          }

          return datepicker_range_reducer_objectSpread({}, state, {
            previewDate: _previewDate,
            isEndFocused: true,
            isStartFocused: false
          });
        }

      case 'START_BLUR':
        {
          var parsedDate;

          if (customParseDate) {
            parsedDate = customParseDate(state.startInputValue);
          } else {
            parsedDate = datepicker_range_reducer_parseInputValue({
              inputValue: state.startInputValue
            });
          }

          if (parsedDate && isValid_default()(parsedDate) && !isSameDay_default()(parsedDate, startValue)) {
            onChange && onChange({
              startValue: parsedDate,
              endValue: endValue
            });
          }

          var startInputValue = formatValue({
            value: parsedDate,
            locale: locale,
            formatDate: formatDate
          });
          return datepicker_range_reducer_objectSpread({}, state, {
            startInputValue: startInputValue || formatValue({
              value: startValue,
              locale: locale,
              formatDate: formatDate
            }),
            isStartFocused: false
          });
        }

      case 'END_BLUR':
        {
          var _parsedDate;

          if (customParseDate) {
            _parsedDate = customParseDate(state.endInputValue);
          } else {
            _parsedDate = datepicker_range_reducer_parseInputValue({
              inputValue: state.endInputValue
            });
          }

          if (_parsedDate && isValid_default()(_parsedDate) && !isSameDay_default()(_parsedDate, endValue)) {
            onChange && onChange({
              startValue: startValue,
              endValue: _parsedDate
            });
          }

          var endInputValue = formatValue({
            value: _parsedDate,
            locale: locale,
            formatDate: formatDate
          }) || formatValue({
            value: endValue,
            locale: locale,
            formatDate: formatDate
          });
          return datepicker_range_reducer_objectSpread({}, state, {
            endInputValue: endInputValue,
            isEndFocused: false
          });
        }

      case 'CONTROLLED_START_VALUE_CHANGE':
        {
          var _startInputValue = formatValue({
            value: action.value,
            locale: locale,
            formatDate: formatDate
          });

          var _previewDate2 = state.previewDate;

          if (action.value) {
            if (compareAsc_default()(action.value, startOfMonth_default()(state.previewDate)) === 1 && compareAsc_default()(action.value, addMonths_default()(endOfMonth_default()(state.previewDate), 1)) === -1) {
              _previewDate2 = state.previewDate;
            } else {
              _previewDate2 = startOfMonth_default()(action.value);
            }
          }

          return datepicker_range_reducer_objectSpread({}, state, {
            startInputValue: _startInputValue,
            hoverDate: undefined,
            previewDate: _previewDate2
          });
        }

      case 'CONTROLLED_END_VALUE_CHANGE':
        {
          var _endInputValue = formatValue({
            value: action.value,
            locale: locale,
            formatDate: formatDate
          });

          var _previewDate3 = state.previewDate;

          if (action.value) {
            if (compareAsc_default()(action.value, startOfMonth_default()(state.previewDate)) === 1 && compareAsc_default()(action.value, addMonths_default()(endOfMonth_default()(state.previewDate), 1)) === -1) {
              _previewDate3 = state.previewDate;
            } else {
              _previewDate3 = startOfMonth_default()(action.value);
            }
          }

          return datepicker_range_reducer_objectSpread({}, state, {
            endInputValue: _endInputValue,
            hoverDate: undefined,
            previewDate: _previewDate3
          });
        }

      case 'CLICK_DATE':
        if (state.isStartFocused) {
          if (endValue !== undefined && (isBefore_default()(action.value, endValue) || isSameDay_default()(action.value, endValue))) {
            onChange && onChange({
              startValue: action.value,
              endValue: endValue
            });
          } else {
            onChange && onChange({
              startValue: action.value,
              endValue: undefined
            });
          }
        } else if (state.isEndFocused) {
          if (startValue !== undefined && (isAfter_default()(action.value, startValue) || isSameDay_default()(action.value, startValue))) {
            onChange && onChange({
              startValue: startValue,
              endValue: action.value
            });
          } else {
            onChange && onChange({
              startValue: action.value,
              endValue: undefined
            });
          }
        } else if (startValue === undefined) {
          onChange && onChange({
            startValue: action.value,
            endValue: undefined
          });
        } else if (endValue === undefined) {
          if (isBefore_default()(action.value, startValue)) {
            onChange && onChange({
              startValue: action.value,
              endValue: undefined
            });
          } else {
            onChange && onChange({
              startValue: startValue,
              endValue: action.value
            });
          }
        } else {
          onChange && onChange({
            startValue: action.value,
            endValue: undefined
          });
        }

        return state;

      case 'START_INPUT_ONCHANGE':
        {
          return datepicker_range_reducer_objectSpread({}, state, {
            startInputValue: action.value
          });
        }

      case 'END_INPUT_ONCHANGE':
        {
          return datepicker_range_reducer_objectSpread({}, state, {
            endInputValue: action.value
          });
        }

      case 'HOVER_DATE':
        return datepicker_range_reducer_objectSpread({}, state, {
          hoverDate: action.value
        });

      case 'PREVIEW_NEXT_MONTH':
        {
          var _previewDate4 = addMonths_default()(state.previewDate, 1);

          return datepicker_range_reducer_objectSpread({}, state, {
            previewDate: _previewDate4,
            hoverDate: undefined
          });
        }

      case 'PREVIEW_PREVIOUS_MONTH':
        {
          var _previewDate5 = subMonths_default()(state.previewDate, 1);

          return datepicker_range_reducer_objectSpread({}, state, {
            previewDate: _previewDate5,
            hoverDate: undefined
          });
        }

      /* istanbul ignore next */

      default:
        throw new Error();
    }
  };
};
/**
 * Retrieve initial state for the Datepicker reducer
 */

function datepicker_range_reducer_retrieveInitialState(initialProps) {
  var previewDate = initialProps.startValue;

  if (previewDate === undefined || !isValid_default()(previewDate)) {
    previewDate = new Date();
  }

  var startInputValue = formatValue({
    value: initialProps.startValue,
    locale: initialProps.locale,
    formatDate: initialProps.formatDate
  });
  var endInputValue = formatValue({
    value: initialProps.endValue,
    locale: initialProps.locale,
    formatDate: initialProps.formatDate
  });
  return {
    previewDate: previewDate,
    startInputValue: startInputValue,
    endInputValue: endInputValue,
    isStartFocused: false,
    isEndFocused: false
  };
}
// CONCATENATED MODULE: ./src/DatepickerRange/utils/useDatepickerRangeContext.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

var DatepickerRangeContext = Object(external_react_["createContext"])(undefined);
/**
 * Retrieve Dropdown component context
 */

var useDatepickerRangeContext_useDatepickerContext = function useDatepickerContext() {
  return Object(external_react_["useContext"])(DatepickerRangeContext);
};

/* harmony default export */ var useDatepickerRangeContext = (useDatepickerRangeContext_useDatepickerContext);
// CONCATENATED MODULE: ./src/DatepickerRange/components/Start.tsx
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var Start_Start = function Start(props) {
  var _useDatepickerRangeCo = useDatepickerRangeContext(),
      state = _useDatepickerRangeCo.state,
      dispatch = _useDatepickerRangeCo.dispatch,
      startInputRef = _useDatepickerRangeCo.startInputRef;

  var onChangeCallback = Object(external_react_["useCallback"])(function (e) {
    dispatch({
      type: 'START_INPUT_ONCHANGE',
      value: e.target.value
    });
    props.children.props.onChange && props.children.props.onChange(e);
  }, [dispatch, props.children]);
  var onFocusCallback = Object(external_react_["useCallback"])(function (e) {
    dispatch({
      type: 'START_FOCUS'
    });
    props.children.props.onFocus && props.children.props.onFocus(e);
  }, [dispatch, props.children]);
  var onKeyDownCallback = Object(external_react_["useCallback"])(function (e) {
    if (e.keyCode === container_utilities_["KEY_CODES"].ENTER) {
      dispatch({
        type: 'START_BLUR'
      });
      e.preventDefault();
    }

    props.children.props.onKeyDown && props.children.props.onKeyDown(e);
  }, [dispatch, props.children]);
  var onBlurCallback = Object(external_react_["useCallback"])(function (e) {
    dispatch({
      type: 'START_BLUR'
    });
    props.children.props.onBlur && props.children.props.onBlur(e);
  }, [dispatch, props.children]);
  return external_react_default.a.cloneElement(external_react_default.a.Children.only(props.children), {
    value: state.startInputValue,
    ref: startInputRef,
    onChange: onChangeCallback,
    onFocus: onFocusCallback,
    onKeyDown: onKeyDownCallback,
    onBlur: onBlurCallback
  });
};

/* harmony default export */ var components_Start = (Start_Start);
// CONCATENATED MODULE: ./src/DatepickerRange/components/End.tsx
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var End_End = function End(props) {
  var _useDatepickerRangeCo = useDatepickerRangeContext(),
      state = _useDatepickerRangeCo.state,
      dispatch = _useDatepickerRangeCo.dispatch,
      endInputRef = _useDatepickerRangeCo.endInputRef;

  var onChangeCallback = Object(external_react_["useCallback"])(function (e) {
    dispatch({
      type: 'END_INPUT_ONCHANGE',
      value: e.target.value
    });
    props.children.props.onChange && props.children.props.onChange(e);
  }, [dispatch, props.children]);
  var onFocusCallback = Object(external_react_["useCallback"])(function (e) {
    dispatch({
      type: 'END_FOCUS'
    });
    props.children.props.onFocus && props.children.props.onFocus(e);
  }, [dispatch, props.children]);
  var onKeydownCallback = Object(external_react_["useCallback"])(function (e) {
    if (e.keyCode === container_utilities_["KEY_CODES"].ENTER) {
      dispatch({
        type: 'END_BLUR'
      });
      e.preventDefault();
    }

    props.children.props.onKeyDown && props.children.props.onKeyDown(e);
  }, [dispatch, props.children]);
  var onBlurCallback = Object(external_react_["useCallback"])(function (e) {
    dispatch({
      type: 'END_BLUR'
    });
    props.children.props.onBlur && props.children.props.onBlur(e);
  }, [dispatch, props.children]);
  return external_react_default.a.cloneElement(external_react_default.a.Children.only(props.children), {
    value: state.endInputValue,
    ref: endInputRef,
    onChange: onChangeCallback,
    onFocus: onFocusCallback,
    onKeyDown: onKeydownCallback,
    onBlur: onBlurCallback
  });
};

/* harmony default export */ var components_End = (End_End);
// EXTERNAL MODULE: external "date-fns/subDays"
var subDays_ = __webpack_require__(26);
var subDays_default = /*#__PURE__*/__webpack_require__.n(subDays_);

// CONCATENATED MODULE: ./src/DatepickerRange/components/Month.tsx
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



















var Month_Month = function Month(_ref) {
  var locale = _ref.locale,
      displayDate = _ref.displayDate,
      small = _ref.small,
      isPreviousHidden = _ref.isPreviousHidden,
      isNextHidden = _ref.isNextHidden,
      dispatch = _ref.dispatch,
      minValue = _ref.minValue,
      maxValue = _ref.maxValue,
      startValue = _ref.startValue,
      endValue = _ref.endValue,
      hoverDate = _ref.hoverDate;
  var headerLabelFormatter = Object(external_react_["useCallback"])(function (date) {
    var formatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric'
    });
    return formatter.format(date);
  }, [locale]);
  var dayLabelFormatter = Object(external_react_["useCallback"])(function (date) {
    var formatter = new Intl.DateTimeFormat(locale, {
      weekday: 'short'
    });
    return formatter.format(date);
  }, [locale]);
  var dayFormatter = Object(external_react_["useCallback"])(function (date) {
    var formatter = new Intl.DateTimeFormat(locale, {
      day: 'numeric'
    });
    return formatter.format(date);
  }, [locale]);
  var weekStartsOn = getStartOfWeek(locale);
  var monthStartDate = startOfMonth_default()(displayDate);
  var monthEndDate = endOfMonth_default()(monthStartDate);
  var startDate = startOfWeek_default()(monthStartDate, {
    weekStartsOn: weekStartsOn
  });
  var endDate = endOfWeek_default()(monthEndDate, {
    weekStartsOn: weekStartsOn
  });
  var dayLabels = eachDayOfInterval_default()({
    start: startDate,
    end: addDays_default()(startDate, 6)
  }).map(function (date) {
    var formattedDayLabel = dayLabelFormatter(date);
    return external_react_default.a.createElement(StyledCalendarItem, {
      key: "day-label-".concat(formattedDayLabel),
      isSmall: small
    }, external_react_default.a.createElement(StyledDayLabel, {
      isSmall: small
    }, formattedDayLabel));
  });
  var items = eachDayOfInterval_default()({
    start: startDate,
    end: endDate
  }).map(function (date, itemsIndex) {
    var formattedDayLabel = dayFormatter(date);
    var isCurrentDate = isToday_default()(date);
    var isPreviousMonth = !isSameMonth_default()(date, displayDate);

    if (isPreviousMonth) {
      return external_react_default.a.createElement(StyledCalendarItem, {
        key: "day-".concat(itemsIndex),
        isSmall: small
      }, external_react_default.a.createElement(StyledDay, {
        small: small,
        isPreviousMonth: true,
        isDisabled: true
      }, "\xA0"));
    }

    var isSelected = false;

    if (startValue !== undefined) {
      isSelected = isSameDay_default()(date, startValue);
    }

    if (endValue !== undefined) {
      isSelected = isSelected || isSameDay_default()(date, endValue);
    }

    var isDisabled = false;

    if (minValue !== undefined) {
      isDisabled = isBefore_default()(date, minValue) && !isSameDay_default()(date, minValue);
    }

    if (maxValue !== undefined) {
      isDisabled = isDisabled || isAfter_default()(date, maxValue) && !isSameDay_default()(date, maxValue);
    }

    var isHighlighted = false;

    if (startValue !== undefined && endValue !== undefined) {
      isHighlighted = (isAfter_default()(date, startValue) || isSameDay_default()(date, startValue)) && (isBefore_default()(date, endValue) || isSameDay_default()(date, endValue)) && !isSameDay_default()(startValue, endValue);
    } else if (startValue !== undefined && hoverDate !== undefined) {
      isHighlighted = (isAfter_default()(date, startValue) || isSameDay_default()(date, startValue)) && (isBefore_default()(date, hoverDate) || isSameDay_default()(date, hoverDate));
    }

    var isHighlightStart = isHighlighted && startValue && isSameDay_default()(date, startValue) || false;
    var isHighlightEnd = isHighlighted && endValue && isSameDay_default()(date, endValue) || hoverDate && isSameDay_default()(date, hoverDate) && !isBefore_default()(date, endValue) || false;
    var isInvalidDateRange = endValue && startValue && compareAsc_default()(endValue, startValue) === -1 || false;

    if (minValue) {
      if (startValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc_default()(startValue, subDays_default()(minValue, 1)) === -1;
      }

      if (endValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc_default()(endValue, subDays_default()(minValue, 1)) === -1;
      }
    }

    if (maxValue) {
      if (startValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc_default()(startValue, maxValue) === 1;
      }

      if (endValue) {
        isInvalidDateRange = isInvalidDateRange || compareAsc_default()(endValue, maxValue) === 1;
      }
    }

    return external_react_default.a.createElement(StyledCalendarItem, {
      key: "day-".concat(itemsIndex),
      isSmall: small
    }, external_react_default.a.createElement(StyledHighlight, {
      isHighlighted: !isInvalidDateRange && isHighlighted,
      isStart: !isInvalidDateRange && isHighlightStart,
      isEnd: !isInvalidDateRange && isHighlightEnd
    }), external_react_default.a.createElement(StyledDay, {
      isToday: isCurrentDate,
      isPreviousMonth: isPreviousMonth,
      isSelected: !isInvalidDateRange && isSelected,
      isDisabled: isDisabled,
      small: small,
      onClick: function onClick() {
        if (!isDisabled) {
          dispatch({
            type: 'CLICK_DATE',
            value: date
          });
        }
      },
      onMouseEnter: function onMouseEnter() {
        if (!isSelected) {
          dispatch({
            type: 'HOVER_DATE',
            value: date
          });
        }
      }
    }, formattedDayLabel));
  });
  return external_react_default.a.createElement(StyledDatepicker, {
    isSmall: small,
    onMouseDown: function onMouseDown(e) {
      /** Stop focus from escaping input */

      /* istanbul ignore next */
      e.preventDefault();
    }
  }, external_react_default.a.createElement(StyledHeader, {
    isSmall: small
  }, external_react_default.a.createElement(StyledHeaderPaddle, {
    isSmall: small,
    onClick: function onClick() {
      dispatch({
        type: 'PREVIEW_PREVIOUS_MONTH'
      });
    },
    isHidden: isPreviousHidden
  }, external_react_default.a.createElement(chevron_left_stroke, null)), external_react_default.a.createElement(StyledHeaderLabel, {
    isSmall: small
  }, headerLabelFormatter(displayDate)), external_react_default.a.createElement(StyledHeaderPaddle, {
    isSmall: small,
    isHidden: isNextHidden,
    onClick: function onClick() {
      dispatch({
        type: 'PREVIEW_NEXT_MONTH'
      });
    }
  }, external_react_default.a.createElement(chevron_right_stroke, null))), external_react_default.a.createElement(StyledCalendar, {
    isSmall: small,
    onMouseLeave: function onMouseLeave() {
      dispatch({
        type: 'HOVER_DATE',
        value: undefined
      });
    }
  }, dayLabels, items));
};

/* harmony default export */ var components_Month = (Month_Month);
// CONCATENATED MODULE: ./src/DatepickerRange/components/Calendar.tsx
function Calendar_extends() { Calendar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Calendar_extends.apply(this, arguments); }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var components_Calendar_Calendar = function Calendar(props) {
  var _useDatepickerRangeCo = useDatepickerRangeContext(),
      state = _useDatepickerRangeCo.state,
      dispatch = _useDatepickerRangeCo.dispatch,
      locale = _useDatepickerRangeCo.locale,
      small = _useDatepickerRangeCo.small,
      minValue = _useDatepickerRangeCo.minValue,
      maxValue = _useDatepickerRangeCo.maxValue,
      startValue = _useDatepickerRangeCo.startValue,
      endValue = _useDatepickerRangeCo.endValue,
      onChange = _useDatepickerRangeCo.onChange;

  return external_react_default.a.createElement(StyledRangeCalendar, Calendar_extends({
    "data-garden-id": "datepickers.range",
    "data-garden-version": "7.1.1"
  }, props), external_react_default.a.createElement(components_Month, {
    locale: locale,
    displayDate: state.previewDate,
    small: small,
    isNextHidden: true,
    dispatch: dispatch,
    minValue: minValue,
    maxValue: maxValue,
    startValue: startValue,
    endValue: endValue,
    onChange: onChange,
    hoverDate: state.hoverDate
  }), external_react_default.a.createElement(components_Month, {
    locale: locale,
    displayDate: addMonths_default()(state.previewDate, 1),
    small: small,
    isPreviousHidden: true,
    dispatch: dispatch,
    minValue: minValue,
    maxValue: maxValue,
    startValue: startValue,
    endValue: endValue,
    onChange: onChange,
    hoverDate: state.hoverDate
  }));
};

/* harmony default export */ var DatepickerRange_components_Calendar = (components_Calendar_Calendar);
// CONCATENATED MODULE: ./src/DatepickerRange/DatepickerRange.tsx
function DatepickerRange_slicedToArray(arr, i) { return DatepickerRange_arrayWithHoles(arr) || DatepickerRange_iterableToArrayLimit(arr, i) || DatepickerRange_nonIterableRest(); }

function DatepickerRange_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function DatepickerRange_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function DatepickerRange_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */








var DatepickerRange_DatepickerRange = function DatepickerRange(props) {
  var reducer = Object(external_react_["useCallback"])(datepicker_range_reducer_datepickerRangeReducer({
    startValue: props.startValue,
    locale: props.locale,
    formatDate: props.formatDate,
    endValue: props.endValue,
    onChange: props.onChange,
    customParseDate: props.customParseDate
  }), [props.startValue, props.endValue, props.locale, props.formatDate, props.onChange, props.customParseDate]);

  var _useReducer = Object(external_react_["useReducer"])(reducer, datepicker_range_reducer_retrieveInitialState(props)),
      _useReducer2 = DatepickerRange_slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var previousStartValue = Object(external_react_["useRef"])(props.startValue);
  var previousEndValue = Object(external_react_["useRef"])(props.endValue);
  var startInputRef = Object(external_react_["useRef"])();
  var endInputRef = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(function () {
    dispatch({
      type: 'CONTROLLED_START_VALUE_CHANGE',
      value: props.startValue
    });

    if (previousStartValue.current !== props.startValue && props.startValue !== undefined) {
      endInputRef.current && endInputRef.current.focus();
    }

    previousStartValue.current = props.startValue;
  }, [props.startValue]);
  Object(external_react_["useEffect"])(function () {
    dispatch({
      type: 'CONTROLLED_END_VALUE_CHANGE',
      value: props.endValue
    });

    if (previousEndValue.current !== props.endValue && props.endValue !== undefined) {
      startInputRef.current && startInputRef.current.focus();
    }

    previousEndValue.current = props.endValue;
  }, [props.endValue]);
  return external_react_default.a.createElement(DatepickerRangeContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch,
      small: props.small,
      locale: props.locale,
      minValue: props.minValue,
      maxValue: props.maxValue,
      startValue: props.startValue,
      endValue: props.endValue,
      onChange: props.onChange,
      startInputRef: startInputRef,
      endInputRef: endInputRef
    }
  }, props.children);
};

DatepickerRange_DatepickerRange.Start = components_Start;
DatepickerRange_DatepickerRange.End = components_End;
DatepickerRange_DatepickerRange.Calendar = DatepickerRange_components_Calendar;
DatepickerRange_DatepickerRange.propTypes = {
  locale: external_prop_types_default.a.string,
  startValue: external_prop_types_default.a.instanceOf(Date),
  endValue: external_prop_types_default.a.instanceOf(Date),
  minValue: external_prop_types_default.a.instanceOf(Date),
  maxValue: external_prop_types_default.a.instanceOf(Date),
  onChange: external_prop_types_default.a.func,
  formatDate: external_prop_types_default.a.func,
  customParseDate: external_prop_types_default.a.func,
  small: external_prop_types_default.a.bool
};
DatepickerRange_DatepickerRange.defaultProps = {
  locale: 'en-US',
  small: false
};
/* harmony default export */ var src_DatepickerRange_DatepickerRange = (DatepickerRange_DatepickerRange);
// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport Datepicker */__webpack_require__.d(__webpack_exports__, "Datepicker", function() { return src_Datepicker_Datepicker; });
/* concated harmony reexport DatepickerRange */__webpack_require__.d(__webpack_exports__, "DatepickerRange", function() { return src_DatepickerRange_DatepickerRange; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map