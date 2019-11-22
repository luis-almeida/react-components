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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-tab":"index__c-tab___2ToGc","is-rtl":"index__is-rtl___3dY0B","c-tab__list":"index__c-tab__list___3SyZH","c-tab__list__item":"index__c-tab__list__item___PLi-k","c-tab__panel":"index__c-tab__panel___B3W-G","c-tab--block":"index__c-tab--block___15Cat","is-last":"index__is-last___27x2Q","is-focused":"index__is-focused___3Drbt","is-hovered":"index__is-hovered___HvGTc","is-active":"index__is-active___36Mvu","is-selected":"index__is-selected___2upPm","is-disabled":"index__is-disabled___QiKeO","is-hidden":"index__is-hidden___M8iKI"};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-tabs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-utilities");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@zendeskgarden/container-tabs"
var container_tabs_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@zendeskgarden/container-utilities"
var container_utilities_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(3);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(4);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(5);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-tabs/dist/index.css
var dist = __webpack_require__(0);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/views/TabsView.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var COMPONENT_ID = 'tabs.tabs_view';
/**
 * Accepts all `<div>` props
 */

var TabsView = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-tab'], (_classNames = {}, _defineProperty(_classNames, dist_default.a['c-tab--block'], props.vertical), _defineProperty(_classNames, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "TabsView",
  componentId: "r32ypm-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('tabs.tabs', props);
});
TabsView.propTypes = {
  /**
   * Displays vertical TabList styling
   */
  vertical: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var views_TabsView = (TabsView);
// CONCATENATED MODULE: ./src/views/TabList.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var TabList_COMPONENT_ID = 'tabs.tablist';
/**
 * Accepts all `<div>` props
 */

var TabList = external_styled_components_default.a.div.attrs({
  'data-garden-id': TabList_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-tab__list']
}).withConfig({
  displayName: "TabList",
  componentId: "sc-1k06xjs-0"
})([":focus{outline:none;}", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('tabs.tab_list', props);
});
/** @component */

/* harmony default export */ var views_TabList = (TabList);
// CONCATENATED MODULE: ./src/views/Tab.js
function Tab_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Tab_COMPONENT_ID = 'tabs.tab';
/**
 * Accepts all `<div>` props
 */

var Tab = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': Tab_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-tab__list__item'], (_classNames = {}, Tab_defineProperty(_classNames, dist_default.a['is-hovered'], props.hovered), Tab_defineProperty(_classNames, dist_default.a['is-focused'], props.focused), Tab_defineProperty(_classNames, dist_default.a['is-active'], props.active), Tab_defineProperty(_classNames, dist_default.a['is-disabled'], props.disabled), Tab_defineProperty(_classNames, dist_default.a['is-selected'], props.selected), _classNames))
  };
}).withConfig({
  displayName: "Tab",
  componentId: "g5ynq3-0"
})(["&&&{", "}", ";"], function (props) {
  return !props.focused && "\n      :before {\n        box-shadow: none;\n      }\n    ";
}, function (props) {
  return Object(react_theming_["retrieveTheme"])('tabs.tab', props);
});
Tab.propTypes = {
  hovered: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  active: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  selected: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var views_Tab = (Tab);
// CONCATENATED MODULE: ./src/elements/Tabs.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Tabs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Tabs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */








/**
 * High-level abstraction for basic Tabs implementations.
 */

function Tabs(_ref) {
  var vertical = _ref.vertical,
      children = _ref.children,
      onChange = _ref.onChange,
      controlledSelectedItem = _ref.selectedItem,
      otherProps = _objectWithoutProperties(_ref, ["vertical", "children", "onChange", "selectedItem"]);

  var _useState = Object(external_react_["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      internalSelectedItem = _useState2[0],
      setSelectedItem = _useState2[1];

  var firstItemRef = Object(external_react_["useRef"])();
  var selectedItem = Object(container_utilities_["getControlledValue"])(controlledSelectedItem, internalSelectedItem);

  var _useTabs = Object(container_tabs_["useTabs"])({
    rtl: Object(react_theming_["isRtl"])(otherProps),
    vertical: vertical,
    selectedItem: selectedItem,
    onSelect: function onSelect(item) {
      if (onChange) {
        onChange(item);
      } else {
        setSelectedItem(item);
      }
    }
  }),
      getTabListProps = _useTabs.getTabListProps,
      getTabPanelProps = _useTabs.getTabPanelProps,
      getTabProps = _useTabs.getTabProps,
      focusedItem = _useTabs.focusedItem;

  Object(external_react_["useEffect"])(function () {
    /**
     * In an uncontrolled state we want to always display the first tab
     */
    if (controlledSelectedItem === undefined && _typeof(firstItemRef.current) !== undefined) {
      setSelectedItem(firstItemRef.current);
    } // This should only run after the first mount of the component
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return external_react_default.a.createElement(views_TabsView, _extends({
    vertical: vertical
  }, otherProps), external_react_default.a.createElement(views_TabList, getTabListProps(), external_react_["Children"].map(children, function (child, index) {
    if (!Object(external_react_["isValidElement"])(child)) {
      return child;
    }

    var _child$props = child.props,
        label = _child$props.label,
        disabled = _child$props.disabled,
        item = _child$props.item,
        tabProps = _child$props.tabProps;

    if (disabled) {
      return external_react_default.a.createElement(views_Tab, {
        disabled: true
      }, label);
    }

    if (firstItemRef.current === undefined) {
      firstItemRef.current = item;
    }

    var focusRef = external_react_default.a.createRef();
    return external_react_default.a.createElement(views_Tab, getTabProps(_objectSpread({
      key: child.key,
      index: index,
      item: item,
      focusRef: focusRef,
      ref: focusRef,
      selected: item === selectedItem,
      focused: item === focusedItem
    }, tabProps)), label);
  })), external_react_["Children"].map(children, function (child, index) {
    if (!Object(external_react_["isValidElement"])(child)) {
      return child;
    }

    if (child.props.disabled) {
      return null;
    } // Don't want to duplicate tabProps in the TabPanel


    var _child$props2 = child.props,
        tabProps = _child$props2.tabProps,
        item = _child$props2.item,
        other = _objectWithoutProperties(_child$props2, ["tabProps", "item"]);

    return Object(external_react_["cloneElement"])(child, getTabPanelProps(_objectSpread({
      key: child.key,
      index: index,
      item: item,
      'aria-hidden': selectedItem !== item
    }, other)));
  }));
}

Tabs.propTypes = {
  children: external_prop_types_default.a.any,

  /**
   * Toggles vertical selection mode of Tabs
   */
  vertical: external_prop_types_default.a.bool,

  /**
   * Currently selected tab to display
   */
  selectedItem: external_prop_types_default.a.any,

  /**
   * Callback for when a tab has been selected by keyboard or mouse
   * @param {String} selectedItem - The item of the selected tab
   */
  onChange: external_prop_types_default.a.func
};
Tabs.defaultProps = {
  vertical: false
};
/* harmony default export */ var elements_Tabs = (Object(react_theming_["withTheme"])(Tabs));
// CONCATENATED MODULE: ./src/views/TabPanel.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var TabPanel_COMPONENT_ID = 'tabs.tabpanel';
/**
 * Accepts all `<div>` props
 */

var TabPanel = external_styled_components_default.a.div.attrs({
  'data-garden-id': TabPanel_COMPONENT_ID,
  'data-garden-version': "7.0.2",
  className: dist_default.a['c-tab__panel']
}).withConfig({
  displayName: "TabPanel",
  componentId: "sc-1iq1g5b-0"
})([":focus{outline:none;}", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('tabs.tab_panel', props);
});
/** @component */

/* harmony default export */ var views_TabPanel = (TabPanel);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Tabs */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return elements_Tabs; });
/* concated harmony reexport Tab */__webpack_require__.d(__webpack_exports__, "Tab", function() { return views_Tab; });
/* concated harmony reexport TabList */__webpack_require__.d(__webpack_exports__, "TabList", function() { return views_TabList; });
/* concated harmony reexport TabPanel */__webpack_require__.d(__webpack_exports__, "TabPanel", function() { return views_TabPanel; });
/* concated harmony reexport TabsView */__webpack_require__.d(__webpack_exports__, "TabsView", function() { return views_TabsView; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map