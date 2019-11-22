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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-tag":"index__c-tag___1DRPn","is-focused":"index__is-focused___IipU3","is-rtl":"index__is-rtl___ORKT9","c-tag--azure":"index__c-tag--azure___2y-wo","c-tag--blue":"index__c-tag--blue___WXHwE","c-tag--crimson":"index__c-tag--crimson___3LZvT","c-tag--fuschia":"index__c-tag--fuschia___P0kmp","c-tag--green":"index__c-tag--green___9PqeT","c-tag--grey":"index__c-tag--grey___3je_E","c-tag--kale":"index__c-tag--kale___2XqwL","c-tag--lemon":"index__c-tag--lemon___1UneN","c-tag--lime":"index__c-tag--lime___2Sxnv","c-tag--mint":"index__c-tag--mint___qiQUT","c-tag--orange":"index__c-tag--orange___1ZaFD","c-tag--pink":"index__c-tag--pink___R5sJT","c-tag--purple":"index__c-tag--purple___12HNn","c-tag--red":"index__c-tag--red___RE8vT","c-tag--royal":"index__c-tag--royal___tmV_D","c-tag--teal":"index__c-tag--teal___1sGaZ","c-tag--yellow":"index__c-tag--yellow___29aaT","c-tag--sm":"index__c-tag--sm___iL-fP","c-tag--lg":"index__c-tag--lg___1o3jN","c-tag--pill":"index__c-tag--pill___1SoxO","c-tag--round":"index__c-tag--round___rxdij","c-tag__remove":"index__c-tag__remove___1JbtL","is-hovered":"index__is-hovered___2Ik8f","c-tag__avatar":"index__c-tag__avatar___Bu1lg"};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/react-theming");

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(2);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-tags/dist/index.css
var dist = __webpack_require__(0);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/views/Avatar.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var COMPONENT_ID = 'tags.avatar';

var Avatar_Avatar = function Avatar(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return external_react_default.a.cloneElement(external_react_["Children"].only(children), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(className, dist_default.a['c-tag__avatar'])
  });
};
/** @component */


/* harmony default export */ var views_Avatar = (Avatar_Avatar);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(1);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(4);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/views/Close.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Close_COMPONENT_ID = 'tags.close';
/**
 * Used to close a Tag. Supports all `<div>` props.
 */

var Close = external_styled_components_default.a.div.attrs(function (props) {
  return {
    'data-garden-id': Close_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    'aria-label': 'Press delete to remove',
    className: external_classnames_default()(dist_default.a['c-tag__remove'], _defineProperty({}, dist_default.a['is-hovered'], props.hovered))
  };
}).withConfig({
  displayName: "Close",
  componentId: "sc-106979g-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Close_COMPONENT_ID, props);
});
Close.propTypes = {
  hovered: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var views_Close = (Close);
// CONCATENATED MODULE: ./src/views/Tag.js
function Tag_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Tag_COMPONENT_ID = 'tags.tag_view';
var TYPE = {
  GREY: 'grey',
  BLUE: 'blue',
  KALE: 'kale',
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow',
  FUSCHIA: 'fuschia',
  PINK: 'pink',
  CRIMSON: 'crimson',
  ORANGE: 'orange',
  LEMON: 'lemon',
  LIME: 'lime',
  MINT: 'mint',
  TEAL: 'teal',
  AZURE: 'azure',
  ROYAL: 'royal',
  PURPLE: 'purple'
};
var SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};
/**
 * Accepts all `<div>` props
 */

var Tag = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': Tag_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-tag'], (_classNames = {}, Tag_defineProperty(_classNames, dist_default.a['c-tag--sm'], props.size === SIZE.SMALL), Tag_defineProperty(_classNames, dist_default.a['c-tag--lg'], props.size === SIZE.LARGE), Tag_defineProperty(_classNames, dist_default.a['c-tag--pill'], props.pill), Tag_defineProperty(_classNames, dist_default.a['c-tag--round'], props.round), Tag_defineProperty(_classNames, dist_default.a['is-focused'], props.focused), Tag_defineProperty(_classNames, dist_default.a['is-hovered'], props.hovered), Tag_defineProperty(_classNames, dist_default.a['c-tag--grey'], props.type === TYPE.GREY), Tag_defineProperty(_classNames, dist_default.a['c-tag--blue'], props.type === TYPE.BLUE), Tag_defineProperty(_classNames, dist_default.a['c-tag--kale'], props.type === TYPE.KALE), Tag_defineProperty(_classNames, dist_default.a['c-tag--red'], props.type === TYPE.RED), Tag_defineProperty(_classNames, dist_default.a['c-tag--green'], props.type === TYPE.GREEN), Tag_defineProperty(_classNames, dist_default.a['c-tag--yellow'], props.type === TYPE.YELLOW), Tag_defineProperty(_classNames, dist_default.a['c-tag--fuschia'], props.type === TYPE.FUSCHIA), Tag_defineProperty(_classNames, dist_default.a['c-tag--pink'], props.type === TYPE.PINK), Tag_defineProperty(_classNames, dist_default.a['c-tag--crimson'], props.type === TYPE.CRIMSON), Tag_defineProperty(_classNames, dist_default.a['c-tag--orange'], props.type === TYPE.ORANGE), Tag_defineProperty(_classNames, dist_default.a['c-tag--lemon'], props.type === TYPE.LEMON), Tag_defineProperty(_classNames, dist_default.a['c-tag--lime'], props.type === TYPE.LIME), Tag_defineProperty(_classNames, dist_default.a['c-tag--mint'], props.type === TYPE.MINT), Tag_defineProperty(_classNames, dist_default.a['c-tag--teal'], props.type === TYPE.TEAL), Tag_defineProperty(_classNames, dist_default.a['c-tag--azure'], props.type === TYPE.AZURE), Tag_defineProperty(_classNames, dist_default.a['c-tag--royal'], props.type === TYPE.ROYAL), Tag_defineProperty(_classNames, dist_default.a['c-tag--purple'], props.type === TYPE.PURPLE), Tag_defineProperty(_classNames, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "Tag",
  componentId: "sc-1x3j99r-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Tag_COMPONENT_ID, props);
});
Tag.propTypes = {
  size: external_prop_types_default.a.oneOf([SIZE.SMALL, SIZE.LARGE]),
  pill: external_prop_types_default.a.bool,
  round: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  type: external_prop_types_default.a.oneOf([TYPE.GREY, TYPE.BLUE, TYPE.KALE, TYPE.RED, TYPE.GREEN, TYPE.YELLOW, TYPE.FUSCHIA, TYPE.PINK, TYPE.CRIMSON, TYPE.ORANGE, TYPE.LEMON, TYPE.LIME, TYPE.MINT, TYPE.TEAL, TYPE.AZURE, TYPE.ROYAL, TYPE.PURPLE])
};
/** @component */

/* harmony default export */ var views_Tag = (Tag);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Avatar */__webpack_require__.d(__webpack_exports__, "Avatar", function() { return views_Avatar; });
/* concated harmony reexport Close */__webpack_require__.d(__webpack_exports__, "Close", function() { return views_Close; });
/* concated harmony reexport Tag */__webpack_require__.d(__webpack_exports__, "Tag", function() { return views_Tag; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map