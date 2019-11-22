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

module.exports = require("prop-types");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-pagination":"index__c-pagination___1RpuK","c-pagination__page":"index__c-pagination__page___1i3hO","c-pagination__page--gap":"index__c-pagination__page--gap___2jbnj","c-pagination__page--next":"index__c-pagination__page--next___2Ehxv","c-pagination__page--previous":"index__c-pagination__page--previous___23JF1","is-rtl":"index__is-rtl___3zCR8","is-hovered":"index__is-hovered___28t1p","is-focused":"index__is-focused___2vIAg","is-active":"index__is-active___1eXaT","is-current":"index__is-current___3TGnj","is-hidden":"index__is-hidden___KJ2_J"};

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

module.exports = require("@zendeskgarden/container-pagination");

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
var external_react_ = __webpack_require__(3);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
var react_theming_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@zendeskgarden/container-pagination"
var container_pagination_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@zendeskgarden/container-utilities"
var container_utilities_ = __webpack_require__(7);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(4);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(5);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-pagination/dist/index.css
var dist = __webpack_require__(1);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/views/PaginationView.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */




var COMPONENT_ID = 'pagination.pagination_view';
/**
 * Accepts all `<ul>` props
 */

var PaginationView = external_styled_components_default.a.ul.attrs(function (props) {
  return {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-pagination'], _defineProperty({}, dist_default.a['is-rtl'], Object(react_theming_["isRtl"])(props)))
  };
}).withConfig({
  displayName: "PaginationView",
  componentId: "h27uhl-0"
})(["*,::before,::after{box-sizing:border-box;}:focus{outline:none;}", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(COMPONENT_ID, props);
});
/** @component */

/* harmony default export */ var views_PaginationView = (PaginationView);
// CONCATENATED MODULE: ./src/views/Page.js
function Page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */





var Page_COMPONENT_ID = 'pagination.page';
/**
 * Accepts all `<li>` props
 */

var Page = external_styled_components_default.a.li.attrs(function (props) {
  var _classNames;

  return {
    'data-garden-id': Page_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(dist_default.a['c-pagination__page'], (_classNames = {}, Page_defineProperty(_classNames, dist_default.a['is-current'], props.current), Page_defineProperty(_classNames, dist_default.a['is-focused'], props.focused), Page_defineProperty(_classNames, dist_default.a['is-hovered'], props.hovered), Page_defineProperty(_classNames, dist_default.a['is-hidden'], props.hidden), _classNames))
  };
}).withConfig({
  displayName: "Page",
  componentId: "sc-1t0i55e-0"
})(["&&{transition:none;}", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Page_COMPONENT_ID, props);
});
Page.propTypes = {
  current: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  hidden: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var views_Page = (Page);
// CONCATENATED MODULE: ./src/views/Gap.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var Gap_COMPONENT_ID = 'pagination.gap';
/**
 * Accepts all `<li>` props
 */

var Gap = external_styled_components_default()(views_Page).attrs(function (props) {
  return {
    'data-garden-id': Gap_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(props.className, dist_default.a['c-pagination__page--gap'])
  };
}).withConfig({
  displayName: "Gap",
  componentId: "sc-9l7n13-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(Gap_COMPONENT_ID, props);
});
Gap.propTypes = {
  current: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  hidden: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var views_Gap = (Gap);
// CONCATENATED MODULE: ./src/views/NextPage.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var NextPage_COMPONENT_ID = 'pagination.next_page';
/**
 * Accepts all `<li>` props
 */

var NextPage = external_styled_components_default()(views_Page).attrs(function (props) {
  return {
    'data-garden-id': NextPage_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(props.className, dist_default.a['c-pagination__page--next'])
  };
}).withConfig({
  displayName: "NextPage",
  componentId: "sc-1hsgss-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(NextPage_COMPONENT_ID, props);
});
NextPage.propTypes = {
  current: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  hidden: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var views_NextPage = (NextPage);
// CONCATENATED MODULE: ./src/views/PreviousPage.js
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */






var PreviousPage_COMPONENT_ID = 'pagination.previous_page';
/**
 * Accepts all `<li>` props
 */

var PreviousPage = external_styled_components_default()(views_Page).attrs(function (props) {
  return {
    'data-garden-id': PreviousPage_COMPONENT_ID,
    'data-garden-version': "7.0.2",
    className: external_classnames_default()(props.className, dist_default.a['c-pagination__page--previous'])
  };
}).withConfig({
  displayName: "PreviousPage",
  componentId: "sc-82aant-0"
})(["", ";"], function (props) {
  return Object(react_theming_["retrieveTheme"])(PreviousPage_COMPONENT_ID, props);
});
PreviousPage.propTypes = {
  current: external_prop_types_default.a.bool,
  focused: external_prop_types_default.a.bool,
  hovered: external_prop_types_default.a.bool,
  hidden: external_prop_types_default.a.bool
};
/** @component */

/* harmony default export */ var views_PreviousPage = (PreviousPage);
// CONCATENATED MODULE: ./src/elements/Pagination.js
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










var PREVIOUS_KEY = 'previous';
var NEXT_KEY = 'next';
var PAGE_TYPE = {
  NEXT_PAGE: 'next',
  PAGE: 'page',
  GAP: 'gap',
  PREVIOUS_PAGE: 'previous'
};
/**
 * High-abstraction element for the `Pagination` pattern
 */

function Pagination(_ref) {
  var id = _ref.id,
      controlledCurrentPage = _ref.currentPage,
      transformPageProps = _ref.transformPageProps,
      totalPages = _ref.totalPages,
      pagePadding = _ref.pagePadding,
      onChange = _ref.onChange,
      otherProps = _objectWithoutProperties(_ref, ["id", "currentPage", "transformPageProps", "totalPages", "pagePadding", "onChange"]);

  var _useState = Object(external_react_["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      focusedItem = _useState2[0],
      setFocusedItem = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      internalCurrentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var currentPage = Object(container_utilities_["getControlledValue"])(controlledCurrentPage, internalCurrentPage);

  var _usePagination = Object(container_pagination_["usePagination"])({
    id: id,
    rtl: Object(react_theming_["isRtl"])(otherProps),
    focusedItem: focusedItem,
    selectedItem: currentPage,
    onFocus: function onFocus(item) {
      setFocusedItem(item);
    },
    onSelect: function onSelect(item) {
      var updatedCurrentPage = item;
      var updatedFocusedKey = focusedItem;

      if (updatedCurrentPage === PREVIOUS_KEY && currentPage > 1) {
        updatedCurrentPage = currentPage - 1; // Must manually change focusedKey once PreviousPage is no longer visible

        if (updatedCurrentPage === 1 && focusedItem === PREVIOUS_KEY) {
          updatedFocusedKey = 1;
        }
      } else if (updatedCurrentPage === NEXT_KEY && currentPage < totalPages) {
        updatedCurrentPage = currentPage + 1; // Must manually change focusedKey once NextPage is no longer visible

        if (updatedCurrentPage === totalPages && updatedFocusedKey === NEXT_KEY) {
          updatedFocusedKey = totalPages;
        }
      }

      if (updatedCurrentPage !== undefined) {
        onChange && onChange(updatedCurrentPage);
      }

      setFocusedItem(updatedFocusedKey);
      setCurrentPage(updatedCurrentPage);
    }
  }),
      getContainerProps = _usePagination.getContainerProps,
      getPageProps = _usePagination.getPageProps,
      getPreviousPageProps = _usePagination.getPreviousPageProps,
      getNextPageProps = _usePagination.getNextPageProps;

  var getTransformedProps = function getTransformedProps(pageType) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (transformPageProps) {
      return transformPageProps(pageType, props);
    }

    return props;
  };

  var renderPreviousPage = function renderPreviousPage() {
    var isFirstPageSelected = currentPage === 1;
    var focusRef = external_react_default.a.createRef(); // The PreviousPage element should be hidden when first page is selected

    if (isFirstPageSelected) {
      return external_react_default.a.createElement(views_PreviousPage, getTransformedProps(PAGE_TYPE.PREVIOUS_PAGE, {
        hidden: true
      }));
    }

    return external_react_default.a.createElement(views_PreviousPage, getTransformedProps(PAGE_TYPE.PREVIOUS_PAGE, getPreviousPageProps({
      key: PREVIOUS_KEY,
      focused: focusedItem === PREVIOUS_KEY,
      item: PREVIOUS_KEY,
      ref: focusRef,
      focusRef: focusRef
    })));
  };

  var renderNextPage = function renderNextPage() {
    var isLastPageSelected = currentPage === totalPages;
    var focusRef = external_react_default.a.createRef(); // The NextPage element should be hidden when the last page is selected

    if (isLastPageSelected) {
      return external_react_default.a.createElement(views_NextPage, {
        hidden: true
      });
    }

    return external_react_default.a.createElement(views_NextPage, getTransformedProps(PAGE_TYPE.NEXT_PAGE, getNextPageProps({
      item: NEXT_KEY,
      key: NEXT_KEY,
      focused: focusedItem === NEXT_KEY,
      ref: focusRef,
      focusRef: focusRef
    })));
  };

  var createPage = function createPage(pageIndex) {
    var focusRef = external_react_default.a.createRef();
    return external_react_default.a.createElement(views_Page, getTransformedProps(PAGE_TYPE.PAGE, getPageProps({
      current: currentPage === pageIndex,
      focused: focusedItem === pageIndex,
      key: pageIndex,
      item: pageIndex,
      page: pageIndex,
      ref: focusRef,
      focusRef: focusRef
    })), pageIndex);
  };
  /**
   * Renders all Page and Gap Elements based on pagePadding prop
   */


  var renderPages = function renderPages() {
    var pages = [];

    for (var pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
      // Always display the current page
      if (pageIndex === currentPage) {
        pages.push(createPage(pageIndex));
        continue;
      } // Always display the first and last page


      if (pageIndex === 1 || pageIndex === totalPages) {
        pages.push(createPage(pageIndex));
        continue;
      } // Display pages used for padding around the current page


      if (pageIndex >= currentPage - pagePadding && pageIndex <= currentPage + pagePadding) {
        pages.push(createPage(pageIndex));
        continue;
      } // Handle case where front gap should not be displayed


      if (currentPage <= pagePadding + 3 && pageIndex <= pagePadding * 2 + 3) {
        pages.push(createPage(pageIndex));
        continue;
      } // Handle case where back gap should not be displayed


      if (currentPage >= totalPages - pagePadding - 2 && pageIndex >= totalPages - pagePadding * 2 - 4) {
        pages.push(createPage(pageIndex));
        continue;
      } // Render Gap and determine next starting pageIndex


      if (pageIndex < currentPage) {
        pages.push(external_react_default.a.createElement(views_Gap, getTransformedProps(PAGE_TYPE.GAP, {
          key: "gap-".concat(pageIndex)
        })));

        if (currentPage >= totalPages - pagePadding - 2) {
          pageIndex = totalPages - pagePadding * 2 - 3;
        } else {
          pageIndex = currentPage - pagePadding - 1;
        }
      } else {
        pages.push(external_react_default.a.createElement(views_Gap, getTransformedProps(PAGE_TYPE.GAP, {
          key: "gap-".concat(pageIndex)
        })));
        pageIndex = totalPages - 1;
      }
    }

    return pages;
  };

  return external_react_default.a.createElement(views_PaginationView, getContainerProps(), renderPreviousPage(getPreviousPageProps), renderPages(getPageProps), renderNextPage(getNextPageProps));
}

Pagination.propTypes = {
  /**
   * The currently selected page
   */
  currentPage: external_prop_types_default.a.number.isRequired,

  /**
   * The total number of pages available
   */
  totalPages: external_prop_types_default.a.number.isRequired,

  /**
   * The number of pages to pad the currentPage with
   * when determining the Gap placement
   */
  pagePadding: external_prop_types_default.a.number,

  /**
   * @param {Any} currentPage - The newly selected page
   */
  onChange: external_prop_types_default.a.func,

  /**
   * The root ID to use for descendants. A unique ID is created if none is provided.
   **/
  id: external_prop_types_default.a.string,

  /**
   * Allows custom props to be applied to each page element. Useful for QA attributes and localization.
   * @param {String} pageType - Unique type for each page type: "previous", "page", "gap", and "next"
   * @param {Object} pageProps - The props to be transformed for the page object
   */
  transformPageProps: external_prop_types_default.a.func
};
Pagination.defaultProps = {
  pagePadding: 2
};
/* harmony default export */ var elements_Pagination = (Object(react_theming_["withTheme"])(Pagination));
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Pagination */__webpack_require__.d(__webpack_exports__, "Pagination", function() { return elements_Pagination; });
/* concated harmony reexport Gap */__webpack_require__.d(__webpack_exports__, "Gap", function() { return views_Gap; });
/* concated harmony reexport NextPage */__webpack_require__.d(__webpack_exports__, "NextPage", function() { return views_NextPage; });
/* concated harmony reexport Page */__webpack_require__.d(__webpack_exports__, "Page", function() { return views_Page; });
/* concated harmony reexport PaginationView */__webpack_require__.d(__webpack_exports__, "PaginationView", function() { return views_PaginationView; });
/* concated harmony reexport PreviousPage */__webpack_require__.d(__webpack_exports__, "PreviousPage", function() { return views_PreviousPage; });
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */







/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map