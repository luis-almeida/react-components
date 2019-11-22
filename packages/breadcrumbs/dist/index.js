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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-breadcrumb":"index__c-breadcrumb___3fKAg","is-rtl":"index__is-rtl___1fDVy","c-breadcrumb__item":"index__c-breadcrumb__item___30BEg","is-current":"index__is-current___3os3G"};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/react-utilities");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-breadcrumb");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@zendeskgarden/react-utilities"
var react_utilities_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@zendeskgarden/container-breadcrumb"
var container_breadcrumb_ = __webpack_require__(7);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/views/BreadcrumbView.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


var COMPONENT_ID = 'breadcrumbs.breadcrumb_view';
/**
 * Accepts all `<nav>` props
 */

var BreadcrumbView = external_styled_components_default.a.nav.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': "7.0.2"
}).withConfig({
  displayName: "BreadcrumbView",
  componentId: "xwepvu-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var views_BreadcrumbView = (BreadcrumbView);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(5);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-breadcrumbs/dist/index.css
var dist = __webpack_require__(3);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/views/List.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var List_COMPONENT_ID = 'breadcrumbs.list';
/**
 * Accepts all `<ol>` props
 */

var List = external_styled_components_default.a.ol.attrs(function (props) {
  return {
    'data-garden-id': List_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-breadcrumb'], _defineProperty({}, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)))
  };
}).withConfig({
  displayName: "List",
  componentId: "sc-17jz7sh-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(List_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var views_List = (List);
// CONCATENATED MODULE: ./src/views/Item.js
function Item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Item_COMPONENT_ID = 'breadcrumbs.item';
/**
 * Accepts all `<li>` props
 */

var Item = external_styled_components_default.a.li.attrs(function (props) {
  return {
    'data-garden-id': Item_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-breadcrumb__item'], Item_defineProperty({}, dist_default.a['is-current'], props.current))
  };
}).withConfig({
  displayName: "Item",
  componentId: "sc-1nva45q-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Item_COMPONENT_ID, props);
});
Item.propTypes = {
  current: external_prop_types_default.a.bool
};

Item.hasType = function () {
  return Item;
};
/** @component */


/* harmony default export */ var views_Item = (Item);
// CONCATENATED MODULE: ./src/elements/Breadcrumb.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function Breadcrumb_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







/**
 * High-level abstraction for basic Breadcrumb implementations. Accepts all
 * `<ol>` props.
 */

var Breadcrumb_Breadcrumb =
/*#__PURE__*/
function (_Component) {
  _inherits(Breadcrumb, _Component);

  function Breadcrumb() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Breadcrumb);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Breadcrumb)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Breadcrumb_defineProperty(_assertThisInitialized(_this), "renderPage", function (page, pageProps, itemProps) {
      return external_react_default.a.createElement(views_Item, itemProps, itemProps.current ? Object(external_react_["cloneElement"])(page, pageProps) : page);
    });

    Breadcrumb_defineProperty(_assertThisInitialized(_this), "renderItems", function (items, getCurrentPageProps) {
      var total = external_react_["Children"].count(items);
      return external_react_["Children"].map(items, function (item, index) {
        var itemProps = {
          current: index === total - 1,
          key: index
        };
        return Object(react_utilities_["hasType"])(item, views_Item) ? Object(external_react_["cloneElement"])(item, itemProps) : _this.renderPage(item, getCurrentPageProps(), itemProps);
      });
    });

    return _this;
  }

  _createClass(Breadcrumb, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          breadcrumbProps = _objectWithoutProperties(_this$props, ["children"]);

      var _useBreadcrumb = Object(container_breadcrumb_["useBreadcrumb"])(),
          getContainerProps = _useBreadcrumb.getContainerProps,
          getCurrentPageProps = _useBreadcrumb.getCurrentPageProps;

      return (
        /* role not needed as `BreadcrumbView` is a navigation landmark. */
        external_react_default.a.createElement(views_BreadcrumbView, getContainerProps({
          role: null
        }), external_react_default.a.createElement(views_List, breadcrumbProps, this.renderItems(children, getCurrentPageProps)))
      );
    }
  }]);

  return Breadcrumb;
}(external_react_["Component"]);

Breadcrumb_defineProperty(Breadcrumb_Breadcrumb, "propTypes", {
  children: external_prop_types_default.a.any
});


// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Breadcrumb */__webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return Breadcrumb_Breadcrumb; });
/* concated harmony reexport BreadcrumbView */__webpack_require__.d(__webpack_exports__, "BreadcrumbView", function() { return views_BreadcrumbView; });
/* concated harmony reexport List */__webpack_require__.d(__webpack_exports__, "List", function() { return views_List; });
/* concated harmony reexport Item */__webpack_require__.d(__webpack_exports__, "Item", function() { return views_Item; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map