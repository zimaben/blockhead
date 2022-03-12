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
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    ToggleControl = _wp$components.ToggleControl,\n    SelectControl = _wp$components.SelectControl,\n    Button = _wp$components.Button,\n    ColorPalette = _wp$components.ColorPalette;\nregisterBlockType('selfctrl-dashboard/textblock', {\n  title: 'Self CTRL Text Block',\n  // Block title. \n  icon: 'superhero',\n  category: 'kitelytech',\n  //attributes\n  attributes: {\n    title: {\n      type: 'string',\n      source: 'html',\n      selector: 'h4'\n    },\n    body: {\n      type: 'string',\n      source: 'html',\n      selector: 'p'\n    },\n    bgColor: {\n      type: 'string'\n    },\n    titleColor: {\n      type: 'string'\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n    var title = attributes.title,\n        body = attributes.body,\n        titleColor = attributes.titleColor,\n        bgColor = attributes.bgColor;\n    var colors = [{\n      name: 'Black',\n      color: '#000'\n    }, {\n      name: 'White',\n      color: '#fff'\n    }, {\n      name: 'Self CTRL Blue',\n      color: '#0085ff'\n    }];\n\n    function onTitleColorChange(newcolor) {\n      setAttributes({\n        titleColor: newcolor\n      });\n    }\n\n    function onChangeTitle(newtitle) {\n      setAttributes({\n        title: newtitle\n      });\n    }\n\n    function onChangeBody(newbody) {\n      setAttributes({\n        body: newbody\n      });\n    }\n\n    function onBodyColorChange(newcolor) {\n      setAttributes({\n        bgColor: newcolor\n      });\n    }\n\n    return [/*#__PURE__*/React.createElement(InspectorControls, {\n      style: {\n        marginBottom: '20px'\n      }\n    }, /*#__PURE__*/React.createElement(PanelBody, {\n      title: 'Change Title Color'\n    }, /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"strong\", null, \"Change Title Color\")), /*#__PURE__*/React.createElement(ColorPalette, {\n      colors: colors,\n      value: titleColor,\n      onChange: onTitleColorChange\n    }), /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"strong\", null, \"Change Background Color\")), /*#__PURE__*/React.createElement(ColorPalette, {\n      colors: colors,\n      value: bgColor,\n      onChange: onBodyColorChange\n    }))), /*#__PURE__*/React.createElement(\"section\", {\n      className: \"selfctrl-section\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"assessment-block\",\n      style: {\n        backgroundColor: bgColor\n      }\n    }, /*#__PURE__*/React.createElement(RichText, {\n      key: \"editable\",\n      tagName: \"h4\",\n      className: \"block-title\",\n      placeholder: \"Text Block Title\",\n      value: title,\n      onChange: onChangeTitle,\n      style: {\n        color: titleColor\n      }\n    }), /*#__PURE__*/React.createElement(RichText, {\n      key: \"editable\",\n      tagName: \"p\",\n      className: \"assessment-text\",\n      placeholder: \"Block Body Text\",\n      value: body,\n      onChange: onChangeBody\n    })))];\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n    var title = attributes.title,\n        body = attributes.body,\n        titleColor = attributes.titleColor,\n        bgColor = attributes.bgColor;\n    return /*#__PURE__*/React.createElement(\"section\", {\n      className: \"selfctrl-section\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"assessment-block\",\n      style: {\n        backgroundColor: bgColor\n      }\n    }, /*#__PURE__*/React.createElement(\"h4\", {\n      className: \"block-title\",\n      style: {\n        color: titleColor\n      }\n    }, title), /*#__PURE__*/React.createElement(RichText.Content, {\n      className: \"assessment-text\",\n      tagName: \"p\",\n      value: body\n    })));\n  }\n});\n\n//# sourceURL=webpack:///./src/js/blocks/headerlogo.js?");

/***/ })

/******/ });