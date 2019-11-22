/*!
 * Copyright Zendesk, Inc.
 * 
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0
 */
console.log('Fork!');

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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"l-backdrop":"index__l-backdrop___GQS3F","l-backdrop--center":"index__l-backdrop--center___3FljY","is-rtl":"index__is-rtl___3bWnL","is-visible":"index__is-visible___K2CjM","zd-backdrop-visible":"index__zd-backdrop-visible___1wV9I","c-dialog":"index__c-dialog___1QNRz","c-dialog--large":"index__c-dialog--large___3hSfj","is-open":"index__is-open___39aVf","zd-dialog-open":"index__zd-dialog-open___R7nBC","c-dialog__header":"index__c-dialog__header___L8pGk","c-dialog__header--danger":"index__c-dialog__header--danger___l0JOs","c-dialog__close":"index__c-dialog__close___34Mrt","is-focused":"index__is-focused___3a-SF","is-hovered":"index__is-hovered___2amwc","is-active":"index__is-active___1kfDp","c-dialog__body":"index__c-dialog__body___fZhDf","c-dialog__footer":"index__c-dialog__footer___2Owwe","c-dialog__footer__item":"index__c-dialog__footer__item___1rGer"};

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

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

module.exports = require("@zendeskgarden/container-utilities");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-modal");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/isWindow");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/ownerDocument");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/ownerWindow");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/css");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/scrollbarSize");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(3);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(8);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(1);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@zendeskgarden/container-modal"
var container_modal_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@zendeskgarden/react-utilities"
var react_utilities_ = __webpack_require__(6);

// EXTERNAL MODULE: external "dom-helpers/isWindow"
var isWindow_ = __webpack_require__(10);
var isWindow_default = /*#__PURE__*/__webpack_require__.n(isWindow_);

// EXTERNAL MODULE: external "dom-helpers/ownerDocument"
var ownerDocument_ = __webpack_require__(11);
var ownerDocument_default = /*#__PURE__*/__webpack_require__.n(ownerDocument_);

// EXTERNAL MODULE: external "dom-helpers/ownerWindow"
var ownerWindow_ = __webpack_require__(12);
var ownerWindow_default = /*#__PURE__*/__webpack_require__.n(ownerWindow_);

// EXTERNAL MODULE: external "dom-helpers/css"
var css_ = __webpack_require__(13);
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "dom-helpers/scrollbarSize"
var scrollbarSize_ = __webpack_require__(14);
var scrollbarSize_default = /*#__PURE__*/__webpack_require__.n(scrollbarSize_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(4);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(5);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-modals/dist/index.css
var dist = __webpack_require__(0);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/views/ModalView.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var COMPONENT_ID = 'modals.modal_view';
/**
 * Accepts all `<div>` props
 */

var ModalView = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-dialog'], (_classNames = {}, _defineProperty(_classNames, dist_default.a['c-dialog--large'], props.large), _defineProperty(_classNames, dist_default.a['is-open'], props.animate), _defineProperty(_classNames, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "ModalView",
  componentId: "sc-13pgmks-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(COMPONENT_ID, props);
});
ModalView.propTypes = {
  large: external_prop_types_default.a.bool,
  animate: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var views_ModalView = (ModalView);
// CONCATENATED MODULE: ./src/views/Backdrop.js
function Backdrop_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Backdrop_COMPONENT_ID = 'modals.backdrop';
/**
 * Accepts all `<div>` props
 */

var Backdrop = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': Backdrop_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['l-backdrop'], (_classNames = {}, Backdrop_defineProperty(_classNames, dist_default.a['l-backdrop--center'], props.center), Backdrop_defineProperty(_classNames, dist_default.a['is-visible'], props.animate), Backdrop_defineProperty(_classNames, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "Backdrop",
  componentId: "dg6g6o-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Backdrop_COMPONENT_ID, props);
});
Backdrop.propTypes = {
  center: external_prop_types_default.a.bool,
  animate: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var views_Backdrop = (Backdrop);
// CONCATENATED MODULE: ./src/views/Body.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var Body_COMPONENT_ID = 'modals.body';
/**
 * Accepts all `<div>` props
 */

var Body = external_styled_components_default.a.div.attrs({
  'data-garden-id': Body_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-dialog__body']
}).withConfig({
  displayName: "Body",
  componentId: "sc-1oh5znm-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Body_COMPONENT_ID, props);
});

Body.hasType = function () {
  return Body;
};
/** @component */


/* harmony default export */ var views_Body = (Body);
// EXTERNAL MODULE: external "@zendeskgarden/container-utilities"
var container_utilities_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/views/Close.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function Close_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var Close_COMPONENT_ID = 'modals.close';
var StyledClose = external_styled_components_default.a.button.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': Close_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-dialog__close'], (_classNames = {}, Close_defineProperty(_classNames, dist_default.a['is-focused'], props.focused), Close_defineProperty(_classNames, dist_default.a['is-hovered'], props.hovered), _classNames))
  };
}).withConfig({
  displayName: "Close__StyledClose",
  componentId: "dyva23-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Close_COMPONENT_ID, props);
});
/**
 * Used to close a Modal. Supports all `<button>` props.
 */

var Close_Close =
/*#__PURE__*/
function (_Component) {
  _inherits(Close, _Component);

  function Close() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Close);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Close)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Close_defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: false
    });

    return _this;
  }

  _createClass(Close, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          other = _objectWithoutProperties(_this$props, ["onFocus", "onBlur"]); // eslint-disable-line react/prop-types


      var isFocused = this.state.isFocused;
      return external_react_default.a.createElement(StyledClose, _extends({
        focused: isFocused,
        onFocus: Object(container_utilities_["composeEventHandlers"])(onFocus, function () {
          return _this2.setState({
            isFocused: true
          });
        }),
        onBlur: Object(container_utilities_["composeEventHandlers"])(onBlur, function () {
          return _this2.setState({
            isFocused: false
          });
        })
      }, other));
    }
  }]);

  return Close;
}(external_react_["Component"]);

Close_defineProperty(Close_Close, "propTypes", {
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool
});

Close_defineProperty(Close_Close, "hasType", function () {
  return Close_Close;
});


// CONCATENATED MODULE: ./src/views/Header.js
function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var Header_COMPONENT_ID = 'modals.header';
/**
 * Accepts all `<div>` props
 */

var Header = external_styled_components_default.a.div.attrs(function (props) {
  return {
    'data-garden-id': Header_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-dialog__header'], Header_defineProperty({}, dist_default.a['c-dialog__header--danger'], props.danger))
  };
}).withConfig({
  displayName: "Header",
  componentId: "sc-1l8t0yr-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Header_COMPONENT_ID, props);
});

Header.hasType = function () {
  return Header;
};
/** @component */


/* harmony default export */ var views_Header = (Header);
// CONCATENATED MODULE: ./src/utils/useCombinedRefs.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * A custom hook that combines multiple refs into a single, valid ref.
 * @param  {...any} refs
 */

var useCombinedRefs_useCombinedRefs = function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var targetRef = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(function () {
    refs.forEach(function (ref) {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
    /**
     * Rest parameter syntax creates new array reference every render.
     * Refs should not be called multiple times.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return targetRef;
};

/* harmony default export */ var utils_useCombinedRefs = (useCombinedRefs_useCombinedRefs);
// CONCATENATED MODULE: ./src/elements/Modal.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Modal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Modal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Modal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

















var Modal_isOverflowing = function isOverflowing(element) {
  var doc = ownerDocument_default()(element);
  var win = ownerWindow_default()(doc);
  var isBody = element && element.tagName.toLowerCase() === 'body';
  /* istanbul ignore next */

  if (!isWindow_default()(doc) && !isBody) {
    return element.scrollHeight > element.clientHeight;
  }

  var style = win.getComputedStyle(doc.body);
  var marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  var marginRight = parseInt(style.getPropertyValue('margin-right'), 10);
  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
};
/**
 * High-level abstraction for basic Modal implementations. Accepts all `<div>` props.
 */


var Modal = external_react_default.a.forwardRef(function (_ref, ref) {
  var backdropProps = _ref.backdropProps,
      children = _ref.children,
      onClose = _ref.onClose,
      center = _ref.center,
      animate = _ref.animate,
      id = _ref.id,
      modalProps = Modal_objectWithoutProperties(_ref, ["backdropProps", "children", "onClose", "center", "animate", "id"]);

  var modalRef = utils_useCombinedRefs(ref);

  var _useModal = Object(container_modal_["useModal"])({
    id: id,
    onClose: onClose,
    modalRef: modalRef
  }),
      getBackdropProps = _useModal.getBackdropProps,
      getModalProps = _useModal.getModalProps,
      getTitleProps = _useModal.getTitleProps,
      getContentProps = _useModal.getContentProps,
      getCloseProps = _useModal.getCloseProps;

  Object(external_react_["useEffect"])(function () {
    var bodyElement = document.querySelector('body');
    var previousBodyPaddingRight;

    if (Modal_isOverflowing(bodyElement)) {
      var scrollbarSize = scrollbarSize_default()();
      var bodyPaddingRight = parseInt(css_default()(bodyElement, 'paddingRight') || 0, 10);
      previousBodyPaddingRight = bodyElement.style.paddingRight;
      bodyElement.style.paddingRight = "".concat(bodyPaddingRight + scrollbarSize, "px");
    }

    var previousBodyOverflow = bodyElement.style.overflow;
    bodyElement.style.overflow = 'hidden';
    return function () {
      bodyElement.style.overflow = previousBodyOverflow;
      bodyElement.style.paddingRight = previousBodyPaddingRight;
    };
  }, []);
  return Object(external_react_dom_["createPortal"])(external_react_default.a.createElement(views_Backdrop, getBackdropProps(_objectSpread({
    center: center,
    animate: animate
  }, backdropProps)), external_react_default.a.createElement(views_ModalView, getModalProps(_objectSpread({
    animate: animate,
    ref: modalRef
  }, modalProps)), external_react_["Children"].map(children, function (child) {
    if (!Object(external_react_["isValidElement"])(child)) {
      return child;
    }

    if (Object(react_utilities_["hasType"])(child, views_Header)) {
      return Object(external_react_["cloneElement"])(child, getTitleProps(child.props));
    }

    if (Object(react_utilities_["hasType"])(child, views_Body)) {
      return Object(external_react_["cloneElement"])(child, getContentProps(child.props));
    }

    if (Object(react_utilities_["hasType"])(child, Close_Close)) {
      return Object(external_react_["cloneElement"])(child, getCloseProps(child.props));
    }

    return child;
  }))), _ref.container);
});
Modal.propTypes = {
  children: external_prop_types_default.a.any,

  /**
   * Props to spread onto backdrop element
   */
  backdropProps: external_prop_types_default.a.object,

  /**
   * Enable large modal styling
   */
  large: external_prop_types_default.a.bool,

  /**
   * Enable modal animation
   */
  animate: external_prop_types_default.a.bool,

  /**
   * Center modal
   */
  center: external_prop_types_default.a.bool,

  /**
   * Callback when a close action has been completed.
   * Can be triggered from the backdrop and Close icon.
   * @param {Object} event - DOM event that triggered the close action
   */
  onClose: external_prop_types_default.a.func,

  /**
   * The root ID to use for descendants. A unique ID is created if none is provided.
   **/
  id: external_prop_types_default.a.string
};
Modal.defaultProps = {
  animate: true,
  center: true
};
/** @component */

/* harmony default export */ var elements_Modal = (Modal);
// CONCATENATED MODULE: ./src/views/Footer.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var Footer_COMPONENT_ID = 'modals.footer';
/**
 * Accepts all `<div>` props
 */

var Footer = external_styled_components_default.a.div.attrs({
  'data-garden-id': Footer_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-dialog__footer']
}).withConfig({
  displayName: "Footer",
  componentId: "ysbew8-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Footer_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var views_Footer = (Footer);
// CONCATENATED MODULE: ./src/views/FooterItem.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var FooterItem_COMPONENT_ID = 'modals.footer_item';
/**
 * Accepts all `<span>` props
 */

var FooterItem = external_styled_components_default.a.span.attrs({
  'data-garden-id': FooterItem_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-dialog__footer__item']
}).withConfig({
  displayName: "FooterItem",
  componentId: "yict15-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(FooterItem_COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var views_FooterItem = (FooterItem);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Modal */__webpack_require__.d(__webpack_exports__, "Modal", function() { return elements_Modal; });
/* concated harmony reexport Backdrop */__webpack_require__.d(__webpack_exports__, "Backdrop", function() { return views_Backdrop; });
/* concated harmony reexport Body */__webpack_require__.d(__webpack_exports__, "Body", function() { return views_Body; });
/* concated harmony reexport Close */__webpack_require__.d(__webpack_exports__, "Close", function() { return Close_Close; });
/* concated harmony reexport Footer */__webpack_require__.d(__webpack_exports__, "Footer", function() { return views_Footer; });
/* concated harmony reexport FooterItem */__webpack_require__.d(__webpack_exports__, "FooterItem", function() { return views_FooterItem; });
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "Header", function() { return views_Header; });
/* concated harmony reexport ModalView */__webpack_require__.d(__webpack_exports__, "ModalView", function() { return views_ModalView; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */









/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map