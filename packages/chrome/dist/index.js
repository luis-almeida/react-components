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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-chrome":"index__c-chrome___3Bsd_","is-rtl":"index__is-rtl___2MkR6","c-chrome__body":"index__c-chrome__body___2_cTM","c-chrome__body__content":"index__c-chrome__body__content___14F-d","c-chrome__body--footer":"index__c-chrome__body--footer___2zdAL","c-chrome__body__content__main":"index__c-chrome__body__content__main___2vA_m","c-chrome__body__content__sidebar":"index__c-chrome__body__content__sidebar___2xUGZ","c-chrome__nav":"index__c-chrome__nav___5IxvE","c-chrome__nav__item":"index__c-chrome__nav__item___3GBuU","c-chrome__nav__item--logo":"index__c-chrome__nav__item--logo___1wyn6","c-chrome__nav__item--brandmark":"index__c-chrome__nav__item--brandmark___C3cRm","is-current":"index__is-current___2YMIz","is-focused":"index__is-focused___N_N8W","is-hovered":"index__is-hovered___2CNbM","c-chrome__nav__item__icon":"index__c-chrome__nav__item__icon___1E3De","c-chrome__nav__item__text":"index__c-chrome__nav__item__text___270U5","c-chrome__nav__item__text--wrap":"index__c-chrome__nav__item__text--wrap___RGvcp","c-chrome__nav__fab":"index__c-chrome__nav__fab___22M5E","c-chrome__nav__fab__icon":"index__c-chrome__nav__fab__icon___1Op3N","c-chrome__nav__fab__text":"index__c-chrome__nav__fab__text___7zt5K","c-chrome__nav--expanded":"index__c-chrome__nav--expanded___1Pc9j","is-active":"index__is-active___2cUOh","c-chrome__subnav":"index__c-chrome__subnav___3GBv3","c-chrome__subnav__panel":"index__c-chrome__subnav__panel___3zM5m","is-hidden":"index__is-hidden___3ZYen","c-chrome__subnav__item":"index__c-chrome__subnav__item___1kp9J","c-chrome__subnav__item--header":"index__c-chrome__subnav__item--header___133yE","is-expanded":"index__is-expanded___2Hr9y","c-chrome__subnav__item__text":"index__c-chrome__subnav__item__text___TvGjA","c-chrome__subnav__item__text--wrap":"index__c-chrome__subnav__item__text--wrap___BH3O8","c-chrome__body__header":"index__c-chrome__body__header___3wWog","c-chrome__body__header--standalone":"index__c-chrome__body__header--standalone___E13si","c-chrome__body__header__item":"index__c-chrome__body__header__item___VAq4K","c-chrome__body__header__item--logo":"index__c-chrome__body__header__item--logo___1BUdj","c-chrome__body__header__item--max-x":"index__c-chrome__body__header__item--max-x___B4F3l","c-chrome__body__header__item--max-y":"index__c-chrome__body__header__item--max-y___2zyOD","c-chrome__body__header__item__icon":"index__c-chrome__body__header__item__icon___1bsQ3","c-chrome__body__header__item--round":"index__c-chrome__body__header__item--round___3lLci","c-chrome__body__header__item__text":"index__c-chrome__body__header__item__text___3RDwn","is-clipped":"index__is-clipped___1vBpN","c-chrome__body__footer":"index__c-chrome__body__footer___37cIE","c-chrome__body__footer__item":"index__c-chrome__body__footer__item___1lXbH","c-chrome__body__header__item--logo--chat":"index__c-chrome__body__header__item--logo--chat___2648T","c-chrome__nav__item--logo--chat":"index__c-chrome__nav__item--logo--chat___1vIrP","c-chrome__body__header__item--logo--connect":"index__c-chrome__body__header__item--logo--connect___3LsI1","c-chrome__nav__item--logo--connect":"index__c-chrome__nav__item--logo--connect___2EF6b","c-chrome__body__header__item--logo--explore":"index__c-chrome__body__header__item--logo--explore___3sEkv","c-chrome__nav__item--logo--explore":"index__c-chrome__nav__item--logo--explore___2z9JH","c-chrome__body__header__item--logo--guide":"index__c-chrome__body__header__item--logo--guide___1XVOt","c-chrome__nav__item--logo--guide":"index__c-chrome__nav__item--logo--guide___1-SpJ","c-chrome__body__header__item--logo--message":"index__c-chrome__body__header__item--logo--message___1r-UW","c-chrome__nav__item--logo--message":"index__c-chrome__nav__item--logo--message___glJVB","c-chrome__body__header__item--logo--support":"index__c-chrome__body__header__item--logo--support___2FQBv","c-chrome__nav__item--logo--support":"index__c-chrome__nav__item--logo--support___2LflR","c-chrome__body__header__item--logo--talk":"index__c-chrome__body__header__item--logo--talk___24tF1","c-chrome__nav__item--logo--talk":"index__c-chrome__nav__item--logo--talk___2Hnam","c-chrome__nav--dark":"index__c-chrome__nav--dark___1qPI3","c-chrome__nav--light":"index__c-chrome__nav--light___s71k-"};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-keyboardfocus");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-accordion");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-utilities");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(3);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(5);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-chrome/dist/index.css
var dist = __webpack_require__(0);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/views/Chrome.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var COMPONENT_ID = 'chrome.chrome';
/**
 * Accepts all `<div>` props
 */

var Chrome = external_styled_components_default.a.div.attrs(function (props) {
  return {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome'], _defineProperty({}, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)))
  };
}).withConfig({
  displayName: "Chrome",
  componentId: "wkt0fp-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var views_Chrome = (Chrome);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(1);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./src/views/body/Body.js
function Body_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Body_COMPONENT_ID = 'chrome.body';
/**
 * Accepts all `<div>` props
 */

var Body = external_styled_components_default.a.div.attrs(function (props) {
  return {
    'data-garden-id': Body_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__body'], Body_defineProperty({}, dist_default.a['c-chrome__body--footer'], props.hasFooter))
  };
}).withConfig({
  displayName: "Body",
  componentId: "cyqwbl-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Body_COMPONENT_ID, props);
});
Body.propTypes = {
  /** Prepare the body content height to allow space for a footer component  */
  hasFooter: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var body_Body = (Body);
// CONCATENATED MODULE: ./src/views/body/Content.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var Content_COMPONENT_ID = 'chrome.content';
/**
 * Accepts all `<div>` props
 */

var Content = external_styled_components_default.a.div.attrs({
  'data-garden-id': Content_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-chrome__body__content']
}).withConfig({
  displayName: "Content",
  componentId: "qxku9k-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Content_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var body_Content = (Content);
// CONCATENATED MODULE: ./src/views/body/Main.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var Main_COMPONENT_ID = 'chrome.main';
/**
 * Accepts all `<main>` props
 */

var Main = external_styled_components_default.a.main.attrs({
  'data-garden-id': Main_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-chrome__body__content__main']
}).withConfig({
  displayName: "Main",
  componentId: "s5htqg-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Main_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var body_Main = (Main);
// CONCATENATED MODULE: ./src/views/body/Sidebar.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var Sidebar_COMPONENT_ID = 'chrome.sidebar';
/**
 * Accepts all `<aside>` props
 */

var Sidebar = external_styled_components_default.a.aside.attrs({
  'data-garden-id': Sidebar_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-chrome__body__content__sidebar']
}).withConfig({
  displayName: "Sidebar",
  componentId: "sc-1wdo1fh-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Sidebar_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var body_Sidebar = (Sidebar);
// CONCATENATED MODULE: ./src/views/header/Header.js
function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Header_COMPONENT_ID = 'chrome.header';
/**
 * Accepts all `<header>` props
 */

var Header = external_styled_components_default.a.header.attrs(function (props) {
  return {
    'data-garden-id': Header_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__body__header'], Header_defineProperty({}, dist_default.a['c-chrome__body__header--standalone'], props.standalone))
  };
}).withConfig({
  displayName: "Header",
  componentId: "sc-1hcqlkm-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Header_COMPONENT_ID, props);
});
Header.propTypes = {
  /** Display logo for standlone usage  */
  standalone: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var header_Header = (Header);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(4);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@zendeskgarden/container-keyboardfocus"
var container_keyboardfocus_ = __webpack_require__(6);

// CONCATENATED MODULE: ./src/views/header/HeaderItem.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { HeaderItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HeaderItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var HeaderItem_COMPONENT_ID = 'chrome.header_item';
var PRODUCT = {
  CHAT: 'chat',
  CONNECT: 'connect',
  EXPLORE: 'explore',
  GUIDE: 'guide',
  MESSAGE: 'message',
  SUPPORT: 'support',
  TALK: 'talk'
};
var StyledHeaderItem = external_styled_components_default.a.button.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': HeaderItem_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__body__header__item'], (_classNames = {}, HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--max-x'], props.maxX), HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--max-y'], props.maxY), HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--logo'], props.logo), HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--round'], props.round), HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--logo--chat'], props.product === PRODUCT.CHAT), HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--logo--connect'], props.product === PRODUCT.CONNECT), HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--logo--explore'], props.product === PRODUCT.EXPLORE), HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--logo--guide'], props.product === PRODUCT.GUIDE), HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--logo--message'], props.product === PRODUCT.MESSAGE), HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--logo--support'], props.product === PRODUCT.SUPPORT), HeaderItem_defineProperty(_classNames, dist_default.a['c-chrome__body__header__item--logo--talk'], props.product === PRODUCT.TALK), HeaderItem_defineProperty(_classNames, dist_default.a['is-hovered'], props.hovered), HeaderItem_defineProperty(_classNames, dist_default.a['is-focused'], props.focused), HeaderItem_defineProperty(_classNames, dist_default.a['is-active'], props.active), _classNames))
  };
}).withConfig({
  displayName: "HeaderItem__StyledHeaderItem",
  componentId: "bw9tfm-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(HeaderItem_COMPONENT_ID, props);
});
/**
 * Accepts all `<button>` props
 */

var HeaderItem = external_react_default.a.forwardRef(function (_ref, ref) {
  var focused = _ref.focused,
      other = _objectWithoutProperties(_ref, ["focused"]);

  var _useKeyboardFocus = Object(container_keyboardfocus_["useKeyboardFocus"])(),
      getFocusProps = _useKeyboardFocus.getFocusProps,
      keyboardFocused = _useKeyboardFocus.keyboardFocused;

  return external_react_default.a.createElement(StyledHeaderItem, getFocusProps(_objectSpread({}, other, {
    ref: ref,
    focused: focused || keyboardFocused
  })));
});
HeaderItem.propTypes = {
  /** Horizontally maximize a flex item in the header to take as much space as possible (i.e. breadcrumb container) */
  maxX: external_prop_types_default.a.bool,

  /** Vertically maximize the height for a header item (i.e. contains a search input) */
  maxY: external_prop_types_default.a.bool,

  /** Round the border radius for a header item (i.e. user icon) */
  round: external_prop_types_default.a.bool,

  /** Applies product-specific color palette */
  product: external_prop_types_default.a.oneOf([PRODUCT.CHAT, PRODUCT.CONNECT, PRODUCT.EXPLORE, PRODUCT.GUIDE, PRODUCT.MESSAGE, PRODUCT.SUPPORT, PRODUCT.TALK]),

  /** Style the product logo shown as the first item in the header */
  logo: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  active: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var header_HeaderItem = (HeaderItem);
// CONCATENATED MODULE: ./src/views/header/HeaderItemIcon.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var HeaderItemIcon_COMPONENT_ID = 'chrome.header_item_icon';
/** Applies styling directly to child component */

var HeaderItemIcon = external_react_default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children;
  return external_react_default.a.cloneElement(external_react_["Children"].only(children), {
    'data-garden-id': HeaderItemIcon_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    ref: ref,
    className: dist_default.a['c-chrome__body__header__item__icon']
  });
});
HeaderItemIcon.propTypes = {
  children: external_prop_types_default.a.node
};
/** @component */

/* harmony default export */ var header_HeaderItemIcon = (HeaderItemIcon);
// CONCATENATED MODULE: ./src/views/header/HeaderItemText.js
function HeaderItemText_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var HeaderItemText_COMPONENT_ID = 'chrome.header_item_text';
/**
 * Accepts all `<span>` props
 */

var HeaderItemText = external_styled_components_default.a.span.attrs(function (props) {
  return {
    'data-garden-id': HeaderItemText_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__body__header__item__text'], HeaderItemText_defineProperty({}, dist_default.a['is-clipped'], props.clipped))
  };
}).withConfig({
  displayName: "HeaderItemText",
  componentId: "sc-1fjj4r0-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(HeaderItemText_COMPONENT_ID, props);
});
HeaderItemText.propTypes = {
  /** Clip text (but leave accessible to screenreaders) for an icon-only header item */
  clipped: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var header_HeaderItemText = (HeaderItemText);
// CONCATENATED MODULE: ./src/views/header/HeaderItemWrapper.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var HeaderItemWrapper_COMPONENT_ID = 'chrome.header_item_wrapper';

var HeaderItemWrapper_PRODUCT = {
  CHAT: 'chat',
  CONNECT: 'connect',
  EXPLORE: 'explore',
  GUIDE: 'guide',
  MESSAGE: 'message',
  SUPPORT: 'support',
  TALK: 'talk'
};
/** Accepts all `<div>` props */

var HeaderItemWrapper = external_styled_components_default()(StyledHeaderItem.withComponent('div')).attrs({
  'data-garden-id': HeaderItemWrapper_COMPONENT_ID,
  'data-garden-version': "7.0.2"
}).withConfig({
  displayName: "HeaderItemWrapper",
  componentId: "q5w8io-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('chrome.header_item_wrapper', props);
});
HeaderItemWrapper.propTypes = {
  /** Horizontally maximize a flex item in the header to take as much space as possible (i.e. breadcrumb container) */
  maxX: external_prop_types_default.a.bool,

  /** Vertically maximize the height for a header item (i.e. contains a search input) */
  maxY: external_prop_types_default.a.bool,

  /** Round the border radius for a header item (i.e. user icon) */
  round: external_prop_types_default.a.bool,

  /** Applies product-specific color palette */
  product: external_prop_types_default.a.oneOf([HeaderItemWrapper_PRODUCT.CHAT, HeaderItemWrapper_PRODUCT.CONNECT, HeaderItemWrapper_PRODUCT.EXPLORE, HeaderItemWrapper_PRODUCT.GUIDE, HeaderItemWrapper_PRODUCT.MESSAGE, HeaderItemWrapper_PRODUCT.SUPPORT, HeaderItemWrapper_PRODUCT.TALK]),

  /** Style the product logo shown as the first item in the header */
  logo: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  active: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var header_HeaderItemWrapper = (HeaderItemWrapper);
// CONCATENATED MODULE: ./src/views/footer/Footer.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var Footer_COMPONENT_ID = 'chrome.footer';
/**
 * Accepts all `<footer>` props. _Remember to set the_ `hasFooter` _prop on the parent_ `<Body>`.
 */

var Footer = external_styled_components_default.a.footer.attrs({
  'data-garden-id': Footer_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-chrome__body__footer']
}).withConfig({
  displayName: "Footer",
  componentId: "t13kj0-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Footer_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var footer_Footer = (Footer);
// CONCATENATED MODULE: ./src/views/footer/FooterItem.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var FooterItem_COMPONENT_ID = 'chrome.footer_item';
/**
 * Accepts all `<div>` props
 */

var FooterItem = external_styled_components_default.a.div.attrs({
  'data-garden-id': FooterItem_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-chrome__body__footer__item']
}).withConfig({
  displayName: "FooterItem",
  componentId: "feejyo-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(FooterItem_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var footer_FooterItem = (FooterItem);
// CONCATENATED MODULE: ./src/views/nav/Nav.js
function Nav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Nav_COMPONENT_ID = 'chrome.nav';
/**
 * Accepts all `<div>` props
 */

var Nav = external_styled_components_default.a.nav.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': Nav_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__nav'], (_classNames = {}, Nav_defineProperty(_classNames, dist_default.a['c-chrome__nav--expanded'], props.expanded), Nav_defineProperty(_classNames, dist_default.a['c-chrome__nav--dark'], props.dark), Nav_defineProperty(_classNames, dist_default.a['c-chrome__nav--light'], props.light), _classNames))
  };
}).withConfig({
  displayName: "Nav",
  componentId: "xbrd96-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Nav_COMPONENT_ID, props);
});
Nav.propTypes = {
  /** Expand navigation area to include item text */
  expanded: external_prop_types_default.a.bool,

  /** Apply dark styling */
  dark: external_prop_types_default.a.bool,

  /** Apply light styling */
  light: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var nav_Nav = (Nav);
// CONCATENATED MODULE: ./src/views/nav/NavItem.js
function NavItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function NavItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { NavItem_ownKeys(source, true).forEach(function (key) { NavItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { NavItem_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function NavItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NavItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NavItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NavItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var NavItem_COMPONENT_ID = 'chrome.nav_item';
var NavItem_PRODUCT = {
  CHAT: 'chat',
  CONNECT: 'connect',
  EXPLORE: 'explore',
  GUIDE: 'guide',
  MESSAGE: 'message',
  SUPPORT: 'support',
  TALK: 'talk'
};
/**
 * Accepts all `<button>` props
 */

var StyledNavItem = external_styled_components_default.a.button.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': NavItem_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__nav__item'], (_classNames = {}, NavItem_defineProperty(_classNames, dist_default.a['c-chrome__nav__item--logo'], props.logo), NavItem_defineProperty(_classNames, dist_default.a['c-chrome__nav__item--brandmark'], props.brandmark), NavItem_defineProperty(_classNames, dist_default.a['c-chrome__nav__item--logo--chat'], props.product === NavItem_PRODUCT.CHAT), NavItem_defineProperty(_classNames, dist_default.a['c-chrome__nav__item--logo--connect'], props.product === NavItem_PRODUCT.CONNECT), NavItem_defineProperty(_classNames, dist_default.a['c-chrome__nav__item--logo--explore'], props.product === NavItem_PRODUCT.EXPLORE), NavItem_defineProperty(_classNames, dist_default.a['c-chrome__nav__item--logo--guide'], props.product === NavItem_PRODUCT.GUIDE), NavItem_defineProperty(_classNames, dist_default.a['c-chrome__nav__item--logo--message'], props.product === NavItem_PRODUCT.MESSAGE), NavItem_defineProperty(_classNames, dist_default.a['c-chrome__nav__item--logo--support'], props.product === NavItem_PRODUCT.SUPPORT), NavItem_defineProperty(_classNames, dist_default.a['c-chrome__nav__item--logo--talk'], props.product === NavItem_PRODUCT.TALK), NavItem_defineProperty(_classNames, dist_default.a['is-current'], props.current), NavItem_defineProperty(_classNames, dist_default.a['is-hovered'], props.hovered), NavItem_defineProperty(_classNames, dist_default.a['is-focused'], props.focused), NavItem_defineProperty(_classNames, dist_default.a['is-active'], props.active), _classNames))
  };
}).withConfig({
  displayName: "NavItem__StyledNavItem",
  componentId: "n3hf4c-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(NavItem_COMPONENT_ID, props);
});
/**
 * Accepts all `<button>` props
 */

var NavItem = external_react_default.a.forwardRef(function (_ref, ref) {
  var logo = _ref.logo,
      brandmark = _ref.brandmark,
      other = NavItem_objectWithoutProperties(_ref, ["logo", "brandmark"]);

  var _useKeyboardFocus = Object(container_keyboardfocus_["useKeyboardFocus"])(),
      getFocusProps = _useKeyboardFocus.getFocusProps,
      keyboardFocused = _useKeyboardFocus.keyboardFocused;

  return external_react_default.a.createElement(StyledNavItem, getFocusProps(NavItem_objectSpread({
    tabIndex: logo || brandmark ? -1 : 0,
    focused: keyboardFocused,
    logo: logo || brandmark,
    brandmark: brandmark,
    ref: ref
  }, other)));
});
NavItem.propTypes = {
  /** Applies product-specific color palette */
  product: external_prop_types_default.a.oneOf([NavItem_PRODUCT.CHAT, NavItem_PRODUCT.CONNECT, NavItem_PRODUCT.EXPLORE, NavItem_PRODUCT.GUIDE, NavItem_PRODUCT.MESSAGE, NavItem_PRODUCT.SUPPORT, NavItem_PRODUCT.TALK]),

  /** Style the product logo shown as the top item in the nav */
  logo: external_prop_types_default.a.bool,

  /** Style a brandmark shown as a bottom item in the nav */
  brandmark: external_prop_types_default.a.bool,

  /** Indicate which item is current in the nav */
  current: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  active: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var nav_NavItem = (NavItem);
// CONCATENATED MODULE: ./src/views/nav/NavItemIcon.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var NavItemIcon_COMPONENT_ID = 'chrome.nav_item_icon';
/** Applies styling directly to child component */

var NavItemIcon = external_react_default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children;
  return external_react_default.a.cloneElement(external_react_["Children"].only(children), {
    'data-garden-id': NavItemIcon_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    ref: ref,
    className: dist_default.a['c-chrome__nav__item__icon']
  });
});
NavItemIcon.propTypes = {
  children: external_prop_types_default.a.node
};
/** @component */

/* harmony default export */ var nav_NavItemIcon = (NavItemIcon);
// CONCATENATED MODULE: ./src/views/nav/NavItemText.js
function NavItemText_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var NavItemText_COMPONENT_ID = 'chrome.nav_item_text';
/**
 * Accepts all `<span>` props
 */

var NavItemText = external_styled_components_default.a.span.attrs(function (props) {
  return {
    'data-garden-id': NavItemText_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__nav__item__text'], NavItemText_defineProperty({}, dist_default.a['c-chrome__nav__item__text--wrap'], props.isWrapped))
  };
}).withConfig({
  displayName: "NavItemText",
  componentId: "sfzo44-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(NavItemText_COMPONENT_ID, props);
});
NavItemText.propTypes = {
  /** Wrap overflow text instead of truncating long strings with an ellipsis */
  isWrapped: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var nav_NavItemText = (NavItemText);
// CONCATENATED MODULE: ./src/views/subnav/SubNav.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var SubNav_COMPONENT_ID = 'chrome.subnav';
/**
 * Accepts all `<div>` props
 */

var SubNav = external_styled_components_default.a.nav.attrs({
  'data-garden-id': SubNav_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-chrome__subnav']
}).withConfig({
  displayName: "SubNav",
  componentId: "sc-1tuygd9-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('chrome.subnav', props);
});
/** @component */

/* harmony default export */ var subnav_SubNav = (SubNav);
// CONCATENATED MODULE: ./src/views/subnav/SubNavItem.js
function SubNavItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SubNavItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SubNavItem_ownKeys(source, true).forEach(function (key) { SubNavItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SubNavItem_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SubNavItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var SubNavItem_COMPONENT_ID = 'chrome.subnav_item';
var StyledSubNavItem = external_styled_components_default.a.button.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': SubNavItem_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__subnav__item'], (_classNames = {}, SubNavItem_defineProperty(_classNames, dist_default.a['is-current'], props.current), SubNavItem_defineProperty(_classNames, dist_default.a['is-hovered'], props.hovered), SubNavItem_defineProperty(_classNames, dist_default.a['is-focused'], props.focused), _classNames))
  };
}).withConfig({
  displayName: "SubNavItem__StyledSubNavItem",
  componentId: "sc-99cyr9-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(SubNavItem_COMPONENT_ID, props);
});
/**
 * Accepts all `<button>` props
 */

var SubNavItem = external_react_default.a.forwardRef(function (props, ref) {
  var _useKeyboardFocus = Object(container_keyboardfocus_["useKeyboardFocus"])(),
      getFocusProps = _useKeyboardFocus.getFocusProps,
      keyboardFocused = _useKeyboardFocus.keyboardFocused;

  return external_react_default.a.createElement(StyledSubNavItem, getFocusProps(SubNavItem_objectSpread({
    focused: keyboardFocused,
    ref: ref
  }, props)));
});
SubNavItem.propTypes = {
  /** Indicate which item is current in the nav */
  current: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var subnav_SubNavItem = (SubNavItem);
// CONCATENATED MODULE: ./src/views/subnav/SubNavItemText.js
function SubNavItemText_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var SubNavItemText_COMPONENT_ID = 'chrome.subnav_item_text';
/**
 * Accepts all `<span>` props
 */

var SubNavItemText = external_styled_components_default.a.span.attrs(function (props) {
  return {
    'data-garden-id': SubNavItemText_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__subnav__item__text'], SubNavItemText_defineProperty({}, dist_default.a['c-chrome__subnav__item__text--wrap'], props.isWrapped))
  };
}).withConfig({
  displayName: "SubNavItemText",
  componentId: "sc-154bfzu-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(SubNavItemText_COMPONENT_ID, props);
});
SubNavItemText.propTypes = {
  /** Wrap overflow text instead of truncating long strings with an ellipsis
   (use in conjunction with max-width styling applied to the `SubNav` container) */
  isWrapped: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var subnav_SubNavItemText = (SubNavItemText);
// EXTERNAL MODULE: external "@zendeskgarden/container-accordion"
var container_accordion_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@zendeskgarden/container-utilities"
var container_utilities_ = __webpack_require__(8);

// CONCATENATED MODULE: ./src/views/subnav/CollapsibleSubNavItem.js
function CollapsibleSubNavItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CollapsibleSubNavItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CollapsibleSubNavItem_ownKeys(source, true).forEach(function (key) { CollapsibleSubNavItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CollapsibleSubNavItem_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CollapsibleSubNavItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CollapsibleSubNavItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CollapsibleSubNavItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CollapsibleSubNavItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */









var CollapsibleSubNavItem_COMPONENT_ID = 'chrome.collapsible_sub_nav_item';
var PANEL_COMPONENT_ID = 'chrome.collapsible_sub_nav_item_panel';
/** Accepts all `<div>` props */

var StyledSubNavItemHeader = external_styled_components_default()(subnav_SubNavItem).attrs(function (props) {
  return {
    'data-garden-id': CollapsibleSubNavItem_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__subnav__item--header'], CollapsibleSubNavItem_defineProperty({}, dist_default.a['is-expanded'], props.expanded))
  };
}).withConfig({
  displayName: "CollapsibleSubNavItem__StyledSubNavItemHeader",
  componentId: "sc-1m0xj37-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(CollapsibleSubNavItem_COMPONENT_ID, props);
});
StyledSubNavItemHeader.propTypes = {
  expanded: external_prop_types_default.a.bool
};
/** Accepts all `<div>` props */

var StyledSubNavPanel = external_styled_components_default.a.div.attrs(function (props) {
  return {
    'data-garden-id': PANEL_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-chrome__subnav__panel'], CollapsibleSubNavItem_defineProperty({}, dist_default.a['is-hidden'], props.isHidden))
  };
}).withConfig({
  displayName: "CollapsibleSubNavItem__StyledSubNavPanel",
  componentId: "sc-1m0xj37-1"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(PANEL_COMPONENT_ID, props);
});
StyledSubNavPanel.propTypes = {
  isHidden: external_prop_types_default.a.bool
};
/**
 * Accepts all `<button>` props
 */

var CollapsibleSubNavItem_CollapsibleSubNavItem = function CollapsibleSubNavItem(_ref) {
  var header = _ref.header,
      children = _ref.children,
      controlledExpanded = _ref.expanded,
      _onChange = _ref.onChange,
      other = CollapsibleSubNavItem_objectWithoutProperties(_ref, ["header", "children", "expanded", "onChange"]);

  var panelRef = Object(external_react_["useRef"])(undefined);

  var _useState = Object(external_react_["useState"])(controlledExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      internalExpanded = _useState2[0],
      setInternalExpanded = _useState2[1];

  var expanded = Object(container_utilities_["getControlledValue"])(controlledExpanded, internalExpanded);

  var _useAccordion = Object(container_accordion_["useAccordion"])({
    expandedSections: expanded ? [0] : [],
    onChange: function onChange(updatedSections) {
      var isExpanded = updatedSections.length !== 0;

      if (_onChange) {
        _onChange(isExpanded);
      } else {
        setInternalExpanded(isExpanded);
      }
    }
  }),
      getHeaderProps = _useAccordion.getHeaderProps,
      getTriggerProps = _useAccordion.getTriggerProps,
      getPanelProps = _useAccordion.getPanelProps,
      expandedSections = _useAccordion.expandedSections;

  Object(external_react_["useEffect"])(function () {
    if (expanded && panelRef.current) {
      panelRef.current.style.maxHeight = "".concat(panelRef.current.scrollHeight, "px");
    }
  }, [expanded]);
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", getHeaderProps({
    ariaLevel: 2
  }), external_react_default.a.createElement(StyledSubNavItemHeader, getTriggerProps(CollapsibleSubNavItem_objectSpread({
    expanded: expanded,
    index: 0,
    role: null,
    tabIndex: null
  }, other)), header)), external_react_default.a.createElement(StyledSubNavPanel, getPanelProps({
    index: 0,
    isHidden: !expanded,
    ref: panelRef
  }), children));
};

CollapsibleSubNavItem_CollapsibleSubNavItem.propTypes = {
  header: external_prop_types_default.a.any,
  expanded: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  onChange: external_prop_types_default.a.func,
  children: external_prop_types_default.a.node
};
/** @component */

/* harmony default export */ var subnav_CollapsibleSubNavItem = (CollapsibleSubNavItem_CollapsibleSubNavItem);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Chrome */__webpack_require__.d(__webpack_exports__, "Chrome", function() { return views_Chrome; });
/* concated harmony reexport Body */__webpack_require__.d(__webpack_exports__, "Body", function() { return body_Body; });
/* concated harmony reexport Content */__webpack_require__.d(__webpack_exports__, "Content", function() { return body_Content; });
/* concated harmony reexport Main */__webpack_require__.d(__webpack_exports__, "Main", function() { return body_Main; });
/* concated harmony reexport Sidebar */__webpack_require__.d(__webpack_exports__, "Sidebar", function() { return body_Sidebar; });
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "Header", function() { return header_Header; });
/* concated harmony reexport HeaderItem */__webpack_require__.d(__webpack_exports__, "HeaderItem", function() { return header_HeaderItem; });
/* concated harmony reexport HeaderItemIcon */__webpack_require__.d(__webpack_exports__, "HeaderItemIcon", function() { return header_HeaderItemIcon; });
/* concated harmony reexport HeaderItemText */__webpack_require__.d(__webpack_exports__, "HeaderItemText", function() { return header_HeaderItemText; });
/* concated harmony reexport HeaderItemWrapper */__webpack_require__.d(__webpack_exports__, "HeaderItemWrapper", function() { return header_HeaderItemWrapper; });
/* concated harmony reexport Footer */__webpack_require__.d(__webpack_exports__, "Footer", function() { return footer_Footer; });
/* concated harmony reexport FooterItem */__webpack_require__.d(__webpack_exports__, "FooterItem", function() { return footer_FooterItem; });
/* concated harmony reexport Nav */__webpack_require__.d(__webpack_exports__, "Nav", function() { return nav_Nav; });
/* concated harmony reexport NavItem */__webpack_require__.d(__webpack_exports__, "NavItem", function() { return nav_NavItem; });
/* concated harmony reexport NavItemIcon */__webpack_require__.d(__webpack_exports__, "NavItemIcon", function() { return nav_NavItemIcon; });
/* concated harmony reexport NavItemText */__webpack_require__.d(__webpack_exports__, "NavItemText", function() { return nav_NavItemText; });
/* concated harmony reexport SubNav */__webpack_require__.d(__webpack_exports__, "SubNav", function() { return subnav_SubNav; });
/* concated harmony reexport SubNavItem */__webpack_require__.d(__webpack_exports__, "SubNavItem", function() { return subnav_SubNavItem; });
/* concated harmony reexport SubNavItemText */__webpack_require__.d(__webpack_exports__, "SubNavItemText", function() { return subnav_SubNavItemText; });
/* concated harmony reexport CollapsibleSubNavItem */__webpack_require__.d(__webpack_exports__, "CollapsibleSubNavItem", function() { return subnav_CollapsibleSubNavItem; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





















/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map