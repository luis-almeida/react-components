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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-menu":"index__c-menu___3N4tx","is-open":"index__is-open___1wxAy","c-menu--down":"index__c-menu--down___3zopG","zd-menu--down-open":"index__zd-menu--down-open___fJu8N","zd-menu--down-open-arrow":"index__zd-menu--down-open-arrow___2yX1s","c-menu--left":"index__c-menu--left___GZ1uv","zd-menu--left-open":"index__zd-menu--left-open___e30y7","zd-menu--left-open-arrow":"index__zd-menu--left-open-arrow___2XUCi","c-menu--right":"index__c-menu--right___3iq1Q","zd-menu--right-open":"index__zd-menu--right-open___1hJjJ","zd-menu--right-open-arrow":"index__zd-menu--right-open-arrow___2g5mU","c-menu--up":"index__c-menu--up___1O-ZK","zd-menu--up-open":"index__zd-menu--up-open___1OUyP","zd-menu--up-open-arrow":"index__zd-menu--up-open-arrow___3En6I","is-rtl":"index__is-rtl___3pCsR","c-menu__item":"index__c-menu__item___36mO8","c-menu--sm":"index__c-menu--sm___1AIfR","c-menu__item--add":"index__c-menu__item--add___3d3og","c-menu__item--header":"index__c-menu__item--header___22Xu1","c-menu__item--previous":"index__c-menu__item--previous___3VfAJ","c-menu__item--header--icon":"index__c-menu__item--header--icon___2o0eT","c-menu__item--header__icon":"index__c-menu__item--header__icon___1FA9w","c-menu__item--next":"index__c-menu__item--next___3xE-b","is-checked":"index__is-checked___34Qxa","c-menu__item__meta":"index__c-menu__item__meta___GAB2g","c-menu__item--media":"index__c-menu__item--media___1db8u","c-menu__item--media__figure":"index__c-menu__item--media__figure___1CFMW","c-menu__item--media__body":"index__c-menu__item--media__body___2WWyG","is-focused":"index__is-focused___yGFxo","is-hovered":"index__is-hovered___3e2AQ","is-disabled":"index__is-disabled___2IBe1","is-expanded":"index__is-expanded___2NT_3","is-hidden":"index__is-hidden___3b68i","c-menu__separator":"index__c-menu__separator___2iQtz"};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-txt":"text__c-txt___3byGW","c-txt__input":"text__c-txt__input___17zQx","is-rtl":"text__is-rtl___2Jq5R","c-txt__hint":"text__c-txt__hint___3a0Q6","c-txt__label":"text__c-txt__label___2Nog7","c-txt__message":"text__c-txt__message___L_GjG","c-txt--inline":"text__c-txt--inline___1MFfA","c-txt--sm__input":"text__c-txt--sm__input___26Nn-","c-txt__input--sm":"text__c-txt__input--sm___VVVBq","c-txt__input--area":"text__c-txt__input--area___3tpbn","is-resizable":"text__is-resizable___3dPa3","c-txt__input--select":"text__c-txt__input--select___324ys","is-focused":"text__is-focused___3C_IP","is-disabled":"text__is-disabled___W-eyC","is-hovered":"text__is-hovered___3xq35","is-open":"text__is-open___2THYU","c-txt__input--tag":"text__c-txt__input--tag___3tBT7","c-label":"text__c-label___1ouVj","c-tag":"text__c-tag___3Fi6t","c-txt__input--focus-inset":"text__c-txt__input--focus-inset___31wPq","c-txt__input--error":"text__c-txt__input--error___10oSv","c-txt__input--success":"text__c-txt__input--success___1l5BQ","c-txt__input--warning":"text__c-txt__input--warning___2Zr0W","c-txt__input--media__figure":"text__c-txt__input--media__figure___1hWZj","c-txt__input--bare":"text__c-txt__input--bare___PN_Zg","c-txt__input--media":"text__c-txt__input--media___1j8Dn","c-txt__input--media__body":"text__c-txt__input--media__body___3RedR","c-txt__label--regular":"text__c-txt__label--regular___3AWwE","c-txt__label--sm":"text__c-txt__label--sm___3xuUN","c-txt__message--error":"text__c-txt__message--error___2zV-K","c-txt__message--success":"text__c-txt__message--success___3uIHQ","c-txt__message--warning":"text__c-txt__message--warning___2ak8T","c-txt__hint--sm":"text__c-txt__hint--sm___J2atB"};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-utilities");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-arrow":"index__c-arrow___1418D","c-arrow--t":"index__c-arrow--t___3hN9x","c-arrow--tl":"index__c-arrow--tl___2qHr6","c-arrow--tr":"index__c-arrow--tr___NWZ-s","c-arrow--r":"index__c-arrow--r___2lbg8","c-arrow--rb":"index__c-arrow--rb___2trLw","c-arrow--rt":"index__c-arrow--rt___1Lt86","c-arrow--l":"index__c-arrow--l___Zmqy_","c-arrow--lb":"index__c-arrow--lb___1-kfj","c-arrow--lt":"index__c-arrow--lt___3wsru","c-arrow--b":"index__c-arrow--b___15pl8","c-arrow--bl":"index__c-arrow--bl___uOUDK","c-arrow--br":"index__c-arrow--br___22Ol7"};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-selection");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(1);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__(10);
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "react-popper"
var external_react_popper_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@zendeskgarden/container-utilities"
var container_utilities_ = __webpack_require__(6);

// CONCATENATED MODULE: ./src/Dropdown/Dropdown.tsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var REMOVE_ITEM_STATE_TYPE = 'REMOVE_ITEM';
var TAB_SELECT_ITEM_STATE_TYPE = 'TAB_ITEM';
var DropdownContext = external_react_default.a.createContext(undefined);
/**
 * Component that provides state and a11y through the context API
 * to its consumers.
 */

var Dropdown_Dropdown = function Dropdown(props) {
  var children = props.children,
      isOpen = props.isOpen,
      selectedItem = props.selectedItem,
      selectedItems = props.selectedItems,
      highlightedIndex = props.highlightedIndex,
      inputValue = props.inputValue,
      onSelect = props.onSelect,
      _onStateChange = props.onStateChange,
      onInputValueChange = props.onInputValueChange,
      downshiftProps = props.downshiftProps; // Refs used to handle custom Garden keyboard nav

  var itemIndexRef = Object(external_react_["useRef"])(0);
  var previousItemRef = Object(external_react_["useRef"])(undefined);
  var previousIndexRef = Object(external_react_["useRef"])(undefined);
  var nextItemsHashRef = Object(external_react_["useRef"])({});
  var containsMultiselectRef = Object(external_react_["useRef"])(false); // Used to inform Menu (Popper) that a full-width menu is needed

  var popperReferenceElementRef = Object(external_react_["useRef"])(null);
  /**
   * Add additional keyboard nav to the basics provided by Downshift
   **/

  var customGetInputProps = function customGetInputProps(_ref, downshift, rtl) {
    var onKeyDown = _ref.onKeyDown,
        other = _objectWithoutProperties(_ref, ["onKeyDown"]);

    return _objectSpread({
      onKeyDown: Object(container_utilities_["composeEventHandlers"])(onKeyDown, function (e) {
        var PREVIOUS_KEY = rtl ? container_utilities_["KEY_CODES"].RIGHT : container_utilities_["KEY_CODES"].LEFT;
        var NEXT_KEY = rtl ? container_utilities_["KEY_CODES"].LEFT : container_utilities_["KEY_CODES"].RIGHT;

        if (downshift.isOpen) {
          // Select previous item if available
          if (e.keyCode === PREVIOUS_KEY && previousIndexRef.current !== null && previousIndexRef.current !== undefined && !downshift.inputValue) {
            e.preventDefault();
            e.stopPropagation();
            downshift.selectItemAtIndex(previousIndexRef.current);
          } // Select current next item if available


          if (e.keyCode === NEXT_KEY) {
            var nextItemIndexes = Object.values(nextItemsHashRef.current);

            if (nextItemIndexes.includes(downshift.highlightedIndex)) {
              e.preventDefault();
              e.stopPropagation();
              downshift.selectItemAtIndex(downshift.highlightedIndex);
            }
          }
        } else if ((e.keyCode === container_utilities_["KEY_CODES"].ENTER || e.keyCode === container_utilities_["KEY_CODES"].SPACE) && !downshift.isOpen) {
          e.preventDefault();
          e.stopPropagation();
          downshift.openMenu();
        }
      })
    }, other);
  };

  var transformDownshift = function transformDownshift(_ref2) {
    var _getInputProps = _ref2.getInputProps,
        _getToggleButtonProps = _ref2.getToggleButtonProps,
        downshift = _objectWithoutProperties(_ref2, ["getInputProps", "getToggleButtonProps"]);

    return _objectSpread({
      getInputProps: function getInputProps(p) {
        return _getInputProps(customGetInputProps(p, downshift, Object(react_theming_["isRtl"])(props)));
      },
      // The default aria-label provided by Downshift is invalid due to our DOM structure
      getToggleButtonProps: function getToggleButtonProps(p) {
        return _getToggleButtonProps(_objectSpread({
          'aria-label': undefined
        }, p));
      }
    }, downshift);
  };

  return external_react_default.a.createElement(external_react_popper_["Manager"], null, external_react_default.a.createElement(external_downshift_default.a, _extends({
    suppressRefError: true // https://github.com/downshift-js/downshift/issues/529 Allows us to provide props through context
    ,
    isOpen: isOpen,
    highlightedIndex: highlightedIndex,
    selectedItem: selectedItem || null // Ensures that selectedItem never becomes controlled internally by Downshift
    ,
    inputValue: inputValue,
    onInputValueChange: onInputValueChange,
    onStateChange: function onStateChange(changes, stateAndHelpers) {
      if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem') && changes.selectedItem !== null) {
        if (selectedItems) {
          var itemToString = stateAndHelpers.itemToString;
          var existingItemIndex = selectedItems.findIndex(function (item) {
            return itemToString(item) === itemToString(changes.selectedItem);
          });
          var updatedSelectedItems = Array.from(selectedItems);

          if (existingItemIndex === -1) {
            updatedSelectedItems.splice(updatedSelectedItems.length, 0, changes.selectedItem);
          } else {
            updatedSelectedItems.splice(existingItemIndex, 1);
          }
          /**
           * Customize the changes returned from `onStateChange` as
           * Downshift has no concept of a "multiselect".
           **/


          changes.selectedItems = updatedSelectedItems;
          delete changes.selectedItem;
          onSelect && onSelect(updatedSelectedItems, stateAndHelpers);
        } else {
          onSelect && onSelect(changes.selectedItem, stateAndHelpers);
        } // Reset input value when item is selected


        stateAndHelpers.setState({
          inputValue: ''
        });
      }

      _onStateChange && _onStateChange(changes, stateAndHelpers);
    },
    stateReducer: function stateReducer(_state, changes) {
      /**
       * Set inputValue to an empty string during any event that updates the inputValue
       */
      switch (changes.type) {
        case external_downshift_default.a.stateChangeTypes.controlledPropUpdatedSelectedItem:
        case external_downshift_default.a.stateChangeTypes.mouseUp:
        case external_downshift_default.a.stateChangeTypes.keyDownSpaceButton:
        case external_downshift_default.a.stateChangeTypes.blurButton:
          return _objectSpread({}, changes, {
            inputValue: ''
          });

        case external_downshift_default.a.stateChangeTypes.keyDownEnter:
        case external_downshift_default.a.stateChangeTypes.clickItem:
        case TAB_SELECT_ITEM_STATE_TYPE:
          {
            var updatedState = _objectSpread({}, changes, {
              inputValue: ''
            });

            if (containsMultiselectRef.current) {
              updatedState.isOpen = true;
              updatedState.highlightedIndex = _state.highlightedIndex;
            }

            return updatedState;
          }

        case REMOVE_ITEM_STATE_TYPE:
          return _objectSpread({}, changes, {
            isOpen: false
          });

        default:
          return changes;
      }
    }
  }, downshiftProps), function (downshift) {
    return external_react_default.a.createElement(DropdownContext.Provider, {
      value: {
        itemIndexRef: itemIndexRef,
        previousItemRef: previousItemRef,
        previousIndexRef: previousIndexRef,
        nextItemsHashRef: nextItemsHashRef,
        popperReferenceElementRef: popperReferenceElementRef,
        selectedItems: selectedItems,
        downshift: transformDownshift(downshift),
        containsMultiselectRef: containsMultiselectRef
      }
    }, children);
  }));
};

Dropdown_Dropdown.propTypes = {
  isOpen: external_prop_types_default.a.bool,
  selectedItem: external_prop_types_default.a.any,
  selectedItems: external_prop_types_default.a.arrayOf(external_prop_types_default.a.any),
  highlightedIndex: external_prop_types_default.a.number,
  inputValue: external_prop_types_default.a.string,
  onSelect: external_prop_types_default.a.func,
  onStateChange: external_prop_types_default.a.func,
  downshiftProps: external_prop_types_default.a.object
};
/* harmony default export */ var src_Dropdown_Dropdown = (Object(react_theming_["withTheme"])(Dropdown_Dropdown));
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(7);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(3);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-forms/dist/text.css
var dist_text = __webpack_require__(5);
var text_default = /*#__PURE__*/__webpack_require__.n(dist_text);

// CONCATENATED MODULE: ./src/styled/field/StyledInput.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var hiddenStyling = Object(external_styled_components_["css"])(["position:absolute;left:-100px;transform:scale(0);opacity:0;outline:0;border-width:0;border-style:initial;border-color:initial;background:0 center;width:1px;color:transparent;font-size:inherit;"]);
var StyledInput = external_styled_components_default.a.input.attrs({
  className: external_classnames_default()(text_default.a['c-txt__input'], text_default.a['c-txt__input--bare'])
}).withConfig({
  displayName: "StyledInput",
  componentId: "sc-1580ddl-0"
})(["&&{vertical-align:baseline;", "}"], function (props) {
  return props.isHidden && hiddenStyling;
});
// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-variables/dist/index.js
var dist = __webpack_require__(11);

// CONCATENATED MODULE: ./src/styled/field/StyledMultiselect.tsx
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var StyledItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StyledMultiselect__StyledItemWrapper",
  componentId: "sc-9bhjay-0"
})(["margin:2px;"]);
var StyledMultiselectInput = external_styled_components_default()(StyledInput).withConfig({
  displayName: "StyledMultiselect__StyledMultiselectInput",
  componentId: "sc-9bhjay-1"
})(["&&{flex-basis:60px;flex-grow:1;margin:2px;width:inherit;min-width:60px;line-height:", ";}", ""], function (props) {
  return props.isSmall ? 20 / 14 : 32 / 14;
}, function (props) {
  return !props.isVisible && "\n  &&& {\n    margin: 0;\n    opacity: 0;\n    height: 0;\n    min-height: 0;\n    width: 0;\n    min-width: 0;\n  }\n";
});
var StyledMoreAnchor = external_styled_components_default.a.div.withConfig({
  displayName: "StyledMultiselect__StyledMoreAnchor",
  componentId: "sc-9bhjay-2"
})(["display:flex;align-items:center;margin:2px;border:none;border-radius:0;background-color:transparent;cursor:pointer;padding:0;min-width:0;min-height:1em;vertical-align:baseline;text-decoration:none;user-select:none;line-height:1em;white-space:normal;color:", ";font-size:inherit;font-weight:inherit;:hover{text-decoration:underline;}"], dist["zdColorBlue600"]);
// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-menus/dist/index.css
var css_menus_dist = __webpack_require__(4);
var css_menus_dist_default = /*#__PURE__*/__webpack_require__.n(css_menus_dist);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-arrows/dist/index.css
var css_arrows_dist = __webpack_require__(8);
var css_arrows_dist_default = /*#__PURE__*/__webpack_require__.n(css_arrows_dist);

// CONCATENATED MODULE: ./src/styled/menu/StyledMenu.tsx
function StyledMenu_extends() { StyledMenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return StyledMenu_extends.apply(this, arguments); }

function StyledMenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = StyledMenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function StyledMenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function StyledMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var COMPONENT_ID = 'dropdowns.menu';

var shouldShowArrow = function shouldShowArrow(_ref) {
  var arrow = _ref.arrow,
      placement = _ref.placement;
  return arrow && placement;
};

var retrieveMenuMargin = function retrieveMenuMargin(_ref2) {
  var arrow = _ref2.arrow,
      placement = _ref2.placement;
  var marginAmount = shouldShowArrow({
    arrow: arrow,
    placement: placement
  }) ? '8px' : '4px';

  if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
    return "margin-top: ".concat(marginAmount, ";");
  }

  if (placement === 'top' || placement === 'top-start' || placement === 'top-end') {
    return "margin-bottom: ".concat(marginAmount, ";");
  }

  if (placement === 'left' || placement === 'left-start' || placement === 'left-end') {
    return "margin-right: ".concat(marginAmount, ";");
  }

  if (placement === 'right' || placement === 'right-start' || placement === 'right-end') {
    return "margin-left: ".concat(marginAmount, ";");
  }

  return '';
};
/**
 * Accepts all `<ul>` props
 */


var StyledMenuView = external_styled_components_default.a.ul.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: external_classnames_default()(css_menus_dist_default.a['c-menu'], (_classNames = {}, StyledMenu_defineProperty(_classNames, css_menus_dist_default.a['c-menu--sm'], props.small), StyledMenu_defineProperty(_classNames, css_menus_dist_default.a['c-menu--up'], props.placement === 'top' || props.placement === 'top-start' || props.placement === 'top-end'), StyledMenu_defineProperty(_classNames, css_menus_dist_default.a['c-menu--right'], props.placement === 'right' || props.placement === 'right-start' || props.placement === 'right-end'), StyledMenu_defineProperty(_classNames, css_menus_dist_default.a['c-menu--left'], props.placement === 'left' || props.placement === 'left-start' || props.placement === 'left-end'), StyledMenu_defineProperty(_classNames, css_menus_dist_default.a['c-menu--down'], props.placement === 'bottom' || props.placement === 'bottom-start' || props.placement === 'bottom-end'), StyledMenu_defineProperty(_classNames, css_menus_dist_default.a['is-open'], props.animate), StyledMenu_defineProperty(_classNames, css_menus_dist_default.a['is-hidden'], props.hidden), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow'], shouldShowArrow({
      arrow: props.arrow,
      placement: props.placement
    })), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--r'], props.placement === 'left'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--rt'], props.placement === 'left-start'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--rb'], props.placement === 'left-end'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--b'], props.placement === 'top'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--bl'], props.placement === 'top-start'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--br'], props.placement === 'top-end'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--l'], props.placement === 'right'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--lt'], props.placement === 'right-start'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--lb'], props.placement === 'right-end'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--t'], props.placement === 'bottom'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--tl'], props.placement === 'bottom-start'), StyledMenu_defineProperty(_classNames, css_arrows_dist_default.a['c-arrow--tr'], props.placement === 'bottom-end'), StyledMenu_defineProperty(_classNames, css_menus_dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledMenu__StyledMenuView",
  componentId: "sc-12lp0qs-0"
})(["&&{position:relative;}:focus{outline:none;}", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(COMPONENT_ID, props);
});
var StyledMenuWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StyledMenu__StyledMenuWrapper",
  componentId: "sc-12lp0qs-1"
})(["", ";"], retrieveMenuMargin);
var StyledMaxHeightWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StyledMenu__StyledMaxHeightWrapper",
  componentId: "sc-12lp0qs-2"
})(["", ""], function (props) {
  return props.maxHeight && !props.height && "\n  overflow-y: auto;\n  max-height: ".concat(props.maxHeight, ";\n");
});
var StyledMenu = external_react_default.a.forwardRef(function (_ref3, ref) {
  var arrow = _ref3.arrow,
      placement = _ref3.placement,
      maxHeight = _ref3.maxHeight,
      children = _ref3.children,
      other = StyledMenu_objectWithoutProperties(_ref3, ["arrow", "placement", "maxHeight", "children"]);

  return external_react_default.a.createElement(StyledMenuWrapper, {
    arrow: arrow,
    placement: placement
  }, external_react_default.a.createElement(StyledMenuView, StyledMenu_extends({
    ref: ref,
    arrow: arrow,
    placement: placement
  }, other), external_react_default.a.createElement(StyledMaxHeightWrapper, {
    maxHeight: maxHeight
  }, children)));
});
// CONCATENATED MODULE: ./src/styled/menu/StyledSeparator.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var StyledSeparator_COMPONENT_ID = 'dropdowns.separator';
/**
 * Accepts all `<li>` props
 */

var StyledSeparator = external_styled_components_default.a.li.attrs({
  'data-garden-id': StyledSeparator_COMPONENT_ID,
  'data-garden-version': "7.1.0",
  role: 'separator',
  className: css_menus_dist_default.a['c-menu__separator']
}).withConfig({
  displayName: "StyledSeparator",
  componentId: "sc-1mrnp18-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledSeparator_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/items/StyledItem.ts
function StyledItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var StyledItem_COMPONENT_ID = 'dropdowns.item';
/**
 * Accepts all `<li>` props
 */

var StyledItem = external_styled_components_default.a.li.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': StyledItem_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: external_classnames_default()(css_menus_dist_default.a['c-menu__item'], (_classNames = {}, StyledItem_defineProperty(_classNames, css_menus_dist_default.a['is-active'], props.active), StyledItem_defineProperty(_classNames, css_menus_dist_default.a['is-focused'], props.focused), StyledItem_defineProperty(_classNames, css_menus_dist_default.a['is-hovered'], props.hovered), StyledItem_defineProperty(_classNames, css_menus_dist_default.a['is-disabled'], props.disabled), StyledItem_defineProperty(_classNames, css_menus_dist_default.a['is-checked'], props.checked), _classNames))
  };
}).withConfig({
  displayName: "StyledItem",
  componentId: "sc-1xeog7q-0"
})(["", ";", ";"], function (props) {
  return !props.focused && "&&&:hover {\n      background-color: inherit;\n    }\n  ";
}, function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledItem_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/items/StyledAddItem.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var StyledAddItem_COMPONENT_ID = 'dropdowns.add_item';
/**
 * Accepts all `<li>` props
 */

var StyledAddItem = external_styled_components_default()(StyledItem).attrs(function (props) {
  return {
    'data-garden-id': StyledAddItem_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: external_classnames_default()(props.className, css_menus_dist_default.a['c-menu__item--add'])
  };
}).withConfig({
  displayName: "StyledAddItem",
  componentId: "ekqk50-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledAddItem_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/items/StyledItemMeta.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var StyledItemMeta_COMPONENT_ID = 'dropdowns.item_meta';
/**
 * Accepts all `<span>` props
 */

var StyledItemMeta = external_styled_components_default.a.span.attrs({
  'data-garden-id': StyledItemMeta_COMPONENT_ID,
  'data-garden-version': "7.1.0",
  className: css_menus_dist_default.a['c-menu__item__meta']
}).withConfig({
  displayName: "StyledItemMeta",
  componentId: "k6xy28-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledItemMeta_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/items/StyledNextItem.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var StyledNextItem_COMPONENT_ID = 'dropdowns.next_item';
/**
 * Accepts all `<li>` props
 */

var StyledNextItem = external_styled_components_default()(StyledItem).attrs(function (props) {
  return {
    'data-garden-id': StyledNextItem_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: external_classnames_default()(props.className, css_menus_dist_default.a['c-menu__item--next'])
  };
}).withConfig({
  displayName: "StyledNextItem",
  componentId: "sc-1bcygn5-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledNextItem_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/items/StyledPreviousItem.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var StyledPreviousItem_COMPONENT_ID = 'dropdowns.previous_item';
/**
 * Accepts all `<li>` props
 */

var StyledPreviousItem = external_styled_components_default()(StyledItem).attrs(function (props) {
  return {
    'data-garden-id': StyledPreviousItem_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: external_classnames_default()(props.className, css_menus_dist_default.a['c-menu__item--previous'])
  };
}).withConfig({
  displayName: "StyledPreviousItem",
  componentId: "sc-1nmdds9-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledPreviousItem_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/items/header/StyledHeaderIcon.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


var StyledHeaderIcon_COMPONENT_ID = 'dropdowns.header_icon';
var StyledHeaderIcon_StyledHeaderIcon = function StyledHeaderIcon(_ref) {
  var children = _ref.children;
  return external_react_default.a.cloneElement(external_react_["Children"].only(children), {
    'data-garden-id': StyledHeaderIcon_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: css_menus_dist_default.a['c-menu__item--header__icon']
  });
};
// CONCATENATED MODULE: ./src/styled/items/header/StyledHeaderItem.ts
function StyledHeaderItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var StyledHeaderItem_COMPONENT_ID = 'dropdowns.header_item';
/**
 * Accepts all `<li>` props
 */

var StyledHeaderItem = external_styled_components_default()(StyledItem).attrs(function (props) {
  return {
    'data-garden-id': StyledHeaderItem_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: external_classnames_default()(props.className, css_menus_dist_default.a['c-menu__item--header'], StyledHeaderItem_defineProperty({}, css_menus_dist_default.a['c-menu__item--header--icon'], props.containsIcon))
  };
}).withConfig({
  displayName: "StyledHeaderItem",
  componentId: "sc-137filx-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledHeaderItem_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/items/media/StyledMediaBody.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var StyledMediaBody_COMPONENT_ID = 'dropdowns.media_body';
/**
 * Accepts all `<div>` props
 */

var StyledMediaBody = external_styled_components_default.a.div.attrs({
  'data-garden-id': StyledMediaBody_COMPONENT_ID,
  'data-garden-version': "7.1.0",
  className: css_menus_dist_default.a['c-menu__item--media__body']
}).withConfig({
  displayName: "StyledMediaBody",
  componentId: "sc-36j7ef-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledMediaBody_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/items/media/StyledMediaFigure.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


var StyledMediaFigure_COMPONENT_ID = 'dropdowns.media_figure';
var StyledMediaFigure_StyledMediaFigure = function StyledMediaFigure(_ref) {
  var children = _ref.children;
  return external_react_default.a.cloneElement(external_react_["Children"].only(children), {
    'data-garden-id': StyledMediaFigure_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: css_menus_dist_default.a['c-menu__item--media__figure']
  });
};
// CONCATENATED MODULE: ./src/styled/items/media/StyledMediaItem.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var StyledMediaItem_COMPONENT_ID = 'dropdowns.media_item';
/**
 * Accepts all `<li>` props
 */

var StyledMediaItem = external_styled_components_default()(StyledItem).attrs(function (props) {
  return {
    'data-garden-id': StyledMediaItem_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: external_classnames_default()(props.className, css_menus_dist_default.a['c-menu__item--media'])
  };
}).withConfig({
  displayName: "StyledMediaItem",
  componentId: "ikwshz-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledMediaItem_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/field/StyledField.ts
function StyledField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var StyledField_COMPONENT_ID = 'dropdowns.field';
/**
 * Accepts all `<div>` props
 */

var StyledField = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': StyledField_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: external_classnames_default()(text_default.a['c-txt'], (_classNames = {}, StyledField_defineProperty(_classNames, text_default.a['c-txt--inline'], props.inline), StyledField_defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledField",
  componentId: "ktuei3-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledField_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/field/StyledLabel.ts
function StyledLabel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var StyledLabel_COMPONENT_ID = 'dropdowns.label';
/**
 * Accepts all `<label>` props
 */

var StyledLabel = external_styled_components_default.a.label.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': StyledLabel_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: external_classnames_default()(text_default.a['c-txt__label'], (_classNames = {}, StyledLabel_defineProperty(_classNames, text_default.a['c-txt__label--regular'], props.regular), StyledLabel_defineProperty(_classNames, text_default.a['c-txt__label--sm'], props.small), StyledLabel_defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-1i8qu0f-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledLabel_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/field/StyledHint.ts
function StyledHint_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var StyledHint_COMPONENT_ID = 'dropdowns.hint';
/**
 * Accepts all `<div>` props
 */

var StyledHint = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': StyledHint_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    className: external_classnames_default()(text_default.a['c-txt__hint'], (_classNames = {}, StyledHint_defineProperty(_classNames, text_default.a['c-txt__hint--sm'], props.small), StyledHint_defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledHint",
  componentId: "sc-1m3rba2-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledHint_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/field/StyledMessage.ts
function StyledMessage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var StyledMessage_COMPONENT_ID = 'dropdowns.message';
var VALIDATION;

(function (VALIDATION) {
  VALIDATION["SUCCESS"] = "success";
  VALIDATION["WARNING"] = "warning";
  VALIDATION["ERROR"] = "error";
})(VALIDATION || (VALIDATION = {}));
/**
 * Accepts all `<div>` props
 */


var StyledMessage = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': StyledMessage_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    role: 'alert',
    className: external_classnames_default()(text_default.a['c-txt__message'], (_classNames = {}, StyledMessage_defineProperty(_classNames, text_default.a['c-txt__message--success'], props.validation === VALIDATION.SUCCESS), StyledMessage_defineProperty(_classNames, text_default.a['c-txt__message--warning'], props.validation === VALIDATION.WARNING), StyledMessage_defineProperty(_classNames, text_default.a['c-txt__message--error'], props.validation === VALIDATION.ERROR), StyledMessage_defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledMessage",
  componentId: "v8pcfd-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledMessage_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/field/StyledSelect.ts
function StyledSelect_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var StyledSelect_COMPONENT_ID = 'dropdowns.select';

var StyledSelect_isInvalid = function isInvalid(validation) {
  return validation === VALIDATION.WARNING || validation === VALIDATION.ERROR;
};

var StyledSelect = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': StyledSelect_COMPONENT_ID,
    'data-garden-version': "7.1.0",
    'aria-invalid': StyledSelect_isInvalid(props.validation),
    className: external_classnames_default()(text_default.a['c-txt__input'], text_default.a['c-txt__input--select'], (_classNames = {}, StyledSelect_defineProperty(_classNames, text_default.a['c-txt__input--sm'], props.small), StyledSelect_defineProperty(_classNames, text_default.a['c-txt__input--tag'], props.tagLayout), StyledSelect_defineProperty(_classNames, text_default.a['c-txt__input--media'], props.mediaLayout), StyledSelect_defineProperty(_classNames, text_default.a['c-txt__input--bare'], props.bare), StyledSelect_defineProperty(_classNames, text_default.a['c-txt__input--focus-inset'], props.focusInset), StyledSelect_defineProperty(_classNames, text_default.a['is-disabled'], props.disabled), StyledSelect_defineProperty(_classNames, text_default.a['is-focused'], props.focused), StyledSelect_defineProperty(_classNames, text_default.a['is-hovered'], props.hovered), StyledSelect_defineProperty(_classNames, text_default.a['is-open'], props.open), StyledSelect_defineProperty(_classNames, text_default.a['c-txt__input--success'], props.validation === VALIDATION.SUCCESS), StyledSelect_defineProperty(_classNames, text_default.a['c-txt__input--warning'], props.validation === VALIDATION.WARNING), StyledSelect_defineProperty(_classNames, text_default.a['c-txt__input--error'], props.validation === VALIDATION.ERROR), StyledSelect_defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledSelect",
  componentId: "xxildx-0"
})(["cursor:default;&&{appearance:none;}", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(StyledSelect_COMPONENT_ID, props);
});
// CONCATENATED MODULE: ./src/styled/index.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



















// CONCATENATED MODULE: ./src/utils/useDropdownContext.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Retrieve Dropdown component context
 */

var useDropdownContext_useDropdownContext = function useDropdownContext() {
  var dropdownContext = Object(external_react_["useContext"])(DropdownContext);

  if (!dropdownContext) {
    throw new Error('This component must be rendered within a `Dropdown` component.');
  }

  return dropdownContext;
};

/* harmony default export */ var utils_useDropdownContext = (useDropdownContext_useDropdownContext);
// CONCATENATED MODULE: ./src/Trigger/Trigger.tsx
function Trigger_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Trigger_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Trigger_ownKeys(source, true).forEach(function (key) { Trigger_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Trigger_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Trigger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Trigger_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Trigger_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Trigger_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Dropdown>` component.
 */

var Trigger_Trigger = function Trigger(_ref) {
  var children = _ref.children,
      refKey = _ref.refKey,
      triggerProps = Trigger_objectWithoutProperties(_ref, ["children", "refKey"]);

  var _useDropdownContext = utils_useDropdownContext(),
      _useDropdownContext$d = _useDropdownContext.downshift,
      getRootProps = _useDropdownContext$d.getRootProps,
      getToggleButtonProps = _useDropdownContext$d.getToggleButtonProps,
      getInputProps = _useDropdownContext$d.getInputProps,
      isOpen = _useDropdownContext$d.isOpen;

  var hiddenInputRef = Object(external_react_["useRef"])(null);
  var triggerRef = Object(external_react_["useRef"])(null);
  var previousIsOpenRef = Object(external_react_["useRef"])(undefined);
  Object(external_react_["useEffect"])(function () {
    // Focus internal input when Menu is opened
    if (isOpen && !previousIsOpenRef.current) {
      hiddenInputRef.current && hiddenInputRef.current.focus();
    } // Focus trigger when Menu is closed


    if (!isOpen && previousIsOpenRef.current) {
      triggerRef.current && triggerRef.current.focus();
    }

    previousIsOpenRef.current = isOpen;
  }, [isOpen]);

  var renderChildren = function renderChildren(popperRef) {
    // Destructuring the `ref` argument lets us share it with PopperJS
    var _getRootProps = getRootProps(),
        rootPropsRefCallback = _getRootProps.ref,
        rootProps = Trigger_objectWithoutProperties(_getRootProps, ["ref"]);
    /**
     * Clone immediate child and provide:
     * - Necessary downshift props
     * - Ref collector based on `refKey` prop
     */


    return external_react_default.a.cloneElement(external_react_default.a.Children.only(children), Trigger_objectSpread({}, getToggleButtonProps(Trigger_objectSpread({}, rootProps, {}, triggerProps, {}, children.props)), Trigger_defineProperty({}, refKey, function (childRef) {
      // Pass ref to popperJS for positioning
      popperRef(childRef); // Store ref locally to return focus on close

      triggerRef.current = childRef; // Pass ref to getRootProps()

      rootPropsRefCallback(childRef);
    })));
  };

  return external_react_default.a.createElement(external_react_popper_["Reference"], null, function (_ref2) {
    var popperReference = _ref2.ref;
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, renderChildren(popperReference), external_react_default.a.createElement(StyledInput, getInputProps({
      readOnly: true,
      isHidden: true,
      tabIndex: -1,
      ref: hiddenInputRef,
      value: ''
    })));
  });
};

Trigger_Trigger.propTypes = {
  children: external_prop_types_default.a.any,
  refKey: external_prop_types_default.a.string
};
Trigger_Trigger.defaultProps = {
  refKey: 'ref'
};
/* harmony default export */ var src_Trigger_Trigger = (Trigger_Trigger);
// CONCATENATED MODULE: ./src/Fields/Field.tsx
function Field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Field_ownKeys(source, true).forEach(function (key) { Field_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Field_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Field_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




var FieldContext = Object(external_react_["createContext"])(undefined);
/**
 * Accepts all `<div>` props
 */

var Field_Field = function Field(props) {
  var _useDropdownContext = utils_useDropdownContext(),
      getRootProps = _useDropdownContext.downshift.getRootProps;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLabelHovered = _useState2[0],
      setIsLabelHovered = _useState2[1];

  return external_react_default.a.createElement(FieldContext.Provider, {
    value: {
      isLabelHovered: isLabelHovered,
      setIsLabelHovered: setIsLabelHovered
    }
  }, external_react_default.a.createElement(StyledField, getRootProps(Field_objectSpread({}, props, {
    refKey: 'ref'
  }))));
};

Field_Field.propTypes = {
  inline: external_prop_types_default.a.bool
};
/* harmony default export */ var Fields_Field = (Field_Field);
// CONCATENATED MODULE: ./src/utils/useFieldContext.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Retrieve Field component context
 */

var useFieldContext_useFieldContext = function useFieldContext() {
  var fieldContext = Object(external_react_["useContext"])(FieldContext);

  if (!fieldContext) {
    throw new Error('This component must be rendered within a `Field` component.');
  }

  return fieldContext;
};

/* harmony default export */ var utils_useFieldContext = (useFieldContext_useFieldContext);
// CONCATENATED MODULE: ./src/Autocomplete/Autocomplete.tsx
function Autocomplete_extends() { Autocomplete_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Autocomplete_extends.apply(this, arguments); }

function Autocomplete_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Autocomplete_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Autocomplete_ownKeys(source, true).forEach(function (key) { Autocomplete_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Autocomplete_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Autocomplete_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Autocomplete_slicedToArray(arr, i) { return Autocomplete_arrayWithHoles(arr) || Autocomplete_iterableToArrayLimit(arr, i) || Autocomplete_nonIterableRest(); }

function Autocomplete_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Autocomplete_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Autocomplete_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Autocomplete_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Autocomplete_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Autocomplete_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */

var Autocomplete = external_react_default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      controlledInputRef = _ref.inputRef,
      props = Autocomplete_objectWithoutProperties(_ref, ["children", "inputRef"]);

  var _useDropdownContext = utils_useDropdownContext(),
      popperReferenceElementRef = _useDropdownContext.popperReferenceElementRef,
      _useDropdownContext$d = _useDropdownContext.downshift,
      getToggleButtonProps = _useDropdownContext$d.getToggleButtonProps,
      getInputProps = _useDropdownContext$d.getInputProps,
      isOpen = _useDropdownContext$d.isOpen;

  var _useFieldContext = utils_useFieldContext(),
      isLabelHovered = _useFieldContext.isLabelHovered;

  var inputRef = Object(container_utilities_["useCombinedRefs"])(controlledInputRef);
  var triggerRef = Object(container_utilities_["useCombinedRefs"])(ref);
  var previousIsOpenRef = Object(external_react_["useRef"])(undefined);

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Autocomplete_slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    // Focus internal input when Menu is opened
    if (isOpen && !previousIsOpenRef.current) {
      inputRef.current && inputRef.current.focus();
    } // Focus trigger when Menu is closed


    if (!isOpen && previousIsOpenRef.current) {
      triggerRef.current && triggerRef.current.focus();
    }

    previousIsOpenRef.current = isOpen;
  }, [isOpen, inputRef, triggerRef]);
  var selectProps = getToggleButtonProps(Autocomplete_objectSpread({
    onKeyDown: function onKeyDown(e) {
      if (isOpen) {
        e.nativeEvent.preventDownshiftDefault = true;
      }
    }
  }, props));
  return external_react_default.a.createElement(external_react_popper_["Reference"], null, function (_ref2) {
    var popperReference = _ref2.ref;
    return external_react_default.a.createElement(StyledSelect, Autocomplete_extends({
      hovered: isLabelHovered && !isOpen,
      focused: isOpen ? true : isFocused,
      open: isOpen,
      ref: function ref(selectRef) {
        // Pass ref to popperJS for positioning
        popperReference(selectRef); // Store ref locally to return focus on close

        triggerRef.current = selectRef; // Apply Select ref to global Dropdown context

        popperReferenceElementRef.current = selectRef;
      }
    }, selectProps), !isOpen && children, external_react_default.a.createElement(StyledInput, getInputProps({
      isHidden: !isOpen,
      disabled: props.disabled,
      onFocus: function onFocus() {
        setIsFocused(true);
      },
      onBlur: function onBlur() {
        setIsFocused(false);
      },
      ref: inputRef
    })));
  });
});
Autocomplete.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: external_prop_types_default.a.bool,

  /** Applies flex layout to support MediaFigure components */
  mediaLayout: external_prop_types_default.a.bool,
  small: external_prop_types_default.a.bool,

  /** Removes all borders and styling */
  bare: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,

  /** Applies inset `box-shadow` styling on focus */
  focusInset: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,

  /** Displays select open state */
  open: external_prop_types_default.a.bool,
  validation: external_prop_types_default.a.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};
/* harmony default export */ var Autocomplete_Autocomplete = (Autocomplete);
// EXTERNAL MODULE: external "@zendeskgarden/container-selection"
var container_selection_ = __webpack_require__(12);

// CONCATENATED MODULE: ./src/Multiselect/Multiselect.tsx
function Multiselect_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Multiselect_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Multiselect_ownKeys(source, true).forEach(function (key) { Multiselect_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Multiselect_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Multiselect_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Multiselect_slicedToArray(arr, i) { return Multiselect_arrayWithHoles(arr) || Multiselect_iterableToArrayLimit(arr, i) || Multiselect_nonIterableRest(); }

function Multiselect_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Multiselect_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Multiselect_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Multiselect_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Multiselect_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Multiselect_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */










/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */

var Multiselect = external_react_default.a.forwardRef(function (_ref, ref) {
  var renderItem = _ref.renderItem,
      placeholder = _ref.placeholder,
      maxItems = _ref.maxItems,
      renderShowMore = _ref.renderShowMore,
      externalInputRef = _ref.inputRef,
      props = Multiselect_objectWithoutProperties(_ref, ["renderItem", "placeholder", "maxItems", "renderShowMore", "inputRef"]);

  var _useDropdownContext = utils_useDropdownContext(),
      popperReferenceElementRef = _useDropdownContext.popperReferenceElementRef,
      _useDropdownContext$s = _useDropdownContext.selectedItems,
      selectedItems = _useDropdownContext$s === void 0 ? [] : _useDropdownContext$s,
      containsMultiselectRef = _useDropdownContext.containsMultiselectRef,
      _useDropdownContext$d = _useDropdownContext.downshift,
      getToggleButtonProps = _useDropdownContext$d.getToggleButtonProps,
      getInputProps = _useDropdownContext$d.getInputProps,
      isOpen = _useDropdownContext$d.isOpen,
      closeMenu = _useDropdownContext$d.closeMenu,
      inputValue = _useDropdownContext$d.inputValue,
      setDownshiftState = _useDropdownContext$d.setState,
      itemToString = _useDropdownContext$d.itemToString;

  var _useFieldContext = utils_useFieldContext(),
      isLabelHovered = _useFieldContext.isLabelHovered;

  var inputRef = Object(container_utilities_["useCombinedRefs"])(externalInputRef);
  var triggerRef = Object(container_utilities_["useCombinedRefs"])(popperReferenceElementRef, ref);
  var blurTimeoutRef = Object(external_react_["useRef"])();
  var previousIsOpenRef = Object(external_react_["useRef"])(undefined);

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Multiselect_slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(undefined),
      _useState4 = Multiselect_slicedToArray(_useState3, 2),
      focusedItem = _useState4[0],
      setFocusedItem = _useState4[1];

  var _useSelection = Object(container_selection_["useSelection"])({
    rtl: Object(react_theming_["isRtl"])(props),
    focusedItem: focusedItem,
    selectedItem: undefined,
    onFocus: function onFocus(item) {
      setFocusedItem(item);
    }
  }),
      getContainerProps = _useSelection.getContainerProps,
      getItemProps = _useSelection.getItemProps;

  Object(external_react_["useEffect"])(function () {
    containsMultiselectRef.current = true;
    var tempRef = blurTimeoutRef;
    return function () {
      clearTimeout(tempRef.current);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  Object(external_react_["useEffect"])(function () {
    // Focus internal input when Menu is opened
    if (isOpen && !previousIsOpenRef.current) {
      inputRef.current && inputRef.current.focus();
    }

    previousIsOpenRef.current = isOpen;
  }, [isOpen, inputRef]);
  /**
   * Close menu when an item becomes focused
   */

  Object(external_react_["useEffect"])(function () {
    if (focusedItem !== undefined && isOpen) {
      closeMenu();
    }
  }, [focusedItem, isOpen, closeMenu]);
  var selectProps = getToggleButtonProps(Multiselect_objectSpread({
    tabIndex: -1,
    onKeyDown: function onKeyDown(e) {
      if (isOpen) {
        e.nativeEvent.preventDownshiftDefault = true;
      } else if (!inputValue && e.keyCode === container_utilities_["KEY_CODES"].HOME) {
        setFocusedItem(selectedItems[0]);
        e.preventDefault();
      }
    },
    onFocus: function onFocus() {
      setIsFocused(true);
    },
    onBlur: function onBlur(e) {
      var currentTarget = e.currentTarget;
      blurTimeoutRef.current = setTimeout(function () {
        if (!currentTarget.contains(document.activeElement)) {
          setIsFocused(false);
        }
      }, 0);
    }
  }, props));
  var renderSelectableItem = Object(external_react_["useCallback"])(function (item, index) {
    var removeValue = function removeValue() {
      setDownshiftState({
        type: REMOVE_ITEM_STATE_TYPE,
        selectedItem: item
      });
      inputRef.current && inputRef.current.focus();
    };

    var renderedItem = renderItem({
      value: item,
      removeValue: removeValue
    });
    var focusRef = external_react_default.a.createRef();
    var clonedChild = external_react_default.a.cloneElement(renderedItem, getItemProps({
      item: item,
      focusRef: focusRef,
      onKeyDown: function onKeyDown(e) {
        if (e.keyCode === container_utilities_["KEY_CODES"].DELETE || e.keyCode === container_utilities_["KEY_CODES"].BACKSPACE) {
          e.preventDefault();
          removeValue();
        }

        if (e.keyCode === container_utilities_["KEY_CODES"].END && !inputValue) {
          inputRef.current && inputRef.current.focus();
          e.preventDefault();
        }

        if (Object(react_theming_["isRtl"])(props)) {
          if (e.keyCode === container_utilities_["KEY_CODES"].RIGHT && index === 0) {
            e.preventDefault();
          }

          if (e.keyCode === container_utilities_["KEY_CODES"].LEFT && index === selectedItems.length - 1) {
            e.preventDefault();
            inputRef.current && inputRef.current.focus();
          }
        } else {
          if (e.keyCode === container_utilities_["KEY_CODES"].LEFT && index === 0) {
            e.preventDefault();
          }

          if (e.keyCode === container_utilities_["KEY_CODES"].RIGHT && index === selectedItems.length - 1) {
            e.preventDefault();
            inputRef.current && inputRef.current.focus();
          }
        }
      },
      onClick: function onClick(e) {
        e.nativeEvent.preventDownshiftDefault = true;
      },
      tabIndex: -1
    }));
    var key = "".concat(itemToString(item), "-").concat(index);
    return external_react_default.a.createElement(StyledItemWrapper, {
      key: key
    }, clonedChild);
  }, [getItemProps, inputValue, renderItem, setDownshiftState, itemToString, selectedItems, props, inputRef]);
  var items = Object(external_react_["useMemo"])(function () {
    var itemValues = selectedItems || [];
    var output = [];

    for (var x = 0; x < itemValues.length; x++) {
      var item = itemValues[x];

      if (x < maxItems) {
        if (props.disabled) {
          var renderedItem = renderItem({
            value: item,
            removeValue: function removeValue() {}
          });
          output.push(external_react_default.a.createElement(StyledItemWrapper, {
            key: x
          }, renderedItem));
        } else {
          output.push(renderSelectableItem(item, x));
        }
      } else if (!isFocused && !inputValue || props.disabled) {
        output.push(external_react_default.a.createElement(StyledMoreAnchor, {
          key: "more-anchor"
        }, renderShowMore ? renderShowMore(itemValues.length - x) : "+ ".concat(itemValues.length - x, " more")));
        break;
      } else {
        output.push(renderSelectableItem(item, x));
      }
    }

    return output;
  }, [isFocused, props.disabled, renderSelectableItem, selectedItems, renderItem, inputValue, maxItems, renderShowMore]);
  return external_react_default.a.createElement(external_react_popper_["Reference"], null, function (_ref2) {
    var popperReference = _ref2.ref;
    return external_react_default.a.createElement(StyledSelect, getContainerProps(Multiselect_objectSpread({}, selectProps, {
      tagLayout: true,
      hovered: isLabelHovered && !isOpen,
      focused: isOpen ? true : isFocused,
      open: isOpen,
      ref: function ref(selectRef) {
        // Pass ref to popperJS for positioning
        popperReference(selectRef); // Apply Select ref to global Dropdown context

        triggerRef.current = selectRef;
      }
    })), items, external_react_default.a.createElement(StyledMultiselectInput, getInputProps({
      disabled: props.disabled,
      onFocus: function onFocus() {
        setFocusedItem(undefined);
      },
      onClick: function onClick(e) {
        if (inputValue && inputValue.length > 0 && isOpen) {
          e.nativeEvent.preventDownshiftDefault = true;
        }
      },
      onKeyDown: function onKeyDown(e) {
        if (!inputValue) {
          if (Object(react_theming_["isRtl"])(props) && e.keyCode === container_utilities_["KEY_CODES"].RIGHT && selectedItems.length > 0) {
            setFocusedItem(selectedItems[selectedItems.length - 1]);
          } else if (!Object(react_theming_["isRtl"])(props) && e.keyCode === container_utilities_["KEY_CODES"].LEFT && selectedItems.length > 0) {
            setFocusedItem(selectedItems[selectedItems.length - 1]);
          } else if (e.keyCode === container_utilities_["KEY_CODES"].BACKSPACE && selectedItems.length > 0) {
            setDownshiftState({
              type: REMOVE_ITEM_STATE_TYPE,
              selectedItem: selectedItems[selectedItems.length - 1]
            });
            e.nativeEvent.preventDownshiftDefault = true;
            e.preventDefault();
            e.stopPropagation();
          }
        }
      },
      isVisible: isFocused || inputValue || selectedItems.length === 0,
      isSmall: props.small,
      ref: inputRef,
      placeholder: selectedItems.length === 0 ? placeholder : undefined
    })));
  });
});
Multiselect.propTypes = {
  /** Applies flex layout to support MediaFigure components */
  mediaLayout: external_prop_types_default.a.bool,
  small: external_prop_types_default.a.bool,

  /** Removes all borders and styling */
  bare: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,

  /** Applies inset `box-shadow` styling on focus */
  focusInset: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,

  /** Displays select open state */
  open: external_prop_types_default.a.bool,
  renderItem: external_prop_types_default.a.func.isRequired,
  maxItems: external_prop_types_default.a.number,
  validation: external_prop_types_default.a.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};
Multiselect.defaultProps = {
  maxItems: 4
};
/* @component */

/* harmony default export */ var Multiselect_Multiselect = (Object(react_theming_["withTheme"])(Multiselect));
// CONCATENATED MODULE: ./src/Select/Select.tsx
function Select_extends() { Select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_extends.apply(this, arguments); }

function Select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Select_ownKeys(source, true).forEach(function (key) { Select_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Select_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Select_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Select_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Select_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */

var Select_Select = function Select(_ref) {
  var children = _ref.children,
      props = Select_objectWithoutProperties(_ref, ["children"]);

  var _useDropdownContext = utils_useDropdownContext(),
      popperReferenceElementRef = _useDropdownContext.popperReferenceElementRef,
      _useDropdownContext$d = _useDropdownContext.downshift,
      getToggleButtonProps = _useDropdownContext$d.getToggleButtonProps,
      getInputProps = _useDropdownContext$d.getInputProps,
      isOpen = _useDropdownContext$d.isOpen;

  var _useFieldContext = utils_useFieldContext(),
      isLabelHovered = _useFieldContext.isLabelHovered;

  var hiddenInputRef = Object(external_react_["useRef"])(null);
  var triggerRef = Object(external_react_["useRef"])(null);
  var previousIsOpenRef = Object(external_react_["useRef"])(undefined);
  Object(external_react_["useEffect"])(function () {
    // Focus internal input when Menu is opened
    if (isOpen && !previousIsOpenRef.current) {
      hiddenInputRef.current && hiddenInputRef.current.focus();
    } // Focus trigger when Menu is closed


    if (!isOpen && previousIsOpenRef.current) {
      triggerRef.current && triggerRef.current.focus();
    }

    previousIsOpenRef.current = isOpen;
  }, [isOpen]);
  var selectProps = getToggleButtonProps(Select_objectSpread({
    tabIndex: props.disabled ? -1 : 0
  }, props));
  return external_react_default.a.createElement(external_react_popper_["Reference"], null, function (_ref2) {
    var popperReference = _ref2.ref;
    return external_react_default.a.createElement(StyledSelect, Select_extends({
      hovered: isLabelHovered && !isOpen,
      focused: isOpen ? isOpen : undefined,
      open: isOpen
    }, selectProps, {
      ref: function ref(selectRef) {
        // Pass ref to popperJS for positioning
        popperReference(selectRef); // Store ref locally to return focus on close

        triggerRef.current = selectRef; // Apply Select ref to global Dropdown context

        popperReferenceElementRef.current = selectRef;
      }
    }), children, external_react_default.a.createElement(StyledInput, getInputProps({
      readOnly: true,
      isHidden: true,
      tabIndex: -1,
      ref: hiddenInputRef,
      value: ''
    })));
  });
};

Select_Select.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: external_prop_types_default.a.bool,

  /** Applies flex layout to support MediaFigure components */
  mediaLayout: external_prop_types_default.a.bool,
  small: external_prop_types_default.a.bool,

  /** Removes all borders and styling */
  bare: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,

  /** Applies inset `box-shadow` styling on focus */
  focusInset: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,

  /** Displays select open state */
  open: external_prop_types_default.a.bool,
  validation: external_prop_types_default.a.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};
/* harmony default export */ var src_Select_Select = (Select_Select);
// CONCATENATED MODULE: ./src/Fields/Hint.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Accepts all `div` props. Must be nested with a `<Field>` component.
 */

var Hint = StyledHint;
Hint.displayName = 'Hint';
Hint.propTypes = {
  small: external_prop_types_default.a.bool
};
/* harmony default export */ var Fields_Hint = (Hint);
// CONCATENATED MODULE: ./src/Fields/Label.tsx
function Label_extends() { Label_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Label_extends.apply(this, arguments); }

function Label_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Label_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Label_ownKeys(source, true).forEach(function (key) { Label_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Label_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Label_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Label_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Label_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Label_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/**
 * Accepts all `<label>` props. Must be nested with a `<Field>` component.
 */

var Label = external_react_default.a.forwardRef(function (_ref, ref) {
  var onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      other = Label_objectWithoutProperties(_ref, ["onMouseEnter", "onMouseLeave"]);

  var _useDropdownContext = utils_useDropdownContext(),
      getLabelProps = _useDropdownContext.downshift.getLabelProps;

  var _useFieldContext = utils_useFieldContext(),
      setIsLabelHovered = _useFieldContext.setIsLabelHovered;

  var labelProps = getLabelProps(Label_objectSpread({
    onMouseEnter: Object(container_utilities_["composeEventHandlers"])(onMouseEnter, function () {
      setIsLabelHovered(true);
    }),
    onMouseLeave: Object(container_utilities_["composeEventHandlers"])(onMouseLeave, function () {
      setIsLabelHovered(false);
    })
  }, other));
  return external_react_default.a.createElement(StyledLabel, Label_extends({
    ref: ref
  }, labelProps));
});
Label.propTypes = {
  regular: external_prop_types_default.a.bool,
  small: external_prop_types_default.a.bool
};
/* harmony default export */ var Fields_Label = (Label);
// CONCATENATED MODULE: ./src/Fields/Message.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Accepts all `<div>` props. Must be nested with a `<Field>` component.
 */

var Message = StyledMessage;
Message.propTypes = {
  validation: external_prop_types_default.a.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};
/* harmony default export */ var Fields_Message = (Message);
// CONCATENATED MODULE: ./src/utils/garden-placements.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Convert Garden RTL aware placement to Popper.JS valid placement
 */
function getPopperPlacement(gardenPlacement) {
  switch (gardenPlacement) {
    case 'end':
      return 'right';

    case 'end-top':
      return 'right-start';

    case 'end-bottom':
      return 'right-end';

    case 'start':
      return 'left';

    case 'start-top':
      return 'left-start';

    case 'start-bottom':
      return 'left-end';

    default:
      return gardenPlacement;
  }
}
/**
 * Convert Garden RTL aware placement to RTL equivalent Popper.JS placement
 * @param {String} gardenPlacement
 */

function getRtlPopperPlacement(gardenPlacement) {
  var popperPlacement = getPopperPlacement(gardenPlacement);

  switch (popperPlacement) {
    case 'left':
      return 'right';

    case 'left-start':
      return 'right-start';

    case 'left-end':
      return 'right-end';

    case 'top-start':
      return 'top-end';

    case 'top-end':
      return 'top-start';

    case 'right':
      return 'left';

    case 'right-start':
      return 'left-start';

    case 'right-end':
      return 'left-end';

    case 'bottom-start':
      return 'bottom-end';

    case 'bottom-end':
      return 'bottom-start';

    default:
      return popperPlacement;
  }
}
// CONCATENATED MODULE: ./src/Menu/Menu.tsx
function Menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Menu_ownKeys(source, true).forEach(function (key) { Menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Menu_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Menu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Menu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Menu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var MenuContext = Object(external_react_["createContext"])(undefined);
/**
 * Accepts all `<ul>` props
 */

var Menu_Menu = function Menu(props) {
  var placement = props.placement,
      popperModifiers = props.popperModifiers,
      eventsEnabled = props.eventsEnabled,
      animate = props.animate,
      maxHeight = props.maxHeight,
      menuStyle = props.style,
      zIndex = props.zIndex,
      otherProps = Menu_objectWithoutProperties(props, ["placement", "popperModifiers", "eventsEnabled", "animate", "maxHeight", "style", "zIndex"]);

  var _useDropdownContext = utils_useDropdownContext(),
      itemIndexRef = _useDropdownContext.itemIndexRef,
      previousIndexRef = _useDropdownContext.previousIndexRef,
      nextItemsHashRef = _useDropdownContext.nextItemsHashRef,
      popperReferenceElementRef = _useDropdownContext.popperReferenceElementRef,
      _useDropdownContext$d = _useDropdownContext.downshift,
      isOpen = _useDropdownContext$d.isOpen,
      getMenuProps = _useDropdownContext$d.getMenuProps;

  var scheduleUpdateRef = Object(external_react_["useRef"])(undefined);
  Object(external_react_["useEffect"])(function () {
    /**
     * Recalculate popper placement while open to allow animations to complete.
     * This must be ran every render to allow for the number of items to change
     * and still be placed correctly.
     **/
    if (isOpen) {
      scheduleUpdateRef.current && scheduleUpdateRef.current();
    }
  }); // Reset Downshift refs on every render

  itemIndexRef.current = 0;
  nextItemsHashRef.current = {};
  previousIndexRef.current = undefined;
  var popperPlacement = Object(react_theming_["isRtl"])(props) ? getRtlPopperPlacement(placement) : getPopperPlacement(placement);
  return external_react_default.a.createElement(MenuContext.Provider, {
    value: {
      itemIndexRef: itemIndexRef
    }
  }, external_react_default.a.createElement(external_react_popper_["Popper"], {
    placement: popperPlacement,
    modifiers: popperModifiers // Disable position updating on scroll events while menu is closed
    ,
    eventsEnabled: isOpen && eventsEnabled
  }, function (_ref) {
    var ref = _ref.ref,
        style = _ref.style,
        scheduleUpdate = _ref.scheduleUpdate,
        currentPlacement = _ref.placement;
    var computedStyle = menuStyle;
    scheduleUpdateRef.current = scheduleUpdate; // Calculate custom width if ref is provided from Select or Autocomplete

    if (popperReferenceElementRef.current && popperReferenceElementRef.current.getBoundingClientRect) {
      computedStyle = Menu_objectSpread({
        width: popperReferenceElementRef.current.getBoundingClientRect().width
      }, menuStyle);
    }

    var popperStyle = Menu_objectSpread({}, style, {
      zIndex: zIndex
    });

    if (!isOpen) {
      popperStyle = Menu_objectSpread({}, style, {
        zIndex: -1,
        visibility: 'hidden'
      });
    }

    return external_react_default.a.createElement("div", {
      ref: ref,
      style: popperStyle
    }, external_react_default.a.createElement(StyledMenu, getMenuProps(Menu_objectSpread({
      maxHeight: maxHeight,
      placement: currentPlacement,
      animate: isOpen && animate,
      style: computedStyle
    }, otherProps))));
  }));
};

Menu_Menu.propTypes = {
  popperModifiers: external_prop_types_default.a.any,
  eventsEnabled: external_prop_types_default.a.bool,
  zIndex: external_prop_types_default.a.number,
  style: external_prop_types_default.a.object,

  /**
   * These placements differ from the default naming of Popper.JS placements to help
   * assist with RTL layouts.
   **/
  placement: external_prop_types_default.a.oneOf(['auto', 'top', 'top-start', 'top-end', 'end', 'end-top', 'end-bottom', 'bottom', 'bottom-start', 'bottom-end', 'start', 'start-top', 'start-bottom']),
  animate: external_prop_types_default.a.bool,
  small: external_prop_types_default.a.bool,
  hidden: external_prop_types_default.a.bool,
  arrow: external_prop_types_default.a.bool,
  maxHeight: external_prop_types_default.a.string
};
Menu_Menu.defaultProps = {
  placement: 'bottom-start',
  animate: true,
  eventsEnabled: true,
  maxHeight: '400px',
  zIndex: 1000
};
/** @component */

/* harmony default export */ var src_Menu_Menu = (Object(react_theming_["withTheme"])(Menu_Menu));
// CONCATENATED MODULE: ./src/Menu/Separator.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Accepts all `<li>` props
 */

var Separator = StyledSeparator;
Separator.displayName = 'Separator';
/** @component */

/* harmony default export */ var Menu_Separator = (Separator);
// CONCATENATED MODULE: ./src/utils/useMenuContext.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Retrieve Menu component context
 */

var useMenuContext_useMenuContext = function useMenuContext() {
  var menuContext = Object(external_react_["useContext"])(MenuContext);

  if (!menuContext) {
    throw new Error('This component must be rendered within a `Menu` component.');
  }

  return menuContext;
};

/* harmony default export */ var utils_useMenuContext = (useMenuContext_useMenuContext);
// CONCATENATED MODULE: ./src/Menu/Items/Item.ts
function Item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Item_ownKeys(source, true).forEach(function (key) { Item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Item_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/**
 * Accepts all `<li>` props
 */

var Item = external_react_default.a.forwardRef(function (_ref, ref) {
  var value = _ref.value,
      disabled = _ref.disabled,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? StyledItem : _ref$component,
      props = Item_objectWithoutProperties(_ref, ["value", "disabled", "component"]);

  var _useDropdownContext = utils_useDropdownContext(),
      selectedItems = _useDropdownContext.selectedItems,
      _useDropdownContext$d = _useDropdownContext.downshift,
      isOpen = _useDropdownContext$d.isOpen,
      selectedItem = _useDropdownContext$d.selectedItem,
      highlightedIndex = _useDropdownContext$d.highlightedIndex,
      getItemProps = _useDropdownContext$d.getItemProps,
      setHighlightedIndex = _useDropdownContext$d.setHighlightedIndex,
      itemToString = _useDropdownContext$d.itemToString;

  var _useMenuContext = utils_useMenuContext(),
      itemIndexRef = _useMenuContext.itemIndexRef;

  if ((value === undefined || value === null) && !disabled) {
    throw new Error('All Item components require a `value` prop');
  }

  var currentIndex = itemIndexRef.current;
  var isFocused = highlightedIndex === currentIndex;
  var isSelected; // Calculate selection if provided value is an `object`

  if (selectedItems) {
    isSelected = selectedItems.some(function (item) {
      return itemToString(item) === itemToString(value);
    });
  } else {
    isSelected = itemToString(selectedItem) === itemToString(value);
  }

  Object(external_react_["useEffect"])(function () {
    // Highlight selected item when Select/Autocomplete is open
    if (isOpen && !disabled && !selectedItems && isSelected) {
      setHighlightedIndex(currentIndex);
    }
  }, [currentIndex, disabled, isOpen, isSelected, selectedItems, setHighlightedIndex]);

  if (disabled) {
    return external_react_default.a.createElement(component, Item_objectSpread({
      disabled: disabled
    }, props));
  } // Only increment current item index if the `Item` is not disabled


  itemIndexRef.current++;
  return external_react_default.a.createElement(component, getItemProps(Item_objectSpread({
    item: value,
    focused: isFocused,
    checked: isSelected,
    ref: ref
  }, props)));
});
Item.propTypes = {
  // The value that is returned through Dropdown during selection
  value: external_prop_types_default.a.any,
  // Used to optionally change the root element that is rendered
  component: external_prop_types_default.a.any,
  active: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  checked: external_prop_types_default.a.bool
};
/* harmony default export */ var Items_Item = (Item);
// CONCATENATED MODULE: ./src/Menu/Items/AddItem.tsx
function AddItem_extends() { AddItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AddItem_extends.apply(this, arguments); }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




/**
 * Accepts all `<li>` props
 */

var AddItem = external_react_default.a.forwardRef(function (props, ref) {
  return external_react_default.a.createElement(Items_Item, AddItem_extends({
    component: StyledAddItem,
    ref: ref
  }, props));
});
AddItem.propTypes = {
  value: external_prop_types_default.a.any,
  active: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool
};
/* harmony default export */ var Items_AddItem = (AddItem);
// CONCATENATED MODULE: ./src/Menu/Items/HeaderIcon.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Accepts all `<div>` props
 */

var HeaderIcon = StyledHeaderIcon_StyledHeaderIcon;
HeaderIcon.displayName = 'HeaderIcon';
/** @component */

/* harmony default export */ var Items_HeaderIcon = (HeaderIcon);
// CONCATENATED MODULE: ./src/Menu/Items/HeaderItem.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Accepts all `<li>` props
 */

var HeaderItem = StyledHeaderItem;
HeaderItem.displayName = 'HeaderItem';
HeaderItem.propTypes = {
  active: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  checked: external_prop_types_default.a.bool,

  /** Applies icon styling */
  containsIcon: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var Items_HeaderItem = (HeaderItem);
// CONCATENATED MODULE: ./src/Menu/Items/ItemMeta.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Accepts all `<div>` props
 */

var ItemMeta = StyledItemMeta;
ItemMeta.displayName = 'ItemMeta';
/** @component */

/* harmony default export */ var Items_ItemMeta = (ItemMeta);
// CONCATENATED MODULE: ./src/Menu/Items/MediaBody.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Accepts all `<div>` props
 */

var MediaBody = StyledMediaBody;
MediaBody.displayName = 'MediaBody';
/** @component */

/* harmony default export */ var Items_MediaBody = (MediaBody);
// CONCATENATED MODULE: ./src/Menu/Items/MediaFigure.ts
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Accepts all `<div>` props
 */

var MediaFigure = StyledMediaFigure_StyledMediaFigure;
MediaFigure.displayName = 'MediaFigure';
/** @component */

/* harmony default export */ var Items_MediaFigure = (MediaFigure);
// CONCATENATED MODULE: ./src/Menu/Items/MediaItem.tsx
function MediaItem_extends() { MediaItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MediaItem_extends.apply(this, arguments); }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




/**
 * Accepts all `<li>` props
 */

var MediaItem = external_react_default.a.forwardRef(function (props, ref) {
  return external_react_default.a.createElement(Items_Item, MediaItem_extends({
    component: StyledMediaItem,
    ref: ref
  }, props));
});
MediaItem.propTypes = {
  active: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  checked: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var Items_MediaItem = (MediaItem);
// CONCATENATED MODULE: ./src/Menu/Items/NextItem.tsx
function NextItem_extends() { NextItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NextItem_extends.apply(this, arguments); }

function NextItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NextItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NextItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/**
 * Accepts all `<li>` props
 */

var NextItem = external_react_default.a.forwardRef(function (_ref, ref) {
  var value = _ref.value,
      disabled = _ref.disabled,
      props = NextItem_objectWithoutProperties(_ref, ["value", "disabled"]);

  var _useDropdownContext = utils_useDropdownContext(),
      nextItemsHashRef = _useDropdownContext.nextItemsHashRef;

  var _useMenuContext = utils_useMenuContext(),
      itemIndexRef = _useMenuContext.itemIndexRef;

  if (disabled) {
    return external_react_default.a.createElement(Items_Item, NextItem_extends({
      component: StyledNextItem,
      disabled: true
    }, props));
  } // Include current index in global Dropdown context


  nextItemsHashRef.current[value] = itemIndexRef.current;
  return external_react_default.a.createElement(Items_Item, NextItem_extends({
    component: StyledNextItem,
    "aria-expanded": true,
    value: value,
    ref: ref
  }, props));
});
NextItem.propTypes = {
  value: external_prop_types_default.a.any,
  disabled: external_prop_types_default.a.bool,
  active: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool
};
/* harmony default export */ var Items_NextItem = (NextItem);
// CONCATENATED MODULE: ./src/Menu/Items/PreviousItem.tsx
function PreviousItem_extends() { PreviousItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PreviousItem_extends.apply(this, arguments); }

function PreviousItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PreviousItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PreviousItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/**
 * Accepts all `<li>` props
 */

var PreviousItem = external_react_default.a.forwardRef(function (_ref, ref) {
  var value = _ref.value,
      disabled = _ref.disabled,
      props = PreviousItem_objectWithoutProperties(_ref, ["value", "disabled"]);

  var _useDropdownContext = utils_useDropdownContext(),
      previousIndexRef = _useDropdownContext.previousIndexRef;

  var _useMenuContext = utils_useMenuContext(),
      itemIndexRef = _useMenuContext.itemIndexRef;

  if (disabled) {
    return external_react_default.a.createElement(Items_Item, PreviousItem_extends({
      component: StyledPreviousItem,
      disabled: true
    }, props, {
      ref: ref
    }));
  }

  previousIndexRef.current = itemIndexRef.current;
  return external_react_default.a.createElement(Items_Item, PreviousItem_extends({
    component: StyledPreviousItem,
    "aria-expanded": true,
    value: value
  }, props, {
    ref: ref
  }));
});
PreviousItem.propTypes = {
  value: external_prop_types_default.a.any,
  disabled: external_prop_types_default.a.bool,
  active: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool
};
/* harmony default export */ var Items_PreviousItem = (PreviousItem);
// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport Dropdown */__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return src_Dropdown_Dropdown; });
/* concated harmony reexport Trigger */__webpack_require__.d(__webpack_exports__, "Trigger", function() { return src_Trigger_Trigger; });
/* concated harmony reexport Autocomplete */__webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return Autocomplete_Autocomplete; });
/* concated harmony reexport Multiselect */__webpack_require__.d(__webpack_exports__, "Multiselect", function() { return Multiselect_Multiselect; });
/* concated harmony reexport Select */__webpack_require__.d(__webpack_exports__, "Select", function() { return src_Select_Select; });
/* concated harmony reexport Field */__webpack_require__.d(__webpack_exports__, "Field", function() { return Fields_Field; });
/* concated harmony reexport Hint */__webpack_require__.d(__webpack_exports__, "Hint", function() { return Fields_Hint; });
/* concated harmony reexport Label */__webpack_require__.d(__webpack_exports__, "Label", function() { return Fields_Label; });
/* concated harmony reexport Message */__webpack_require__.d(__webpack_exports__, "Message", function() { return Fields_Message; });
/* concated harmony reexport Menu */__webpack_require__.d(__webpack_exports__, "Menu", function() { return src_Menu_Menu; });
/* concated harmony reexport Separator */__webpack_require__.d(__webpack_exports__, "Separator", function() { return Menu_Separator; });
/* concated harmony reexport AddItem */__webpack_require__.d(__webpack_exports__, "AddItem", function() { return Items_AddItem; });
/* concated harmony reexport HeaderIcon */__webpack_require__.d(__webpack_exports__, "HeaderIcon", function() { return Items_HeaderIcon; });
/* concated harmony reexport HeaderItem */__webpack_require__.d(__webpack_exports__, "HeaderItem", function() { return Items_HeaderItem; });
/* concated harmony reexport Item */__webpack_require__.d(__webpack_exports__, "Item", function() { return Items_Item; });
/* concated harmony reexport ItemMeta */__webpack_require__.d(__webpack_exports__, "ItemMeta", function() { return Items_ItemMeta; });
/* concated harmony reexport MediaBody */__webpack_require__.d(__webpack_exports__, "MediaBody", function() { return Items_MediaBody; });
/* concated harmony reexport MediaFigure */__webpack_require__.d(__webpack_exports__, "MediaFigure", function() { return Items_MediaFigure; });
/* concated harmony reexport MediaItem */__webpack_require__.d(__webpack_exports__, "MediaItem", function() { return Items_MediaItem; });
/* concated harmony reexport NextItem */__webpack_require__.d(__webpack_exports__, "NextItem", function() { return Items_NextItem; });
/* concated harmony reexport PreviousItem */__webpack_require__.d(__webpack_exports__, "PreviousItem", function() { return Items_PreviousItem; });
/* concated harmony reexport resetIdCounter */__webpack_require__.d(__webpack_exports__, "resetIdCounter", function() { return external_downshift_["resetIdCounter"]; });
/* concated harmony reexport StyledInput */__webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* concated harmony reexport StyledItemWrapper */__webpack_require__.d(__webpack_exports__, "StyledItemWrapper", function() { return StyledItemWrapper; });
/* concated harmony reexport StyledMultiselectInput */__webpack_require__.d(__webpack_exports__, "StyledMultiselectInput", function() { return StyledMultiselectInput; });
/* concated harmony reexport StyledMoreAnchor */__webpack_require__.d(__webpack_exports__, "StyledMoreAnchor", function() { return StyledMoreAnchor; });
/* concated harmony reexport StyledMenu */__webpack_require__.d(__webpack_exports__, "StyledMenu", function() { return StyledMenu; });
/* concated harmony reexport StyledSeparator */__webpack_require__.d(__webpack_exports__, "StyledSeparator", function() { return StyledSeparator; });
/* concated harmony reexport StyledAddItem */__webpack_require__.d(__webpack_exports__, "StyledAddItem", function() { return StyledAddItem; });
/* concated harmony reexport StyledItem */__webpack_require__.d(__webpack_exports__, "StyledItem", function() { return StyledItem; });
/* concated harmony reexport StyledItemMeta */__webpack_require__.d(__webpack_exports__, "StyledItemMeta", function() { return StyledItemMeta; });
/* concated harmony reexport StyledNextItem */__webpack_require__.d(__webpack_exports__, "StyledNextItem", function() { return StyledNextItem; });
/* concated harmony reexport StyledPreviousItem */__webpack_require__.d(__webpack_exports__, "StyledPreviousItem", function() { return StyledPreviousItem; });
/* concated harmony reexport StyledHeaderIcon */__webpack_require__.d(__webpack_exports__, "StyledHeaderIcon", function() { return StyledHeaderIcon_StyledHeaderIcon; });
/* concated harmony reexport StyledHeaderItem */__webpack_require__.d(__webpack_exports__, "StyledHeaderItem", function() { return StyledHeaderItem; });
/* concated harmony reexport StyledMediaBody */__webpack_require__.d(__webpack_exports__, "StyledMediaBody", function() { return StyledMediaBody; });
/* concated harmony reexport StyledMediaFigure */__webpack_require__.d(__webpack_exports__, "StyledMediaFigure", function() { return StyledMediaFigure_StyledMediaFigure; });
/* concated harmony reexport StyledMediaItem */__webpack_require__.d(__webpack_exports__, "StyledMediaItem", function() { return StyledMediaItem; });
/* concated harmony reexport StyledField */__webpack_require__.d(__webpack_exports__, "StyledField", function() { return StyledField; });
/* concated harmony reexport StyledLabel */__webpack_require__.d(__webpack_exports__, "StyledLabel", function() { return StyledLabel; });
/* concated harmony reexport StyledHint */__webpack_require__.d(__webpack_exports__, "StyledHint", function() { return StyledHint; });
/* concated harmony reexport VALIDATION */__webpack_require__.d(__webpack_exports__, "VALIDATION", function() { return VALIDATION; });
/* concated harmony reexport StyledMessage */__webpack_require__.d(__webpack_exports__, "StyledMessage", function() { return StyledMessage; });
/* concated harmony reexport StyledSelect */__webpack_require__.d(__webpack_exports__, "StyledSelect", function() { return StyledSelect; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
























/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map