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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/blocks/sociallist.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks/icons.js":
/*!********************************!*\
  !*** ./src/js/blocks/icons.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar kitely_icons = {}; //branded Kitely icons\n\nkitely_icons.kitelytech = /*#__PURE__*/React.createElement(\"svg\", {\n  \"class\": \"kt-gutenberg-icon\",\n  role: \"img\",\n  version: \"1.1\",\n  id: \"Layer_1\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  x: \"0px\",\n  y: \"0px\",\n  width: \"70px\",\n  height: \"70px\",\n  viewBox: \"0 0 70 70\",\n  \"enable-background\": \"new 0 0 70 70\"\n}, /*#__PURE__*/React.createElement(\"rect\", {\n  x: \"0\",\n  fill: \"#222222\",\n  width: \"70\",\n  height: \"70\"\n}), /*#__PURE__*/React.createElement(\"path\", {\n  fill: \"#FFFFFF\",\n  d: \"M23.404,53.808c-0.425,0-0.796-0.16-1.116-0.479c-0.301-0.3-0.452-0.673-0.452-1.115V17.493c0-0.424,0.151-0.797,0.452-1.115c0.319-0.302,0.69-0.452,1.116-0.452c0.443,0,0.814,0.15,1.116,0.452c0.318,0.318,0.478,0.69,0.478,1.115v20.004l19.896-20.933c0.301-0.319,0.664-0.488,1.09-0.505c0.441,0,0.823,0.15,1.142,0.452c0.318,0.301,0.479,0.664,0.479,1.089c0.018,0.442-0.124,0.823-0.426,1.142L31.904,34.788l15.807,16.629c0.301,0.302,0.451,0.673,0.451,1.116c-0.018,0.441-0.187,0.814-0.505,1.114c-0.301,0.284-0.664,0.426-1.089,0.426c-0.443,0-0.823-0.159-1.143-0.479L29.727,37.072l-4.729,4.994v10.147c0,0.442-0.159,0.815-0.478,1.115C24.219,53.647,23.848,53.808,23.404,53.808z\"\n})); //generic utility icons\n\nkitely_icons.email = /*#__PURE__*/React.createElement(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 512 512\"\n}, /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z\"\n}));\nkitely_icons.phone = /*#__PURE__*/React.createElement(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 512 512\",\n  fill: \"currentColor\"\n}, /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z\"\n})); //social media icons\n\nkitely_icons.facebook = /*#__PURE__*/React.createElement(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 512 512\",\n  fill: \"currentColor\"\n}, /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"\n}));\nkitely_icons.twitter = /*#__PURE__*/React.createElement(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 512 512\",\n  fill: \"currentColor\"\n}, /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"\n}));\nkitely_icons.linkedin = /*#__PURE__*/React.createElement(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 448 512\",\n  fill: \"currentColor\"\n}, /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z\"\n}));\nkitely_icons.instagram = /*#__PURE__*/React.createElement(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 448 512\",\n  fill: \"currentColor\"\n}, /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (kitely_icons);\n\n//# sourceURL=webpack:///./src/js/blocks/icons.js?");

/***/ }),

/***/ "./src/js/blocks/sociallist.js":
/*!*************************************!*\
  !*** ./src/js/blocks/sociallist.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.js */ \"./src/js/blocks/icons.js\");\n/* harmony import */ var _theme_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme.json */ \"./theme.json\");\nvar _theme_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../theme.json */ \"./theme.json\", 1);\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    RichText = _wp$blockEditor.RichText;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    ColorPalette = _wp$components.ColorPalette;\nregisterBlockType('themeblockhead/sociallist', {\n  apiVersion: 2,\n  title: 'KitelyTech Social Links',\n  icon: _icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].kitelytech,\n  category: 'kitelytech',\n  //attributes\n  attributes: {\n    list: {\n      type: 'object',\n      \"default\": _theme_json__WEBPACK_IMPORTED_MODULE_1__.themesettings.contact.social\n    },\n    textColor: {\n      type: 'string'\n    },\n    themeIcons: {\n      type: 'object',\n      \"default\": _icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n    var list = attributes.list,\n        textColor = attributes.textColor,\n        themeIcons = attributes.themeIcons;\n\n    function renderIcon(icon) {\n      return icon;\n    }\n\n    function singleItem(name, link) {\n      return /*#__PURE__*/React.createElement(\"li\", {\n        className: \"kitely-social-list-item\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"kt-icon\",\n        style: {\n          color: textColor\n        }\n      }, renderIcon(themeIcons[name])));\n    }\n\n    function onChangeTextColor(newcolor) {\n      setAttributes({\n        textColor: newcolor\n      });\n    }\n\n    function renderList(list) {\n      return list.map(function (item, index) {\n        return Object.keys(item).map(function (key) {\n          var link = item[key];\n          return singleItem(key, link);\n        });\n      });\n    }\n\n    return [/*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {\n      title: \"Footer Settings\"\n    }, /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"strong\", null, \"List Text Color\")), /*#__PURE__*/React.createElement(ColorPalette, {\n      colors: _theme_json__WEBPACK_IMPORTED_MODULE_1__.settings.color.palette,\n      value: textColor,\n      onChange: onChangeTextColor\n    }))), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"theme-contactsocial\"\n    }, /*#__PURE__*/React.createElement(\"ul\", {\n      className: \"kitely-social-list\"\n    }, renderList(list)))];\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n    var list = attributes.list,\n        textColor = attributes.textColor,\n        themeIcons = attributes.themeIcons;\n\n    function renderIcon(icon) {\n      return icon;\n    }\n\n    function singleItem(name, icon, link) {\n      return /*#__PURE__*/React.createElement(\"li\", {\n        className: \"kitely-social-list-item\"\n      }, /*#__PURE__*/React.createElement(\"a\", {\n        href: link,\n        title: name\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        \"class\": \"kt-icon\",\n        style: {\n          color: textColor\n        }\n      }, renderIcon(icon))));\n    }\n\n    function renderList(list) {\n      Object.keys(list).map(function (key) {\n        var icon = themeIcons[key];\n        var link = list[key];\n        return singleItem(key, icon, link);\n      });\n    }\n\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"theme-contactsocial\"\n    }, /*#__PURE__*/React.createElement(\"ul\", {\n      className: \"kitely-social-list\"\n    }, renderList(list)));\n  }\n});\n\n//# sourceURL=webpack:///./src/js/blocks/sociallist.js?");

/***/ }),

/***/ "./theme.json":
/*!********************!*\
  !*** ./theme.json ***!
  \********************/
/*! exports provided: version, settings, themesettings, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"version\\\":2,\\\"settings\\\":{\\\"layout\\\":{\\\"contentSize\\\":\\\"840px\\\",\\\"wideSize\\\":\\\"1100px\\\"},\\\"color\\\":{\\\"palette\\\":[{\\\"slug\\\":\\\"foreground\\\",\\\"color\\\":\\\"#000000\\\",\\\"name\\\":\\\"Foreground\\\"},{\\\"slug\\\":\\\"background\\\",\\\"color\\\":\\\"#ffffff\\\",\\\"name\\\":\\\"Background\\\"},{\\\"slug\\\":\\\"primary\\\",\\\"color\\\":\\\"#1a4548\\\",\\\"name\\\":\\\"Primary\\\"},{\\\"slug\\\":\\\"secondary\\\",\\\"color\\\":\\\"#ffe2c7\\\",\\\"name\\\":\\\"Secondary\\\"},{\\\"slug\\\":\\\"tertiary\\\",\\\"color\\\":\\\"#F6F6F6\\\",\\\"name\\\":\\\"Tertiary\\\"}]},\\\"typography\\\":{\\\"dropCap\\\":false,\\\"fontFamilies\\\":[{\\\"fontFamily\\\":\\\"\\\\\\\"Source Sans Pro\\\\\\\", sans-serif\\\",\\\"name\\\":\\\"Source Sans Pro\\\",\\\"slug\\\":\\\"source-sans-pro\\\"}],\\\"fontSizes\\\":[{\\\"size\\\":\\\"1rem\\\",\\\"slug\\\":\\\"small\\\"},{\\\"size\\\":\\\"1.125rem\\\",\\\"slug\\\":\\\"medium\\\"},{\\\"size\\\":\\\"1.75rem\\\",\\\"slug\\\":\\\"large\\\"},{\\\"size\\\":\\\"clamp(1.75rem, 3vw, 2.25rem)\\\",\\\"slug\\\":\\\"x-large\\\"}]}},\\\"themesettings\\\":{\\\"version\\\":\\\"1.0.0\\\",\\\"prefix\\\":\\\"kitely\\\",\\\"contact\\\":{\\\"phone\\\":\\\"331-240-9155\\\",\\\"email\\\":\\\"ben.toth@kitelytech.com\\\",\\\"countrycode\\\":\\\"1\\\",\\\"social\\\":[{\\\"facebook\\\":\\\"https://www.facebook.com/kitelytech/\\\"},{\\\"twitter\\\":\\\"https://twitter.com/kitelytech\\\"},{\\\"linkedin\\\":\\\"https://www.linkedin.com/company/kitelytech/\\\"},{\\\"instagram\\\":\\\"https://www.instagram.com/kitelytech/\\\"}],\\\"locations\\\":[{\\\"name\\\":\\\"CHICAGO\\\",\\\"phone\\\":\\\"331-240-9155\\\",\\\"email\\\":null},{\\\"name\\\":\\\"ATLANTA\\\",\\\"phone\\\":\\\"678-992-5332\\\",\\\"email\\\":null},{\\\"name\\\":\\\"AUSTIN\\\",\\\"phone\\\":\\\"512.895.9552\\\",\\\"email\\\":null},{\\\"name\\\":\\\"DETROIT\\\",\\\"phone\\\":\\\"313.449.8442\\\",\\\"email\\\":null},{\\\"name\\\":\\\"CHARLOTTE\\\",\\\"phone\\\":\\\"980.288.5559\\\",\\\"email\\\":null},{\\\"name\\\":\\\"NEW YORK\\\",\\\"phone\\\":\\\"917.745.5357\\\",\\\"email\\\":null},{\\\"name\\\":\\\"PHOENIX\\\",\\\"phone\\\":\\\"602.325.2707\\\",\\\"email\\\":null},{\\\"name\\\":\\\"MIAMI\\\",\\\"phone\\\":\\\"954.228.9921\\\",\\\"email\\\":null}]}}}\");\n\n//# sourceURL=webpack:///./theme.json?");

/***/ })

/******/ });