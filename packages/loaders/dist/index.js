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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

module.exports = require("@zendeskgarden/react-theming");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("polished/lib/color/rgba");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-schedule");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@zendeskgarden/container-schedule"
var container_schedule_ = __webpack_require__(6);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/utils/animations.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* stylelint-disable rule-empty-line-before */

var dotOneKeyframes = Object(external_styled_components_["keyframes"])(["0%{transform:translate(0,5px);}3%{transform:translate(1px,-5px);}6%{transform:translate(3px,-15px);}8%{transform:translate(5px,-18px);}9%{transform:translate(7px,-21px);}11%{transform:translate(8px,-22px);}13%{transform:translate(9px,-23px);}16%{transform:translate(12px,-25px);}18%{transform:translate(13px,-26px);}23%{transform:translate(18px,-26px);}24%{transform:translate(19px,-25px);}28%{transform:translate(22px,-23px);}31%{transform:translate(24px,-21px);}33%{transform:translate(26px,-18px);}34%{transform:translate(28px,-14px);}36%{transform:translate(29px,-12px);}38%{transform:translate(30px,-5px);}39%{transform:translate(31px,5px);}54%{transform:translate(31px,3px);}59%{transform:translate(33px);}61%{transform:translate(43px);}63%{transform:translate(48px);}64%{transform:translate(51px);}66%{transform:translate(53px);}68%{transform:translate(55px);}69%{transform:translate(57px);}76%{transform:translate(60px);}81%{transform:translate(61px);}83%,100%{transform:translate(62px);}"]);
var dotTwoKeyframes = Object(external_styled_components_["keyframes"])(["4%{transform:translate(0);}6%{transform:translate(-1px);}8%{transform:translate(-2px);}9%{transform:translate(-5px);}11%{transform:translate(-7px);}13%{transform:translate(-12px);}14%{transform:translate(-17px);}16%{transform:translate(-19px);}18%{transform:translate(-22px);}19%{transform:translate(-25px);}21%{transform:translate(-26px);}23%{transform:translate(-27px);}24%{transform:translate(-28px);}26%{transform:translate(-29px);}29%{transform:translate(-30px);}33%,89%{transform:translate(-31px);}91%{transform:translate(-31px,1px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,3px);}99%{transform:translate(-31px,4px);}100%{transform:translate(-31px,5px);}"]);
var dotThreeKeyframes = Object(external_styled_components_["keyframes"])(["39%{transform:translate(0);}44%{transform:translate(0,1px);}46%{transform:translate(0,2px);}48%{transform:translate(0,3px);}49%{transform:translate(0,4px);}51%{transform:translate(0,5px);}53%{transform:translate(-1px,-6px);}54%{transform:translate(-2px,-13px);}56%{transform:translate(-3px,-15px);}58%{transform:translate(-5px,-19px);}59%{transform:translate(-7px,-21px);}61%{transform:translate(-8px,-22px);}63%{transform:translate(-9px,-24px);}64%{transform:translate(-11px,-25px);}66%{transform:translate(-12px,-26px);}74%{transform:translate(-19px,-26px);}76%{transform:translate(-20px,-25px);}78%{transform:translate(-22px,-24px);}81%{transform:translate(-24px,-21px);}83%{transform:translate(-26px,-19px);}84%{transform:translate(-28px,-15px);}86%{transform:translate(-29px,-13px);}88%{transform:translate(-30px,-6px);}89%{transform:translate(-31px,5px);}91%{transform:translate(-31px,4px);}93%{transform:translate(-31px,3px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,1px);}100%{transform:translate(-31px);}"]);
// CONCATENATED MODULE: ./src/styled-elements.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var DotsCircle = external_styled_components_default.a.circle.attrs(function () {
  return {
    cy: 36,
    r: 9
  };
}).withConfig({
  displayName: "styled-elements__DotsCircle",
  componentId: "sc-19dhio6-0"
})([""]);
var DotsOneCircle = external_styled_components_default()(DotsCircle).attrs(function () {
  return {
    cx: 9
  };
}).withConfig({
  displayName: "styled-elements__DotsOneCircle",
  componentId: "sc-19dhio6-1"
})(["animation:", ";"], function (_ref) {
  var duration = _ref.duration;
  return Object(external_styled_components_["css"])(["", " ", "ms linear infinite"], dotOneKeyframes, duration);
});
var DotsTwoCircle = external_styled_components_default()(DotsCircle).attrs(function () {
  return {
    cx: 40
  };
}).withConfig({
  displayName: "styled-elements__DotsTwoCircle",
  componentId: "sc-19dhio6-2"
})(["animation:", ";"], function (_ref2) {
  var duration = _ref2.duration;
  return Object(external_styled_components_["css"])(["", " ", "ms linear infinite"], dotTwoKeyframes, duration);
});
var DotsThreeCircle = external_styled_components_default()(DotsCircle).attrs(function () {
  return {
    cx: 71
  };
}).withConfig({
  displayName: "styled-elements__DotsThreeCircle",
  componentId: "sc-19dhio6-3"
})(["animation:", ";"], function (_ref3) {
  var duration = _ref3.duration;
  return Object(external_styled_components_["css"])(["", " ", "ms linear infinite"], dotThreeKeyframes, duration);
});
var SpinnerCircle = external_styled_components_default.a.circle.attrs(function (props) {
  return {
    cx: 40,
    cy: 40,
    r: 34,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeWidth: props.strokeWidthValue,
    strokeDasharray: "".concat(props.dasharrayValue, " 250"),
    transform: props.transform
  };
}).withConfig({
  displayName: "styled-elements__SpinnerCircle",
  componentId: "sc-19dhio6-4"
})([""]);
SpinnerCircle.propTypes = {
  dasharrayValue: external_prop_types_default.a.number,
  strokeWidthValue: external_prop_types_default.a.number,
  transform: external_prop_types_default.a.string
};
var StyledSvg = external_styled_components_default.a.svg.attrs(function (props) {
  return {
    'data-garden-version': "7.0.0",
    xmlns: 'http://www.w3.org/2000/svg',
    width: props.width,
    height: props.height,
    focusable: 'false',
    viewBox: "0 0 ".concat(props.width, " ").concat(props.height),
    role: 'progressbar'
  };
}).withConfig({
  displayName: "styled-elements__StyledSvg",
  componentId: "sc-19dhio6-5"
})(["width:1em;height:0.9em;color:", ";font-size:", ";", ";"], function (props) {
  return props.color || 'inherit';
}, function (props) {
  return props.fontSize || 'inherit';
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(props.dataGardenId, props);
});
StyledSvg.propTypes = {
  color: external_prop_types_default.a.string,
  fontSize: external_prop_types_default.a.any
};
var StyledSVG = external_react_default.a.forwardRef(function (_ref4, ref) {
  var children = _ref4.children,
      fontSize = _ref4.fontSize,
      width = _ref4.width,
      height = _ref4.height,
      other = _objectWithoutProperties(_ref4, ["children", "fontSize", "width", "height"]);

  return external_react_default.a.createElement(StyledSvg, _extends({
    fontSize: fontSize,
    width: width,
    height: height,
    ref: ref
  }, other), children);
});
StyledSVG.propTypes = {
  children: external_prop_types_default.a.node,
  fontSize: external_prop_types_default.a.any,
  height: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number]),
  width: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number])
};
var LoadingPlaceholder = external_styled_components_default.a.div.attrs({
  role: 'progressbar'
}).withConfig({
  displayName: "styled-elements__LoadingPlaceholder",
  componentId: "sc-19dhio6-6"
})(["display:inline;width:1em;height:0.9em;font-size:", ";"], function (props) {
  return props.fontSize;
});
LoadingPlaceholder.propTypes = {
  fontSize: external_prop_types_default.a.any
};
// CONCATENATED MODULE: ./src/hooks/useCSSSVGAnimation.js
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

/**
 * Adapted from https://eprev.org/2017/01/05/how-to-detect-if-css-transforms-are-supported-on-svg/
 */

var useCSSSVGAnimation_useCSSSVGAnimation = function useCSSSVGAnimation() {
  var _useState = Object(external_react_["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      canAnimateSVG = _useState2[0],
      setAnimateSVG = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    svg.setAttribute('viewBox', '0 0 2 2');
    svg.setAttribute('style', 'position: fixed; top: 0; left: 0; width: 2px; height: 2px;');
    rect.setAttribute('style', 'transform: translate(1px, 1px);');
    rect.setAttribute('width', '1');
    rect.setAttribute('height', '1');
    svg.appendChild(rect);
    document.body.appendChild(svg);
    var result = document.elementFromPoint(1, 1) === svg;
    svg.parentNode.removeChild(svg);
    setAnimateSVG(result);
  }, []);
  return canAnimateSVG;
};
// CONCATENATED MODULE: ./src/Dots.js
function Dots_extends() { Dots_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Dots_extends.apply(this, arguments); }

function Dots_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Dots_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Dots_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var COMPONENT_ID = 'loaders.dots';
/** @component */

function Dots(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'inherit' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'inherit' : _ref$color,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1250 : _ref$duration,
      _ref$delayMS = _ref.delayMS,
      delayMS = _ref$delayMS === void 0 ? 750 : _ref$delayMS,
      other = Dots_objectWithoutProperties(_ref, ["size", "color", "duration", "delayMS"]);

  var _useSchedule = Object(container_schedule_["useSchedule"])({
    duration: duration,
    delayMS: delayMS
  }),
      delayComplete = _useSchedule.delayComplete;

  var noAnimatedSVGSupport = useCSSSVGAnimation_useCSSSVGAnimation();
  var dotOne = Object(external_react_["useRef"])(null);
  var dotTwo = Object(external_react_["useRef"])(null);
  var dotThree = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    if (noAnimatedSVGSupport && delayComplete) {
      var transforms = [window.getComputedStyle(dotOne.current).getPropertyValue('transform'), window.getComputedStyle(dotTwo.current).getPropertyValue('transform'), window.getComputedStyle(dotThree.current).getPropertyValue('transform')];
      dotOne.current.setAttribute('transform', transforms[0]);
      dotTwo.current.setAttribute('transform', transforms[1]);
      dotThree.current.setAttribute('transform', transforms[2]);
    }
  });

  if (!delayComplete && delayMS !== 0) {
    return external_react_default.a.createElement(LoadingPlaceholder, {
      fontSize: size
    }, "\xA0");
  }

  return external_react_default.a.createElement(StyledSVG, Dots_extends({
    fontSize: size,
    color: color,
    width: "80",
    height: "72",
    "data-garden-id": COMPONENT_ID
  }, other), external_react_default.a.createElement("g", {
    fill: "currentColor"
  }, external_react_default.a.createElement(DotsOneCircle, {
    duration: duration,
    ref: dotOne
  }), external_react_default.a.createElement(DotsTwoCircle, {
    duration: duration,
    ref: dotTwo
  }), external_react_default.a.createElement(DotsThreeCircle, {
    duration: duration,
    ref: dotThree
  })));
}
Dots.propTypes = {
  /**
   * Size of the loader. Can inherit from `font-size` styling.
   **/
  size: external_prop_types_default.a.any,

  /**
   * Duration (ms) of the animation. Default is 1250ms.
   **/
  duration: external_prop_types_default.a.number,

  /**
   * Color of the loader. Can inherit from `color` styling.
   **/
  color: external_prop_types_default.a.string,

  /**
   * Delay in MS to begin loader rendering. This helps prevent
   * quick flashes of the loader during normal loading times.
   **/
  delayMS: external_prop_types_default.a.number
};
// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-variables/dist/index.js
var dist = __webpack_require__(3);

// CONCATENATED MODULE: ./src/Progress.js
function Progress_extends() { Progress_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Progress_extends.apply(this, arguments); }

function Progress_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Progress_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Progress_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var Progress_COMPONENT_ID = 'loaders.progress';
var HEIGHTS = {
  small: 2,
  medium: 6,
  large: 12
};

var sizeToBorderRadius = function sizeToBorderRadius(size) {
  return HEIGHTS[size] / 2;
};

var ProgressBackground = external_styled_components_default.a.div.attrs(function (props) {
  return {
    borderRadius: sizeToBorderRadius(props.size)
  };
}).withConfig({
  displayName: "Progress__ProgressBackground",
  componentId: "sc-1yc1x61-0"
})(["margin:", " 0;border-radius:", "px;background-color:", ";color:", ";"], dist["zdSpacingXs"], function (_ref) {
  var borderRadius = _ref.borderRadius;
  return borderRadius;
}, dist["zdColorGrey200"], function (_ref2) {
  var color = _ref2.color;
  return color || dist["zdColorGreen600"];
});
var ProgressIndicator = external_styled_components_default.a.div.attrs(function (props) {
  return {
    height: HEIGHTS[props.size],
    borderRadius: sizeToBorderRadius(props.size)
  };
}).withConfig({
  displayName: "Progress__ProgressIndicator",
  componentId: "sc-1yc1x61-1"
})(["transition:width 0.1s ease-in-out;border-radius:", "px;background:currentColor;width:", "%;height:", "px;"], function (_ref3) {
  var borderRadius = _ref3.borderRadius;
  return borderRadius;
}, function (_ref4) {
  var value = _ref4.value;
  return value;
}, function (_ref5) {
  var height = _ref5.height;
  return height;
});
var Progress = Object(external_react_["forwardRef"])(function (_ref6, ref) {
  var value = _ref6.value,
      size = _ref6.size,
      other = Progress_objectWithoutProperties(_ref6, ["value", "size"]);

  var percentage = Math.max(0, Math.min(100, value));
  return external_react_default.a.createElement(ProgressBackground, Progress_extends({
    "data-garden-id": Progress_COMPONENT_ID,
    "data-garden-version": "7.0.0",
    "aria-valuemax": "100",
    "aria-valuemin": "0",
    "aria-valuenow": percentage,
    ref: ref,
    role: "progressbar",
    size: size
  }, other), external_react_default.a.createElement(ProgressIndicator, {
    value: percentage,
    size: size
  }));
});
Progress.propTypes = {
  color: external_prop_types_default.a.string,

  /** The progress as a value between 0 and 100 */
  value: external_prop_types_default.a.number.isRequired,
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large'])
};
Progress.defaultProps = {
  value: 0,
  size: 'medium'
};
/* harmony default export */ var src_Progress = (Progress);
// EXTERNAL MODULE: external "polished/lib/color/rgba"
var rgba_ = __webpack_require__(5);
var rgba_default = /*#__PURE__*/__webpack_require__.n(rgba_);

// CONCATENATED MODULE: ./src/Skeleton.js
function Skeleton_extends() { Skeleton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Skeleton_extends.apply(this, arguments); }

function Skeleton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Skeleton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Skeleton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var Skeleton_COMPONENT_ID = 'loaders.skeleton';
var fadeInAnimation = Object(external_styled_components_["keyframes"])(["0%,60%{opacity:0;}100%{opacity:1;}"]);
var skeletonAnimation = Object(external_styled_components_["keyframes"])(["100%{left:100%;}"]);
var skeletonRtlAnimation = Object(external_styled_components_["keyframes"])(["100%{right:100%;}"]);
var StyledSkeleton = external_styled_components_default.a.div.attrs({
  'data-garden-id': Skeleton_COMPONENT_ID,
  'data-garden-version': "7.0.0"
}).withConfig({
  displayName: "Skeleton__StyledSkeleton",
  componentId: "sc-1uuy18r-0"
})(["display:inline-block;position:relative;animation:", " 750ms linear;border-radius:", ";background-color:", ";width:", ";height:", ";overflow:hidden;line-height:0.6;&::before{position:absolute;top:0;", " background-image:linear-gradient(", ",transparent,", ",transparent);width:1000px;height:100%;content:'';}", ";"], fadeInAnimation, dist["zdSpacingXxs"], function (props) {
  return props.dark ? rgba_default()(dist["zdColorWhite"], 0.2) : rgba_default()(dist["zdColorGrey800"], 0.1);
}, function (props) {
  return props.customWidth;
}, function (props) {
  return props.customHeight;
}, function (props) {
  return Object(react_theming_["isRtl"])(props) ? Object(external_styled_components_["css"])(["right:-1800px;animation:", " 1.5s ease-in-out 300ms infinite;"], skeletonRtlAnimation) : Object(external_styled_components_["css"])(["left:-1800px;animation:", " 1.5s ease-in-out 300ms infinite;"], skeletonAnimation);
}, function (props) {
  return Object(react_theming_["isRtl"])(props) ? '-45deg' : '45deg';
}, function (props) {
  return props.dark ? rgba_default()(dist["zdColorKale700"], 0.4) : rgba_default()(dist["zdColorWhite"], 0.6);
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(Skeleton_COMPONENT_ID, props);
});
/**
 * Loader used to create Skeleton objects
 */

function Skeleton(_ref) {
  var width = _ref.width,
      height = _ref.height,
      dark = _ref.dark,
      other = Skeleton_objectWithoutProperties(_ref, ["width", "height", "dark"]);

  return external_react_default.a.createElement(StyledSkeleton, Skeleton_extends({
    dark: dark,
    customWidth: width,
    customHeight: height
  }, other), "\xA0");
}

Skeleton.propTypes = {
  width: external_prop_types_default.a.string,
  height: external_prop_types_default.a.string,

  /** Apply styling for use with dark backgrounds */
  dark: external_prop_types_default.a.bool,

  /** Apply inline styles to the loader */
  style: external_prop_types_default.a.object
};
Skeleton.defaultProps = {
  width: '100%',
  height: '100%'
};
/** @component */

/* harmony default export */ var src_Skeleton = (Skeleton);
// CONCATENATED MODULE: ./src/utils/spinner-coordinates.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
var STROKE_WIDTH_FRAMES = {
  0: 6,
  14: 5,
  26: 4,
  36: 3,
  46: 2,
  58: 3,
  70: 4,
  80: 5,
  91: 6
};
var ROTATION_FRAMES = {
  0: -90,
  8: -81,
  36: -30,
  41: -18,
  44: -8,
  48: 0,
  55: 22,
  63: 53,
  64: 62,
  66: 67,
  68: 78,
  69: 90,
  71: 99,
  73: 112,
  74: 129,
  76: 138,
  78: 159,
  79: 180,
  81: 190,
  83: 207,
  84: 221,
  86: 226,
  88: 235,
  90: 243,
  99: 270
};
var DASHARRAY_FRAMES = {
  0: 0,
  13: 2,
  26: 13,
  53: 86,
  58: 90,
  63: 89,
  64: 88,
  66: 86,
  68: 83,
  69: 81,
  71: 76,
  73: 70,
  74: 62,
  76: 58,
  78: 47,
  79: 37,
  81: 31,
  83: 23,
  84: 16,
  88: 10,
  89: 7,
  98: 1,
  99: 0
};
// CONCATENATED MODULE: ./src/Spinner.js
function Spinner_extends() { Spinner_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Spinner_extends.apply(this, arguments); }

function Spinner_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Spinner_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Spinner_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Spinner_slicedToArray(arr, i) { return Spinner_arrayWithHoles(arr) || Spinner_iterableToArrayLimit(arr, i) || Spinner_nonIterableRest(); }

function Spinner_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Spinner_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Spinner_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Spinner_COMPONENT_ID = 'loaders.spinner';
var totalFrames = 100;

var computeFrames = function computeFrames(frames, duration) {
  return Object.entries(frames).reduce(function (acc, item, index, arr) {
    var _item = Spinner_slicedToArray(item, 2),
        frame = _item[0],
        value = _item[1];

    var _ref = arr[index + 1] || [totalFrames, arr[0][1]],
        _ref2 = Spinner_slicedToArray(_ref, 2),
        nextFrame = _ref2[0],
        nextValue = _ref2[1];

    var diff = nextFrame - frame;
    var frameHz = 1000 / 60;
    var subDuration = duration / (totalFrames - 1) * diff;
    var lastValue = value;
    acc[frame] = value;

    for (var idx = 0; idx < diff; idx++) {
      lastValue = lastValue + (nextValue - lastValue) * (frameHz / subDuration);
      subDuration = duration / (totalFrames - 1) * (diff - idx);
      acc[parseInt(frame, 10) + idx + 1] = lastValue;
    }

    acc[nextFrame] = nextValue;
    return acc;
  }, {});
};
/** @component */


function Spinner(_ref3) {
  var _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 'inherit' : _ref3$size,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 1250 : _ref3$duration,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? 'inherit' : _ref3$color,
      _ref3$delayMS = _ref3.delayMS,
      delayMS = _ref3$delayMS === void 0 ? 750 : _ref3$delayMS,
      other = Spinner_objectWithoutProperties(_ref3, ["size", "duration", "color", "delayMS"]);

  var strokeWidthValues = computeFrames(STROKE_WIDTH_FRAMES, duration);
  var rotationValues = computeFrames(ROTATION_FRAMES, duration);
  var dasharrayValues = computeFrames(DASHARRAY_FRAMES, duration);

  var _useSchedule = Object(container_schedule_["useSchedule"])({
    duration: duration,
    delayMS: delayMS
  }),
      elapsed = _useSchedule.elapsed,
      delayComplete = _useSchedule.delayComplete;

  var frame = (elapsed * 100).toFixed(0);
  var strokeWidthValue = strokeWidthValues[frame];
  var rotationValue = rotationValues[frame];
  var dasharrayValue = dasharrayValues[frame];
  var WIDTH = 80;
  var HEIGHT = 80;

  if (!delayComplete && delayMS !== 0) {
    return external_react_default.a.createElement(LoadingPlaceholder, {
      fontSize: size
    }, "\xA0");
  }

  return external_react_default.a.createElement(StyledSVG, Spinner_extends({
    fontSize: size,
    color: color,
    width: WIDTH,
    height: HEIGHT,
    "data-garden-id": Spinner_COMPONENT_ID
  }, other), external_react_default.a.createElement(SpinnerCircle, {
    dasharrayValue: dasharrayValue,
    strokeWidthValue: strokeWidthValue,
    transform: "rotate(".concat(rotationValue, ", ").concat(WIDTH / 2, ", ").concat(HEIGHT / 2, ")")
  }));
}
Spinner.propTypes = {
  /**
   * Size of the loader. Can inherit from `font-size` styling.
   **/
  size: external_prop_types_default.a.any,

  /**
   * Duration (ms) of the animation. Default is 1250ms.
   **/
  duration: external_prop_types_default.a.number,

  /**
   * Color of the loader. Can inherit from `color` styling.
   **/
  color: external_prop_types_default.a.string,

  /**
   * Delay in MS to begin loader rendering. This helps prevent
   * quick flashes of the loader during normal loading times.
   **/
  delayMS: external_prop_types_default.a.number
};
// CONCATENATED MODULE: ./src/Inline.js
function Inline_extends() { Inline_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Inline_extends.apply(this, arguments); }

function Inline_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Inline_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Inline_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var Inline_COMPONENT_ID = 'loaders.inline';
var pulseAnimation = Object(external_styled_components_["keyframes"])(["0%,100%{opacity:.2;}50%{opacity:.8;}"]);
var StyledCircle = external_styled_components_default.a.circle.attrs({
  fill: 'currentColor',
  cy: 2,
  r: 2
}).withConfig({
  displayName: "Inline__StyledCircle",
  componentId: "sc-1gjohp3-0"
})([""]);
var StyledTypingSvg = external_styled_components_default.a.svg.attrs(function (props) {
  return {
    'data-garden-id': Inline_COMPONENT_ID,
    'data-garden-version': "7.0.0",
    viewBox: '0 0 16 4',
    width: props.size,
    height: props.size * 0.25
  };
}).withConfig({
  displayName: "Inline__StyledTypingSvg",
  componentId: "sc-1gjohp3-1"
})(["color:", ";", "{opacity:0.2;&:nth-child(1){animation:", " 1s infinite;animation-delay:", ";}&:nth-child(2){animation:", " 1s infinite;animation-delay:0.2s;}&:nth-child(3){animation:", " 1s infinite;animation-delay:", ";}}"], function (_ref) {
  var color = _ref.color;
  return color;
}, StyledCircle, pulseAnimation, function (props) {
  return Object(react_theming_["isRtl"])(props) ? 'unset' : '0.4s';
}, pulseAnimation, pulseAnimation, function (props) {
  return Object(react_theming_["isRtl"])(props) ? '0.4s' : 'unset';
});
/**
 * All other props are spread onto the root `<svg>` element
 */

var Inline_Inline = function Inline(_ref2) {
  var size = _ref2.size,
      color = _ref2.color,
      other = Inline_objectWithoutProperties(_ref2, ["size", "color"]);

  return external_react_default.a.createElement(StyledTypingSvg, Inline_extends({
    size: size,
    color: color
  }, other), external_react_default.a.createElement(StyledCircle, {
    cx: "14"
  }), external_react_default.a.createElement(StyledCircle, {
    cx: "8"
  }), external_react_default.a.createElement(StyledCircle, {
    cx: "2"
  }));
};

Inline_Inline.propTypes = {
  /* Width of the loader in px */
  size: external_prop_types_default.a.number,
  color: external_prop_types_default.a.string
};
Inline_Inline.defaultProps = {
  size: 16,
  color: 'inherit'
};
/* harmony default export */ var src_Inline = (Inline_Inline);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Dots */__webpack_require__.d(__webpack_exports__, "Dots", function() { return Dots; });
/* concated harmony reexport Progress */__webpack_require__.d(__webpack_exports__, "Progress", function() { return src_Progress; });
/* concated harmony reexport Skeleton */__webpack_require__.d(__webpack_exports__, "Skeleton", function() { return src_Skeleton; });
/* concated harmony reexport Spinner */__webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* concated harmony reexport Inline */__webpack_require__.d(__webpack_exports__, "Inline", function() { return src_Inline; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map