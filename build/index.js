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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/category-icon.svg":
/*!*******************************!*\
  !*** ./src/category-icon.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgCategoryIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"
});

function SvgCategoryIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    height: 24,
    width: 24
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwLjU3IDE0Ljg2TDIyIDEzLjQzIDIwLjU3IDEyIDE3IDE1LjU3IDguNDMgNyAxMiAzLjQzIDEwLjU3IDIgOS4xNCAzLjQzIDcuNzEgMiA1LjU3IDQuMTQgNC4xNCAyLjcxIDIuNzEgNC4xNGwxLjQzIDEuNDNMMiA3LjcxbDEuNDMgMS40M0wyIDEwLjU3IDMuNDMgMTIgNyA4LjQzIDE1LjU3IDE3IDEyIDIwLjU3IDEzLjQzIDIybDEuNDMtMS40M0wxNi4yOSAyMmwyLjE0LTIuMTQgMS40MyAxLjQzIDEuNDMtMS40My0xLjQzLTEuNDNMMjIgMTYuMjl6Ii8+PC9zdmc+");


/***/ }),

/***/ "./src/globalsAttributes.js":
/*!**********************************!*\
  !*** ./src/globalsAttributes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Añadimos constantes globales de los módulos
var GlobalsAttributes = {
  slugCategory: 'gym-theme'
};
/* harmony default export */ __webpack_exports__["default"] = (GlobalsAttributes);

/***/ }),

/***/ "./src/hero/index.js":
/*!***************************!*\
  !*** ./src/hero/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalsAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalsAttributes */ "./src/globalsAttributes.js");


var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    RichText = _wp$blockEditor.RichText,
    ColorPalette = _wp$blockEditor.ColorPalette,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    Icon = _wp$components.Icon;
registerBlockType(_globalsAttributes__WEBPACK_IMPORTED_MODULE_1__["default"].slugCategory + '/hero', {
  title: 'GymTheme Hero',
  category: _globalsAttributes__WEBPACK_IMPORTED_MODULE_1__["default"].slugCategory,
  //Categoría que hemos dado de alta en los bloques
  attributes: {
    imagenHero: {
      type: 'string',
      selector: '.hero'
    },
    tituloHero: {
      type: 'string',
      source: 'html',
      selector: '.title'
    },
    textHero: {
      type: 'string',
      source: 'html',
      selector: '.subtitle'
    },
    colorTexto: {
      type: 'string'
    },
    colorTitle: {
      type: 'string'
    },
    alinearContenido: {
      type: 'string',
      default: 'center'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        imagenHero = _props$attributes.imagenHero,
        textHero = _props$attributes.textHero,
        tituloHero = _props$attributes.tituloHero,
        colorTexto = _props$attributes.colorTexto,
        colorTitle = _props$attributes.colorTitle,
        alinearContenido = _props$attributes.alinearContenido,
        setAttributes = props.setAttributes;

    var onChangeTitulo = function onChangeTitulo(nuevoTitulo) {
      setAttributes({
        tituloHero: nuevoTitulo
      });
    };

    var onChangeText = function onChangeText(nuevoText) {
      setAttributes({
        textHero: nuevoText
      });
    };

    var onSeleccionarImagen = function onSeleccionarImagen(nuevaImagen) {
      setAttributes({
        imagenHero: nuevaImagen.sizes.full.url
      });
    };

    var borrarImagen = function borrarImagen() {
      setAttributes({
        imagenHero: undefined
      });
    };

    var onChangeColorTexto = function onChangeColorTexto(nuevoColor) {
      setAttributes({
        colorTexto: nuevoColor
      });
    };

    var onChangeColorTitle = function onChangeColorTitle(nuevoColor) {
      setAttributes({
        colorTitle: nuevoColor
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Color de T\xEDtulo",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Color de T\xEDtulo"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      onChange: onChangeColorTitle,
      value: colorTitle
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Color de Texto",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Color de Texto"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      onChange: onChangeColorTexto,
      value: colorTexto
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "hero alignfull",
      style: {
        backgroundImage: "linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(".concat(imagenHero, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "button-groups"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "gymTheme-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      className: "gymTheme-borrar-imagen",
      onClick: borrarImagen,
      icon: function icon() {
        //Utilizar un componente button con un icono dashicon
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
          icon: "trash"
        });
      } // style={
      //     imagenHero != undefined ? {color: '#fff'} : {}
      // }
      ,
      showTooltip: "true",
      label: "Borrar imagen"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "title ",
      style: {
        color: colorTitle
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: 'Agrega el Título del Hero',
      onChange: onChangeTitulo,
      value: tituloHero // style={
      //     imagenHero == undefined ? {color: '#000'} : {}
      // }

    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "subtitle",
      style: {
        color: colorTexto
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: 'Agrega el Título del Hero',
      onChange: onChangeText,
      value: textHero
    })))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        imagenHero = _props$attributes2.imagenHero,
        textHero = _props$attributes2.textHero,
        tituloHero = _props$attributes2.tituloHero,
        alinearContenido = _props$attributes2.alinearContenido,
        setAttributes = props.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "hero",
      style: {
        backgroundImage: "linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(".concat(imagenHero, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: tituloHero
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "subtitle"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: textHero
    }))));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/hero/index.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/text/index.js");
/* harmony import */ var _section_areas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-areas */ "./src/section-areas/index.js");
/* harmony import */ var _category_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-icon.svg */ "./src/category-icon.svg");
/* harmony import */ var _globalsAttributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globalsAttributes */ "./src/globalsAttributes.js");


 // import "./paragraph"; //Extends core paragraph


 //Add custom icon category

(function () {
  wp.blocks.updateCategory(_globalsAttributes__WEBPACK_IMPORTED_MODULE_4__["default"].slugCategory, {
    icon: _category_icon_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"]
  });
})();

/***/ }),

/***/ "./src/section-areas/index.js":
/*!************************************!*\
  !*** ./src/section-areas/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globalsAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalsAttributes */ "./src/globalsAttributes.js");



var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    RichText = _wp$blockEditor.RichText,
    ColorPalette = _wp$blockEditor.ColorPalette,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    Icon = _wp$components.Icon;
registerBlockType(_globalsAttributes__WEBPACK_IMPORTED_MODULE_2__["default"].slugCategory + '/section-areas', {
  title: 'GymTheme Section Areas',
  category: _globalsAttributes__WEBPACK_IMPORTED_MODULE_2__["default"].slugCategory,
  //Categoría que hemos dado de alta en los bloques
  attributes: {
    imagenHero: {
      type: 'string',
      selector: '.hero'
    },
    textArray: {
      type: 'array',
      default: [{
        img: '',
        text: ''
      }, {
        img: '',
        text: ''
      }, {
        img: '',
        text: ''
      }, {
        img: '',
        text: ''
      }]
    }
  },
  edit: function edit(props) {
    var textArray = props.attributes.textArray,
        setAttributes = props.setAttributes;
    console.log(textArray);

    var updateFields = function updateFields(val, index, field) {
      var newTextArray = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(textArray);

      newTextArray[index][field] = val;
      setAttributes({
        textArray: newTextArray
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", {
      className: "section-areas alignfull"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "container-fluid"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
      className: "content-areas"
    }, textArray.map(function (text, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
        className: "area"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "content-buttons"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
        onSelect: function onSelect(value) {
          return updateFields(value.sizes.full.url, index, 'img');
        },
        type: "image",
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
            className: "gymTheme-agregar-imagen",
            onClick: open,
            icon: "format-image",
            showTooltip: "true",
            label: "Cambiar Imagen",
            style: text.img != undefined ? {
              color: '#fff'
            } : {}
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "gymTheme-borrar-imagen",
        onClick: function onClick(value) {
          return updateFields(undefined, index, 'img');
        },
        icon: function icon() {
          //Utilizar un componente button con un icono dashicon
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Icon, {
            icon: "trash"
          });
        },
        style: text.img != undefined ? {
          color: '#fff'
        } : {},
        showTooltip: "true",
        label: "Borrar imagen"
      })), text.img != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: text.img
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
        placeholder: 'Agrega el Título del Hero',
        onChange: function onChange(value) {
          return updateFields(value, index, 'text');
        },
        value: text.text
      })));
    })))));
  },
  save: function save(props) {
    // const {attributes: {imagenHero, textHero, tituloHero, alinearContenido}, setAttributes} = props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", {
      className: "section-areas"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
      className: "content-areas"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
      className: "area"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: "images/area-yoga-700x400.jpg"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Area de yoga")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
      className: "area"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: "images/area-pesas-700x400.jpg"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Area de pesas")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
      className: "area"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: "images/area-cardio-700x400.jpg"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Area de cardio")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
      className: "area"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: "images/area-aparatos-700x400.jpg"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Area de aparatos"))));
  }
});

/***/ }),

/***/ "./src/text/index.js":
/*!***************************!*\
  !*** ./src/text/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalsAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalsAttributes */ "./src/globalsAttributes.js");


var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    ColorPalette = _wp$blockEditor.ColorPalette,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;
registerBlockType(_globalsAttributes__WEBPACK_IMPORTED_MODULE_1__["default"].slugCategory + '/text', {
  title: 'GymTheme Text',
  category: _globalsAttributes__WEBPACK_IMPORTED_MODULE_1__["default"].slugCategory,
  //Categoría que hemos dado de alta en los bloques
  attributes: {
    titleBlock: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    text: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    colorTexto: {
      type: 'string'
    },
    colorTitle: {
      type: 'string'
    },
    alinearContenido: {
      type: 'string',
      default: 'center'
    },
    colorFondo: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        titleBlock = _props$attributes.titleBlock,
        text = _props$attributes.text,
        colorTitle = _props$attributes.colorTitle,
        colorTexto = _props$attributes.colorTexto,
        alinearContenido = _props$attributes.alinearContenido,
        colorFondo = _props$attributes.colorFondo,
        setAttributes = props.setAttributes;

    var onChangeTitulo = function onChangeTitulo(nuevoTitulo) {
      setAttributes({
        titleBlock: nuevoTitulo
      });
    };

    var onChangeText = function onChangeText(nuevoText) {
      setAttributes({
        text: nuevoText
      });
    };

    var onChangeColorTexto = function onChangeColorTexto(nuevoColor) {
      setAttributes({
        colorTexto: nuevoColor
      });
    };

    var onChangeColorTitle = function onChangeColorTitle(nuevoColor) {
      setAttributes({
        colorTitle: nuevoColor
      });
    };

    var onChangeColorFondo = function onChangeColorFondo(nuevoColor) {
      setAttributes({
        colorFondo: nuevoColor
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Color de T\xEDtulo",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      onChange: onChangeColorTitle,
      value: colorTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Color de Texto",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      onChange: onChangeColorTexto,
      value: colorTexto
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Color de Fondo",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      onChange: onChangeColorFondo,
      value: colorFondo
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "text-divider alignfull",
      style: {
        backgroundColor: colorFondo
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container-lg"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        color: colorTitle
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: 'Agrega Título',
      onChange: onChangeTitulo,
      value: titleBlock
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        color: colorTexto
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: 'Agrega texto',
      onChange: onChangeText,
      value: text
    })))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        titleBlock = _props$attributes2.titleBlock,
        text = _props$attributes2.text,
        colorTitle = _props$attributes2.colorTitle,
        colorTexto = _props$attributes2.colorTexto,
        colorFondo = _props$attributes2.colorFondo;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "text-divider alignfull",
      style: {
        backgroundColor: colorFondo
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container-lg"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        color: colorTitle
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: titleBlock
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        color: colorTexto
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: text
    }))));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map