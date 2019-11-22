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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-arrow":"index__c-arrow___3FzOJ","c-arrow--t":"index__c-arrow--t___1AEby","c-arrow--tl":"index__c-arrow--tl___1Dins","c-arrow--tr":"index__c-arrow--tr___1PDZc","c-arrow--r":"index__c-arrow--r___2Tdnx","c-arrow--rb":"index__c-arrow--rb___2IfRl","c-arrow--rt":"index__c-arrow--rt___1iPGw","c-arrow--l":"index__c-arrow--l___yf4Mt","c-arrow--lb":"index__c-arrow--lb___2ZN6L","c-arrow--lt":"index__c-arrow--lt___biHXW","c-arrow--b":"index__c-arrow--b___Bo2Gt","c-arrow--bl":"index__c-arrow--bl___2tMZQ","c-arrow--br":"index__c-arrow--br___S8ORZ"};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/react-theming");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-tooltip":"index__c-tooltip___3EGHJ","c-arrow":"index__c-arrow___2Lid2","c-tooltip--extra-large":"index__c-tooltip--extra-large___1wCgw","c-tooltip--large":"index__c-tooltip--large___1sEmC","c-tooltip--medium":"index__c-tooltip--medium___K7htT","c-tooltip__paragraph":"index__c-tooltip__paragraph___11fiJ","c-tooltip__title":"index__c-tooltip__title___2Tzx4","is-rtl":"index__is-rtl___1RCiX","c-tooltip--light":"index__c-tooltip--light___nZDli"};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-utilities");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-tooltip");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(9);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(4);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@zendeskgarden/container-tooltip"
var container_tooltip_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@zendeskgarden/container-utilities"
var container_utilities_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react-popper"
var external_react_popper_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/utils/gardenPlacements.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
var SHARED_PLACEMENTS = {
  AUTO: 'auto',
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end'
};
var GARDEN_PLACEMENTS = _objectSpread({}, SHARED_PLACEMENTS, {
  END: 'end',
  END_TOP: 'end-top',
  END_BOTTOM: 'end-bottom',
  START: 'start',
  START_TOP: 'start-top',
  START_BOTTOM: 'start-bottom'
});
var POPPER_PLACEMENTS = _objectSpread({}, SHARED_PLACEMENTS, {
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end'
});
/**
 * Convert Garden RTL aware placement to Popper.JS valid placement
 * @param {String} gardenPlacement
 */

function getPopperPlacement(gardenPlacement) {
  var _objectSpread2;

  var sharedPlacements = {};

  for (var KEY in SHARED_PLACEMENTS) {
    if (Object.prototype.hasOwnProperty.call(SHARED_PLACEMENTS, KEY)) {
      var value = SHARED_PLACEMENTS[KEY];
      sharedPlacements[value] = value;
    }
  }

  var GARDEN_POPPER_MAPPINGS = _objectSpread({}, sharedPlacements, (_objectSpread2 = {}, _defineProperty(_objectSpread2, GARDEN_PLACEMENTS.END, POPPER_PLACEMENTS.RIGHT), _defineProperty(_objectSpread2, GARDEN_PLACEMENTS.END_TOP, POPPER_PLACEMENTS.RIGHT_START), _defineProperty(_objectSpread2, GARDEN_PLACEMENTS.END_BOTTOM, POPPER_PLACEMENTS.RIGHT_END), _defineProperty(_objectSpread2, GARDEN_PLACEMENTS.START, POPPER_PLACEMENTS.LEFT), _defineProperty(_objectSpread2, GARDEN_PLACEMENTS.START_TOP, POPPER_PLACEMENTS.LEFT_START), _defineProperty(_objectSpread2, GARDEN_PLACEMENTS.START_BOTTOM, POPPER_PLACEMENTS.LEFT_END), _objectSpread2));

  return GARDEN_POPPER_MAPPINGS[gardenPlacement];
}
/**
 * Convert Garden RTL aware placement to RTL equivalent Popper.JS placement
 * @param {String} gardenPlacement
 */

function getRtlPopperPlacement(gardenPlacement) {
  var _RTL_PLACEMENT_MAPPIN;

  var RTL_PLACEMENT_MAPPINGS = (_RTL_PLACEMENT_MAPPIN = {}, _defineProperty(_RTL_PLACEMENT_MAPPIN, POPPER_PLACEMENTS.LEFT, POPPER_PLACEMENTS.RIGHT), _defineProperty(_RTL_PLACEMENT_MAPPIN, POPPER_PLACEMENTS.LEFT_START, POPPER_PLACEMENTS.RIGHT_START), _defineProperty(_RTL_PLACEMENT_MAPPIN, POPPER_PLACEMENTS.LEFT_END, POPPER_PLACEMENTS.RIGHT_END), _defineProperty(_RTL_PLACEMENT_MAPPIN, POPPER_PLACEMENTS.TOP_START, POPPER_PLACEMENTS.TOP_END), _defineProperty(_RTL_PLACEMENT_MAPPIN, POPPER_PLACEMENTS.TOP_END, POPPER_PLACEMENTS.TOP_START), _defineProperty(_RTL_PLACEMENT_MAPPIN, POPPER_PLACEMENTS.RIGHT, POPPER_PLACEMENTS.LEFT), _defineProperty(_RTL_PLACEMENT_MAPPIN, POPPER_PLACEMENTS.RIGHT_START, POPPER_PLACEMENTS.LEFT_START), _defineProperty(_RTL_PLACEMENT_MAPPIN, POPPER_PLACEMENTS.RIGHT_END, POPPER_PLACEMENTS.LEFT_END), _defineProperty(_RTL_PLACEMENT_MAPPIN, POPPER_PLACEMENTS.BOTTOM_START, POPPER_PLACEMENTS.BOTTOM_END), _defineProperty(_RTL_PLACEMENT_MAPPIN, POPPER_PLACEMENTS.BOTTOM_END, POPPER_PLACEMENTS.BOTTOM_START), _RTL_PLACEMENT_MAPPIN);
  var popperPlacement = getPopperPlacement(gardenPlacement);
  return RTL_PLACEMENT_MAPPINGS[popperPlacement] || popperPlacement;
}
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(6);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-arrows/dist/index.css
var dist = __webpack_require__(1);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-tooltips/dist/index.css
var css_tooltips_dist = __webpack_require__(3);
var css_tooltips_dist_default = /*#__PURE__*/__webpack_require__.n(css_tooltips_dist);

// CONCATENATED MODULE: ./src/views/TooltipView.js
function TooltipView_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var COMPONENT_ID = 'tooltip.tooltip';
var SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large'
};
var PLACEMENT = {
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end'
};

var shouldShowArrow = function shouldShowArrow(_ref) {
  var arrow = _ref.arrow,
      placement = _ref.placement;
  return arrow && placement;
};

var retrieveTooltipMargin = function retrieveTooltipMargin(_ref2) {
  var arrow = _ref2.arrow,
      size = _ref2.size;

  if (arrow) {
    if (size === SIZE.LARGE) {
      return 'margin: 8px;';
    } else if (size === SIZE.EXTRA_LARGE) {
      return 'margin: 12px;';
    }
  }

  return 'margin: 6px';
};
/**
 * Accepts all `<div>` props
 */


var TooltipView = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(css_tooltips_dist_default.a['c-tooltip'], (_classNames = {}, TooltipView_defineProperty(_classNames, css_tooltips_dist_default.a['c-tooltip--medium'], props.size === SIZE.MEDIUM), TooltipView_defineProperty(_classNames, css_tooltips_dist_default.a['c-tooltip--large'], props.size === SIZE.LARGE), TooltipView_defineProperty(_classNames, css_tooltips_dist_default.a['c-tooltip--extra-large'], props.size === SIZE.EXTRA_LARGE), TooltipView_defineProperty(_classNames, css_tooltips_dist_default.a['c-arrow'], shouldShowArrow(props)), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow'], shouldShowArrow(props)), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--r'], props.placement === PLACEMENT.LEFT), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--rt'], props.placement === PLACEMENT.LEFT_START), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--rb'], props.placement === PLACEMENT.LEFT_END), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--b'], props.placement === PLACEMENT.TOP), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--bl'], props.placement === PLACEMENT.TOP_START), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--br'], props.placement === PLACEMENT.TOP_END), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--l'], props.placement === PLACEMENT.RIGHT), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--lt'], props.placement === PLACEMENT.RIGHT_START), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--lb'], props.placement === PLACEMENT.RIGHT_END), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--t'], props.placement === PLACEMENT.BOTTOM), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--tl'], props.placement === PLACEMENT.BOTTOM_START), TooltipView_defineProperty(_classNames, dist_default.a['c-arrow--tr'], props.placement === PLACEMENT.BOTTOM_END), TooltipView_defineProperty(_classNames, css_tooltips_dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "TooltipView",
  componentId: "yjjo4k-0"
})(["", ";", ";"], function (props) {
  return retrieveTooltipMargin(props);
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(COMPONENT_ID, props);
});
TooltipView.propTypes = {
  arrow: external_prop_types_default.a.bool,
  size: external_prop_types_default.a.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE, SIZE.EXTRA_LARGE]),

  /** All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements) */
  placement: external_prop_types_default.a.oneOf([PLACEMENT.TOP, PLACEMENT.TOP_START, PLACEMENT.TOP_END, PLACEMENT.RIGHT, PLACEMENT.RIGHT_START, PLACEMENT.RIGHT_END, PLACEMENT.BOTTOM, PLACEMENT.BOTTOM_START, PLACEMENT.BOTTOM_END, PLACEMENT.LEFT, PLACEMENT.LEFT_START, PLACEMENT.LEFT_END])
};
TooltipView.defaultProps = {
  arrow: true,
  size: SIZE.SMALL
};
/** @component */

/* harmony default export */ var views_TooltipView = (TooltipView);
// CONCATENATED MODULE: ./src/views/LightTooltip.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var LightTooltip_COMPONENT_ID = 'tooltip.light_tooltip';
var LightTooltip_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large'
};
var LightTooltip_PLACEMENT = {
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end'
};
/**
 * Accepts all `<div>` props
 */

var LightTooltip = external_styled_components_default()(views_TooltipView).attrs(function (props) {
  return {
    'data-garden-id': LightTooltip_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(props.className, css_tooltips_dist_default.a['c-tooltip--light'])
  };
}).withConfig({
  displayName: "LightTooltip",
  componentId: "sc-1ct2673-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(LightTooltip_COMPONENT_ID, props);
});
LightTooltip.propTypes = {
  arrow: external_prop_types_default.a.bool,
  size: external_prop_types_default.a.oneOf([LightTooltip_SIZE.SMALL, LightTooltip_SIZE.MEDIUM, LightTooltip_SIZE.LARGE, LightTooltip_SIZE.EXTRA_LARGE]),

  /** All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements) */
  placement: external_prop_types_default.a.oneOf([LightTooltip_PLACEMENT.TOP, LightTooltip_PLACEMENT.TOP_START, LightTooltip_PLACEMENT.TOP_END, LightTooltip_PLACEMENT.RIGHT, LightTooltip_PLACEMENT.RIGHT_START, LightTooltip_PLACEMENT.RIGHT_END, LightTooltip_PLACEMENT.BOTTOM, LightTooltip_PLACEMENT.BOTTOM_START, LightTooltip_PLACEMENT.BOTTOM_END, LightTooltip_PLACEMENT.LEFT, LightTooltip_PLACEMENT.LEFT_START, LightTooltip_PLACEMENT.LEFT_END])
};
LightTooltip.defaultProps = {
  arrow: true,
  size: LightTooltip_SIZE.LARGE
};
/** @component */

/* harmony default export */ var views_LightTooltip = (LightTooltip);
// CONCATENATED MODULE: ./src/elements/Tooltip.js
function Tooltip_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Tooltip_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Tooltip_ownKeys(source, true).forEach(function (key) { Tooltip_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Tooltip_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Tooltip_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */











/**
 * This container must provide a wrapper for the provided tooltip
 * due to constraints in our arrow css. We must ensure that the container
 * of the tooltip can retain it's relative positioning. Without this
 * container Popper would apply absolute positioning.
 *
 * This wrapper also includes an opacity transition. It allows Popper to
 * re-position the tooltip without having a visible shift. The transition
 * is fast enough that it should not be perceptible.
 */

var TooltipWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Tooltip__TooltipWrapper",
  componentId: "lty2bj-0"
})(["&[aria-hidden='true']{visibility:hidden;opacity:0;}transition:opacity 10ms;opacity:1;z-index:", ";"], function (props) {
  return props.zIndex;
});
var Tooltip_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large'
};
var TYPE = {
  LIGHT: 'light',
  DARK: 'dark'
};
/**
 * Due to Popper.JS needing a reference to a component we provide a simple wrapper
 * to ensure the correct reference is provided.
 */

var TriggerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Tooltip__TriggerWrapper",
  componentId: "lty2bj-1"
})(["display:inline-block;"]);

var Tooltip_Tooltip = function Tooltip(_ref) {
  var appendToBody = _ref.appendToBody,
      arrow = _ref.arrow,
      children = _ref.children,
      delayMilliseconds = _ref.delayMilliseconds,
      eventsEnabled = _ref.eventsEnabled,
      id = _ref.id,
      trigger = _ref.trigger,
      placement = _ref.placement,
      popperModifiers = _ref.popperModifiers,
      size = _ref.size,
      type = _ref.type,
      zIndex = _ref.zIndex,
      initialIsVisible = _ref.initialIsVisible,
      otherProps = _objectWithoutProperties(_ref, ["appendToBody", "arrow", "children", "delayMilliseconds", "eventsEnabled", "id", "trigger", "placement", "popperModifiers", "size", "type", "zIndex", "initialIsVisible"]);

  var scheduleUpdateRef = Object(external_react_["useRef"])();

  var _useTooltip = Object(container_tooltip_["useTooltip"])({
    id: id,
    delayMilliseconds: delayMilliseconds,
    isVisible: initialIsVisible
  }),
      isVisible = _useTooltip.isVisible,
      getTooltipProps = _useTooltip.getTooltipProps,
      getTriggerProps = _useTooltip.getTriggerProps,
      openTooltip = _useTooltip.openTooltip,
      closeTooltip = _useTooltip.closeTooltip;
  /**
   * Recalculate popper placement when open to allow animations to complete.
   **/


  Object(external_react_["useEffect"])(function () {
    if (isVisible) {
      scheduleUpdateRef.current && scheduleUpdateRef.current();
    }
  }, [isVisible]);
  var popperPlacement = Object(react_theming_["isRtl"])(otherProps) ? getRtlPopperPlacement(placement) : getPopperPlacement(placement);
  return external_react_default.a.createElement(external_react_popper_["Manager"], null, external_react_default.a.createElement(external_react_popper_["Reference"], null, function (_ref2) {
    var ref = _ref2.ref;
    var triggerElement = Object(external_react_["cloneElement"])(trigger, getTriggerProps(trigger.props));
    return external_react_default.a.createElement(TriggerWrapper, {
      ref: ref
    }, triggerElement);
  }), external_react_default.a.createElement(external_react_popper_["Popper"], {
    placement: popperPlacement,
    eventsEnabled: eventsEnabled,
    modifiers: popperModifiers
  }, function (_ref3) {
    var ref = _ref3.ref,
        style = _ref3.style,
        scheduleUpdate = _ref3.scheduleUpdate,
        currentPlacement = _ref3.placement;
    scheduleUpdateRef.current = scheduleUpdate;

    var onFocus = otherProps.onFocus,
        onBlur = otherProps.onBlur,
        otherTooltipProps = _objectWithoutProperties(otherProps, ["onFocus", "onBlur"]);

    var tooltipProps = Tooltip_objectSpread({
      arrow: arrow,
      placement: currentPlacement,
      size: size,
      onFocus: Object(container_utilities_["composeEventHandlers"])(onFocus, function () {
        openTooltip();
      }),
      onBlur: Object(container_utilities_["composeEventHandlers"])(onBlur, function () {
        closeTooltip(0);
      })
    }, otherTooltipProps);

    var TooltipElem = type === TYPE.LIGHT ? views_LightTooltip : views_TooltipView;
    var tooltip = external_react_default.a.createElement(TooltipWrapper, {
      ref: ref,
      style: style,
      zIndex: zIndex,
      "aria-hidden": !isVisible
    }, external_react_default.a.createElement(TooltipElem, getTooltipProps(tooltipProps), children));

    if (appendToBody) {
      return Object(external_react_dom_["createPortal"])(tooltip, Object(react_theming_["getDocument"])(otherProps).body);
    }

    return tooltip;
  }));
};

Tooltip_Tooltip.propTypes = {
  /** Appends the tooltip to the body element */
  appendToBody: external_prop_types_default.a.bool,
  arrow: external_prop_types_default.a.bool,
  children: external_prop_types_default.a.node,

  /** Milliseconds of delay before open/close of tooltip is initiated */
  delayMilliseconds: external_prop_types_default.a.number,

  /** Whether Popper.js should update based on DOM resize events */
  eventsEnabled: external_prop_types_default.a.bool,
  id: external_prop_types_default.a.string,
  trigger: external_prop_types_default.a.node,

  /**
   * These placements differ from the default naming of Popper.JS placements to help
   * assist with RTL layouts.
   **/
  placement: external_prop_types_default.a.oneOf(['auto', 'top', 'top-start', 'top-end', 'end', 'end-top', 'end-bottom', 'bottom', 'bottom-start', 'bottom-end', 'start', 'start-top', 'start-bottom']),

  /** Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options) */
  popperModifiers: external_prop_types_default.a.object,
  size: external_prop_types_default.a.oneOf([Tooltip_SIZE.SMALL, Tooltip_SIZE.MEDIUM, Tooltip_SIZE.LARGE, Tooltip_SIZE.EXTRA_LARGE]),
  type: external_prop_types_default.a.oneOf([TYPE.LIGHT, TYPE.DARK]),

  /**
   * The z-index of the popper.js placement container
   */
  zIndex: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]),
  initialIsVisible: external_prop_types_default.a.bool
};
Tooltip_Tooltip.defaultProps = {
  arrow: true,
  eventsEnabled: true,
  type: TYPE.DARK,
  placement: 'top',
  delayMilliseconds: 500
};
/* harmony default export */ var elements_Tooltip = (Object(react_theming_["withTheme"])(Tooltip_Tooltip));
// CONCATENATED MODULE: ./src/views/content/Title.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var Title_COMPONENT_ID = 'tooltip.title';
/**
 * Accepts all `<div>` props
 */

var Title = external_styled_components_default.a.div.attrs({
  'data-garden-id': Title_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: css_tooltips_dist_default.a['c-tooltip__title']
}).withConfig({
  displayName: "Title",
  componentId: "sc-2e1p7s-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Title_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var content_Title = (Title);
// CONCATENATED MODULE: ./src/views/content/Paragraph.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var Paragraph_COMPONENT_ID = 'tooltip.paragraph';
/**
 * Accepts all `<div>` props
 */

var Paragraph = external_styled_components_default.a.div.attrs({
  'data-garden-id': Paragraph_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: css_tooltips_dist_default.a['c-tooltip__paragraph']
}).withConfig({
  displayName: "Paragraph",
  componentId: "sc-12kw068-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Paragraph_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var content_Paragraph = (Paragraph);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Tooltip */__webpack_require__.d(__webpack_exports__, "Tooltip", function() { return elements_Tooltip; });
/* concated harmony reexport LightTooltip */__webpack_require__.d(__webpack_exports__, "LightTooltip", function() { return views_LightTooltip; });
/* concated harmony reexport TooltipView */__webpack_require__.d(__webpack_exports__, "TooltipView", function() { return views_TooltipView; });
/* concated harmony reexport Title */__webpack_require__.d(__webpack_exports__, "Title", function() { return content_Title; });
/* concated harmony reexport Paragraph */__webpack_require__.d(__webpack_exports__, "Paragraph", function() { return content_Paragraph; });
/* concated harmony reexport GARDEN_PLACEMENTS */__webpack_require__.d(__webpack_exports__, "GARDEN_PLACEMENTS", function() { return GARDEN_PLACEMENTS; });
/* concated harmony reexport POPPER_PLACEMENTS */__webpack_require__.d(__webpack_exports__, "POPPER_PLACEMENTS", function() { return POPPER_PLACEMENTS; });
/* concated harmony reexport getPopperPlacement */__webpack_require__.d(__webpack_exports__, "getPopperPlacement", function() { return getPopperPlacement; });
/* concated harmony reexport getRtlPopperPlacement */__webpack_require__.d(__webpack_exports__, "getRtlPopperPlacement", function() { return getRtlPopperPlacement; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map