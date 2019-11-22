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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/react-theming");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/scrollTo");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/constants/KEY_CODES.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Inspired by the jQuery UI keyCode constants
 * https://api.jqueryui.com/jQuery.ui.keyCode/
 *
 * @component
 */
/* harmony default export */ var KEY_CODES = ({
  ALT: 18,
  BACKSPACE: 8,
  COMMA: 188,
  DELETE: 46,
  DOWN: 40,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  HOME: 36,
  LEFT: 37,
  NUMPAD_ADD: 107,
  NUMPAD_DECIMAL: 110,
  NUMPAD_DIVIDE: 111,
  NUMPAD_ENTER: 108,
  NUMPAD_MULTIPLY: 106,
  NUMPAD_SUBTRACT: 109,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PERIOD: 190,
  RIGHT: 39,
  SHIFT: 16,
  SPACE: 32,
  TAB: 9,
  UP: 38
});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(2);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./src/utils/composeEventHandlers.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Borrowed from the Paypal/Downshift libraries utility.
 * Original License - MIT License
 * https://github.com/paypal/downshift/blob/master/src/utils.js
 */

/**
 * @component
 *
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them calls
 * `event.preventDefault()`
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      fn && fn.apply(void 0, [event].concat(args));
      return event && event.defaultPrevented;
    });
  };
}
// CONCATENATED MODULE: ./src/containers/KeyboardFocusContainer.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var KeyboardFocusContainer_KeyboardFocusContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(KeyboardFocusContainer, _Component);

  function KeyboardFocusContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, KeyboardFocusContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(KeyboardFocusContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.keyboardFocusable = false;
      /**
       * This is necessary to recognize focus events caused by keyboard vs mouseDown.
       * Due to React event ordering this is always called before onFocus.
       */

      setTimeout(function () {
        _this.keyboardFocusable = true;
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      if (_this.keyboardFocusable) {
        _this.setState({
          keyboardFocused: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      _this.setState({
        keyboardFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getFocusProps", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref$tabIndex = _ref.tabIndex,
          tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
          onBlur = _ref.onBlur,
          onFocus = _ref.onFocus,
          onMouseDown = _ref.onMouseDown,
          otherProps = _objectWithoutProperties(_ref, ["tabIndex", "onBlur", "onFocus", "onMouseDown"]);

      return _objectSpread({
        tabIndex: tabIndex,
        onBlur: composeEventHandlers(onBlur, _this.onBlur),
        onFocus: composeEventHandlers(onFocus, _this.onFocus),
        onMouseDown: composeEventHandlers(onMouseDown, _this.onMouseDown)
      }, otherProps);
    });

    _this.state = {
      keyboardFocused: false
    };
    _this.keyboardFocusable = true;
    return _this;
  }

  _createClass(KeyboardFocusContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$render = _this$props.render,
          render = _this$props$render === void 0 ? children : _this$props$render;
      var keyboardFocused = this.state.keyboardFocused;
      return render({
        getFocusProps: this.getFocusProps,
        keyboardFocused: keyboardFocused
      });
    }
  }]);

  return KeyboardFocusContainer;
}(external_react_["Component"]);

_defineProperty(KeyboardFocusContainer_KeyboardFocusContainer, "propTypes", {
  /**
   * @param {Object} renderProps
   * @param {Function} renderProps.getFocusProps - Props to be spread onto the trigger
   * @param {Boolean} renderProps.keyboardFocused - Whether the item is currently focused by a keyboard
   */
  children: external_prop_types_default.a.func,

  /** Same as children */
  render: external_prop_types_default.a.func
});


// EXTERNAL MODULE: external "dom-helpers/scrollTo"
var scrollTo_ = __webpack_require__(3);
var scrollTo_default = /*#__PURE__*/__webpack_require__.n(scrollTo_);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/utils/ControlledComponent.js
function ControlledComponent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ControlledComponent_typeof = function _typeof(obj) { return typeof obj; }; } else { ControlledComponent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ControlledComponent_typeof(obj); }

function ControlledComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ControlledComponent_possibleConstructorReturn(self, call) { if (call && (ControlledComponent_typeof(call) === "object" || typeof call === "function")) { return call; } return ControlledComponent_assertThisInitialized(self); }

function ControlledComponent_getPrototypeOf(o) { ControlledComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ControlledComponent_getPrototypeOf(o); }

function ControlledComponent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ControlledComponent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ControlledComponent_setPrototypeOf(subClass, superClass); }

function ControlledComponent_setPrototypeOf(o, p) { ControlledComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ControlledComponent_setPrototypeOf(o, p); }

function ControlledComponent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/** @component */

var ControlledComponent =
/*#__PURE__*/
function (_Component) {
  ControlledComponent_inherits(ControlledComponent, _Component);

  function ControlledComponent() {
    var _getPrototypeOf2;

    var _this;

    ControlledComponent_classCallCheck(this, ControlledComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ControlledComponent_possibleConstructorReturn(this, (_getPrototypeOf2 = ControlledComponent_getPrototypeOf(ControlledComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    ControlledComponent_defineProperty(ControlledComponent_assertThisInitialized(_this), "isControlledProp", function (key) {
      return Object.prototype.hasOwnProperty.call(_this.props, key);
    });

    ControlledComponent_defineProperty(ControlledComponent_assertThisInitialized(_this), "getControlledState", function () {
      var stateToMerge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state;
      return Object.keys(stateToMerge).reduce(function (state, key) {
        state[key] = _this.isControlledProp(key) ? _this.props[key] : stateToMerge[key];
        return state;
      }, {});
    });

    ControlledComponent_defineProperty(ControlledComponent_assertThisInitialized(_this), "setControlledState", function () {
      var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var onStateChange = _this.props.onStateChange;

      if (onStateChange) {
        var newExternalState = {};
        var newInternalState = {};

        for (var key in newState) {
          if (_this.isControlledProp(key)) {
            newExternalState[key] = newState[key];
          } else {
            newInternalState[key] = newState[key];
          }
        }

        onStateChange(newExternalState);

        _this.setState(newInternalState);
      } else {
        _this.setState(newState);
      }
    });

    return _this;
  }

  return ControlledComponent;
}(external_react_["Component"]);

ControlledComponent_defineProperty(ControlledComponent, "propTypes", {
  onStateChange: external_prop_types_default.a.func
});


// CONCATENATED MODULE: ./src/utils/IdManager.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
var idCounter = 0;
/**
 * This generates a unique ID for all autocomplete inputs
 * @param {String} prefix the prefix for the id
 * @return {String} the unique ID
 */

function generateId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'garden';
  return "".concat(prefix, "-").concat(idCounter++);
}
/**
 * This is only used in tests... Could be useful in SSR?
 * @param {Number} num The number to set the idCountry to
 */


function setIdCounter(num) {
  idCounter = num;
}
/**
 * Utility methods for ID management
 * - `generateId(prefix = 'garden')`
 *   - Generates a new unique ID based on current number of elements
 * - `setIdCounter(num)`
 *   - Useful for creating consistent ID's in a testing environment
 *
 * @component
 **/


/* harmony default export */ var IdManager = ({
  generateId: generateId,
  setIdCounter: setIdCounter
});
// CONCATENATED MODULE: ./src/utils/SingleSelectionModel.js
function SingleSelectionModel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SingleSelectionModel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SingleSelectionModel_createClass(Constructor, protoProps, staticProps) { if (protoProps) SingleSelectionModel_defineProperties(Constructor.prototype, protoProps); if (staticProps) SingleSelectionModel_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Manages single selection state within a collection.
 * @component
 */
var SingleSelectionModel =
/*#__PURE__*/
function () {
  function SingleSelectionModel() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$wrapping = _ref.wrapping,
        wrapping = _ref$wrapping === void 0 ? 'items' : _ref$wrapping;

    SingleSelectionModel_classCallCheck(this, SingleSelectionModel);

    this.selectedIndex = undefined;
    this.numItems = 0;
    this.wrapping = wrapping;
  }

  SingleSelectionModel_createClass(SingleSelectionModel, [{
    key: "fireSelectionChanged",
    value: function fireSelectionChanged(newSelection, previousSelection) {
      this.onSelectionChanged && this.onSelectionChanged({
        newSelection: newSelection,
        previousSelection: previousSelection
      });
    }
  }, {
    key: "select",
    value: function select(index) {
      var previousSelectedIndex = this.selectedIndex;
      this.selectedIndex = index;

      if (this.selectedIndex === -1) {
        this.selectedIndex = undefined;
      }

      this.fireSelectionChanged(this.selectedIndex, previousSelectedIndex);
    }
  }, {
    key: "selectNext",
    value: function selectNext() {
      if (this.numItems > 0) {
        if (!this.hasSelection()) {
          return this.selectFirst();
        }

        var newIndex = this.selectedIndex + 1;

        if (this.numItems <= newIndex) {
          if (this.wrapping === 'clear') {
            newIndex = -1;
          } else if (this.wrapping === 'items') {
            newIndex = newIndex % this.numItems;
          } else if (this.wrapping === 'off') {
            newIndex = this.numItems - 1;
          }
        }

        this.select(newIndex);
        return true;
      }

      return false;
    }
  }, {
    key: "selectPrevious",
    value: function selectPrevious() {
      if (this.numItems > 0) {
        if (!this.hasSelection()) {
          return this.selectLast();
        }

        var newIndex = this.selectedIndex - 1;

        if (newIndex < 0) {
          if (this.wrapping === 'clear') {
            newIndex = -1;
          } else if (this.wrapping === 'items') {
            newIndex = this.numItems - 1;
          } else if (this.wrapping === 'off') {
            newIndex = 0;
          }
        }

        this.select(newIndex);
        return true;
      }

      return false;
    }
  }, {
    key: "selectFirst",
    value: function selectFirst() {
      if (this.numItems > 0) {
        this.select(0);
        return true;
      }

      return false;
    }
  }, {
    key: "selectLast",
    value: function selectLast() {
      if (this.numItems > 0) {
        this.select(this.numItems - 1);
        return true;
      }

      return false;
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      this.select();
    }
  }, {
    key: "reset",
    value: function reset() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$numItems = _ref2.numItems,
          numItems = _ref2$numItems === void 0 ? 0 : _ref2$numItems,
          selectedIndex = _ref2.selectedIndex;

      this.numItems = numItems;
      this.selectedIndex = selectedIndex;
    }
  }, {
    key: "hasSelection",
    value: function hasSelection() {
      return this.selectedIndex !== undefined;
    }
  }]);

  return SingleSelectionModel;
}();


// CONCATENATED MODULE: ./src/containers/SelectionContainer.js
function SelectionContainer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SelectionContainer_typeof = function _typeof(obj) { return typeof obj; }; } else { SelectionContainer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SelectionContainer_typeof(obj); }

function SelectionContainer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SelectionContainer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SelectionContainer_ownKeys(source, true).forEach(function (key) { SelectionContainer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SelectionContainer_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SelectionContainer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SelectionContainer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SelectionContainer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SelectionContainer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SelectionContainer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SelectionContainer_createClass(Constructor, protoProps, staticProps) { if (protoProps) SelectionContainer_defineProperties(Constructor.prototype, protoProps); if (staticProps) SelectionContainer_defineProperties(Constructor, staticProps); return Constructor; }

function SelectionContainer_possibleConstructorReturn(self, call) { if (call && (SelectionContainer_typeof(call) === "object" || typeof call === "function")) { return call; } return SelectionContainer_assertThisInitialized(self); }

function SelectionContainer_getPrototypeOf(o) { SelectionContainer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SelectionContainer_getPrototypeOf(o); }

function SelectionContainer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SelectionContainer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SelectionContainer_setPrototypeOf(subClass, superClass); }

function SelectionContainer_setPrototypeOf(o, p) { SelectionContainer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SelectionContainer_setPrototypeOf(o, p); }

function SelectionContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */








var KEYBOARD_DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  BOTH: 'both'
};
var SelectionContainer_SelectionContainer =
/*#__PURE__*/
function (_ControlledComponent) {
  SelectionContainer_inherits(SelectionContainer, _ControlledComponent);

  function SelectionContainer() {
    var _getPrototypeOf2, _defineProperty2;

    var _this;

    SelectionContainer_classCallCheck(this, SelectionContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = SelectionContainer_possibleConstructorReturn(this, (_getPrototypeOf2 = SelectionContainer_getPrototypeOf(SelectionContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    SelectionContainer_defineProperty(SelectionContainer_assertThisInitialized(_this), "keyDownEventHandlers", (_defineProperty2 = {}, SelectionContainer_defineProperty(_defineProperty2, KEY_CODES.ENTER, function (event) {
      event.preventDefault();

      var _this$getControlledSt = _this.getControlledState(),
          focusedKey = _this$getControlledSt.focusedKey;

      _this.selectItem(focusedKey, focusedKey);
    }), SelectionContainer_defineProperty(_defineProperty2, KEY_CODES.SPACE, function (event) {
      event.preventDefault();

      var _this$getControlledSt2 = _this.getControlledState(),
          focusedKey = _this$getControlledSt2.focusedKey;

      _this.selectItem(focusedKey, focusedKey);
    }), SelectionContainer_defineProperty(_defineProperty2, KEY_CODES.END, function (event) {
      event.preventDefault();

      _this.focusSelectionModel.selectLast();
    }), SelectionContainer_defineProperty(_defineProperty2, KEY_CODES.HOME, function (event) {
      event.preventDefault();

      _this.focusSelectionModel.selectFirst();
    }), SelectionContainer_defineProperty(_defineProperty2, KEY_CODES.LEFT, function (event) {
      var direction = _this.props.direction;

      if (direction !== KEYBOARD_DIRECTION.VERTICAL) {
        event.preventDefault();

        if (Object(react_theming_["isRtl"])(_this.props)) {
          _this.focusSelectionModel.selectNext();
        } else {
          _this.focusSelectionModel.selectPrevious();
        }
      }
    }), SelectionContainer_defineProperty(_defineProperty2, KEY_CODES.RIGHT, function (event) {
      var direction = _this.props.direction;

      if (direction !== KEYBOARD_DIRECTION.VERTICAL) {
        event.preventDefault();

        if (Object(react_theming_["isRtl"])(_this.props)) {
          _this.focusSelectionModel.selectPrevious();
        } else {
          _this.focusSelectionModel.selectNext();
        }
      }
    }), SelectionContainer_defineProperty(_defineProperty2, KEY_CODES.UP, function (event) {
      var direction = _this.props.direction;

      if (direction !== KEYBOARD_DIRECTION.HORIZONTAL) {
        event.preventDefault();

        _this.focusSelectionModel.selectPrevious();
      }
    }), SelectionContainer_defineProperty(_defineProperty2, KEY_CODES.DOWN, function (event) {
      var direction = _this.props.direction;

      if (direction !== KEYBOARD_DIRECTION.HORIZONTAL) {
        event.preventDefault();

        _this.focusSelectionModel.selectNext();
      }
    }), _defineProperty2));

    SelectionContainer_defineProperty(SelectionContainer_assertThisInitialized(_this), "onFocusSelectionModelChange", function (_ref) {
      var newSelection = _ref.newSelection;
      var focusedKey = _this.indexKeyMap[newSelection];

      _this.setControlledState({
        focusedKey: focusedKey
      });
    });

    SelectionContainer_defineProperty(SelectionContainer_assertThisInitialized(_this), "selectItem", function (selectedKey, focusedKey) {
      _this.setControlledState({
        selectedKey: selectedKey,
        focusedKey: focusedKey
      });
    });

    SelectionContainer_defineProperty(SelectionContainer_assertThisInitialized(_this), "getContainerId", function () {
      return "".concat(_this.getControlledState().id, "--container");
    });

    SelectionContainer_defineProperty(SelectionContainer_assertThisInitialized(_this), "getContainerProps", function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref2$id = _ref2.id,
          id = _ref2$id === void 0 ? _this.getContainerId() : _ref2$id,
          _ref2$role = _ref2.role,
          role = _ref2$role === void 0 ? 'listbox' : _ref2$role,
          _ref2$tabIndex = _ref2.tabIndex,
          tabIndex = _ref2$tabIndex === void 0 ? 0 : _ref2$tabIndex,
          onKeyDown = _ref2.onKeyDown,
          onFocus = _ref2.onFocus,
          onBlur = _ref2.onBlur,
          onMouseDown = _ref2.onMouseDown,
          other = SelectionContainer_objectWithoutProperties(_ref2, ["id", "role", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onMouseDown"]);

      var _this$getControlledSt3 = _this.getControlledState(),
          focusedKey = _this$getControlledSt3.focusedKey;

      var defaultFocusedIndex = _this.props.defaultFocusedIndex;
      return SelectionContainer_objectSpread({
        id: id,
        role: role,
        tabIndex: tabIndex,
        'aria-activedescendant': _this.getItemId(focusedKey),
        onKeyDown: composeEventHandlers(onKeyDown, function (event) {
          var keyHandler = _this.keyDownEventHandlers[event.keyCode];
          keyHandler && keyHandler(event);
        }),
        onFocus: composeEventHandlers(onFocus, function () {
          if (!_this.containerMouseDown) {
            if (typeof focusedKey === 'undefined') {
              var selectedIndex = _this.keyIndexMap[_this.getControlledState().selectedKey];

              if (typeof selectedIndex === 'undefined') {
                selectedIndex = defaultFocusedIndex === -1 ? selectedIndex = Object.keys(_this.keyIndexMap).length - 1 : defaultFocusedIndex;
              }

              _this.focusSelectionModel.select(selectedIndex);
            }
          }
        }),
        onMouseDown: composeEventHandlers(onMouseDown, function () {
          _this.containerMouseDown = true;
          /**
           * This is necessary to recognize focus events caused by keyboard vs mouseDown.
           * Due to React event ordering this is always called before onFocus.
           */

          setTimeout(function () {
            _this.containerMouseDown = false;
          }, 0);
        }),
        onBlur: composeEventHandlers(onBlur, function () {
          _this.focusSelectionModel.clearSelection();
        })
      }, other);
    });

    SelectionContainer_defineProperty(SelectionContainer_assertThisInitialized(_this), "getItemId", function (key) {
      return typeof key === 'undefined' ? null : "".concat(_this.getControlledState().id, "--item-").concat(key);
    });

    SelectionContainer_defineProperty(SelectionContainer_assertThisInitialized(_this), "getItemProps", function () {
      var _objectSpread2;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref4$selectedAriaKey = _ref4.selectedAriaKey,
          selectedAriaKey = _ref4$selectedAriaKey === void 0 ? 'aria-selected' : _ref4$selectedAriaKey;

      var key = _ref3.key,
          _ref3$id = _ref3.id,
          id = _ref3$id === void 0 ? _this.getItemId(key) : _ref3$id,
          _ref3$role = _ref3.role,
          role = _ref3$role === void 0 ? 'option' : _ref3$role,
          onClick = _ref3.onClick,
          index = _ref3.index,
          props = SelectionContainer_objectWithoutProperties(_ref3, ["key", "id", "role", "onClick", "index"]);

      if (typeof key === 'undefined') {
        throw new Error('"key" must be defined within getItemProps regardless of being used within a .map()');
      }

      var _this$getControlledSt4 = _this.getControlledState(),
          selectedKey = _this$getControlledSt4.selectedKey,
          focusedKey = _this$getControlledSt4.focusedKey;

      var isSelectedItem = key === selectedKey;
      var isFocusedItem = key === focusedKey;
      var currentIndex = index === undefined ? _this.focusSelectionModel.numItems : index;
      _this.indexKeyMap[currentIndex] = key;
      _this.keyIndexMap[key] = currentIndex;

      if (isFocusedItem || typeof focusedKey === 'undefined' && isSelectedItem) {
        _this.focusSelectionModel.selectedIndex = currentIndex;
      }

      _this.focusSelectionModel.numItems++;
      return SelectionContainer_objectSpread((_objectSpread2 = {
        id: id,
        key: key,
        role: role
      }, SelectionContainer_defineProperty(_objectSpread2, selectedAriaKey, isSelectedItem), SelectionContainer_defineProperty(_objectSpread2, "onClick", composeEventHandlers(onClick, function () {
        _this.selectItem(key, undefined);
      })), _objectSpread2), props);
    });

    _this.state = {
      focusedKey: undefined,
      selectedKey: undefined,
      id: IdManager.generateId('garden-selection-container')
    };
    _this.focusSelectionModel = new SingleSelectionModel();
    _this.focusSelectionModel.onSelectionChanged = _this.onFocusSelectionModelChange;
    return _this;
  }

  SelectionContainer_createClass(SelectionContainer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var current = this.props.focusedKey === undefined ? this.state : this.props;
      var prev = prevProps.focusedKey === undefined ? prevState : prevProps;
      var doc = react_theming_["getDocument"] ? Object(react_theming_["getDocument"])(this.props) : document;
      /**
       * We must programatically scroll the newly focused element into view.
       * Side-effect of the `aria-activedescendant` accessibility strategy.
       */

      if (typeof current.focusedKey !== 'undefined' && current.focusedKey !== prev.focusedKey) {
        var itemNode = doc.getElementById(this.getItemId(current.focusedKey));
        /* istanbul ignore if */

        if (itemNode) {
          scrollTo_default()(itemNode);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$render = _this$props.render,
          render = _this$props$render === void 0 ? children : _this$props$render;

      var _this$getControlledSt5 = this.getControlledState(),
          focusedKey = _this$getControlledSt5.focusedKey,
          selectedKey = _this$getControlledSt5.selectedKey;

      this.focusSelectionModel.reset();
      this.indexKeyMap = {};
      this.keyIndexMap = {};
      this.items = [];
      return render({
        getContainerProps: this.getContainerProps,
        getItemProps: this.getItemProps,
        focusedKey: focusedKey,
        selectedKey: selectedKey,
        focusSelectionModel: this.focusSelectionModel
      });
    }
  }]);

  return SelectionContainer;
}(ControlledComponent);

SelectionContainer_defineProperty(SelectionContainer_SelectionContainer, "propTypes", {
  /**
   * @param {Object} renderProps
   * @param {Function} renderProps.getContainerProps - Props to be spread onto container element
   * @param {Function} renderProps.getItemProps - Props to be spread onto each selectable element. `({item})` is required. Use `index` attribute for custom ordering.
   * @param {Any} renderProps.focusedKey - Unique key of currently focused item
   * @param {Any} renderProps.selectedKey - Unique key of currently selected item
   * @param {Function} renderProps.focusSelectionModel - The SingleSelectionModel that controls the focus state
   */
  children: external_prop_types_default.a.func,

  /**
   * Whether the up/down or left/right arrow keys should be used for keyboard navigation
   */
  direction: external_prop_types_default.a.oneOf([KEYBOARD_DIRECTION.HORIZONTAL, KEYBOARD_DIRECTION.VERTICAL, KEYBOARD_DIRECTION.BOTH]),

  /**
   * Default item to assign as focused if container is focused (-1 is equivalent to last item)
   */
  defaultFocusedIndex: external_prop_types_default.a.number,

  /**
   * Unique key of currently focused item
   */
  focusedKey: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number]),

  /**
   * Unique key of currently selected item
   */
  selectedKey: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number]),

  /**
   * Callback for all state objects. Used when in 'controlled' mode.
   **/
  onStateChange: external_prop_types_default.a.func,

  /**
   * The root ID to use for descendants. A unique ID is created if none is provided.
   **/
  id: external_prop_types_default.a.string,

  /**
   * Same as children
   **/
  render: external_prop_types_default.a.func
});

SelectionContainer_defineProperty(SelectionContainer_SelectionContainer, "defaultProps", {
  defaultFocusedIndex: 0,
  direction: KEYBOARD_DIRECTION.HORIZONTAL
});

/* harmony default export */ var containers_SelectionContainer = (Object(react_theming_["withTheme"])(SelectionContainer_SelectionContainer));
// CONCATENATED MODULE: ./src/containers/FieldContainer.js
function FieldContainer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FieldContainer_typeof = function _typeof(obj) { return typeof obj; }; } else { FieldContainer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FieldContainer_typeof(obj); }

function FieldContainer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FieldContainer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FieldContainer_ownKeys(source, true).forEach(function (key) { FieldContainer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FieldContainer_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FieldContainer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FieldContainer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FieldContainer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FieldContainer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FieldContainer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FieldContainer_createClass(Constructor, protoProps, staticProps) { if (protoProps) FieldContainer_defineProperties(Constructor.prototype, protoProps); if (staticProps) FieldContainer_defineProperties(Constructor, staticProps); return Constructor; }

function FieldContainer_possibleConstructorReturn(self, call) { if (call && (FieldContainer_typeof(call) === "object" || typeof call === "function")) { return call; } return FieldContainer_assertThisInitialized(self); }

function FieldContainer_getPrototypeOf(o) { FieldContainer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FieldContainer_getPrototypeOf(o); }

function FieldContainer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FieldContainer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FieldContainer_setPrototypeOf(subClass, superClass); }

function FieldContainer_setPrototypeOf(o, p) { FieldContainer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FieldContainer_setPrototypeOf(o, p); }

function FieldContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var FieldContainer_FieldContainer =
/*#__PURE__*/
function (_ControlledComponent) {
  FieldContainer_inherits(FieldContainer, _ControlledComponent);

  function FieldContainer() {
    var _getPrototypeOf2;

    var _this;

    FieldContainer_classCallCheck(this, FieldContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FieldContainer_possibleConstructorReturn(this, (_getPrototypeOf2 = FieldContainer_getPrototypeOf(FieldContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FieldContainer_defineProperty(FieldContainer_assertThisInitialized(_this), "retrieveInputId", function () {
      return "".concat(_this.getControlledState().id, "--input");
    });

    FieldContainer_defineProperty(FieldContainer_assertThisInitialized(_this), "retrieveLabelId", function () {
      return "".concat(_this.getControlledState().id, "--label");
    });

    FieldContainer_defineProperty(FieldContainer_assertThisInitialized(_this), "retrieveHintId", function () {
      return "".concat(_this.getControlledState().id, "--hint");
    });

    FieldContainer_defineProperty(FieldContainer_assertThisInitialized(_this), "getLabelProps", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref$id = _ref.id,
          id = _ref$id === void 0 ? _this.retrieveLabelId() : _ref$id,
          _ref$htmlFor = _ref.htmlFor,
          htmlFor = _ref$htmlFor === void 0 ? _this.retrieveInputId() : _ref$htmlFor,
          other = FieldContainer_objectWithoutProperties(_ref, ["id", "htmlFor"]);

      return FieldContainer_objectSpread({
        id: id,
        htmlFor: htmlFor
      }, other);
    });

    FieldContainer_defineProperty(FieldContainer_assertThisInitialized(_this), "getInputProps", function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$isDescribed = _ref3.isDescribed,
          isDescribed = _ref3$isDescribed === void 0 ? false : _ref3$isDescribed;

      var _ref2$id = _ref2.id,
          id = _ref2$id === void 0 ? _this.retrieveInputId() : _ref2$id,
          other = FieldContainer_objectWithoutProperties(_ref2, ["id"]);

      return FieldContainer_objectSpread({
        id: id,
        'aria-labelledby': _this.retrieveLabelId(),
        'aria-describedby': isDescribed ? _this.retrieveHintId() : null
      }, other);
    });

    FieldContainer_defineProperty(FieldContainer_assertThisInitialized(_this), "getHintProps", function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref4$id = _ref4.id,
          id = _ref4$id === void 0 ? _this.retrieveHintId() : _ref4$id,
          other = FieldContainer_objectWithoutProperties(_ref4, ["id"]);

      return FieldContainer_objectSpread({
        id: id
      }, other);
    });

    FieldContainer_defineProperty(FieldContainer_assertThisInitialized(_this), "getMessageProps", function (props) {
      if (false) {}

      return props;
    });

    _this.state = {
      id: IdManager.generateId('garden-field-container')
    };
    return _this;
  }

  FieldContainer_createClass(FieldContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$render = _this$props.render,
          render = _this$props$render === void 0 ? children : _this$props$render;
      return render({
        getLabelProps: this.getLabelProps,
        getInputProps: this.getInputProps,
        getHintProps: this.getHintProps,
        getMessageProps: this.getMessageProps
      });
    }
  }]);

  return FieldContainer;
}(ControlledComponent);

FieldContainer_defineProperty(FieldContainer_FieldContainer, "propTypes", {
  /**
   * @param {Object} renderProps
   * @param {Function} renderProps.getLabelProps - Props to be spread onto the label element
   * @param {Function} renderProps.getInputProps - Props to be spread onto the input element
   * @param {Function} renderProps.getHintProps - Props to be spread onto the hint element
   */
  children: external_prop_types_default.a.func,

  /**
   * Identical to children
   */
  render: external_prop_types_default.a.func,

  /**
   * The root ID to use for descendants. A unique ID is created if none is provided.
   **/
  id: external_prop_types_default.a.string
});


// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport KEY_CODES */__webpack_require__.d(__webpack_exports__, "KEY_CODES", function() { return KEY_CODES; });
/* concated harmony reexport KeyboardFocusContainer */__webpack_require__.d(__webpack_exports__, "KeyboardFocusContainer", function() { return KeyboardFocusContainer_KeyboardFocusContainer; });
/* concated harmony reexport SelectionContainer */__webpack_require__.d(__webpack_exports__, "SelectionContainer", function() { return containers_SelectionContainer; });
/* concated harmony reexport FieldContainer */__webpack_require__.d(__webpack_exports__, "FieldContainer", function() { return FieldContainer_FieldContainer; });
/* concated harmony reexport composeEventHandlers */__webpack_require__.d(__webpack_exports__, "composeEventHandlers", function() { return composeEventHandlers; });
/* concated harmony reexport ControlledComponent */__webpack_require__.d(__webpack_exports__, "ControlledComponent", function() { return ControlledComponent; });
/* concated harmony reexport IdManager */__webpack_require__.d(__webpack_exports__, "IdManager", function() { return IdManager; });
/* concated harmony reexport SingleSelectionModel */__webpack_require__.d(__webpack_exports__, "SingleSelectionModel", function() { return SingleSelectionModel; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */









if (false) {}

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map