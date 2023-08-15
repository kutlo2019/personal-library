/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: 'Poppins', sans-serif;\n    text-align: center;\n}\n\n#root {\n  text-align: center;\n}\n\ntable {\n    margin: auto;\n}\n\ntd, th {\n    padding: 10px 20px;\n}\n\nbutton {\n    padding: 8px 21px;\n    border: none;\n    background-color: aqua;\n    border-radius: 3px;\n    color: #fff;\n}\n\n\nbutton.add-book {\n    position: relative;\n    margin-top: 40px;\n    left: 0;\n}\n\nbutton.read {\n    background-color: aqua;\n}\n\nbutton.not-read {\n    background-color: orange;\n}\n\n#modal {\n    display: none;\n    width: 60%;\n    margin: 0 auto;\n}\n\nform {\n    box-sizing: border-box;\n    padding: 2rem;\n    border-radius: 1rem;\n    background-color: hsl(0, 0%, 100%);\n    border: 4px solid hsl(0, 0%, 90%);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n}\n\n.full-width {\n    grid-column: span 2;\n}\n\nbutton[type=\"reset\"], button[class=\"delete\"] {\n    background-color: red;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://objects/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://objects/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://objects/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://objects/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://objects/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://objects/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://objects/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://objects/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://objects/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://objects/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Book.js":
/*!*********************!*\
  !*** ./src/Book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book)\n/* harmony export */ });\nclass Book {\n  constructor(title, author, pages, readStatus) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n    this.readStatus = readStatus;\n  }\n}\n\n\n//# sourceURL=webpack://objects/./src/Book.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Controller: () => (/* binding */ Controller)\n/* harmony export */ });\nclass Controller {\n  constructor(model, view) {\n    this.model = model;\n    this.view = view;\n  }\n\n  startApp() {\n    this.onBookListChanged(this.model.books)\n    this.bindHandlers()\n  }\n\n  bindHandlers() {\n    this.view.bindAddBook(this.handleAddBook);\n    this.view.bindDeleteBook(this.handleDeleteBook);\n    this.view.bindToggleRead(this.handleToggleRead);\n    // Comment: this.view.bindEditBook(this.handleEditBook);\n    this.model.bindBookListChanged(this.onBookListChanged);\n  }\n\n  onBookListChanged = (books) => {\n    this.view.displayBooks(books);\n  }\n\n  handleAddBook = (title, author, pages, status) => {\n    this.model.addBook(title, author, pages, status)\n  }\n  \n  handleEditBook = (title) => {\n    this.model.editBook(title)\n  }\n  \n  handleDeleteBook = (title) => {\n    this.model.deleteBook(title)\n  }\n  \n  handleToggleRead = (title) => {\n    this.model.toggleRead(title)\n  }\n}\n\n//# sourceURL=webpack://objects/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\n\n\nconst app = new _controller_js__WEBPACK_IMPORTED_MODULE_1__.Controller(new _model__WEBPACK_IMPORTED_MODULE_2__.Model(), new _view__WEBPACK_IMPORTED_MODULE_3__.View());\n\napp.startApp();\n\n//# sourceURL=webpack://objects/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Model: () => (/* binding */ Model)\n/* harmony export */ });\n/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book */ \"./src/Book.js\");\n\n\nclass Model {\n  constructor() {\n    this.books = [\n      new _Book__WEBPACK_IMPORTED_MODULE_0__.Book(\"The Hobbit\", \"J.R.R Tolkien\", 295, false),\n      new _Book__WEBPACK_IMPORTED_MODULE_0__.Book(\"Things Fall Apart\", \"Chinua Achebe\", 564, true),\n      new _Book__WEBPACK_IMPORTED_MODULE_0__.Book(\"Arrow of God\", \"Chinua Achebe\", 738, false),\n      new _Book__WEBPACK_IMPORTED_MODULE_0__.Book(\"Born a Crime\", \"Trevor Noah\", 234, true)\n    ]\n  }\n\n  addBook(title, author, pages, readStatus) {\n    const book = new _Book__WEBPACK_IMPORTED_MODULE_0__.Book(title, author, pages, readStatus);\n    \n    this.books.push(book);\n    this.onBookListChange(this.books);\n  }\n\n  editBook(title) {\n    this.books = this.books.map(book => \n      book.title === title ? new _Book__WEBPACK_IMPORTED_MODULE_0__.Book(title, book.author, book.pages, book.readStatus) : book);\n\n    this.onBookListChange(this.books);\n  }\n\n  deleteBook(title) {\n    this.books = this.books.filter(book => book.title !== title);\n    console.log(this.onBookListChange)\n    this.onBookListChange(this.books);\n  }\n\n  toggleRead(title) {\n    this.books = this.books.map(book => book.title === title ? new _Book__WEBPACK_IMPORTED_MODULE_0__.Book(book.title, book.author, book.pages, !book.readStatus) : book);\n\n    this.onBookListChange(this.books);\n  }\n\n  bindBookListChanged(callback) {\n    this.onBookListChange = callback;\n  }\n}\n\n//# sourceURL=webpack://objects/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   View: () => (/* binding */ View)\n/* harmony export */ });\nclass View {\n  constructor() {\n    // The root element\n    this.app = this.getElement('#root');\n\n    // The title of the app\n    this.title = this.createElement('h1');\n    this.title.textContent = 'Personal Library';\n\n    this.modal = this.createElement('div', 'modal');\n    this.modal.id = 'modal';\n\n    this.formTitle = this.createElement('h2');\n    this.formTitle = \"Add a Book\"\n    this.form = this.createElement('form');\n\n    // Create author form field\n    this.authorField = this.createFormField(\"author\")\n\n    // Create the book title form field\n    this.titleField = this.createFormField(\"title\");\n\n    // Create the book pages form field\n    this.pagesField = this.createFormField(\"pages\");\n\n    // Create the read status form field\n    this.readField = this.createFormField(\"status\");\n\n    this.fullWidth = this.createElement('div', 'full-width');\n    this.addButton = this.createElement('button');\n    this.addButton.textContent = \"Add\";\n    this.addButton.setAttribute('type', 'submit');\n    this.clearButtton = this.createElement('button');\n    this.clearButtton.textContent = \"Clear\"\n    this.clearButtton.setAttribute('type', 'reset');\n    this.fullWidth.append(this.addButton, this.clearButtton);\n\n\n    this.form.append(\n      this.authorField, \n      this.titleField, \n      this.pagesField,\n      this.readField,\n      this.fullWidth\n    );\n\n    this.modal.append(this.formTitle, this.form);\n\n    this.booksTable = this.createElement('table');\n    this.row = this.createElement('tr');\n    this.authHeader = this.createElement('th');\n    this.authHeader.textContent = 'Author';\n    this.titleHeader = this.createElement('th');\n    this.titleHeader.textContent = 'Title';\n    this.pagesHeader = this.createElement('th');\n    this.pagesHeader.textContent = 'Pages';\n    this.statusHeader = this.createElement('th');\n    this.statusHeader.textContent = 'Status';\n\n    this.row.append(\n      this.authHeader,\n      this.titleHeader,\n      this.pagesHeader,\n      this.statusHeader\n    );\n\n    this.booksTable.append(this.row);\n\n    this.button = this.createElement('button', 'add-book');\n    this.button.type = \"button\";\n    this.button.textContent = 'Add Book';\n\n    this.button.addEventListener('click', e => {\n      e.preventDefault();\n      this.modal.style.display = 'block';\n    });\n\n    this.app.append(this.title, this.booksTable, this.button, this.modal)\n    \n  }\n\n  bindAddBook(handler) {\n    this.form.addEventListener('submit', event => {\n      event.preventDefault();\n      const title = document.getElementById('title');\n      const author = document.getElementById('author');\n      const pages = document.getElementById('pages');\n      const readStatus = document.getElementById('status')\n\n      if (readStatus.value === \"Read\") {\n        handler(title.value, author.value, pages.value, true);\n      } else {\n        handler(title.value, author.value, pages.value, false);\n      }\n      \n    });\n  }\n\n  bindDeleteBook(handler) {\n    this.booksTable.addEventListener('click', event => {\n      if (event.target.className === 'delete') {\n        handler(event.target.id);\n      }\n    });\n  }\n\n  bindToggleRead(handler) {\n    this.booksTable.addEventListener('click', event => {\n      if (event.target.className === 'status') {\n        handler('title')\n      }\n    })\n  }\n\n  displayBooks(books) {\n    while (this.booksTable.children[1]) {\n      this.booksTable.removeChild(this.booksTable.children[1])\n    }\n\n    if (books.length === 0) {\n      const p = this.createElement('p');\n      p.textContent = \"No booksTable to Show\";\n      this.booksTable.append(p);\n    } else {\n      books.forEach(book => {\n        // Create row element\n        const tableRow = this.createElement('tr');\n\n        // Create td element and add author\n        const authorData = this.createElement('td');\n        authorData.innerText = book.author;\n\n        // Create td and add title\n        const titleData = this.createElement('td');\n        titleData.innerText = book.title;\n\n        // Add pages to td element\n        const pagesData = this.createElement('td');\n        pagesData.innerText = book.pages;\n\n        // Render button depending on read status\n        const statusData = this.createElement('td');\n        const readBtn = this.createReadButton(book);\n        statusData.appendChild(readBtn);\n\n        const deleteData = this.createElement('td');\n\n        const deleteButton = this.createDeleteButton(book);\n\n        deleteData.appendChild(deleteButton);\n\n        tableRow.append(\n          authorData,\n          titleData,\n          pagesData,\n          statusData,\n          deleteData\n        );\n\n        this.booksTable.append(tableRow);\n      });\n    }\n  }\n\n  createDeleteButton(book) {\n    const deleteBtn = this.createElement('button');\n    deleteBtn.setAttribute('type', 'button');\n    deleteBtn.setAttribute('id', `${book.title}`);\n    deleteBtn.classList.add('delete');\n    deleteBtn.innerText = \"Delete\";\n\n    return deleteBtn;\n}\n\n  createReadButton(book) {\n    const readBtn = this.createElement('button');\n    readBtn.setAttribute('type', 'button');\n    if (book.readStatus) {\n        readBtn.classList.add(\"status\", \"read\");\n        readBtn.innerText = \"Read\";\n    } else {\n        readBtn.classList.add(\"status\", \"not-read\");\n        readBtn.innerText = \"Not Read\";\n    }\n\n    readBtn.addEventListener('click', e => {\n      e.preventDefault();\n      if (readBtn.innerText === \"Read\") {\n          readBtn.classList.replace(\"read\", \"not-read\");\n          readBtn.innerText = \"Not Read\"\n      } else if (readBtn.innerText === \"Not Read\") {\n          readBtn.classList.replace(\"not-read\", \"read\");\n          readBtn.innerText = \"Read\";\n      }\n    });\n    return readBtn;\n}\n\n  // Create a form field\n  createFormField(fieldText) {\n    // Create the book title form field\n    const formField = this.createElement('div', 'form-item');\n    const formFieldLabel = this.createElement('label');\n    formFieldLabel.setAttribute(\"for\", fieldText);\n    formFieldLabel.textContent = fieldText.toUpperCase();\n\n    let formInput;\n\n    if (fieldText === \"status\") {\n      formInput = this.createElement('select');\n      formInput.setAttribute(\"type\" , \"select\");\n      const readOption = this.createElement('option');\n      readOption.text = \"Read\";\n      const unreadOption = this.createElement('option');\n      unreadOption.text = \"Not Read\";\n      formInput.add(readOption);\n      formInput.add(unreadOption);\n    } \n    \n    if (fieldText === \"pages\") {\n      formInput = this.createElement('input');\n      formInput.type = \"number\";\n      formInput.min = \"0\";\n    } \n    \n    if (fieldText === \"author\" || fieldText === \"title\"){\n      formInput = this.createElement('input');\n      formInput.type = \"text\";\n    }\n\n    formInput.id = fieldText;\n    formInput.name = fieldText;\n    formInput.required = true;\n\n    formField.append(formFieldLabel, this.createElement('br'), formInput);\n\n    return formField;\n\n  }\n\n  createLabel(text) {\n    const formField = this.createElement('div', 'form-item');\n    const formFieldLabel = this.createElement('label');\n    formFieldLabel.setAttribute(\"for\", text);\n    formFieldLabel.textContent = text.toUpperCase();\n\n    return formField;\n  }\n\n  // Create an element with an optional CSS class\n  createElement(tag, className) {\n    const element = document.createElement(tag);\n    if (className) element.classList.add(className);\n\n    return element;\n  }\n\n  // Retrieve an element from the DOM\n  getElement(selector) {\n    const element = document.querySelector(selector);\n\n    return element;\n  }\n}\n\n//# sourceURL=webpack://objects/./src/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;