/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/blocks/headerlogo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks/headerlogo.js":
/*!*************************************!*\
  !*** ./src/js/blocks/headerlogo.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.js */ \"./src/js/blocks/icons.js\");\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    MediaUpload = _wp$blockEditor.MediaUpload,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    IconButton = _wp$components.IconButton,\n    TextControl = _wp$components.TextControl;\nregisterBlockType('selfctrl-dashboard/textblock', {\n  title: 'Kitely Upload Logo',\n  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].kitelytech,\n  category: 'kitelytech',\n  //attributes\n  attributes: {\n    bgImage: {\n      type: 'string',\n      source: 'html',\n      \"default\": null\n    },\n    altText: {\n      type: 'string',\n      source: 'html',\n      \"default\": ''\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n    var bgImage = attributes.bgImage,\n        altText = attributes.altText;\n\n    function onAltTextChange(newtext) {\n      setAttributes({\n        altText: newtext\n      });\n    }\n\n    function onSelectImage(newImage) {\n      setAttributes({\n        bgImage: newImage.url\n      });\n    }\n\n    return [/*#__PURE__*/React.createElement(InspectorControls, {\n      style: {\n        marginBottom: '20px'\n      }\n    }, /*#__PURE__*/React.createElement(PanelBody, {\n      title: \"'Upload Logo Image\"\n    }, /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"strong\", null, \"Upload file (.svg recommended)\")), /*#__PURE__*/React.createElement(MediaUpload, {\n      onSelect: onSelectImage,\n      type: \"images\",\n      value: bgImage,\n      render: function render(_ref2) {\n        var open = _ref2.open;\n        return /*#__PURE__*/React.createElement(IconButton, {\n          onClick: open,\n          icon: \"upload\",\n          className: \"editor-media-placeholder__button is-button is-default is-large\"\n        }, \"Upload\");\n      }\n    }), /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"strong\", null, \"Alt Text\")), /*#__PURE__*/React.createElement(TextControl, {\n      value: altText,\n      onChange: onAltTextChange\n    }))), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"logo\"\n    }, /*#__PURE__*/React.createElement(\"a\", {\n      href: \"/\"\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      className: \"logo-img\",\n      alt: altText,\n      src: bgImage\n    })))];\n  },\n  save: function save(_ref3) {\n    var attributes = _ref3.attributes;\n    var bgImage = attributes.bgImage,\n        altText = attributes.altText;\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"logo\"\n    }, /*#__PURE__*/React.createElement(\"a\", {\n      href: \"/\"\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      className: \"logo-img\",\n      alt: altText,\n      src: bgImage\n    })));\n  }\n});\n\n//# sourceURL=webpack:///./src/js/blocks/headerlogo.js?");

/***/ }),

/***/ "./src/js/blocks/icons.js":
/*!********************************!*\
  !*** ./src/js/blocks/icons.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar kitely_icons = {};\nkitely_icons.kitelytech = /*#__PURE__*/React.createElement(\"svg\", {\n  \"class\": \"kt-gutenberg-icon\",\n  role: \"img\",\n  version: \"1.1\",\n  id: \"Layer_1\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  x: \"0px\",\n  y: \"0px\",\n  width: \"70px\",\n  height: \"70px\",\n  viewBox: \"0 0 70 70\",\n  \"enable-background\": \"new 0 0 70 70\"\n}, /*#__PURE__*/React.createElement(\"rect\", {\n  x: \"0\",\n  fill: \"#222222\",\n  width: \"70\",\n  height: \"70\"\n}), /*#__PURE__*/React.createElement(\"path\", {\n  fill: \"#FFFFFF\",\n  d: \"M23.404,53.808c-0.425,0-0.796-0.16-1.116-0.479c-0.301-0.3-0.452-0.673-0.452-1.115V17.493c0-0.424,0.151-0.797,0.452-1.115c0.319-0.302,0.69-0.452,1.116-0.452c0.443,0,0.814,0.15,1.116,0.452c0.318,0.318,0.478,0.69,0.478,1.115v20.004l19.896-20.933c0.301-0.319,0.664-0.488,1.09-0.505c0.441,0,0.823,0.15,1.142,0.452c0.318,0.301,0.479,0.664,0.479,1.089c0.018,0.442-0.124,0.823-0.426,1.142L31.904,34.788l15.807,16.629c0.301,0.302,0.451,0.673,0.451,1.116c-0.018,0.441-0.187,0.814-0.505,1.114c-0.301,0.284-0.664,0.426-1.089,0.426c-0.443,0-0.823-0.159-1.143-0.479L29.727,37.072l-4.729,4.994v10.147c0,0.442-0.159,0.815-0.478,1.115C24.219,53.647,23.848,53.808,23.404,53.808z\"\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (kitely_icons);\n\n//# sourceURL=webpack:///./src/js/blocks/icons.js?");

/***/ })

/******/ });