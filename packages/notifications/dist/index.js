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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-callout":"index__c-callout___K1eQ-","c-callout__title":"index__c-callout__title___e5tnb","c-callout__paragraph":"index__c-callout__paragraph___IDxgq","is-rtl":"index__is-rtl___2gbdw","c-callout__close":"index__c-callout__close___OudEV","is-focused":"index__is-focused___32FlP","is-hovered":"index__is-hovered___1FKaK","c-callout--error":"index__c-callout--error___NED0s","c-callout--dialog":"index__c-callout--dialog___3FNye","c-callout--success":"index__c-callout--success___3B2Jv","c-callout--warning":"index__c-callout--warning___1jU3m","c-callout--recessed":"index__c-callout--recessed___JfTSv","c-callout--info":"index__c-callout--info___1PEYt"};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/react-theming");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(3);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-callouts/dist/index.css
var dist = __webpack_require__(0);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/Alert.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var COMPONENT_ID = 'notifications.alert';
var VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
};
/**
 * Supports all `<div>` props
 */

var Alert = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-callout'], (_classNames = {}, _defineProperty(_classNames, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _defineProperty(_classNames, dist_default.a['c-callout--recessed'], props.type === VALIDATION.INFO), _defineProperty(_classNames, dist_default.a['c-callout--success'], props.type === VALIDATION.SUCCESS), _defineProperty(_classNames, dist_default.a['c-callout--warning'], props.type === VALIDATION.WARNING), _defineProperty(_classNames, dist_default.a['c-callout--error'], props.type === VALIDATION.ERROR), _defineProperty(_classNames, dist_default.a['c-callout--info'], props.type === VALIDATION.INFO), _classNames))
  };
}).withConfig({
  displayName: "Alert",
  componentId: "prppfq-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(COMPONENT_ID, props);
});
Alert.propTypes = {
  type: external_prop_types_default.a.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR, VALIDATION.INFO]).isRequired
};
/** @component */

/* harmony default export */ var src_Alert = (Alert);
// CONCATENATED MODULE: ./src/Notification.js
function Notification_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Notification_COMPONENT_ID = 'notifications.notification';
var Notification_VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
};
/**
 * Supports all `<div>` props
 */

var Notification = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': Notification_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-callout'], dist_default.a['c-callout--dialog'], (_classNames = {}, Notification_defineProperty(_classNames, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), Notification_defineProperty(_classNames, dist_default.a['c-callout--success'], props.type === Notification_VALIDATION.SUCCESS), Notification_defineProperty(_classNames, dist_default.a['c-callout--warning'], props.type === Notification_VALIDATION.WARNING), Notification_defineProperty(_classNames, dist_default.a['c-callout--error'], props.type === Notification_VALIDATION.ERROR), Notification_defineProperty(_classNames, dist_default.a['c-callout--info'], props.type === Notification_VALIDATION.INFO), _classNames))
  };
}).withConfig({
  displayName: "Notification",
  componentId: "sc-1x4skh3-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Notification_COMPONENT_ID, props);
});
Notification.propTypes = {
  type: external_prop_types_default.a.oneOf([Notification_VALIDATION.SUCCESS, Notification_VALIDATION.WARNING, Notification_VALIDATION.ERROR, Notification_VALIDATION.INFO])
};
/** @component */

/* harmony default export */ var src_Notification = (Notification);
// CONCATENATED MODULE: ./src/Well.js
function Well_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Well_COMPONENT_ID = 'notifications.well';
/**
 * Supports all `<div>` props
 */

var Well = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': Well_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-callout'], (_classNames = {}, Well_defineProperty(_classNames, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), Well_defineProperty(_classNames, dist_default.a['c-callout--recessed'], props.recessed), Well_defineProperty(_classNames, dist_default.a['c-callout--dialog'], props.floating), _classNames))
  };
}).withConfig({
  displayName: "Well",
  componentId: "zk7a8s-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Well_COMPONENT_ID, props);
});
Well.propTypes = {
  recessed: external_prop_types_default.a.bool,
  floating: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var src_Well = (Well);
// CONCATENATED MODULE: ./src/content/Close.js
function Close_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Close_COMPONENT_ID = 'notifications.close';
/**
 * Used to close a Notification. Supports all `<button>` props
 */

var Close = external_styled_components_default.a.button.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': Close_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    type: 'button',
    className: external_classnames_default()(dist_default.a['c-callout__close'], (_classNames = {}, Close_defineProperty(_classNames, dist_default.a['is-focused'], props.focused), Close_defineProperty(_classNames, dist_default.a['is-hovered'], props.hovered), _classNames))
  };
}).withConfig({
  displayName: "Close",
  componentId: "oze0eo-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Close_COMPONENT_ID, props);
});
Close.propTypes = {
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var content_Close = (Close);
// CONCATENATED MODULE: ./src/content/Paragraph.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var Paragraph_COMPONENT_ID = 'notifications.paragraph';
/**
 * Used for multi-line Notification content. Supports all `<div>` props
 */

var Paragraph = external_styled_components_default.a.div.attrs({
  'data-garden-id': Paragraph_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: external_classnames_default()(dist_default.a['c-callout__paragraph'])
}).withConfig({
  displayName: "Paragraph",
  componentId: "cmcgfy-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Paragraph_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var content_Paragraph = (Paragraph);
// CONCATENATED MODULE: ./src/content/Title.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var Title_COMPONENT_ID = 'notifications.title';
/**
 * Used for Notification titles. Supports all `<div>` props
 */

var Title = external_styled_components_default.a.div.attrs({
  'data-garden-id': Title_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: external_classnames_default()(dist_default.a['c-callout__title'])
}).withConfig({
  displayName: "Title",
  componentId: "sc-1329g54-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Title_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var content_Title = (Title);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Alert */__webpack_require__.d(__webpack_exports__, "Alert", function() { return src_Alert; });
/* concated harmony reexport Notification */__webpack_require__.d(__webpack_exports__, "Notification", function() { return src_Notification; });
/* concated harmony reexport Well */__webpack_require__.d(__webpack_exports__, "Well", function() { return src_Well; });
/* concated harmony reexport Close */__webpack_require__.d(__webpack_exports__, "Close", function() { return content_Close; });
/* concated harmony reexport Paragraph */__webpack_require__.d(__webpack_exports__, "Paragraph", function() { return content_Paragraph; });
/* concated harmony reexport Title */__webpack_require__.d(__webpack_exports__, "Title", function() { return content_Title; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map