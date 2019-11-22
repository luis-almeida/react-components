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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

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
module.exports = {"c-txt":"text__c-txt___Uzv-G","c-txt__input":"text__c-txt__input___38pRd","is-rtl":"text__is-rtl___2Hz45","c-txt__hint":"text__c-txt__hint___24dmS","c-txt__label":"text__c-txt__label___3wMPZ","c-txt__message":"text__c-txt__message___ayY8L","c-txt--inline":"text__c-txt--inline___1cMdB","c-txt--sm__input":"text__c-txt--sm__input___3waYu","c-txt__input--sm":"text__c-txt__input--sm___n11ex","c-txt__input--area":"text__c-txt__input--area___9Qxj1","is-resizable":"text__is-resizable___1GzaX","c-txt__input--select":"text__c-txt__input--select___1wsYH","is-focused":"text__is-focused___26DQb","is-disabled":"text__is-disabled___22PGS","is-hovered":"text__is-hovered___3-uad","is-open":"text__is-open___3ILy_","c-txt__input--tag":"text__c-txt__input--tag___yaGxk","c-label":"text__c-label___tmzYi","c-tag":"text__c-tag___2oaZ9","c-txt__input--focus-inset":"text__c-txt__input--focus-inset___1b_xj","c-txt__input--error":"text__c-txt__input--error___2-sbj","c-txt__input--success":"text__c-txt__input--success___3hSlb","c-txt__input--warning":"text__c-txt__input--warning___VNyJQ","c-txt__input--media__figure":"text__c-txt__input--media__figure___gBDfx","c-txt__input--bare":"text__c-txt__input--bare___wp3DV","c-txt__input--media":"text__c-txt__input--media___1dY36","c-txt__input--media__body":"text__c-txt__input--media__body___11J0_","c-txt__label--regular":"text__c-txt__label--regular___onlT7","c-txt__label--sm":"text__c-txt__label--sm___2sZ13","c-txt__message--error":"text__c-txt__message--error___mRTmE","c-txt__message--success":"text__c-txt__message--success___3S7pk","c-txt__message--warning":"text__c-txt__message--warning___TJP_H","c-txt__hint--sm":"text__c-txt__hint--sm___xsC--"};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-chk":"checkbox__c-chk___1VO4F","c-chk__input":"checkbox__c-chk__input___3419r","c-chk__label":"checkbox__c-chk__label___12wm4","c-chk__label--regular":"checkbox__c-chk__label--regular___1HHLi","c-chk__hint":"checkbox__c-chk__hint___1WMmR","c-chk__message":"checkbox__c-chk__message___3asiy","c-chk__message--error":"checkbox__c-chk__message--error___WDZJE","c-chk__message--success":"checkbox__c-chk__message--success___3uU6r","c-chk__message--warning":"checkbox__c-chk__message--warning___1ao4k","is-hidden":"checkbox__is-hidden___mdSaT","is-rtl":"checkbox__is-rtl___1YDyE","is-checked":"checkbox__is-checked___1G-AY","c-chk__label--radio":"checkbox__c-chk__label--radio___304WS","c-chk__label--toggle":"checkbox__c-chk__label--toggle___3d_rD","is-indeterminate":"checkbox__is-indeterminate___1b-6B","is-disabled":"checkbox__is-disabled___2IH_0","is-hovered":"checkbox__is-hovered___2ctj7","is-focused":"checkbox__is-focused___2r3nr","is-active":"checkbox__is-active___1F8ck","c-chk__hint--toggle":"checkbox__c-chk__hint--toggle___2FLeC","c-chk__message--toggle":"checkbox__c-chk__message--toggle___Ba3OR"};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-utilities");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-range":"range__c-range___1aYaS","c-range__input":"range__c-range__input___2Q488","is-rtl":"range__is-rtl___3CDhy","c-range__hint":"range__c-range__hint___1LnlS","c-range__label":"range__c-range__label___1Tohc","c-range__message":"range__c-range__message___3Jh3w","c-range--inline":"range__c-range--inline___3icbF","is-disabled":"range__is-disabled___3TxjQ","is-focused":"range__is-focused___3hJ0p","is-active":"range__is-active___3WNPq","c-range__slider":"range__c-range__slider___3oppB","c-range__slider__track":"range__c-range__slider__track___17rAK","c-range__slider__track__rail":"range__c-range__slider__track__rail___3EwtD","c-range__slider__track__rail__thumb":"range__c-range__slider__track__rail__thumb___2b2aH","c-range__label--regular":"range__c-range__label--regular___1ntRb","c-range__label--sm":"range__c-range__label--sm___1gDfS","c-range__message--error":"range__c-range__message--error___3Rc8P","c-range__message--success":"range__c-range__message--success___MzvET","c-range__message--warning":"range__c-range__message--warning___11901","c-range__hint--sm":"range__c-range__hint--sm___1TBxJ","c-range__input--sm":"range__c-range__input--sm___1Y0Qv","c-range__slider--sm":"range__c-range__slider--sm___1r8o8"};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-keyboardfocus");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@zendeskgarden/container-field");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var styled_namespaceObject = {};
__webpack_require__.r(styled_namespaceObject);
__webpack_require__.d(styled_namespaceObject, "StyledField", function() { return styled_StyledField; });
__webpack_require__.d(styled_namespaceObject, "StyledTextLabel", function() { return text_StyledTextLabel; });
__webpack_require__.d(styled_namespaceObject, "StyledTextHint", function() { return text_StyledTextHint; });
__webpack_require__.d(styled_namespaceObject, "StyledTextInput", function() { return text_StyledTextInput; });
__webpack_require__.d(styled_namespaceObject, "StyledTextarea", function() { return text_StyledTextarea; });
__webpack_require__.d(styled_namespaceObject, "StyledTextMessage", function() { return text_StyledTextMessage; });
__webpack_require__.d(styled_namespaceObject, "StyledTextFauxInput", function() { return text_StyledTextFauxInput; });
__webpack_require__.d(styled_namespaceObject, "StyledTextMediaInput", function() { return text_StyledTextMediaInput; });
__webpack_require__.d(styled_namespaceObject, "StyledTextMediaFigure", function() { return StyledTextMediaFigure; });
__webpack_require__.d(styled_namespaceObject, "StyledCheck", function() { return StyledCheck; });
__webpack_require__.d(styled_namespaceObject, "StyledCheckLabel", function() { return checkboxes_StyledCheckLabel; });
__webpack_require__.d(styled_namespaceObject, "StyledCheckHint", function() { return checkboxes_StyledCheckHint; });
__webpack_require__.d(styled_namespaceObject, "StyledCheckInput", function() { return checkboxes_StyledCheckInput; });
__webpack_require__.d(styled_namespaceObject, "StyledCheckMessage", function() { return checkboxes_StyledCheckMessage; });
__webpack_require__.d(styled_namespaceObject, "StyledRadio", function() { return radio_StyledRadio; });
__webpack_require__.d(styled_namespaceObject, "StyledRadioLabel", function() { return radio_StyledRadioLabel; });
__webpack_require__.d(styled_namespaceObject, "StyledRadioHint", function() { return StyledRadioHint; });
__webpack_require__.d(styled_namespaceObject, "StyledRadioInput", function() { return radio_StyledRadioInput; });
__webpack_require__.d(styled_namespaceObject, "StyledRadioMessage", function() { return radio_StyledRadioMessage; });
__webpack_require__.d(styled_namespaceObject, "StyledToggle", function() { return toggle_StyledToggle; });
__webpack_require__.d(styled_namespaceObject, "StyledToggleLabel", function() { return toggle_StyledToggleLabel; });
__webpack_require__.d(styled_namespaceObject, "StyledToggleHint", function() { return toggle_StyledToggleHint; });
__webpack_require__.d(styled_namespaceObject, "StyledToggleInput", function() { return toggle_StyledToggleInput; });
__webpack_require__.d(styled_namespaceObject, "StyledToggleMessage", function() { return toggle_StyledToggleMessage; });
__webpack_require__.d(styled_namespaceObject, "StyledRangeSingleThumb", function() { return range_StyledRangeSingleThumb; });

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

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-forms/dist/text.css
var dist_text = __webpack_require__(4);
var text_default = /*#__PURE__*/__webpack_require__.n(dist_text);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-forms/dist/range.css
var range = __webpack_require__(8);
var range_default = /*#__PURE__*/__webpack_require__.n(range);

// CONCATENATED MODULE: ./src/styled/StyledField.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/**
 * Accepts all `<div>` props
 */

var StyledField = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    className: external_classnames_default()(text_default.a['c-txt'], range_default.a['c-range'], (_classNames = {}, _defineProperty(_classNames, text_default.a['c-txt--inline'], props.inline), _defineProperty(_classNames, range_default.a['c-range--inline'], props.inline), _defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _defineProperty(_classNames, range_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledField",
  componentId: "zri3d-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.field', props);
});
StyledField.propTypes = {
  inline: external_prop_types_default.a.bool
};
/* harmony default export */ var styled_StyledField = (StyledField);
// CONCATENATED MODULE: ./src/styled/text/StyledTextLabel.js
function StyledTextLabel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/**
 * Accepts all `<label>` props
 */

var StyledTextLabel = external_styled_components_default.a.label.attrs(function (props) {
  var _classNames;

  return {
    className: external_classnames_default()(text_default.a['c-txt__label'], (_classNames = {}, StyledTextLabel_defineProperty(_classNames, text_default.a['c-txt__label--regular'], props.regular), StyledTextLabel_defineProperty(_classNames, text_default.a['c-txt__label--sm'], props.small), StyledTextLabel_defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledTextLabel",
  componentId: "sc-1lq8qa5-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.text_label', props);
});
StyledTextLabel.propTypes = {
  regular: external_prop_types_default.a.bool,
  small: external_prop_types_default.a.bool
};
/* harmony default export */ var text_StyledTextLabel = (StyledTextLabel);
// CONCATENATED MODULE: ./src/styled/text/StyledTextHint.js
function StyledTextHint_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/**
 * Accepts all `<div>` props
 */

var StyledTextHint = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    className: external_classnames_default()(text_default.a['c-txt__hint'], (_classNames = {}, StyledTextHint_defineProperty(_classNames, text_default.a['c-txt__hint--sm'], props.small), StyledTextHint_defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledTextHint",
  componentId: "sc-1se1nkb-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.text_hint', props);
});
StyledTextHint.propTypes = {
  small: external_prop_types_default.a.bool
};
/* harmony default export */ var text_StyledTextHint = (StyledTextHint);
// CONCATENATED MODULE: ./src/utils/validation.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
var VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};
/* harmony default export */ var utils_validation = (VALIDATION);
// CONCATENATED MODULE: ./src/styled/text/StyledTextInput.js
function StyledTextInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var StyledTextInput_isInvalid = function isInvalid(validation) {
  return validation === utils_validation.WARNING || validation === utils_validation.ERROR;
};
/**
 * Accepts all `<input>` props
 */


var StyledTextInput = external_styled_components_default.a.input.attrs(function (props) {
  var _classNames;

  return {
    'aria-invalid': StyledTextInput_isInvalid(props.validation),
    className: external_classnames_default()(text_default.a['c-txt__input'], (_classNames = {}, StyledTextInput_defineProperty(_classNames, text_default.a['c-txt__input--sm'], props.small), StyledTextInput_defineProperty(_classNames, text_default.a['c-txt__input--tag'], props.tagLayout), StyledTextInput_defineProperty(_classNames, text_default.a['c-txt__input--select'], props.select), StyledTextInput_defineProperty(_classNames, text_default.a['c-txt__input--media'], props.mediaLayout), StyledTextInput_defineProperty(_classNames, text_default.a['c-txt__input--bare'], props.bare), StyledTextInput_defineProperty(_classNames, text_default.a['c-txt__input--focus-inset'], props.focusInset), StyledTextInput_defineProperty(_classNames, text_default.a['is-disabled'], props.disabled), StyledTextInput_defineProperty(_classNames, text_default.a['is-focused'], props.focused), StyledTextInput_defineProperty(_classNames, text_default.a['is-hovered'], props.hovered), StyledTextInput_defineProperty(_classNames, text_default.a['is-open'], props.open), StyledTextInput_defineProperty(_classNames, text_default.a['c-txt__input--success'], props.validation === utils_validation.SUCCESS), StyledTextInput_defineProperty(_classNames, text_default.a['c-txt__input--warning'], props.validation === utils_validation.WARNING), StyledTextInput_defineProperty(_classNames, text_default.a['c-txt__input--error'], props.validation === utils_validation.ERROR), StyledTextInput_defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledTextInput",
  componentId: "sc-1ezxcjx-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.text_input', props);
});
StyledTextInput.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: external_prop_types_default.a.bool,

  /** Applies flex layout to support MediaFigure components */
  mediaLayout: external_prop_types_default.a.bool,
  small: external_prop_types_default.a.bool,

  /** Applies select styling */
  select: external_prop_types_default.a.bool,

  /** Removes all borders and styling */
  bare: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,

  /** Applies inset `box-shadow` styling on focus */
  focusInset: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,

  /** Displays select open state */
  open: external_prop_types_default.a.bool,
  validation: external_prop_types_default.a.oneOf([utils_validation.SUCCESS, utils_validation.WARNING, utils_validation.ERROR])
};
/* harmony default export */ var text_StyledTextInput = (StyledTextInput);
// CONCATENATED MODULE: ./src/styled/text/StyledTextarea.js
function StyledTextarea_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







/**
 * Accepts all `<textarea>` props
 */

var StyledTextarea = external_styled_components_default()(text_StyledTextInput.withComponent('textarea')).attrs(function (props) {
  var _classNames;

  return {
    className: external_classnames_default()(props.className, text_default.a['c-txt__input--area'], (_classNames = {}, StyledTextarea_defineProperty(_classNames, text_default.a['is-resizable'], props.resizable), StyledTextarea_defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledTextarea",
  componentId: "p4bofl-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.text_area', props);
});
StyledTextarea.propTypes = {
  small: external_prop_types_default.a.bool,
  bare: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,

  /** Applies inset `box-shadow` styling on focus */
  focusInset: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  resizable: external_prop_types_default.a.bool,
  validation: external_prop_types_default.a.oneOf([utils_validation.SUCCESS, utils_validation.WARNING, utils_validation.ERROR])
};
/* harmony default export */ var text_StyledTextarea = (StyledTextarea);
// CONCATENATED MODULE: ./src/styled/text/StyledTextMessage.js
function StyledTextMessage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/**
 * Accepts all `<div>` props
 */

var StyledTextMessage = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    role: 'alert',
    className: external_classnames_default()(text_default.a['c-txt__message'], (_classNames = {}, StyledTextMessage_defineProperty(_classNames, text_default.a['c-txt__message--success'], props.validation === utils_validation.SUCCESS), StyledTextMessage_defineProperty(_classNames, text_default.a['c-txt__message--warning'], props.validation === utils_validation.WARNING), StyledTextMessage_defineProperty(_classNames, text_default.a['c-txt__message--error'], props.validation === utils_validation.ERROR), StyledTextMessage_defineProperty(_classNames, text_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledTextMessage",
  componentId: "sc-1e3gsnp-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.text_message', props);
});
StyledTextMessage.propTypes = {
  validation: external_prop_types_default.a.oneOf([utils_validation.SUCCESS, utils_validation.WARNING, utils_validation.ERROR])
};
/* harmony default export */ var text_StyledTextMessage = (StyledTextMessage);
// CONCATENATED MODULE: ./src/styled/text/StyledTextFauxInput.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



var StyledTextFauxInput = text_StyledTextInput.withComponent('div');
StyledTextFauxInput.displayName = 'StyledTextFauxInput';
StyledTextFauxInput.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: external_prop_types_default.a.bool,

  /** Applies flex layout to support MediaFigure components */
  mediaLayout: external_prop_types_default.a.bool,
  small: external_prop_types_default.a.bool,

  /** Applies select styling */
  select: external_prop_types_default.a.bool,

  /** Removes all borders and styling */
  bare: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,

  /** Applies inset `box-shadow` styling on focus */
  focusInset: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,

  /** Displays select open state */
  open: external_prop_types_default.a.bool,
  validation: external_prop_types_default.a.oneOf([utils_validation.SUCCESS, utils_validation.WARNING, utils_validation.ERROR])
};
/* harmony default export */ var text_StyledTextFauxInput = (StyledTextFauxInput);
// CONCATENATED MODULE: ./src/styled/text/StyledTextMediaInput.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/**
 * Accepts all `<input>` props
 */

var StyledTextMediaInput = external_styled_components_default()(text_StyledTextInput).attrs(function (props) {
  return {
    bare: true,
    className: external_classnames_default()(props.className, text_default.a['c-txt__input--media__body'])
  };
}).withConfig({
  displayName: "StyledTextMediaInput",
  componentId: "sc-1xikqf0-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.text_media_input', props);
});
/* harmony default export */ var text_StyledTextMediaInput = (StyledTextMediaInput);
// CONCATENATED MODULE: ./src/styled/text/StyledTextMediaFigure.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



/**
 * Accepts all `<div>` props
 */

var StyledMediaFigure = external_styled_components_default.a.div.attrs({
  className: text_default.a['c-txt__input--media__figure']
}).withConfig({
  displayName: "StyledTextMediaFigure__StyledMediaFigure",
  componentId: "sc-16w80xi-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.media_figure', props);
});
/* harmony default export */ var StyledTextMediaFigure = (StyledMediaFigure);
// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-forms/dist/checkbox.css
var dist_checkbox = __webpack_require__(6);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(dist_checkbox);

// CONCATENATED MODULE: ./src/styled/checkboxes/StyledCheck.js
function StyledCheck_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




/**
 * Used as a layout wrapper for other Checkbox views. Accepts all `<div>` props.
 */

var StyledCheckbox = external_styled_components_default.a.div.attrs(function (props) {
  return {
    className: external_classnames_default()(checkbox_default.a['c-chk'], StyledCheck_defineProperty({}, checkbox_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)))
  };
}).withConfig({
  displayName: "StyledCheck__StyledCheckbox",
  componentId: "hsbd5j-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.checkbox', props);
});
/* harmony default export */ var StyledCheck = (StyledCheckbox);
// CONCATENATED MODULE: ./src/styled/checkboxes/StyledCheckLabel.js
function StyledCheckLabel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/**
 * Accepts all `<label>` props
 */

var StyledCheckLabel = external_styled_components_default.a.label.attrs(function (props) {
  var _classNames;

  return {
    className: external_classnames_default()(checkbox_default.a['c-chk__label'], (_classNames = {}, StyledCheckLabel_defineProperty(_classNames, checkbox_default.a['c-chk__label--regular'], props.regular), StyledCheckLabel_defineProperty(_classNames, checkbox_default.a['is-hidden'], props.hidden), StyledCheckLabel_defineProperty(_classNames, checkbox_default.a['is-checked'], props.checked), StyledCheckLabel_defineProperty(_classNames, checkbox_default.a['is-indeterminate'], props.indeterminate), StyledCheckLabel_defineProperty(_classNames, checkbox_default.a['is-hovered'], props.hovered), StyledCheckLabel_defineProperty(_classNames, checkbox_default.a['is-focused'], props.focused), StyledCheckLabel_defineProperty(_classNames, checkbox_default.a['is-disabled'], props.disabled), StyledCheckLabel_defineProperty(_classNames, checkbox_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledCheckLabel",
  componentId: "sc-1r3kdgk-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.check_label', props);
});
StyledCheckLabel.propTypes = {
  regular: external_prop_types_default.a.bool,
  checked: external_prop_types_default.a.bool,
  hidden: external_prop_types_default.a.bool,
  indeterminate: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool
};
/* harmony default export */ var checkboxes_StyledCheckLabel = (StyledCheckLabel);
// CONCATENATED MODULE: ./src/styled/checkboxes/StyledCheckHint.js
function StyledCheckHint_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




/**
 * Accepts all `<div>` props
 */

var StyledCheckHint = external_styled_components_default.a.div.attrs(function (props) {
  return {
    className: external_classnames_default()(checkbox_default.a['c-chk__hint'], StyledCheckHint_defineProperty({}, checkbox_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)))
  };
}).withConfig({
  displayName: "StyledCheckHint",
  componentId: "lfmg38-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.checkbox_hint', props);
});
/* harmony default export */ var checkboxes_StyledCheckHint = (StyledCheckHint);
// CONCATENATED MODULE: ./src/styled/checkboxes/StyledCheckInput.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



/**
 * Hidden `<input>` used to show custom checkbox visualization. Accepts all `<input>` props.
 */

var StyledCheckInput = external_styled_components_default.a.input.attrs({
  className: checkbox_default.a['c-chk__input'],
  type: 'checkbox',
  tabIndex: 0
}).withConfig({
  displayName: "StyledCheckInput",
  componentId: "zaakv6-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.check_input', props);
});
/* harmony default export */ var checkboxes_StyledCheckInput = (StyledCheckInput);
// CONCATENATED MODULE: ./src/styled/checkboxes/StyledCheckMessage.js
function StyledCheckMessage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/**
 * Accepts all `<div>` props
 */

var StyledCheckMessage = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    className: external_classnames_default()(checkbox_default.a['c-chk__message'], (_classNames = {}, StyledCheckMessage_defineProperty(_classNames, checkbox_default.a['c-chk__message--success'], props.validation === utils_validation.SUCCESS), StyledCheckMessage_defineProperty(_classNames, checkbox_default.a['c-chk__message--warning'], props.validation === utils_validation.WARNING), StyledCheckMessage_defineProperty(_classNames, checkbox_default.a['c-chk__message--error'], props.validation === utils_validation.ERROR), StyledCheckMessage_defineProperty(_classNames, checkbox_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledCheckMessage",
  componentId: "sc-6pyg7y-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.check_message', props);
});
StyledCheckMessage.propTypes = {
  validation: external_prop_types_default.a.oneOf([utils_validation.SUCCESS, utils_validation.WARNING, utils_validation.ERROR])
};
/* harmony default export */ var checkboxes_StyledCheckMessage = (StyledCheckMessage);
// CONCATENATED MODULE: ./src/styled/radio/StyledRadio.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Used as a layout wrapper for other Radio views. Accepts all `<div>` props
 */

var StyledRadio = StyledCheck;
StyledRadio.displayName = 'StyledRadio';
/* harmony default export */ var radio_StyledRadio = (StyledRadio);
// CONCATENATED MODULE: ./src/styled/radio/StyledRadioLabel.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/**
 * Accepts all `<label>` props
 */

var StyledRadioLabel = external_styled_components_default()(checkboxes_StyledCheckLabel).attrs(function (props) {
  return {
    className: external_classnames_default()(props.className, checkbox_default.a['c-chk__label--radio'])
  };
}).withConfig({
  displayName: "StyledRadioLabel",
  componentId: "q1op69-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.radio_label', props);
});
StyledRadioLabel.propTypes = {
  regular: external_prop_types_default.a.bool,
  checked: external_prop_types_default.a.bool,
  hidden: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool
};
/* harmony default export */ var radio_StyledRadioLabel = (StyledRadioLabel);
// CONCATENATED MODULE: ./src/styled/radio/StyledRadioHint.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/**
 * Accepts all `<div>` props
 */

var StyleRadioHint = external_styled_components_default()(checkboxes_StyledCheckHint).attrs(function (props) {
  return {
    className: external_classnames_default()(props.className, checkbox_default.a['c-chk__hint--radio'])
  };
}).withConfig({
  displayName: "StyledRadioHint__StyleRadioHint",
  componentId: "qitckx-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.radio_hint', props);
});
/* harmony default export */ var StyledRadioHint = (StyleRadioHint);
// CONCATENATED MODULE: ./src/styled/radio/StyledRadioInput.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



/**
 * Hidden `<input>` used to show custom radio visualization. Accepts all `<input>` props.
 */

var StyledRadioInput = external_styled_components_default()(checkboxes_StyledCheckInput).attrs({
  type: 'radio'
}).withConfig({
  displayName: "StyledRadioInput",
  componentId: "epuogx-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.radio_input', props);
});
/* harmony default export */ var radio_StyledRadioInput = (StyledRadioInput);
// CONCATENATED MODULE: ./src/styled/radio/StyledRadioMessage.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







/**
 * Accepts all `<div>` props
 */

var StyledRadioMessage = external_styled_components_default()(checkboxes_StyledCheckMessage).attrs(function (props) {
  return {
    className: external_classnames_default()(props.className, checkbox_default.a['c-chk__message--radio'])
  };
}).withConfig({
  displayName: "StyledRadioMessage",
  componentId: "sc-1fi1x5y-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.radio_message', props);
});
StyledRadioMessage.propTypes = {
  validation: external_prop_types_default.a.oneOf([utils_validation.SUCCESS, utils_validation.WARNING, utils_validation.ERROR])
};
/* harmony default export */ var radio_StyledRadioMessage = (StyledRadioMessage);
// CONCATENATED MODULE: ./src/styled/toggle/StyledToggle.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Used as a layout wrapper for other Toggle views. Accepts all `<div>` props
 */

var StyledToggle = StyledCheck;
StyledToggle.displayName = 'StyledToggle';
/* harmony default export */ var toggle_StyledToggle = (StyledToggle);
// CONCATENATED MODULE: ./src/styled/toggle/StyledToggleLabel.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






/**
 * Accepts all `<label>` props
 */

var StyledToggleLabel = external_styled_components_default()(checkboxes_StyledCheckLabel).attrs(function (props) {
  return {
    className: external_classnames_default()(props.className, checkbox_default.a['c-chk__label--toggle'])
  };
}).withConfig({
  displayName: "StyledToggleLabel",
  componentId: "sc-1td1hri-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.toggle_label', props);
});
StyledToggleLabel.propTypes = {
  regular: external_prop_types_default.a.bool,
  checked: external_prop_types_default.a.bool,
  hidden: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool
};
/* harmony default export */ var toggle_StyledToggleLabel = (StyledToggleLabel);
// CONCATENATED MODULE: ./src/styled/toggle/StyledToggleHint.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/**
 * Accepts all `<div>` props
 */

var StyledToggleHint = external_styled_components_default()(checkboxes_StyledCheckHint).attrs(function (props) {
  return {
    className: external_classnames_default()(props.className, checkbox_default.a['c-chk__hint--toggle'])
  };
}).withConfig({
  displayName: "StyledToggleHint",
  componentId: "h74m0g-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.toggle_hint', props);
});
/* harmony default export */ var toggle_StyledToggleHint = (StyledToggleHint);
// CONCATENATED MODULE: ./src/styled/toggle/StyledToggleInput.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */



/**
 * Hidden `<input>` used to show custom toggle visualization. Accepts all `<input>` props.
 */

var StyledToggleInput = external_styled_components_default()(checkboxes_StyledCheckInput).withConfig({
  displayName: "StyledToggleInput",
  componentId: "cmgqei-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.toggle_input', props);
});
/* harmony default export */ var toggle_StyledToggleInput = (StyledToggleInput);
// CONCATENATED MODULE: ./src/styled/toggle/StyledToggleMessage.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







/**
 * Accepts all `<div>` props
 */

var StyledToggleMessage = external_styled_components_default()(checkboxes_StyledCheckMessage).attrs(function (props) {
  return {
    className: external_classnames_default()(props.className, checkbox_default.a['c-chk__message--toggle'])
  };
}).withConfig({
  displayName: "StyledToggleMessage",
  componentId: "sc-1de6gi1-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.toggle_message', props);
});
StyledToggleMessage.propTypes = {
  validation: external_prop_types_default.a.oneOf([utils_validation.SUCCESS, utils_validation.WARNING, utils_validation.ERROR])
};
/* harmony default export */ var toggle_StyledToggleMessage = (StyledToggleMessage);
// CONCATENATED MODULE: ./src/styled/range/StyledRangeSingleThumb.js
function StyledRangeSingleThumb_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/**
 * Accepts all `<input [type="range"]>` props
 */

var StyledRangeSingleThumb = external_styled_components_default.a.input.attrs(function (props) {
  var _classNames;

  return {
    type: 'range',
    className: external_classnames_default()(range_default.a['c-range__input'], (_classNames = {}, StyledRangeSingleThumb_defineProperty(_classNames, range_default.a['is-disabled'], props.disabled), StyledRangeSingleThumb_defineProperty(_classNames, range_default.a['is-focused'], props.focused), StyledRangeSingleThumb_defineProperty(_classNames, range_default.a['is-hovered'], props.hovered), StyledRangeSingleThumb_defineProperty(_classNames, range_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "StyledRangeSingleThumb",
  componentId: "sc-1nrj724-0"
})(["&&{", ";}", ";"], function (_ref) {
  var backgroundSize = _ref.backgroundSize;
  return "background-size: ".concat(backgroundSize, ";");
}, function (props) {
  return Object(react_theming_["retrieveTheme"])('forms.single_thumb_range', props);
});
StyledRangeSingleThumb.propTypes = {
  disabled: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  backgroundSize: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string])
};
StyledRangeSingleThumb.defaultProps = {
  backgroundSize: '0%'
};
/** @component */

/* harmony default export */ var range_StyledRangeSingleThumb = (StyledRangeSingleThumb);
// CONCATENATED MODULE: ./src/styled/index.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Text styles
 */









/**
 * Checkbox styles
 */






/**
 * Radio styles
 */






/**
 * Toggle styles
 */






/**
 * Range styles
 */


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@zendeskgarden/container-field"
var container_field_ = __webpack_require__(10);

// CONCATENATED MODULE: ./src/fields/common/Field.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var FieldContext = Object(external_react_["createContext"])(undefined);
/**
 * Provides accessibility attributes to child form fields.
 * Accepts all `<div>` props.
 */

function Field(_ref) {
  var id = _ref.id,
      children = _ref.children,
      inline = _ref.inline,
      other = _objectWithoutProperties(_ref, ["id", "children", "inline"]);

  var fieldProps = Object(container_field_["useField"])(id);
  return external_react_default.a.createElement(FieldContext.Provider, {
    value: fieldProps
  }, external_react_default.a.createElement(styled_StyledField, _extends({
    inline: inline
  }, other), children));
}

Field.propTypes = {
  /**
   * The ID that is used as the base for accessiblity attributes
   */
  id: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node,
  inline: external_prop_types_default.a.bool
};
/* harmony default export */ var common_Field = (Field);
// CONCATENATED MODULE: ./src/utils/useFieldContext.js
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
    throw new Error('This component must be rendered within a `Field` component to receive accessibility attributes.');
  }

  return fieldContext;
};

/* harmony default export */ var utils_useFieldContext = (useFieldContext_useFieldContext);
// EXTERNAL MODULE: external "@zendeskgarden/container-keyboardfocus"
var container_keyboardfocus_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@zendeskgarden/container-utilities"
var container_utilities_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/fields/Checkbox.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Checkbox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Checkbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Checkbox_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Checkbox_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Checkbox_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var CheckboxContext = Object(external_react_["createContext"])(undefined);
/**
 * Accepts all `<input type="checkbox" />` props
 */

var Checkbox = external_react_default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = Checkbox_objectWithoutProperties(_ref, ["children"]);

  var _useFieldContext = utils_useFieldContext(),
      _getLabelProps = _useFieldContext.getLabelProps,
      fieldCtx = Checkbox_objectWithoutProperties(_useFieldContext, ["getLabelProps"]);

  var _useKeyboardFocus = Object(container_keyboardfocus_["useKeyboardFocus"])(),
      getFocusProps = _useKeyboardFocus.getFocusProps,
      keyboardFocused = _useKeyboardFocus.keyboardFocused;
  /**
   * Due to us applying keyboard-only focus events to 2 separate elements (the input and label)
   * we must apply the original `onMouseDown` event to the `onMouseUp` event of the label.
   *
   * By passing the original props within `getFocusProps` we are able to allow
   * `event.preventDefault()` to still prevent chained events as expected.
   */


  var _getFocusProps = getFocusProps(props),
      onFocusMouseDown = _getFocusProps.onMouseDown,
      keyboardFocusedProps = Checkbox_objectWithoutProperties(_getFocusProps, ["onMouseDown"]);

  var modifiedFieldCtx = _objectSpread({
    getLabelProps: function getLabelProps(_ref2) {
      var onMouseUp = _ref2.onMouseUp,
          other = Checkbox_objectWithoutProperties(_ref2, ["onMouseUp"]);

      return _getLabelProps(_objectSpread({
        onMouseUp: Object(container_utilities_["composeEventHandlers"])(onMouseUp, onFocusMouseDown)
      }, other));
    }
  }, fieldCtx);

  return external_react_default.a.createElement(FieldContext.Provider, {
    value: modifiedFieldCtx
  }, external_react_default.a.createElement(CheckboxContext.Provider, {
    value: {
      isFocused: keyboardFocused
    }
  }, external_react_default.a.createElement(StyledCheck, null, external_react_default.a.createElement(checkboxes_StyledCheckInput, modifiedFieldCtx.getInputProps(_objectSpread({
    'data-garden-id': 'forms.checkbox',
    'data-garden-version': "7.1.1",
    ref: ref
  }, keyboardFocusedProps))), children)));
});
Checkbox.propTypes = {
  children: external_prop_types_default.a.node
};
/* harmony default export */ var fields_Checkbox = (Checkbox);
// CONCATENATED MODULE: ./src/utils/useCheckboxContext.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Retrieve Checkbox component context
 */

var useCheckboxContext_useCheckboxContext = function useCheckboxContext() {
  return Object(external_react_["useContext"])(CheckboxContext);
};

/* harmony default export */ var utils_useCheckboxContext = (useCheckboxContext_useCheckboxContext);
// CONCATENATED MODULE: ./src/fields/Radio.js
function Radio_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Radio_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Radio_ownKeys(source, true).forEach(function (key) { Radio_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Radio_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Radio_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Radio_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Radio_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Radio_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var RadioContext = Object(external_react_["createContext"])(undefined);
/**
 * Accepts all `<input type="radio" />` props
 */

var Radio = external_react_default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = Radio_objectWithoutProperties(_ref, ["children"]);

  var _useFieldContext = utils_useFieldContext(),
      _getLabelProps = _useFieldContext.getLabelProps,
      fieldCtx = Radio_objectWithoutProperties(_useFieldContext, ["getLabelProps"]);

  var _useKeyboardFocus = Object(container_keyboardfocus_["useKeyboardFocus"])(),
      getFocusProps = _useKeyboardFocus.getFocusProps,
      keyboardFocused = _useKeyboardFocus.keyboardFocused;
  /**
   * Due to us applying keyboard-only focus events to 2 separate elements (the input and label)
   * we must apply the original `onMouseDown` event to the `onMouseUp` event of the label.
   *
   * By passing the original props within `getFocusProps` we are able to allow
   * `event.preventDefault()` to still prevent chained events as expected.
   */


  var _getFocusProps = getFocusProps(props),
      onFocusMouseDown = _getFocusProps.onMouseDown,
      keyboardFocusedProps = Radio_objectWithoutProperties(_getFocusProps, ["onMouseDown"]);

  var modifiedFieldCtx = Radio_objectSpread({
    getLabelProps: function getLabelProps(_ref2) {
      var onMouseUp = _ref2.onMouseUp,
          other = Radio_objectWithoutProperties(_ref2, ["onMouseUp"]);

      return _getLabelProps(Radio_objectSpread({
        onMouseUp: Object(container_utilities_["composeEventHandlers"])(onMouseUp, onFocusMouseDown)
      }, other));
    }
  }, fieldCtx);

  return external_react_default.a.createElement(FieldContext.Provider, {
    value: modifiedFieldCtx
  }, external_react_default.a.createElement(RadioContext.Provider, {
    value: {
      isFocused: keyboardFocused
    }
  }, external_react_default.a.createElement(radio_StyledRadio, null, external_react_default.a.createElement(radio_StyledRadioInput, modifiedFieldCtx.getInputProps(Radio_objectSpread({
    'data-garden-id': 'forms.radio',
    'data-garden-version': "7.1.1",
    ref: ref
  }, keyboardFocusedProps))), children)));
});
Radio.propTypes = {
  children: external_prop_types_default.a.node
};
/* harmony default export */ var fields_Radio = (Radio);
// CONCATENATED MODULE: ./src/utils/useRadioContext.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Retrieve Radio component context
 */

var useRadioContext_useRadioContext = function useRadioContext() {
  return Object(external_react_["useContext"])(RadioContext);
};

/* harmony default export */ var utils_useRadioContext = (useRadioContext_useRadioContext);
// CONCATENATED MODULE: ./src/fields/Toggle.js
function Toggle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Toggle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Toggle_ownKeys(source, true).forEach(function (key) { Toggle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Toggle_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Toggle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Toggle_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Toggle_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Toggle_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







var ToggleContext = Object(external_react_["createContext"])(undefined);
/**
 * Accepts all `<input type="checkbox" />` props
 */

var Toggle = external_react_default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = Toggle_objectWithoutProperties(_ref, ["children"]);

  var _useFieldContext = utils_useFieldContext(),
      _getLabelProps = _useFieldContext.getLabelProps,
      fieldCtx = Toggle_objectWithoutProperties(_useFieldContext, ["getLabelProps"]);

  var _useKeyboardFocus = Object(container_keyboardfocus_["useKeyboardFocus"])(),
      getFocusProps = _useKeyboardFocus.getFocusProps,
      keyboardFocused = _useKeyboardFocus.keyboardFocused;
  /**
   * Due to us applying keyboard-only focus events to 2 separate elements (the input and label)
   * we must apply the original `onMouseDown` event to the `onMouseUp` event of the label.
   *
   * By passing the original props within `getFocusProps` we are able to allow
   * `event.preventDefault()` to still prevent chained events as expected.
   */


  var _getFocusProps = getFocusProps(props),
      onFocusMouseDown = _getFocusProps.onMouseDown,
      keyboardFocusedProps = Toggle_objectWithoutProperties(_getFocusProps, ["onMouseDown"]);

  var modifiedFieldCtx = Toggle_objectSpread({
    getLabelProps: function getLabelProps(_ref2) {
      var onMouseUp = _ref2.onMouseUp,
          other = Toggle_objectWithoutProperties(_ref2, ["onMouseUp"]);

      return _getLabelProps(Toggle_objectSpread({
        onMouseUp: Object(container_utilities_["composeEventHandlers"])(onMouseUp, onFocusMouseDown)
      }, other));
    }
  }, fieldCtx);

  return external_react_default.a.createElement(FieldContext.Provider, {
    value: modifiedFieldCtx
  }, external_react_default.a.createElement(ToggleContext.Provider, {
    value: {
      isFocused: keyboardFocused
    }
  }, external_react_default.a.createElement(toggle_StyledToggle, null, external_react_default.a.createElement(toggle_StyledToggleInput, modifiedFieldCtx.getInputProps(Toggle_objectSpread({
    'data-garden-id': 'forms.toggle',
    'data-garden-version': "7.1.1",
    ref: ref
  }, keyboardFocusedProps))), children)));
});
Toggle.propTypes = {
  children: external_prop_types_default.a.node
};
/* harmony default export */ var fields_Toggle = (Toggle);
// CONCATENATED MODULE: ./src/utils/useToggleContext.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


/**
 * Retrieve Toggle component context
 */

var useToggleContext_useToggleContext = function useToggleContext() {
  return Object(external_react_["useContext"])(ToggleContext);
};

/* harmony default export */ var utils_useToggleContext = (useToggleContext_useToggleContext);
// CONCATENATED MODULE: ./src/fields/common/Hint.js
function Hint_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Hint_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Hint_ownKeys(source, true).forEach(function (key) { Hint_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Hint_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Hint_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







/**
 * Accepts all `<div>` props.
 */

function Hint(props) {
  var _useFieldContext = utils_useFieldContext(),
      getHintProps = _useFieldContext.getHintProps;

  var checkboxCtx = utils_useCheckboxContext();
  var radioCtx = utils_useRadioContext();
  var toggleCtx = utils_useToggleContext();
  var HintComponent = text_StyledTextHint;
  var commonProps = {
    'data-garden-version': "7.1.1"
  };

  if (checkboxCtx) {
    HintComponent = checkboxes_StyledCheckHint;
    commonProps['data-garden-id'] = 'forms.checkbox_hint';
  } else if (radioCtx) {
    HintComponent = StyledRadioHint;
    commonProps['data-garden-id'] = 'forms.radio_hint';
  } else if (toggleCtx) {
    HintComponent = toggle_StyledToggleHint;
    commonProps['data-garden-id'] = 'forms.toggle_hint';
  } else {
    commonProps['data-garden-id'] = 'forms.text_hint';
  }

  return external_react_default.a.createElement(HintComponent, getHintProps(Hint_objectSpread({}, commonProps, {}, props)));
}

Hint.propTypes = {
  /** Applies "small" spacing. Only available with `Input` and `Textarea` components. */
  small: external_prop_types_default.a.bool
};
/* harmony default export */ var common_Hint = (Hint);
// CONCATENATED MODULE: ./src/fields/common/Label.js
function Label_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Label_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Label_ownKeys(source, true).forEach(function (key) { Label_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Label_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Label_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







/**
 * Accepts all `<label>` props.
 */

function Label(props) {
  var _useFieldContext = utils_useFieldContext(),
      getLabelProps = _useFieldContext.getLabelProps;

  var checkboxCtx = utils_useCheckboxContext();
  var radioCtx = utils_useRadioContext();
  var toggleCtx = utils_useToggleContext();
  var LabelComponent = text_StyledTextLabel;
  var sharedProps = {
    'data-garden-version': "7.1.1"
  };

  if (checkboxCtx) {
    LabelComponent = checkboxes_StyledCheckLabel;
    sharedProps['data-garden-id'] = 'forms.checkbox_label';
    sharedProps.focused = checkboxCtx.isFocused;
  } else if (radioCtx) {
    LabelComponent = radio_StyledRadioLabel;
    sharedProps['data-garden-id'] = 'forms.radio_label';
    sharedProps.focused = radioCtx.isFocused;
  } else if (toggleCtx) {
    LabelComponent = toggle_StyledToggleLabel;
    sharedProps['data-garden-id'] = 'forms.toggle_label';
    sharedProps.focused = toggleCtx.isFocused;
  } else {
    sharedProps['data-garden-id'] = 'forms.text_label';
  }

  return external_react_default.a.createElement(LabelComponent, getLabelProps(Label_objectSpread({}, sharedProps, {}, props)));
}

Label.propTypes = {
  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  regular: external_prop_types_default.a.bool,

  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  checked: external_prop_types_default.a.bool,

  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  hidden: external_prop_types_default.a.bool,

  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  indeterminate: external_prop_types_default.a.bool,

  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  hovered: external_prop_types_default.a.bool,

  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  focused: external_prop_types_default.a.bool,

  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  disabled: external_prop_types_default.a.bool
};
/* harmony default export */ var common_Label = (Label);
// CONCATENATED MODULE: ./src/fields/common/Message.js
function Message_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Message_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Message_ownKeys(source, true).forEach(function (key) { Message_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Message_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Message_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var Message_VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};
/**
 * Accepts all native `<div />` props
 */

function Message(props) {
  var checkboxCtx = utils_useCheckboxContext();
  var radioCtx = utils_useRadioContext();
  var toggleCtx = utils_useToggleContext();
  var MessageComponent = text_StyledTextMessage;
  var sharedProps = {
    'data-garden-version': "7.1.1"
  };

  if (checkboxCtx) {
    MessageComponent = checkboxes_StyledCheckMessage;
    sharedProps['data-garden-id'] = 'forms.checkbox_message';
  } else if (radioCtx) {
    MessageComponent = radio_StyledRadioMessage;
    sharedProps['data-garden-id'] = 'forms.radio_message';
  } else if (toggleCtx) {
    MessageComponent = toggle_StyledToggleMessage;
    sharedProps['data-garden-id'] = 'forms.toggle_message';
  } else {
    sharedProps['data-garden-id'] = 'forms.text_message';
  }

  return external_react_default.a.createElement(MessageComponent, Message_objectSpread({}, sharedProps, {}, props));
}

Message.propTypes = {
  validation: external_prop_types_default.a.oneOf([Message_VALIDATION.SUCCESS, Message_VALIDATION.WARNING, Message_VALIDATION.ERROR])
};
/* harmony default export */ var common_Message = (Message);
// CONCATENATED MODULE: ./src/fields/other/FauxInput.js
function FauxInput_extends() { FauxInput_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FauxInput_extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function FauxInput_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FauxInput_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FauxInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/prop-types */

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var FauxInput_VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};
/**
 * Provides input styling for use in non-input scenarios.
 * Accepts all `<div>` props.
 */

var FauxInput = external_react_default.a.forwardRef(function (_ref, ref) {
  var onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      props = FauxInput_objectWithoutProperties(_ref, ["onMouseEnter", "onMouseLeave", "onFocus", "onBlur"]);

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  var onMouseEnterHandler = Object(container_utilities_["composeEventHandlers"])(onMouseEnter, function () {
    setIsHovered(true);
  });
  var onMouseLeaveHandler = Object(container_utilities_["composeEventHandlers"])(onMouseLeave, function () {
    setIsHovered(false);
  });
  var onFocusHandler = Object(container_utilities_["composeEventHandlers"])(onFocus, function () {
    setIsFocused(true);
  });
  var onBlurHandler = Object(container_utilities_["composeEventHandlers"])(onBlur, function () {
    setIsFocused(false);
  });
  return external_react_default.a.createElement(text_StyledTextFauxInput, FauxInput_extends({
    "data-garden-id": "forms.faux_input",
    "data-garden-version": "7.1.1",
    onMouseEnter: onMouseEnterHandler,
    onMouseLeave: onMouseLeaveHandler,
    onFocus: onFocusHandler,
    onBlur: onBlurHandler,
    hovered: isHovered,
    focused: isFocused,
    ref: ref
  }, props));
});
FauxInput.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: external_prop_types_default.a.bool,

  /** Applies flex layout to support MediaFigure components */
  mediaLayout: external_prop_types_default.a.bool,
  small: external_prop_types_default.a.bool,

  /** Applies select styling */
  select: external_prop_types_default.a.bool,

  /** Removes all borders and styling */
  bare: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,

  /** Applies inset `box-shadow` styling on focus */
  focusInset: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,

  /** Displays select open state */
  open: external_prop_types_default.a.bool,
  validation: external_prop_types_default.a.oneOf([FauxInput_VALIDATION.SUCCESS, FauxInput_VALIDATION.WARNING, FauxInput_VALIDATION.ERROR])
};
/* harmony default export */ var other_FauxInput = (FauxInput);
// CONCATENATED MODULE: ./src/fields/other/MediaInput.js
function MediaInput_extends() { MediaInput_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MediaInput_extends.apply(this, arguments); }

function MediaInput_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MediaInput_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MediaInput_ownKeys(source, true).forEach(function (key) { MediaInput_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MediaInput_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MediaInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MediaInput_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MediaInput_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MediaInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable react/prop-types */






/**
 * Accepts all `<input />` props.
 */

var MediaInput = external_react_default.a.forwardRef(function (_ref, forwardedRef) {
  var _ref$wrapperProps = _ref.wrapperProps,
      wrapperProps = _ref$wrapperProps === void 0 ? {} : _ref$wrapperProps,
      start = _ref.start,
      end = _ref.end,
      disabled = _ref.disabled,
      props = MediaInput_objectWithoutProperties(_ref, ["wrapperProps", "start", "end", "disabled"]);

  var _useFieldContext = utils_useFieldContext(),
      getInputProps = _useFieldContext.getInputProps;

  var inputRef = Object(container_utilities_["useCombinedRefs"])(forwardedRef);

  var onClick = wrapperProps.onClick,
      otherWrapperProps = MediaInput_objectWithoutProperties(wrapperProps, ["onClick"]);

  var onFauxInputClickHandler = Object(container_utilities_["composeEventHandlers"])(onClick, function () {
    inputRef.current && inputRef.current.focus();
  });
  return external_react_default.a.createElement(other_FauxInput, MediaInput_extends({
    "data-garden-id": "forms.media_input",
    "data-garden-version": "7.1.1",
    onClick: onFauxInputClickHandler,
    disabled: disabled,
    mediaLayout: true
  }, otherWrapperProps), start && external_react_default.a.createElement(StyledTextMediaFigure, null, start), external_react_default.a.createElement(text_StyledTextMediaInput, getInputProps(MediaInput_objectSpread({
    disabled: disabled,
    bare: true,
    ref: inputRef
  }, props))), end && external_react_default.a.createElement(StyledTextMediaFigure, null, end));
});
MediaInput.propTypes = {
  /** Applied to the wrapping `<div>` element. Accepts all props of `FauxInput`. */
  wrapperProps: external_prop_types_default.a.object,

  /** The slot for "start" icons and content */
  start: external_prop_types_default.a.node,

  /** The slot for "end" icons and content */
  end: external_prop_types_default.a.node
};
/* harmony default export */ var other_MediaInput = (MediaInput);
// CONCATENATED MODULE: ./src/fields/Input.js
function Input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Input_ownKeys(source, true).forEach(function (key) { Input_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Input_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Input_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var Input_VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};
/**
 * Accepts all `<input />` props.
 * Must be rendered within a `<Field>` component.
 */

var Input = external_react_default.a.forwardRef(function (props, ref) {
  var _useFieldContext = utils_useFieldContext(),
      getInputProps = _useFieldContext.getInputProps;

  return external_react_default.a.createElement(text_StyledTextInput, getInputProps(Input_objectSpread({
    'data-garden-id': 'forms.input',
    'data-garden-version': "7.1.1",
    ref: ref
  }, props), {
    isDescribed: true
  }));
});
Input.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: external_prop_types_default.a.bool,

  /** Applies flex layout to support MediaFigure components */
  mediaLayout: external_prop_types_default.a.bool,
  small: external_prop_types_default.a.bool,

  /** Applies select styling */
  select: external_prop_types_default.a.bool,

  /** Removes all borders and styling */
  bare: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,

  /** Applies inset `box-shadow` styling on focus */
  focusInset: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,

  /** Displays select open state */
  open: external_prop_types_default.a.bool,
  validation: external_prop_types_default.a.oneOf([Input_VALIDATION.SUCCESS, Input_VALIDATION.WARNING, Input_VALIDATION.ERROR])
};
/* harmony default export */ var fields_Input = (Input);
// CONCATENATED MODULE: ./src/fields/Textarea.js
function Textarea_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Textarea_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Textarea_ownKeys(source, true).forEach(function (key) { Textarea_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Textarea_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Textarea_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var Textarea_VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};
/**
 * Accepts all `<textarea />` props
 */

var Textarea = external_react_default.a.forwardRef(function (props, ref) {
  var _useFieldContext = utils_useFieldContext(),
      getInputProps = _useFieldContext.getInputProps;

  return external_react_default.a.createElement(text_StyledTextarea, getInputProps(Textarea_objectSpread({
    'data-garden-id': 'forms.textarea',
    'data-garden-version': "7.1.1",
    ref: ref
  }, props), {
    isDescribed: true
  }));
});
Textarea.propTypes = {
  small: external_prop_types_default.a.bool,
  bare: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,

  /** Applies inset `box-shadow` styling on focus */
  focusInset: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  resizable: external_prop_types_default.a.bool,
  validation: external_prop_types_default.a.oneOf([Textarea_VALIDATION.SUCCESS, Textarea_VALIDATION.WARNING, Textarea_VALIDATION.ERROR])
};
/* harmony default export */ var fields_Textarea = (Textarea);
// CONCATENATED MODULE: ./src/fields/Range.js
function Range_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Range_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Range_ownKeys(source, true).forEach(function (key) { Range_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Range_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Range_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Range_slicedToArray(arr, i) { return Range_arrayWithHoles(arr) || Range_iterableToArrayLimit(arr, i) || Range_nonIterableRest(); }

function Range_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Range_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Range_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Range_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Range_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Range_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





/**
 * Accepts all `<input [type="range"]>` props.
 * Must be rendered within a `<Field>` component.
 */

var Range = external_react_default.a.forwardRef(function (_ref, ref) {
  var min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      otherProps = Range_objectWithoutProperties(_ref, ["min", "max", "step"]);

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Range_slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(0),
      _useState4 = Range_slicedToArray(_useState3, 2),
      backgroundSize = _useState4[0],
      setBackgroundSize = _useState4[1];

  var rangeRef = Object(container_utilities_["useCombinedRefs"])(ref);

  var _useFieldContext = utils_useFieldContext(),
      getInputProps = _useFieldContext.getInputProps;

  var updateBackgroundWidthFromInput = Object(external_react_["useCallback"])(function (rangeTarget) {
    var relativeMax = max;
    var value = rangeTarget.value;

    if (parseFloat(relativeMax) < parseFloat(min)) {
      relativeMax = 100;
    }

    var percentage = 100 * (value - min) / (relativeMax - min);
    setBackgroundSize("".concat(percentage, "%"));
  }, [max, min]);
  Object(external_react_["useEffect"])(function () {
    updateBackgroundWidthFromInput(rangeRef.current);
  }, [rangeRef, updateBackgroundWidthFromInput]);
  return external_react_default.a.createElement(range_StyledRangeSingleThumb, getInputProps(Range_objectSpread({
    'data-garden-id': 'forms.range_single_thumb',
    'data-garden-version': "7.1.1",
    ref: rangeRef,
    min: min,
    max: max,
    step: step,
    backgroundSize: backgroundSize,
    focused: isFocused
  }, otherProps, {
    onFocus: Object(container_utilities_["composeEventHandlers"])(otherProps.onFocus, function () {
      setIsFocused(true);
    }),
    onBlur: Object(container_utilities_["composeEventHandlers"])(otherProps.onBlur, function () {
      setIsFocused(false);
    }),
    onChange: Object(container_utilities_["composeEventHandlers"])(otherProps.onChange, function (event) {
      updateBackgroundWidthFromInput(event.target);
    })
  }), {
    isDescribed: true
  }));
});
Range.propTypes = {
  defaultValue: external_prop_types_default.a.number,
  disabled: external_prop_types_default.a.bool,
  min: external_prop_types_default.a.number,
  max: external_prop_types_default.a.number,
  step: external_prop_types_default.a.number,
  onChange: external_prop_types_default.a.func,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool
};
Range.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};
/* harmony default export */ var fields_Range = (Range);
// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__(11);
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// CONCATENATED MODULE: ./src/fields/MultiThumbRange.js
function MultiThumbRange_slicedToArray(arr, i) { return MultiThumbRange_arrayWithHoles(arr) || MultiThumbRange_iterableToArrayLimit(arr, i) || MultiThumbRange_nonIterableRest(); }

function MultiThumbRange_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function MultiThumbRange_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MultiThumbRange_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MultiThumbRange_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MultiThumbRange_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MultiThumbRange_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MultiThumbRange_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */








var SLIDER_COMPONENT_ID = 'ranges.multi_thumb_range.slider';
var TRACK_COMPONENT_ID = 'ranges.multi_thumb_range.track';
var RAIL_COMPONENT_ID = 'ranges.multi_thumb_range.rail';
var THUMB_COMPONENT_ID = 'ranges.multi_thumb_range.thumb';
/**
 * These Styled components are not exported with the other Views due to their logic
 * being more tightly coupled with this specific implemenation.
 */

var StyledSlider = external_styled_components_default.a.div.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': SLIDER_COMPONENT_ID,
    'data-garden-version': "7.1.1",
    'data-test-id': 'slider',
    className: external_classnames_default()(range_default.a['c-range__slider'], (_classNames = {}, MultiThumbRange_defineProperty(_classNames, range_default.a['is-disabled'], props.isDisabled), MultiThumbRange_defineProperty(_classNames, range_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)), _classNames))
  };
}).withConfig({
  displayName: "MultiThumbRange__StyledSlider",
  componentId: "sc-1r8fpg1-0"
})(["*,*::before,*::after{box-sizing:border-box;}", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(SLIDER_COMPONENT_ID, props);
});
var StyledTrack = external_styled_components_default.a.div.attrs({
  'data-garden-id': TRACK_COMPONENT_ID,
  'data-garden-version': "7.1.1",
  'data-test-id': 'track',
  className: range_default.a['c-range__slider__track']
}).withConfig({
  displayName: "MultiThumbRange__StyledTrack",
  componentId: "sc-1r8fpg1-1"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(TRACK_COMPONENT_ID, props);
});
var StyledTrackRail = external_styled_components_default.a.div.attrs({
  'data-garden-id': RAIL_COMPONENT_ID,
  'data-garden-version': "7.1.1",
  'data-test-id': 'rail',
  className: range_default.a['c-range__slider__track__rail']
}).withConfig({
  displayName: "MultiThumbRange__StyledTrackRail",
  componentId: "sc-1r8fpg1-2"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(RAIL_COMPONENT_ID, props);
});
var StyledThumb = external_styled_components_default.a.div.attrs(function (props) {
  return {
    'data-garden-id': THUMB_COMPONENT_ID,
    'data-garden-version': "7.1.1",
    'data-test-id': 'thumb',
    className: external_classnames_default()(range_default.a['c-range__slider__track__rail__thumb'], MultiThumbRange_defineProperty({}, range_default.a['is-focused'], props.isFocused))
  };
}).withConfig({
  displayName: "MultiThumbRange__StyledThumb",
  componentId: "sc-1r8fpg1-3"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(THUMB_COMPONENT_ID, props);
});

var MultiThumbRange_MultiThumbRange = function MultiThumbRange(_ref) {
  var min = _ref.min,
      max = _ref.max,
      minValue = _ref.minValue,
      maxValue = _ref.maxValue,
      disabled = _ref.disabled,
      step = _ref.step,
      onChange = _ref.onChange,
      otherProps = MultiThumbRange_objectWithoutProperties(_ref, ["min", "max", "minValue", "maxValue", "disabled", "step", "onChange"]);

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = MultiThumbRange_slicedToArray(_useState, 2),
      isMinThumbFocused = _useState2[0],
      setIsMinThumbFocused = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = MultiThumbRange_slicedToArray(_useState3, 2),
      isMaxThumbFocused = _useState4[0],
      setIsMaxThumbFocused = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(0),
      _useState6 = MultiThumbRange_slicedToArray(_useState5, 2),
      railWidthPx = _useState6[0],
      setRailWidthPx = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(false),
      _useState8 = MultiThumbRange_slicedToArray(_useState7, 2),
      isMousedDown = _useState8[0],
      setIsMousedDown = _useState8[1];

  var trackRailRef = Object(external_react_["useRef"])();
  var minThumbRef = Object(external_react_["useRef"])();
  var maxThumbRef = Object(external_react_["useRef"])();
  var themedDocument = Object(react_theming_["getDocument"])(otherProps);
  var rtl = Object(react_theming_["isRtl"])(otherProps);
  /**
   * The window resize event is debounced to reduce unnecessary renders
   */

  var onWindowResize = Object(external_react_["useCallback"])(external_lodash_debounce_default()(function () {
    setRailWidthPx(trackRailRef.current.getBoundingClientRect().width);
  }, 100), []);
  Object(external_react_["useEffect"])(function () {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return function () {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [onWindowResize]);
  var calculateMinPosition = Object(external_react_["useCallback"])(function (minDistancePx) {
    var boundedMinValue = minValue;

    if (boundedMinValue < min) {
      boundedMinValue = min;
    } else if (boundedMinValue > maxValue) {
      boundedMinValue = maxValue;
    } else if (boundedMinValue > max) {
      boundedMinValue = max;
    }

    return (boundedMinValue - min) / (max - min) * (railWidthPx - minDistancePx);
  }, [max, maxValue, min, minValue, railWidthPx]);
  var calculateMaxPosition = Object(external_react_["useCallback"])(function (minDistancePx) {
    var boundedMaxValue = maxValue;

    if (boundedMaxValue > max) {
      boundedMaxValue = max;
    } else if (boundedMaxValue < minValue) {
      boundedMaxValue = minValue;
    } else if (boundedMaxValue < min) {
      boundedMaxValue = min;
    }

    return (boundedMaxValue - min) / (max - min) * (railWidthPx - minDistancePx) + minDistancePx;
  }, [max, maxValue, min, minValue, railWidthPx]);
  /**
   * Provides updated values to onChange prop if values have changed
   */

  var onRangeValuesChange = Object(external_react_["useCallback"])(function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        newMinValue = _ref2.minValue,
        newMaxValue = _ref2.maxValue;

    if (disabled) {
      return;
    }

    if (newMinValue !== minValue || newMaxValue !== maxValue) {
      onChange && onChange({
        minValue: newMinValue,
        maxValue: newMaxValue
      });
    }
  }, [disabled, maxValue, minValue, onChange]);
  var updateMinThumbSlider = Object(external_react_["useCallback"])(function (value) {
    var managedValue = value;

    if (value < min) {
      managedValue = min;
    } else if (value > maxValue) {
      managedValue = maxValue;
    }

    onRangeValuesChange({
      maxValue: maxValue,
      minValue: managedValue
    });
  }, [maxValue, min, onRangeValuesChange]);
  var updateMaxThumbSlider = Object(external_react_["useCallback"])(function (value) {
    var managedValue = value;

    if (value < minValue) {
      managedValue = minValue;
    } else if (value > max) {
      managedValue = max;
    }

    onRangeValuesChange({
      maxValue: managedValue,
      minValue: minValue
    });
  }, [max, minValue, onRangeValuesChange]);
  /**
   * Calculates the update thumb position based on current mouse position
   */

  var onDocumentMouseMove = Object(external_react_["useCallback"])(function (e) {
    if (!trackRailRef.current) {
      return;
    }

    var trackOffsetLeft = trackRailRef.current.getBoundingClientRect().left;
    var trackOffsetRight = trackOffsetLeft + trackRailRef.current.getBoundingClientRect().width;
    var trackWidth = trackRailRef.current.getBoundingClientRect().width;
    var diffX = e.pageX - (rtl ? trackOffsetRight : trackOffsetLeft);

    if (rtl) {
      diffX *= -1;
    }

    var newValue = min + parseInt((max - min) * diffX / trackWidth, 10); // Reduce updated value to align with step size

    newValue = Math.floor(newValue / step) * step;

    if (isMinThumbFocused) {
      updateMinThumbSlider(newValue);
    } else {
      updateMaxThumbSlider(newValue);
    }
  }, [isMinThumbFocused, max, min, rtl, step, updateMaxThumbSlider, updateMinThumbSlider]);
  var removeDragEvents = Object(external_react_["useCallback"])(function () {
    themedDocument.removeEventListener('mousemove', onDocumentMouseMove);
    themedDocument.removeEventListener('mouseup', removeDragEvents);
    setIsMousedDown(false);
  }, [onDocumentMouseMove, themedDocument]);
  Object(external_react_["useEffect"])(function () {
    if (isMousedDown) {
      themedDocument.addEventListener('mousemove', onDocumentMouseMove);
      themedDocument.addEventListener('mouseup', removeDragEvents);
    }

    return function () {
      if (isMousedDown) {
        themedDocument.removeEventListener('mousemove', onDocumentMouseMove);
        themedDocument.removeEventListener('mouseup', removeDragEvents);
      }
    };
  }, [isMousedDown, onDocumentMouseMove, removeDragEvents, themedDocument]);

  var _onKeyDown = function onKeyDown(type) {
    return function (e) {
      var isMinThumb = type === 'min';
      var keyIntercepted = false;

      var decrementThumb = function decrementThumb() {
        if (isMinThumb) {
          updateMinThumbSlider(minValue - step);
        } else {
          updateMaxThumbSlider(maxValue - step);
        }
      };

      var incrementThumb = function incrementThumb() {
        if (isMinThumb) {
          updateMinThumbSlider(minValue + step);
        } else {
          updateMaxThumbSlider(maxValue + step);
        }
      };

      switch (e.keyCode) {
        case container_utilities_["KEY_CODES"].LEFT:
          if (rtl) {
            incrementThumb();
          } else {
            decrementThumb();
          }

          keyIntercepted = true;
          break;

        case container_utilities_["KEY_CODES"].DOWN:
          decrementThumb();
          keyIntercepted = true;
          break;

        case container_utilities_["KEY_CODES"].RIGHT:
          if (rtl) {
            decrementThumb();
          } else {
            incrementThumb();
          }

          keyIntercepted = true;
          break;

        case container_utilities_["KEY_CODES"].UP:
          incrementThumb();
          keyIntercepted = true;
          break;

        case container_utilities_["KEY_CODES"].HOME:
          if (isMinThumb) {
            updateMinThumbSlider(min);
          } else {
            updateMaxThumbSlider(min);
          }

          keyIntercepted = true;
          break;

        case container_utilities_["KEY_CODES"].END:
          if (isMinThumb) {
            updateMinThumbSlider(max);
          } else {
            updateMaxThumbSlider(max);
          }

          keyIntercepted = true;
          break;

        default:
          break;
      }

      if (keyIntercepted) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  }; // This may be increased to enforce separation between thumbs


  var MIN_DISTANCE_PX = 0;
  var minPositionPx = calculateMinPosition(MIN_DISTANCE_PX);
  var maxPositionPx = calculateMaxPosition(MIN_DISTANCE_PX);
  var sliderBackgroundSizePx = Math.abs(maxPositionPx) - Math.abs(minPositionPx);
  var trackStyle = {
    backgroundSize: "".concat(sliderBackgroundSizePx, "px"),
    backgroundPosition: "".concat(rtl ? railWidthPx - maxPositionPx : minPositionPx, "px")
  };
  var positionKey = rtl ? 'right' : 'left';

  var minThumbStyle = MultiThumbRange_defineProperty({}, positionKey, "".concat(minPositionPx, "px"));

  var maxThumbStyle = MultiThumbRange_defineProperty({}, positionKey, "".concat(maxPositionPx, "px"));

  return external_react_default.a.createElement(StyledSlider, {
    isDisabled: disabled
  }, external_react_default.a.createElement(StyledTrack, {
    style: trackStyle
  }, external_react_default.a.createElement(StyledTrackRail, {
    ref: trackRailRef
  }, external_react_default.a.createElement(StyledThumb, {
    role: "slider",
    tabIndex: disabled ? -1 : 0,
    "aria-valuemin": min,
    "aria-valuemax": maxValue,
    "aria-valuenow": minValue,
    "aria-valuetext": minValue,
    isFocused: isMinThumbFocused,
    style: minThumbStyle,
    ref: minThumbRef,
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown('min')(e);
    },
    onFocus: function onFocus() {
      setIsMinThumbFocused(true);
    },
    onBlur: function onBlur() {
      setIsMinThumbFocused(false);
    },
    onMouseDown: function onMouseDown(e) {
      setIsMousedDown(true);
      e.preventDefault();
      e.stopPropagation();
      minThumbRef.current.focus();
    }
  }), external_react_default.a.createElement(StyledThumb, {
    role: "slider",
    tabIndex: disabled ? -1 : 0,
    "aria-valuemin": minValue,
    "aria-valuemax": max,
    "aria-valuenow": maxValue,
    "aria-valuetext": maxValue,
    isFocused: isMaxThumbFocused,
    style: maxThumbStyle,
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown('max')(e);
    },
    ref: maxThumbRef,
    onFocus: function onFocus() {
      setIsMaxThumbFocused(true);
    },
    onBlur: function onBlur() {
      setIsMaxThumbFocused(false);
    },
    onMouseDown: function onMouseDown(e) {
      setIsMousedDown(true);
      e.preventDefault();
      e.stopPropagation();
      maxThumbRef.current.focus();
    }
  }))));
};

MultiThumbRange_MultiThumbRange.propTypes = {
  disabled: external_prop_types_default.a.bool,
  min: external_prop_types_default.a.number,
  max: external_prop_types_default.a.number,
  minValue: external_prop_types_default.a.number,
  maxValue: external_prop_types_default.a.number,
  step: external_prop_types_default.a.number,
  onChange: external_prop_types_default.a.func
};
MultiThumbRange_MultiThumbRange.defaultProps = {
  min: 0,
  max: 100,
  minValue: 0,
  maxValue: 100,
  step: 1
};
/** @component */

/* harmony default export */ var fields_MultiThumbRange = (Object(react_theming_["withTheme"])(MultiThumbRange_MultiThumbRange));
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* concated harmony reexport Field */__webpack_require__.d(__webpack_exports__, "Field", function() { return common_Field; });
/* concated harmony reexport Hint */__webpack_require__.d(__webpack_exports__, "Hint", function() { return common_Hint; });
/* concated harmony reexport Label */__webpack_require__.d(__webpack_exports__, "Label", function() { return common_Label; });
/* concated harmony reexport Message */__webpack_require__.d(__webpack_exports__, "Message", function() { return common_Message; });
/* concated harmony reexport FauxInput */__webpack_require__.d(__webpack_exports__, "FauxInput", function() { return other_FauxInput; });
/* concated harmony reexport MediaInput */__webpack_require__.d(__webpack_exports__, "MediaInput", function() { return other_MediaInput; });
/* concated harmony reexport Checkbox */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return fields_Checkbox; });
/* concated harmony reexport Input */__webpack_require__.d(__webpack_exports__, "Input", function() { return fields_Input; });
/* concated harmony reexport Radio */__webpack_require__.d(__webpack_exports__, "Radio", function() { return fields_Radio; });
/* concated harmony reexport Textarea */__webpack_require__.d(__webpack_exports__, "Textarea", function() { return fields_Textarea; });
/* concated harmony reexport Toggle */__webpack_require__.d(__webpack_exports__, "Toggle", function() { return fields_Toggle; });
/* concated harmony reexport Range */__webpack_require__.d(__webpack_exports__, "Range", function() { return fields_Range; });
/* concated harmony reexport MultiThumbRange */__webpack_require__.d(__webpack_exports__, "MultiThumbRange", function() { return fields_MultiThumbRange; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/** Common */





/** Other */



/** Fields */








var styled = styled_namespaceObject;

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map