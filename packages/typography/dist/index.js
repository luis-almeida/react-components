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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/react-theming");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(4);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-variables/dist/index.js
var dist = __webpack_require__(3);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/views/SM.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var COMPONENT_ID = 'typography.sm';
var StyledSM = external_styled_components_default.a.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "SM__StyledSM",
  componentId: "sc-12nz8l-0"
})(["line-height:", ";font-family:", ";font-size:", ";direction:", ";", ";"], dist["zdLineHeightSm"], function (props) {
  return props.monospace ? dist["zdFontFamilyMonospace"] : null;
}, function (props) {
  return props.monospace ? dist["zdFontSizeSmMonospace"] : dist["zdFontSizeSm"];
}, function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'rtl' : 'ltr';
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(COMPONENT_ID, props);
});
/**
 * Accepts all standard props relating to provided `tag`
 */

var SM_SM = function SM(_ref) {
  var tag = _ref.tag,
      other = _objectWithoutProperties(_ref, ["tag"]);

  var CustomTagSM = StyledSM.withComponent(tag);
  return external_react_default.a.createElement(CustomTagSM, other);
};

SM_SM.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: external_prop_types_default.a.any,

  /** Render monospace font */
  monospace: external_prop_types_default.a.bool
};
SM_SM.defaultProps = {
  tag: 'div'
};
/** @component */

/* harmony default export */ var views_SM = (SM_SM);
// CONCATENATED MODULE: ./src/views/MD.js
function MD_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MD_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MD_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var MD_COMPONENT_ID = 'typography.md';
var StyledMD = external_styled_components_default.a.div.attrs({
  'data-garden-id': MD_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "MD__StyledMD",
  componentId: "sc-10p6y1g-0"
})(["line-height:", ";font-family:", ";font-size:", ";direction:", ";", ";"], dist["zdLineHeightMd"], function (props) {
  return props.monospace ? dist["zdFontFamilyMonospace"] : null;
}, function (props) {
  return props.monospace ? dist["zdFontSizeMdMonospace"] : dist["zdFontSizeMd"];
}, function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'rtl' : 'ltr';
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(MD_COMPONENT_ID, props);
});
/**
 * Accepts all standard props relating to provided `tag`
 */

var MD_MD = function MD(_ref) {
  var tag = _ref.tag,
      other = MD_objectWithoutProperties(_ref, ["tag"]);

  var CustomTagMD = StyledMD.withComponent(tag);
  return external_react_default.a.createElement(CustomTagMD, other);
};

MD_MD.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: external_prop_types_default.a.any,

  /** Render monospace font */
  monospace: external_prop_types_default.a.bool
};
MD_MD.defaultProps = {
  tag: 'div'
};
/** @component */

/* harmony default export */ var views_MD = (MD_MD);
// CONCATENATED MODULE: ./src/views/LG.js
function LG_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LG_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LG_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var LG_COMPONENT_ID = 'typography.lg';
var StyledLG = external_styled_components_default.a.div.attrs({
  'data-garden-id': LG_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "LG__StyledLG",
  componentId: "sc-18u1yr1-0"
})(["line-height:", ";font-family:", ";font-size:", ";direction:", ";", ";"], dist["zdLineHeightLg"], function (props) {
  return props.monospace ? dist["zdFontFamilyMonospace"] : null;
}, function (props) {
  return props.monospace ? dist["zdFontSizeLgMonospace"] : dist["zdFontSizeLg"];
}, function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'rtl' : 'ltr';
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(LG_COMPONENT_ID, props);
});
/**
 * Accepts all standard props relating to provided `tag`
 */

var LG_LG = function LG(_ref) {
  var tag = _ref.tag,
      other = LG_objectWithoutProperties(_ref, ["tag"]);

  var CustomTagLG = StyledLG.withComponent(tag);
  return external_react_default.a.createElement(CustomTagLG, other);
};

LG_LG.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: external_prop_types_default.a.any,

  /** Render monospace font */
  monospace: external_prop_types_default.a.bool
};
LG_LG.defaultProps = {
  tag: 'div'
};
/** @component */

/* harmony default export */ var views_LG = (LG_LG);
// CONCATENATED MODULE: ./src/views/XL.js
function XL_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = XL_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function XL_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var XL_COMPONENT_ID = 'typography.xl';
var StyledXL = external_styled_components_default.a.div.attrs({
  'data-garden-id': XL_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "XL__StyledXL",
  componentId: "sc-1ldfee8-0"
})(["line-height:", ";font-size:", ";direction:", ";", ";"], dist["zdLineHeightXl"], dist["zdFontSizeXl"], function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'rtl' : 'ltr';
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(XL_COMPONENT_ID, props);
});
/**
 * Accepts all standard props relating to provided `tag`
 */

var XL_XL = function XL(_ref) {
  var tag = _ref.tag,
      other = XL_objectWithoutProperties(_ref, ["tag"]);

  var CustomTagXL = StyledXL.withComponent(tag);
  return external_react_default.a.createElement(CustomTagXL, other);
};

XL_XL.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: external_prop_types_default.a.any
};
XL_XL.defaultProps = {
  tag: 'div'
};
/** @component */

/* harmony default export */ var views_XL = (XL_XL);
// CONCATENATED MODULE: ./src/views/XXL.js
function XXL_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = XXL_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function XXL_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var XXL_COMPONENT_ID = 'typography.xxl';
var StyledXXL = external_styled_components_default.a.div.attrs({
  'data-garden-id': XXL_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "XXL__StyledXXL",
  componentId: "z9aic3-0"
})(["line-height:", ";font-size:", ";direction:", ";", ";"], dist["zdLineHeightXxl"], dist["zdFontSizeXxl"], function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'rtl' : 'ltr';
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(XXL_COMPONENT_ID, props);
});
/**
 * Accepts all standard props relating to the provided `tag`
 */

var XXL_XXL = function XXL(_ref) {
  var tag = _ref.tag,
      other = XXL_objectWithoutProperties(_ref, ["tag"]);

  var CustomTagXXL = StyledXXL.withComponent(tag);
  return external_react_default.a.createElement(CustomTagXXL, other);
};

XXL_XXL.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: external_prop_types_default.a.any
};
XXL_XXL.defaultProps = {
  tag: 'div'
};
/** @component */

/* harmony default export */ var views_XXL = (XXL_XXL);
// CONCATENATED MODULE: ./src/views/XXXL.js
function XXXL_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = XXXL_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function XXXL_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var XXXL_COMPONENT_ID = 'typography.xxxl';
var StyledXXXL = external_styled_components_default.a.div.attrs({
  'data-garden-id': XXXL_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "XXXL__StyledXXXL",
  componentId: "sc-1iape3l-0"
})(["line-height:", ";font-size:", ";direction:", ";", ";"], dist["zdLineHeightXxxl"], dist["zdFontSizeXxxl"], function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'rtl' : 'ltr';
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(XXXL_COMPONENT_ID, props);
});
/**
 * Accepts all standard props relating to provided `tag`
 */

var XXXL_XXXL = function XXXL(_ref) {
  var tag = _ref.tag,
      other = XXXL_objectWithoutProperties(_ref, ["tag"]);

  var CustomTagXXXL = StyledXXXL.withComponent(tag);
  return external_react_default.a.createElement(CustomTagXXXL, other);
};

XXXL_XXXL.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: external_prop_types_default.a.any
};
XXXL_XXXL.defaultProps = {
  tag: 'div'
};
/** @component */

/* harmony default export */ var views_XXXL = (XXXL_XXXL);
// CONCATENATED MODULE: ./src/views/Code.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Code_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Code_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Code_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */








var Code_COMPONENT_ID = 'typography.code';
var SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
var TYPE = {
  GREY: 'grey',
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow'
};

var Code_backgroundColor = function backgroundColor(type) {
  switch (type) {
    case TYPE.RED:
      return dist["zdColorRed200"];

    case TYPE.GREEN:
      return dist["zdColorGreen200"];

    case TYPE.YELLOW:
      return dist["zdColorYellow200"];

    case TYPE.GREY:
    default:
      return dist["zdColorGrey200"];
  }
};

var Code_foregroundColor = function foregroundColor(type) {
  switch (type) {
    case TYPE.RED:
      return dist["zdColorRed700"];

    case TYPE.GREEN:
      return dist["zdColorGreen700"];

    case TYPE.YELLOW:
      return dist["zdColorYellow800"];

    case TYPE.GREY:
    default:
      return dist["zdColorGrey700"];
  }
};

var codeAttributes = {
  'data-garden-id': Code_COMPONENT_ID,
  'data-garden-version': "7.0.0"
};
var codeCSS = Object(external_styled_components_["css"])(["border-radius:2px;background-color:", ";padding:1.5px;color:", ";", ";"], function (props) {
  return Code_backgroundColor(props.type);
}, function (props) {
  return Code_foregroundColor(props.type);
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(Code_COMPONENT_ID, props);
});
var Code_StyledSM = external_styled_components_default()(views_SM).attrs(codeAttributes).withConfig({
  displayName: "Code__StyledSM",
  componentId: "sc-2643wc-0"
})(["", ";"], codeCSS);
var Code_StyledMD = external_styled_components_default()(views_MD).attrs(codeAttributes).withConfig({
  displayName: "Code__StyledMD",
  componentId: "sc-2643wc-1"
})(["", ";"], codeCSS);
var Code_StyledLG = external_styled_components_default()(views_LG).attrs(codeAttributes).withConfig({
  displayName: "Code__StyledLG",
  componentId: "sc-2643wc-2"
})(["", ";"], codeCSS);
/**
 * Accepts all `code` props
 */

var Code_Code = function Code(_ref) {
  var size = _ref.size,
      other = Code_objectWithoutProperties(_ref, ["size"]);

  var props = _objectSpread({
    monospace: true,
    tag: 'code'
  }, other);

  switch (size) {
    case SIZE.SMALL:
      return external_react_default.a.createElement(Code_StyledSM, props);

    case SIZE.LARGE:
      return external_react_default.a.createElement(Code_StyledLG, props);

    case SIZE.MEDIUM:
    default:
      return external_react_default.a.createElement(Code_StyledMD, props);
  }
};

Code_Code.propTypes = {
  size: external_prop_types_default.a.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  type: external_prop_types_default.a.oneOf([TYPE.GREY, TYPE.RED, TYPE.GREEN, TYPE.YELLOW])
};
/** @component */

/* harmony default export */ var views_Code = (Code_Code);
// CONCATENATED MODULE: ./src/views/Ellipsis.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Ellipsis_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Ellipsis_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Ellipsis_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var Ellipsis_COMPONENT_ID = 'typography.ellipsis';
var StyledEllipsis = external_styled_components_default.a.div.attrs({
  'data-garden-id': Ellipsis_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "Ellipsis__StyledEllipsis",
  componentId: "sc-5rma8w-0"
})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;direction:", ";", ";"], function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'rtl' : 'ltr';
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(Ellipsis_COMPONENT_ID, props);
});
/**
 * A component that automatically includes a native `title` attribute
 * and any text-overflow styling.
 *
 * All other props are spread onto the element.
 */

function Ellipsis(_ref) {
  var children = _ref.children,
      title = _ref.title,
      tag = _ref.tag,
      other = Ellipsis_objectWithoutProperties(_ref, ["children", "title", "tag"]);

  var CustomTagEllipsis = StyledEllipsis.withComponent(tag);
  var textContent = null;

  if (title !== undefined) {
    textContent = title;
  } else if (typeof children === 'string') {
    textContent = children;
  }

  return external_react_default.a.createElement(CustomTagEllipsis, _extends({
    title: textContent
  }, other), children);
}

Ellipsis.propTypes = {
  /**
   * Optional override for the auto-generated `title` attribute
   */
  title: external_prop_types_default.a.string,

  /** Any valid element for the styled component */
  tag: external_prop_types_default.a.any,
  children: external_prop_types_default.a.string
};
Ellipsis.defaultProps = {
  tag: 'div'
};
/* harmony default export */ var views_Ellipsis = (Ellipsis);
// CONCATENATED MODULE: ./src/views/lists/useOrderedListContext.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Retrieve OrderedList component context
 */

var useOrderedListContext_useOrderedListContext = function useOrderedListContext() {
  var listContext = Object(external_react_["useContext"])(OrderedListContext);

  if (!listContext) {
    throw new Error('This component must be rendered within an `OrderedList` component.');
  }

  return listContext;
};

/* harmony default export */ var lists_useOrderedListContext = (useOrderedListContext_useOrderedListContext);
// CONCATENATED MODULE: ./src/views/lists/styles.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


var styles_listCSS = function listCSS(props) {
  var rtl = Object(react_theming_["isRtl"])(props);
  return Object(external_styled_components_["css"])(["direction:", ";margin:0;margin-", ":24px;padding:0;list-style-position:outside;list-style-type:", ";"], rtl ? 'rtl' : 'ltr', rtl ? 'right' : 'left', props.type);
};
var styles_listItemContentCSS = function listItemContentCSS(props) {
  var padding;

  switch (props.size) {
    case 'small':
      padding = '0';
      break;

    case 'large':
      padding = '4px 0';
      break;

    case 'medium':
    default:
      padding = '2px 0';
      break;
  }

  return Object(external_styled_components_["css"])(["padding:", ";"], padding);
};
// CONCATENATED MODULE: ./src/views/lists/OrderedListItem.js
function OrderedListItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = OrderedListItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function OrderedListItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var OrderedListItem_COMPONENT_ID = 'typography.ordered_list_item';
var StyledOrderedListItem = external_styled_components_default.a.li.attrs({
  'data-garden-id': OrderedListItem_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "OrderedListItem__StyledOrderedListItem",
  componentId: "sc-1yrsf72-0"
})(["margin-", ":-4px;padding-", ":4px;", ";"], function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'right' : 'left';
}, function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'right' : 'left';
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(OrderedListItem_COMPONENT_ID, props);
});
var StyledOrderedListItemContent = external_styled_components_default()(views_MD).withConfig({
  displayName: "OrderedListItem__StyledOrderedListItemContent",
  componentId: "sc-1yrsf72-1"
})(["", ";"], function (props) {
  return styles_listItemContentCSS(props);
});

var OrderedListItem_OrderedListItem = function OrderedListItem(_ref) {
  var children = _ref.children,
      props = OrderedListItem_objectWithoutProperties(_ref, ["children"]);

  var _useOrderedListContex = lists_useOrderedListContext(),
      size = _useOrderedListContex.size;

  return external_react_default.a.createElement(StyledOrderedListItem, null, external_react_default.a.createElement(StyledOrderedListItemContent, {
    size: size
  }, children));
};

OrderedListItem_OrderedListItem.propTypes = {
  children: external_prop_types_default.a.any
};
/** @component */

/* harmony default export */ var lists_OrderedListItem = (OrderedListItem_OrderedListItem);
// CONCATENATED MODULE: ./src/views/lists/OrderedList.js
function OrderedList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = OrderedList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function OrderedList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var OrderedList_COMPONENT_ID = 'typography.ordered_list';
var OrderedList_TYPE = {
  DECIMAL: 'decimal',
  DECIMAL_LEADING_ZERO: 'decimal-leading-zero',
  LOWER_ALPHA: 'lower-alpha',
  LOWER_ROMAN: 'lower-roman',
  UPPER_ALPHA: 'upper-alpha',
  UPPER_ROMAN: 'upper-roman'
};
var OrderedList_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
var StyledOrderedList = external_styled_components_default.a.ol.attrs({
  'data-garden-id': OrderedList_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "OrderedList__StyledOrderedList",
  componentId: "sc-35tp08-0"
})(["", ";", ";"], function (props) {
  return styles_listCSS(props);
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(OrderedList_COMPONENT_ID, props);
});
var OrderedListContext = Object(external_react_["createContext"])();
/**
 * Accepts all `ol` props
 */

var OrderedList_OrderedList = function OrderedList(_ref) {
  var size = _ref.size,
      children = _ref.children,
      other = OrderedList_objectWithoutProperties(_ref, ["size", "children"]);

  return external_react_default.a.createElement(OrderedListContext.Provider, {
    value: {
      size: size
    }
  }, external_react_default.a.createElement(StyledOrderedList, other, children));
};

OrderedList_OrderedList.propTypes = {
  children: external_prop_types_default.a.node,
  size: external_prop_types_default.a.oneOf([OrderedList_SIZE.SMALL, OrderedList_SIZE.MEDIUM, OrderedList_SIZE.LARGE]),
  type: external_prop_types_default.a.oneOf([OrderedList_TYPE.DECIMAL, OrderedList_TYPE.DECIMAL_LEADING_ZERO, OrderedList_TYPE.LOWER_ALPHA, OrderedList_TYPE.UPPER_ALPHA, OrderedList_TYPE.LOWER_ROMAN, OrderedList_TYPE.UPPER_ROMAN])
};
OrderedList_OrderedList.defaultProps = {
  size: OrderedList_SIZE.MEDIUM
};
OrderedList_OrderedList.Item = lists_OrderedListItem;
/** @component */

/* harmony default export */ var lists_OrderedList = (OrderedList_OrderedList);
// CONCATENATED MODULE: ./src/views/lists/useUnorderedListContext.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Retrieve UnorderedList component context
 */

var useUnorderedListContext_useUnorderedListContext = function useUnorderedListContext() {
  var listContext = Object(external_react_["useContext"])(UnorderedListContext);

  if (!listContext) {
    throw new Error('This component must be rendered within an `UnorderedList` component.');
  }

  return listContext;
};

/* harmony default export */ var lists_useUnorderedListContext = (useUnorderedListContext_useUnorderedListContext);
// CONCATENATED MODULE: ./src/views/lists/UnorderedListItem.js
function UnorderedListItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = UnorderedListItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function UnorderedListItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var UnorderedListItem_COMPONENT_ID = 'typography.unordered_list_item';
var StyledUnorderedListItem = external_styled_components_default.a.li.attrs({
  'data-garden-id': UnorderedListItem_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "UnorderedListItem__StyledUnorderedListItem",
  componentId: "sc-7e32dl-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(UnorderedListItem_COMPONENT_ID, props);
});
var StyledUnorderedListItemContent = external_styled_components_default()(views_MD).withConfig({
  displayName: "UnorderedListItem__StyledUnorderedListItemContent",
  componentId: "sc-7e32dl-1"
})(["", ";"], function (props) {
  return styles_listItemContentCSS(props);
});

var UnorderedListItem_UnorderedListItem = function UnorderedListItem(_ref) {
  var children = _ref.children,
      props = UnorderedListItem_objectWithoutProperties(_ref, ["children"]);

  var _useUnorderedListCont = lists_useUnorderedListContext(),
      size = _useUnorderedListCont.size;

  return external_react_default.a.createElement(StyledUnorderedListItem, null, external_react_default.a.createElement(StyledUnorderedListItemContent, {
    size: size
  }, children));
};

UnorderedListItem_UnorderedListItem.propTypes = {
  children: external_prop_types_default.a.any
};
/** @component */

/* harmony default export */ var lists_UnorderedListItem = (UnorderedListItem_UnorderedListItem);
// CONCATENATED MODULE: ./src/views/lists/UnorderedList.js
function UnorderedList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = UnorderedList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function UnorderedList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var UnorderedList_COMPONENT_ID = 'typography.unordered_list';
var UnorderedList_TYPE = {
  CIRCLE: 'circle',
  DISC: 'disc',
  SQUARE: 'square'
};
var UnorderedList_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
var StyledUnorderedList = external_styled_components_default.a.ul.attrs({
  'data-garden-id': UnorderedList_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "UnorderedList__StyledUnorderedList",
  componentId: "sc-1pgelku-0"
})(["", ";", ";"], function (props) {
  return styles_listCSS(props);
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(UnorderedList_COMPONENT_ID, props);
});
var UnorderedListContext = Object(external_react_["createContext"])();
/**
 * Accepts all `ul` props
 */

var UnorderedList_UnorderedList = function UnorderedList(_ref) {
  var size = _ref.size,
      children = _ref.children,
      other = UnorderedList_objectWithoutProperties(_ref, ["size", "children"]);

  return external_react_default.a.createElement(UnorderedListContext.Provider, {
    value: {
      size: size
    }
  }, external_react_default.a.createElement(StyledUnorderedList, other, children));
};

UnorderedList_UnorderedList.propTypes = {
  children: external_prop_types_default.a.node,
  size: external_prop_types_default.a.oneOf([UnorderedList_SIZE.SMALL, UnorderedList_SIZE.MEDIUM, UnorderedList_SIZE.LARGE]),
  type: external_prop_types_default.a.oneOf([UnorderedList_TYPE.CIRCLE, UnorderedList_TYPE.DISC, UnorderedList_TYPE.SQUARE])
};
UnorderedList_UnorderedList.defaultProps = {
  size: UnorderedList_SIZE.MEDIUM
};
UnorderedList_UnorderedList.Item = lists_UnorderedListItem;
/** @component */

/* harmony default export */ var lists_UnorderedList = (UnorderedList_UnorderedList);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport SM */__webpack_require__.d(__webpack_exports__, "SM", function() { return views_SM; });
/* concated harmony reexport MD */__webpack_require__.d(__webpack_exports__, "MD", function() { return views_MD; });
/* concated harmony reexport LG */__webpack_require__.d(__webpack_exports__, "LG", function() { return views_LG; });
/* concated harmony reexport XL */__webpack_require__.d(__webpack_exports__, "XL", function() { return views_XL; });
/* concated harmony reexport XXL */__webpack_require__.d(__webpack_exports__, "XXL", function() { return views_XXL; });
/* concated harmony reexport XXXL */__webpack_require__.d(__webpack_exports__, "XXXL", function() { return views_XXXL; });
/* concated harmony reexport Code */__webpack_require__.d(__webpack_exports__, "Code", function() { return views_Code; });
/* concated harmony reexport Ellipsis */__webpack_require__.d(__webpack_exports__, "Ellipsis", function() { return views_Ellipsis; });
/* concated harmony reexport OrderedList */__webpack_require__.d(__webpack_exports__, "OrderedList", function() { return lists_OrderedList; });
/* concated harmony reexport UnorderedList */__webpack_require__.d(__webpack_exports__, "UnorderedList", function() { return lists_UnorderedList; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */











/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map