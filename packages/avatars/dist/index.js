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
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-avatar":"index__c-avatar___3aVjT","c-avatar__img":"index__c-avatar__img___I6W1R","c-avatar__txt":"index__c-avatar__txt___2Ha1o","c-avatar__svg":"index__c-avatar__svg___2a5Ep","c-avatar--lg":"index__c-avatar--lg___2qa8G","c-avatar--sm":"index__c-avatar--sm___3JmRS","c-avatar--xs":"index__c-avatar--xs___29izH","is-active":"index__is-active___26XAP","is-available":"index__is-available___-g8NJ","is-away":"index__is-away___1ZY1P","c-avatar--system":"index__c-avatar--system___11Vhj","zd-avatar--active__badge":"index__zd-avatar--active__badge___1lgTM","is-rtl":"index__is-rtl___3yJMN"};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/react-theming");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(3);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(5);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-avatars/dist/index.css
var dist = __webpack_require__(1);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/styled.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var AVATARS_COMPONENT_ID = 'avatars.avatar';
var SIZE = {
  EXTRASMALL: 'extrasmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
var STATUS = {
  AVAILABLE: 'available',
  ACTIVE: 'active',
  AWAY: 'away'
};
/**
 * Accepts all `<figure>` props
 */

var StyledAvatar = external_styled_components_default.a.figure.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': AVATARS_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-avatar'], (_classNames = {}, _defineProperty(_classNames, dist_default.a['c-avatar--system'], props.isSystem), _defineProperty(_classNames, dist_default.a['c-avatar--xs'], props.size === SIZE.EXTRASMALL), _defineProperty(_classNames, dist_default.a['c-avatar--sm'], props.size === SIZE.SMALL), _defineProperty(_classNames, dist_default.a['c-avatar--lg'], props.size === SIZE.LARGE), _defineProperty(_classNames, dist_default.a['is-available'], props.status === STATUS.AVAILABLE), _defineProperty(_classNames, dist_default.a['is-active'], props.status === STATUS.ACTIVE), _defineProperty(_classNames, dist_default.a['is-away'], props.status === STATUS.AWAY), _defineProperty(_classNames, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "styled__StyledAvatar",
  componentId: "sqcyr7-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(AVATARS_COMPONENT_ID, props);
});
StyledAvatar.propTypes = {
  /** Applies system styling */
  isSystem: external_prop_types_default.a.bool,
  size: external_prop_types_default.a.oneOf([SIZE.EXTRASMALL, SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  status: external_prop_types_default.a.oneOf([STATUS.AVAILABLE, STATUS.ACTIVE, STATUS.AWAY])
};
var TEXT_COMPONENT_ID = 'avatars.text';
/**
 * Accepts all `<span>` attributes
 */

var StyledText = external_styled_components_default.a.span.attrs({
  'data-garden-id': TEXT_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-avatar__txt']
}).withConfig({
  displayName: "styled__StyledText",
  componentId: "sqcyr7-1"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(TEXT_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/Avatar.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var Avatar_SIZE = {
  EXTRASMALL: 'extrasmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
var Avatar_STATUS = {
  AVAILABLE: 'available',
  ACTIVE: 'active',
  AWAY: 'away'
};
/**
 * Accepts all `<figure>` attributes and events
 */

var Avatar_Avatar = function Avatar(_ref) {
  var isSystem = _ref.isSystem,
      size = _ref.size,
      status = _ref.status,
      children = _ref.children,
      badge = _ref.badge,
      other = _objectWithoutProperties(_ref, ["isSystem", "size", "status", "children", "badge"]);

  var computedStatus = badge ? Avatar_STATUS.ACTIVE : status;
  return external_react_default.a.createElement(StyledAvatar, _extends({
    isSystem: isSystem,
    size: size,
    status: computedStatus,
    "data-badge": badge,
    "aria-atomic": "true",
    "aria-live": "polite"
  }, other), children);
};

Avatar_Avatar.propTypes = {
  /** Applies system styling */
  isSystem: external_prop_types_default.a.bool,
  badge: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number]),
  size: external_prop_types_default.a.oneOf([Avatar_SIZE.EXTRASMALL, Avatar_SIZE.SMALL, Avatar_SIZE.MEDIUM, Avatar_SIZE.LARGE]),
  status: external_prop_types_default.a.oneOf([Avatar_STATUS.AVAILABLE, Avatar_STATUS.AWAY]),
  children: external_prop_types_default.a.node
};
Avatar_Avatar.defaultProps = {
  size: Avatar_SIZE.MEDIUM
};
/** @component */

/* harmony default export */ var src_Avatar = (Avatar_Avatar);
// CONCATENATED MODULE: ./src/Text.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/** Accepts all `<figcaption>` props */

var Text = StyledText;
/** @component */

/* harmony default export */ var src_Text = (Text);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Avatar */__webpack_require__.d(__webpack_exports__, "Avatar", function() { return src_Avatar; });
/* concated harmony reexport Text */__webpack_require__.d(__webpack_exports__, "Text", function() { return src_Text; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map