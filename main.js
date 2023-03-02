/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/border-decor.png */ "./src/images/border-decor.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tacos.jpg */ "./src/images/tacos.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/flare.png */ "./src/images/flare.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --nav-height: 75px;\n  --border-offset: 0px;\n  --color-nav-dark: #008a35;\n  --color-nav: #009f3c;\n  --color-nav-light: #00b847;\n  --color-light: white;\n  --color-background: #fdf4e3;\n  --color-pink: #d94b93;\n  --color-orange: #f49e17;\n  --color-yellow: #f8c31b;\n  --color-green: #009f3c;\n  --color-purple: #a53a89;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Signika', sans-serif;\n  color: var(--color-dark);\n  box-sizing: border-box;\n}\n\nhtml {\n  position: relative;\n}\n\nbody {\n  background-color: var(--color-background);\n}\n\nmain {\n  min-height: 100dvh;\n  margin-top: var(--nav-height);\n  padding-bottom: 50px;\n}\n\n.border {\n  position: absolute;\n  bottom: 0;\n  z-index: -1;\n  width: 100px;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n}\n.border.left {\n  left: var(--border-offset);\n}\n.border.right {\n  right: var(--border-offset);\n  transform: scaleX(-1);\n  overflow: hidden;\n}\n\n.orange :is(.plaque, .price) {\n  background-color: var(--color-orange);\n}\n.pink :is(.plaque, .price) {\n  background-color: var(--color-pink);\n}\n.green :is(.plaque, .price) {\n  background-color: var(--color-green);\n}\n\n/* NAVBAR */\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  width: 100dvw;\n  height: var(--nav-height);\n  padding: 0px 100px;\n  border-bottom: 6px double rgba(0, 0, 0, 0.1);\n  background: var(--color-nav);\n  background: linear-gradient(\n    90deg,\n    var(--color-nav-dark) 0%,\n    var(--color-nav) 35%,\n    var(--color-nav-light) 100%\n  );\n}\n\n.logo-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform: translate(100px, 20px);\n}\n\n.logo:hover {\n  cursor: pointer;\n}\n\n.nav-bar {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  width: max-content;\n  height: 100%;\n  list-style: none;\n}\n\n.nav-link button {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0px 20px;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background-color: transparent;\n  font-family: 'Permanent Marker', cursive;\n  font-size: 1.5rem;\n}\n\n.nav-link button:hover {\n  border-bottom: 2px solid var(--color-light);\n  text-shadow: black 1px 0 10px;\n  color: var(--color-light);\n  cursor: pointer;\n}\n\n.nav-link .active {\n  background: rgba(0, 0, 0, 0.3);\n  text-shadow: black 1px 0 10px;\n  color: var(--color-light);\n  cursor: pointer;\n}\n\n/* HOME */\n\n.home .hero {\n  height: 40vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.about {\n  max-width: min(80%, 900px);\n  margin: auto;\n}\n\n.about h3 {\n  margin: 20px 0;\n  font-size: 2rem;\n}\n\n.about p {\n  margin: 20px 0;\n  font-size: 1.3rem;\n  font-weight: 300;\n}\n\n.home .plaque {\n  margin: auto;\n  background-color: var(--color-orange);\n  font-size: 1.8rem;\n}\n\n/* MENU */\n\n.menu {\n  max-width: min(80%, 700px);\n  margin: auto;\n  padding-top: 75px;\n}\n\n.heading-group {\n  display: grid;\n  max-width: 400px;\n  margin: auto;\n  text-align: center;\n  place-items: center;\n}\n\n.heading-group p {\n  font-style: italic;\n}\n\n.plaque {\n  position: relative;\n  width: max-content;\n  margin-bottom: 0.2rem;\n  padding: 5px 20px;\n  border-radius: 3px;\n  font-family: 'Permanent Marker', cursive;\n}\n\n.flare {\n  content: '';\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  width: 30px;\n  height: 30px;\n  margin-bottom: auto;\n  margin-top: auto;\n  border-radius: 50%;\n  background-color: inherit;\n}\n.flare:nth-child(1) {\n  left: 0px;\n  transform: translateX(-50%);\n}\n.flare:nth-child(3) {\n  right: 0px;\n  transform: translateX(50%);\n}\n\n.flare:nth-child(1)::before,\n.flare:nth-child(3)::after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 120%;\n  margin-bottom: auto;\n  margin-top: auto;\n  background-color: transparent;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.flare:nth-child(1)::before {\n  right: 0;\n  transform: scale(-1) translateX(110%);\n}\n.flare:nth-child(3)::after {\n  left: 0;\n  transform: translateX(110%);\n}\n\n.menu li {\n  margin: 8px 0;\n  list-style: none;\n}\n\n.menu-item,\n.price {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.price {\n  width: max-content;\n  padding: 2px 10px;\n  border-radius: 5px;\n}\n\n.description {\n  font-style: italic;\n  font-weight: 300;\n}\n\nul.leaders {\n  padding: 0;\n  overflow-x: hidden;\n}\n\nul.leaders li:before {\n  content: '. . . . . . . . . . . . . . . . . . . . . . . . '\n    '. . . . . . . . . . . . . . . . . . . . . . . . '\n    '. . . . . . . . . . . . . . . . . . . . . . . . '\n    '. . . . . . . . . . . . . . . . . . . . . . . . ';\n  width: 0;\n  float: left;\n  white-space: nowrap;\n}\n\nul.leaders span:first-child {\n  padding-right: 0.33rem;\n  background-color: var(--color-background);\n}\n\nul.leaders span + span {\n  float: right;\n}\n\n/* CONTACT */\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: min(80%, 900px);\n  margin: auto;\n  padding-top: 75px;\n  gap: 10px;\n}\n\n.phone {\n  padding: 5px 20px;\n  border: 4px solid var(--color-yellow);\n  border-radius: 8px;\n  background-color: var(--color-orange);\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--color-light);\n}\n\n.address span {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  text-align: center;\n}\n\niframe {\n  margin: 20px;\n}\n\n.open-hours {\n  list-style: none;\n}\n\n.open-hours li {\n  margin: 5px;\n  border-radius: 8px;\n  background-color: var(--color-purple);\n}\n\n.open-hours .today {\n  border: 4px solid var(--color-purple);\n  background-color: var(--color-pink);\n}\n\n.days,\n.hours {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  font-size: 1.3rem;\n  font-weight: 700;\n  text-align: center;\n  color: var(--color-light);\n  gap: 10px;\n}\n\n.hours {\n  padding: 5px 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');\n\n:root {\n  --nav-height: 75px;\n  --border-offset: 0px;\n  --color-nav-dark: #008a35;\n  --color-nav: #009f3c;\n  --color-nav-light: #00b847;\n  --color-light: white;\n  --color-background: #fdf4e3;\n  --color-pink: #d94b93;\n  --color-orange: #f49e17;\n  --color-yellow: #f8c31b;\n  --color-green: #009f3c;\n  --color-purple: #a53a89;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Signika', sans-serif;\n  color: var(--color-dark);\n  box-sizing: border-box;\n}\n\nhtml {\n  position: relative;\n}\n\nbody {\n  background-color: var(--color-background);\n}\n\nmain {\n  min-height: 100dvh;\n  margin-top: var(--nav-height);\n  padding-bottom: 50px;\n}\n\n.border {\n  position: absolute;\n  bottom: 0;\n  z-index: -1;\n  width: 100px;\n  height: 100%;\n  background-image: url('../src/images/border-decor.png');\n  background-size: 100%;\n}\n.border.left {\n  left: var(--border-offset);\n}\n.border.right {\n  right: var(--border-offset);\n  transform: scaleX(-1);\n  overflow: hidden;\n}\n\n.orange :is(.plaque, .price) {\n  background-color: var(--color-orange);\n}\n.pink :is(.plaque, .price) {\n  background-color: var(--color-pink);\n}\n.green :is(.plaque, .price) {\n  background-color: var(--color-green);\n}\n\n/* NAVBAR */\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  width: 100dvw;\n  height: var(--nav-height);\n  padding: 0px 100px;\n  border-bottom: 6px double rgba(0, 0, 0, 0.1);\n  background: var(--color-nav);\n  background: linear-gradient(\n    90deg,\n    var(--color-nav-dark) 0%,\n    var(--color-nav) 35%,\n    var(--color-nav-light) 100%\n  );\n}\n\n.logo-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform: translate(100px, 20px);\n}\n\n.logo:hover {\n  cursor: pointer;\n}\n\n.nav-bar {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  width: max-content;\n  height: 100%;\n  list-style: none;\n}\n\n.nav-link button {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0px 20px;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background-color: transparent;\n  font-family: 'Permanent Marker', cursive;\n  font-size: 1.5rem;\n}\n\n.nav-link button:hover {\n  border-bottom: 2px solid var(--color-light);\n  text-shadow: black 1px 0 10px;\n  color: var(--color-light);\n  cursor: pointer;\n}\n\n.nav-link .active {\n  background: rgba(0, 0, 0, 0.3);\n  text-shadow: black 1px 0 10px;\n  color: var(--color-light);\n  cursor: pointer;\n}\n\n/* HOME */\n\n.home .hero {\n  height: 40vh;\n  background-image: url('./images/tacos.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.about {\n  max-width: min(80%, 900px);\n  margin: auto;\n}\n\n.about h3 {\n  margin: 20px 0;\n  font-size: 2rem;\n}\n\n.about p {\n  margin: 20px 0;\n  font-size: 1.3rem;\n  font-weight: 300;\n}\n\n.home .plaque {\n  margin: auto;\n  background-color: var(--color-orange);\n  font-size: 1.8rem;\n}\n\n/* MENU */\n\n.menu {\n  max-width: min(80%, 700px);\n  margin: auto;\n  padding-top: 75px;\n}\n\n.heading-group {\n  display: grid;\n  max-width: 400px;\n  margin: auto;\n  text-align: center;\n  place-items: center;\n}\n\n.heading-group p {\n  font-style: italic;\n}\n\n.plaque {\n  position: relative;\n  width: max-content;\n  margin-bottom: 0.2rem;\n  padding: 5px 20px;\n  border-radius: 3px;\n  font-family: 'Permanent Marker', cursive;\n}\n\n.flare {\n  content: '';\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  width: 30px;\n  height: 30px;\n  margin-bottom: auto;\n  margin-top: auto;\n  border-radius: 50%;\n  background-color: inherit;\n}\n.flare:nth-child(1) {\n  left: 0px;\n  transform: translateX(-50%);\n}\n.flare:nth-child(3) {\n  right: 0px;\n  transform: translateX(50%);\n}\n\n.flare:nth-child(1)::before,\n.flare:nth-child(3)::after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 120%;\n  margin-bottom: auto;\n  margin-top: auto;\n  background-color: transparent;\n  background-image: url('../src/images/flare.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.flare:nth-child(1)::before {\n  right: 0;\n  transform: scale(-1) translateX(110%);\n}\n.flare:nth-child(3)::after {\n  left: 0;\n  transform: translateX(110%);\n}\n\n.menu li {\n  margin: 8px 0;\n  list-style: none;\n}\n\n.menu-item,\n.price {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.price {\n  width: max-content;\n  padding: 2px 10px;\n  border-radius: 5px;\n}\n\n.description {\n  font-style: italic;\n  font-weight: 300;\n}\n\nul.leaders {\n  padding: 0;\n  overflow-x: hidden;\n}\n\nul.leaders li:before {\n  content: '. . . . . . . . . . . . . . . . . . . . . . . . '\n    '. . . . . . . . . . . . . . . . . . . . . . . . '\n    '. . . . . . . . . . . . . . . . . . . . . . . . '\n    '. . . . . . . . . . . . . . . . . . . . . . . . ';\n  width: 0;\n  float: left;\n  white-space: nowrap;\n}\n\nul.leaders span:first-child {\n  padding-right: 0.33rem;\n  background-color: var(--color-background);\n}\n\nul.leaders span + span {\n  float: right;\n}\n\n/* CONTACT */\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: min(80%, 900px);\n  margin: auto;\n  padding-top: 75px;\n  gap: 10px;\n}\n\n.phone {\n  padding: 5px 20px;\n  border: 4px solid var(--color-yellow);\n  border-radius: 8px;\n  background-color: var(--color-orange);\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--color-light);\n}\n\n.address span {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  text-align: center;\n}\n\niframe {\n  margin: 20px;\n}\n\n.open-hours {\n  list-style: none;\n}\n\n.open-hours li {\n  margin: 5px;\n  border-radius: 8px;\n  background-color: var(--color-purple);\n}\n\n.open-hours .today {\n  border: 4px solid var(--color-purple);\n  background-color: var(--color-pink);\n}\n\n.days,\n.hours {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  font-size: 1.3rem;\n  font-weight: 700;\n  text-align: center;\n  color: var(--color-light);\n  gap: 10px;\n}\n\n.hours {\n  padding: 5px 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContactPage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.setAttribute('class', 'contact');

  const phone = document.createElement('p');
  phone.classList.add('phone');
  phone.innerHTML = '•&nbsp&nbsp&nbsp617.776.1200&nbsp&nbsp&nbsp•';
  content.appendChild(phone);

  const address = document.createElement('p');
  address.classList.add('address');
  address.innerHTML = '<span>99 BROADWAY</span><span>SOMERVILLE MA 02145</span>';

  const map = document.createElement('iframe');
  const mapAttributes = {
    src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11787.53065929243!2d-71.082899!3d42.387646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370da541bb861%3A0xfc9837acaa355e15!2sRincon%20Mexicano%20Somerville!5e0!3m2!1sen!2sus!4v1677221759579!5m2!1sen!2sus',
    width: '500',
    height: '375',
    style: 'border:0;',
    allowfullscreen: '',
    loading: 'lazy',
    referrerpolicy: 'no-referrer-when-downgrade',
  };
  for (const [key, value] of Object.entries(mapAttributes)) {
    map.setAttribute(key, value);
  }

  content.appendChild(address);
  content.appendChild(map);

  const openHours = document.createElement('ul');
  openHours.classList.add('open-hours');
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const hours = [
    '10:30AM - 10:00PM',
    '5:00PM - 10:00PM',
    '10:30AM - 10:00PM',
    '10:30AM - 10:00PM',
    '10:30AM - 10:00PM',
    '10:30AM - 10:00PM',
    '10:30AM - 10:00PM',
  ];
  const now = new Date();
  const today = now.getDay();
  for (let i = 0; i < days.length; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('hours');
    if (i === today) listItem.classList.add('today');

    const day = document.createElement('span');
    day.classList.add('day');
    day.textContent = days[i];
    listItem.appendChild(day);

    const hour = document.createElement('span');
    hour.classList.add('time');
    hour.textContent = hours[i];
    listItem.appendChild(hour);

    openHours.appendChild(listItem);
  }
  content.appendChild(openHours);

  parent.appendChild(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHomePage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.classList.add('home');

  const heroGroup = document.createElement('div');
  heroGroup.classList.add('hero');
  content.appendChild(heroGroup);

  const aboutSection = document.createElement('section');
  aboutSection.setAttribute('id', 'about');
  aboutSection.setAttribute('class', 'about');

  const intro = document.createElement('h3');
  intro.textContent = 'From our Family to yours.....';
  aboutSection.appendChild(intro);

  const paragraphs = [
    'In 1989, Chef Lorenzo Reyes moved to the United States with the dream of opening a restaurant that would showcase the best of Mexican cuisine. As he worked to establish his family in their new home country, the dream had to emerge over 25 long years. But, Chef Lorenzo never let go of his vision.',
    'While working in commercial kitchens all around the Boston area, Chef Lorenzo held on to his ultimate dream of opening his own place. Every year for 25 years, he traveled to different regions of Mexico in order to study and expand his knowledge of local cooking techniques, ingredients and recipes. Over the years tasting food from all over Mexico and talking and practicing with cooks living there, including his mom and dad, aunts and uncles, Chef Lorenzo honed his culinary style to delicious perfection.',
    'Finally, after studying, sampling, and learning in-depth about all the different styles of regional Mexican cooking - and unable to deny his life-long dream any longer - he opened <strong>Rincon Mexicano</strong> in May 2014.',
    'Owned and operated by Chef Lorenzo Reyes along with his brother Ricardo, brother-in-law Andreas, and daughter Yvette, he brings all he has learned to <strong>Rincon Mexicano</strong> for your dining pleasure. ',
  ];
  paragraphs.forEach((paraText) => {
    const para = document.createElement('p');
    para.innerHTML = paraText;
    aboutSection.appendChild(para);
  });
  content.appendChild(aboutSection);

  const plaqueGroup = document.createElement('div');
  const flareLeft = document.createElement('span');
  const flareRight = document.createElement('span');
  const signOff = document.createElement('h2');
  signOff.innerText = 'Buen Provecho!';
  signOff.classList.add('plaque', 'orange');

  plaqueGroup.appendChild(flareLeft);
  plaqueGroup.appendChild(signOff);
  plaqueGroup.appendChild(flareRight);
  plaqueGroup.classList.add('plaque');
  flareLeft.classList.add('flare');
  flareRight.classList.add('flare');
  content.appendChild(plaqueGroup);

  parent.appendChild(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadMenuPage(parent) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.classList.add('menu');

  const plates = {
    Enchiladas: [
      '$14.99',
      'Three corn tortillas topped with Mexican sour cream & white cheese with choice of mole (mole contains peanuts) or green sauce. Choice of: Chicken or Beef',
    ],
    Quesadillas: [
      '$13.99',
      'Flour tortilla filled with Monterrey cheese with guacamole & Mexican sour cream inside. Choice of: Chicken, Beef, or Vegetarian',
    ],
    'Chiles rellenos': ['$19.99', 'Two Poblano peppers filled with ground beef & cheese.'],
    'Carne asada': ['$17.99', 'Grilled, marinated beef.'],
  };
  const plateSection = generateMenuSection(
    'Mexican Plates',
    'Served with rice & pinto refried beans',
    plates
  );
  plateSection.classList.add('orange');
  content.appendChild(plateSection);

  const tacos = {
    'Carne asada': ['$4.25', 'Marinated grilled beef'],
    Carnitas: ['$4.25', 'Slow-cooked, shredded pork'],
    Chorizo: ['$4.25', 'Spicy sausage'],
    Lengua: ['$4.25', 'Beef tongue'],
    Cabeza: ['$4.25', 'Cow head'],
  };
  const tacosSection = generateMenuSection(
    'Tacos',
    'All served with cilantro and onions. Extras: lettuce, guacamole, & cheese',
    tacos
  );
  tacosSection.classList.add('green');
  content.appendChild(tacosSection);

  const burritos = {
    Pollo: ['$13.50', 'Chicken'],
    'Carne asada': ['$13.50', 'Marinated grilled beef'],
    'Al pastor': ['$13.50', 'Marinated pork with pineapple'],
    Carnitas: ['$13.50', 'Slow-cooked, shredded pork'],
  };
  const burritosSection = generateMenuSection(
    'Burritos',
    'Served with rice, black beans, pico de gallo, guacamole, sour cream, cheese, & jalapenos',
    burritos
  );
  burritosSection.classList.add('pink');
  content.appendChild(burritosSection);

  parent.appendChild(content);
}

// menuItems should be formatted as {name: [price, description]}
function generateMenuSection(headingText, subtitleText, menuItems) {
  const section = document.createElement('section');
  const headingGroup = document.createElement('div');
  const plaqueGroup = document.createElement('div');
  const flareLeft = document.createElement('span');
  const flareRight = document.createElement('span');
  const heading = document.createElement('h2');
  const subtitle = document.createElement('p');

  section.appendChild(headingGroup);
  headingGroup.appendChild(plaqueGroup);
  headingGroup.appendChild(subtitle);
  plaqueGroup.appendChild(flareLeft);
  plaqueGroup.appendChild(heading);
  plaqueGroup.appendChild(flareRight);

  headingGroup.classList.add('heading-group');
  plaqueGroup.classList.add('plaque');
  flareLeft.classList.add('flare');
  flareRight.classList.add('flare');

  heading.textContent = headingText;
  subtitle.textContent = subtitleText;

  const list = document.createElement('ul');
  list.classList.add('leaders');
  for (const [name, [price, description]] of Object.entries(menuItems)) {
    const listItem = document.createElement('li');
    const nameItem = document.createElement('span');
    const priceItem = document.createElement('span');
    const descriptionItem = document.createElement('p');

    nameItem.textContent = name;
    nameItem.classList.add('menu-item');
    priceItem.textContent = price;
    priceItem.classList.add('price');
    descriptionItem.textContent = description;
    descriptionItem.classList.add('description');

    listItem.appendChild(nameItem);
    listItem.appendChild(priceItem);
    listItem.appendChild(descriptionItem);
    list.appendChild(listItem);
  }
  section.appendChild(list);

  return section;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);


/***/ }),

/***/ "./src/images/border-decor.png":
/*!*************************************!*\
  !*** ./src/images/border-decor.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2734d5f895823cb78320.png";

/***/ }),

/***/ "./src/images/flare.png":
/*!******************************!*\
  !*** ./src/images/flare.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8db576910646273b3530.png";

/***/ }),

/***/ "./src/images/tacos.jpg":
/*!******************************!*\
  !*** ./src/images/tacos.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2a14e7146632bf8d047.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const main = document.querySelector('main');
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('.nav-link>button');
const homeNav = document.querySelector('#home-button');

logo.addEventListener('click', loadPageContent);
navLinks.forEach((navLink) => navLink.addEventListener('click', loadPageContent));
(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])(main);

function loadPageContent(event) {
  navLinks.forEach((link) => link.classList.remove('active'));
  event.currentTarget.classList.add('active');

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  clearContent(main);
  if (event.currentTarget.id === 'logo' || event.currentTarget.id === 'home-button') {
    homeNav.classList.add('active');
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])(main);
  }
  if (event.currentTarget.id === 'menu-button') (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(main);
  if (event.currentTarget.id === 'contact-button') (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])(main);
}

function clearContent(parent) {
  parent.innerText = '';
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG9JQUFpRDtBQUM3Riw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0QyxzSEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixnSEFBZ0gsSUFBSSxJQUFJLElBQUksa0JBQWtCO0FBQzlJLDhIQUE4SDtBQUM5SCx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCx1QkFBdUIseUJBQXlCLDhCQUE4Qix5QkFBeUIsK0JBQStCLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLDRCQUE0Qiw0QkFBNEIsMkJBQTJCLDRCQUE0QixHQUFHLE9BQU8sY0FBYyxlQUFlLHVDQUF1Qyw2QkFBNkIsMkJBQTJCLEdBQUcsVUFBVSx1QkFBdUIsR0FBRyxVQUFVLDhDQUE4QyxHQUFHLFVBQVUsdUJBQXVCLGtDQUFrQyx5QkFBeUIsR0FBRyxhQUFhLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsaUJBQWlCLHNFQUFzRSwwQkFBMEIsR0FBRyxnQkFBZ0IsK0JBQStCLEdBQUcsaUJBQWlCLGdDQUFnQywwQkFBMEIscUJBQXFCLEdBQUcsa0NBQWtDLDBDQUEwQyxHQUFHLDhCQUE4Qix3Q0FBd0MsR0FBRywrQkFBK0IseUNBQXlDLEdBQUcsNEJBQTRCLGtCQUFrQix3QkFBd0IseUJBQXlCLG9CQUFvQixXQUFXLGVBQWUsa0JBQWtCLDhCQUE4Qix1QkFBdUIsaURBQWlELGlDQUFpQyw2SUFBNkksR0FBRyxxQkFBcUIsdUJBQXVCLFlBQVksV0FBVyxzQ0FBc0MsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsY0FBYyxrQkFBa0IsMENBQTBDLHVCQUF1QixpQkFBaUIscUJBQXFCLEdBQUcsc0JBQXNCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixpQkFBaUIseUNBQXlDLGtDQUFrQyw2Q0FBNkMsc0JBQXNCLEdBQUcsNEJBQTRCLGdEQUFnRCxrQ0FBa0MsOEJBQThCLG9CQUFvQixHQUFHLHVCQUF1QixtQ0FBbUMsa0NBQWtDLDhCQUE4QixvQkFBb0IsR0FBRywrQkFBK0IsaUJBQWlCLHNFQUFzRSxnQ0FBZ0MsaUNBQWlDLDJCQUEyQixHQUFHLFlBQVksK0JBQStCLGlCQUFpQixHQUFHLGVBQWUsbUJBQW1CLG9CQUFvQixHQUFHLGNBQWMsbUJBQW1CLHNCQUFzQixxQkFBcUIsR0FBRyxtQkFBbUIsaUJBQWlCLDBDQUEwQyxzQkFBc0IsR0FBRyx5QkFBeUIsK0JBQStCLGlCQUFpQixzQkFBc0IsR0FBRyxvQkFBb0Isa0JBQWtCLHFCQUFxQixpQkFBaUIsdUJBQXVCLHdCQUF3QixHQUFHLHNCQUFzQix1QkFBdUIsR0FBRyxhQUFhLHVCQUF1Qix1QkFBdUIsMEJBQTBCLHNCQUFzQix1QkFBdUIsNkNBQTZDLEdBQUcsWUFBWSxnQkFBZ0IsdUJBQXVCLGFBQWEsZ0JBQWdCLGdCQUFnQixpQkFBaUIsd0JBQXdCLHFCQUFxQix1QkFBdUIsOEJBQThCLEdBQUcsdUJBQXVCLGNBQWMsZ0NBQWdDLEdBQUcsdUJBQXVCLGVBQWUsK0JBQStCLEdBQUcsOERBQThELGdCQUFnQix1QkFBdUIsYUFBYSxnQkFBZ0IsZ0JBQWdCLGlCQUFpQix3QkFBd0IscUJBQXFCLGtDQUFrQyxzRUFBc0UsaUNBQWlDLDZCQUE2QixHQUFHLCtCQUErQixhQUFhLDBDQUEwQyxHQUFHLDhCQUE4QixZQUFZLGdDQUFnQyxHQUFHLGNBQWMsa0JBQWtCLHFCQUFxQixHQUFHLHlCQUF5QixzQkFBc0Isc0JBQXNCLEdBQUcsWUFBWSx1QkFBdUIsc0JBQXNCLHVCQUF1QixHQUFHLGtCQUFrQix1QkFBdUIscUJBQXFCLEdBQUcsZ0JBQWdCLGVBQWUsdUJBQXVCLEdBQUcsMEJBQTBCLHdPQUF3TyxhQUFhLGdCQUFnQix3QkFBd0IsR0FBRyxpQ0FBaUMsMkJBQTJCLDhDQUE4QyxHQUFHLDRCQUE0QixpQkFBaUIsR0FBRywrQkFBK0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsK0JBQStCLGlCQUFpQixzQkFBc0IsY0FBYyxHQUFHLFlBQVksc0JBQXNCLDBDQUEwQyx1QkFBdUIsMENBQTBDLG9CQUFvQixxQkFBcUIsOEJBQThCLEdBQUcsbUJBQW1CLG1CQUFtQixzQkFBc0IscUJBQXFCLHVCQUF1QixHQUFHLFlBQVksaUJBQWlCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLG9CQUFvQixnQkFBZ0IsdUJBQXVCLDBDQUEwQyxHQUFHLHdCQUF3QiwwQ0FBMEMsd0NBQXdDLEdBQUcsb0JBQW9CLGtCQUFrQixtQ0FBbUMsc0JBQXNCLHFCQUFxQix1QkFBdUIsOEJBQThCLGNBQWMsR0FBRyxZQUFZLHNCQUFzQixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxpR0FBaUcs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEQ1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNHNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDQTtBQUNNO0FBQ25COztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQiwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVk7QUFDaEI7QUFDQSxnREFBZ0QsaURBQVk7QUFDNUQsbURBQW1ELG9EQUFlO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2JvcmRlci1kZWNvci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy90YWNvcy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2ZsYXJlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2lnbmlrYTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGVybWFuZW50K01hcmtlciZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW5hdi1oZWlnaHQ6IDc1cHg7XFxuICAtLWJvcmRlci1vZmZzZXQ6IDBweDtcXG4gIC0tY29sb3ItbmF2LWRhcms6ICMwMDhhMzU7XFxuICAtLWNvbG9yLW5hdjogIzAwOWYzYztcXG4gIC0tY29sb3ItbmF2LWxpZ2h0OiAjMDBiODQ3O1xcbiAgLS1jb2xvci1saWdodDogd2hpdGU7XFxuICAtLWNvbG9yLWJhY2tncm91bmQ6ICNmZGY0ZTM7XFxuICAtLWNvbG9yLXBpbms6ICNkOTRiOTM7XFxuICAtLWNvbG9yLW9yYW5nZTogI2Y0OWUxNztcXG4gIC0tY29sb3IteWVsbG93OiAjZjhjMzFiO1xcbiAgLS1jb2xvci1ncmVlbjogIzAwOWYzYztcXG4gIC0tY29sb3ItcHVycGxlOiAjYTUzYTg5O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1NpZ25pa2EnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxufVxcblxcbm1haW4ge1xcbiAgbWluLWhlaWdodDogMTAwZHZoO1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tbmF2LWhlaWdodCk7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmJvcmRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcbi5ib3JkZXIubGVmdCB7XFxuICBsZWZ0OiB2YXIoLS1ib3JkZXItb2Zmc2V0KTtcXG59XFxuLmJvcmRlci5yaWdodCB7XFxuICByaWdodDogdmFyKC0tYm9yZGVyLW9mZnNldCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ub3JhbmdlIDppcygucGxhcXVlLCAucHJpY2UpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9yYW5nZSk7XFxufVxcbi5waW5rIDppcygucGxhcXVlLCAucHJpY2UpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXBpbmspO1xcbn1cXG4uZ3JlZW4gOmlzKC5wbGFxdWUsIC5wcmljZSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xcbn1cXG5cXG4vKiBOQVZCQVIgKi9cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwZHZ3O1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBkb3VibGUgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbmF2KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgOTBkZWcsXFxuICAgIHZhcigtLWNvbG9yLW5hdi1kYXJrKSAwJSxcXG4gICAgdmFyKC0tY29sb3ItbmF2KSAzNSUsXFxuICAgIHZhcigtLWNvbG9yLW5hdi1saWdodCkgMTAwJVxcbiAgKTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMjBweCk7XFxufVxcblxcbi5sb2dvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubmF2LWxpbmsgYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm5hdi1saW5rIGJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAwIDEwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWxpbmsgLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDAgMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEhPTUUgKi9cXG5cXG4uaG9tZSAuaGVybyB7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5hYm91dCB7XFxuICBtYXgtd2lkdGg6IG1pbig4MCUsIDkwMHB4KTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmFib3V0IGgzIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmhvbWUgLnBsYXF1ZSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vcmFuZ2UpO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi8qIE1FTlUgKi9cXG5cXG4ubWVudSB7XFxuICBtYXgtd2lkdGg6IG1pbig4MCUsIDcwMHB4KTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xcbn1cXG5cXG4uaGVhZGluZy1ncm91cCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkaW5nLWdyb3VwIHAge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucGxhcXVlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmZsYXJlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBib3R0b206IDBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4uZmxhcmU6bnRoLWNoaWxkKDEpIHtcXG4gIGxlZnQ6IDBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmZsYXJlOm50aC1jaGlsZCgzKSB7XFxuICByaWdodDogMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcblxcbi5mbGFyZTpudGgtY2hpbGQoMSk6OmJlZm9yZSxcXG4uZmxhcmU6bnRoLWNoaWxkKDMpOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTIwJTtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuLmZsYXJlOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSkgdHJhbnNsYXRlWCgxMTAlKTtcXG59XFxuLmZsYXJlOm50aC1jaGlsZCgzKTo6YWZ0ZXIge1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMTAlKTtcXG59XFxuXFxuLm1lbnUgbGkge1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tZW51LWl0ZW0sXFxuLnByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmljZSB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbnVsLmxlYWRlcnMge1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxudWwubGVhZGVycyBsaTpiZWZvcmUge1xcbiAgY29udGVudDogJy4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuICdcXG4gICAgJy4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuICdcXG4gICAgJy4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuICdcXG4gICAgJy4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuICc7XFxuICB3aWR0aDogMDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxudWwubGVhZGVycyBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMzNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxudWwubGVhZGVycyBzcGFuICsgc3BhbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG5cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IG1pbig4MCUsIDkwMHB4KTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGhvbmUge1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci15ZWxsb3cpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcbn1cXG5cXG4uYWRkcmVzcyBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pZnJhbWUge1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ub3Blbi1ob3VycyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ub3Blbi1ob3VycyBsaSB7XFxuICBtYXJnaW46IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XFxufVxcblxcbi5vcGVuLWhvdXJzIC50b2RheSB7XFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1wdXJwbGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGluayk7XFxufVxcblxcbi5kYXlzLFxcbi5ob3VycyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmhvdXJzIHtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFD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O0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTs7O3NEQUdvRDtFQUNwRCxRQUFRO0VBQ1IsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2lnbmlrYTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGVybWFuZW50K01hcmtlciZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLW5hdi1oZWlnaHQ6IDc1cHg7XFxuICAtLWJvcmRlci1vZmZzZXQ6IDBweDtcXG4gIC0tY29sb3ItbmF2LWRhcms6ICMwMDhhMzU7XFxuICAtLWNvbG9yLW5hdjogIzAwOWYzYztcXG4gIC0tY29sb3ItbmF2LWxpZ2h0OiAjMDBiODQ3O1xcbiAgLS1jb2xvci1saWdodDogd2hpdGU7XFxuICAtLWNvbG9yLWJhY2tncm91bmQ6ICNmZGY0ZTM7XFxuICAtLWNvbG9yLXBpbms6ICNkOTRiOTM7XFxuICAtLWNvbG9yLW9yYW5nZTogI2Y0OWUxNztcXG4gIC0tY29sb3IteWVsbG93OiAjZjhjMzFiO1xcbiAgLS1jb2xvci1ncmVlbjogIzAwOWYzYztcXG4gIC0tY29sb3ItcHVycGxlOiAjYTUzYTg5O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1NpZ25pa2EnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxufVxcblxcbm1haW4ge1xcbiAgbWluLWhlaWdodDogMTAwZHZoO1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tbmF2LWhlaWdodCk7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmJvcmRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL2ltYWdlcy9ib3JkZXItZGVjb3IucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcbi5ib3JkZXIubGVmdCB7XFxuICBsZWZ0OiB2YXIoLS1ib3JkZXItb2Zmc2V0KTtcXG59XFxuLmJvcmRlci5yaWdodCB7XFxuICByaWdodDogdmFyKC0tYm9yZGVyLW9mZnNldCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ub3JhbmdlIDppcygucGxhcXVlLCAucHJpY2UpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9yYW5nZSk7XFxufVxcbi5waW5rIDppcygucGxhcXVlLCAucHJpY2UpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXBpbmspO1xcbn1cXG4uZ3JlZW4gOmlzKC5wbGFxdWUsIC5wcmljZSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xcbn1cXG5cXG4vKiBOQVZCQVIgKi9cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwZHZ3O1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIGJvcmRlci1ib3R0b206IDZweCBkb3VibGUgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbmF2KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgOTBkZWcsXFxuICAgIHZhcigtLWNvbG9yLW5hdi1kYXJrKSAwJSxcXG4gICAgdmFyKC0tY29sb3ItbmF2KSAzNSUsXFxuICAgIHZhcigtLWNvbG9yLW5hdi1saWdodCkgMTAwJVxcbiAgKTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMjBweCk7XFxufVxcblxcbi5sb2dvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubmF2LWxpbmsgYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm5hdi1saW5rIGJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAwIDEwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWxpbmsgLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDAgMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEhPTUUgKi9cXG5cXG4uaG9tZSAuaGVybyB7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL3RhY29zLmpwZycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5hYm91dCB7XFxuICBtYXgtd2lkdGg6IG1pbig4MCUsIDkwMHB4KTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmFib3V0IGgzIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmhvbWUgLnBsYXF1ZSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vcmFuZ2UpO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi8qIE1FTlUgKi9cXG5cXG4ubWVudSB7XFxuICBtYXgtd2lkdGg6IG1pbig4MCUsIDcwMHB4KTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xcbn1cXG5cXG4uaGVhZGluZy1ncm91cCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkaW5nLWdyb3VwIHAge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucGxhcXVlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmZsYXJlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBib3R0b206IDBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4uZmxhcmU6bnRoLWNoaWxkKDEpIHtcXG4gIGxlZnQ6IDBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmZsYXJlOm50aC1jaGlsZCgzKSB7XFxuICByaWdodDogMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcblxcbi5mbGFyZTpudGgtY2hpbGQoMSk6OmJlZm9yZSxcXG4uZmxhcmU6bnRoLWNoaWxkKDMpOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTIwJTtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9pbWFnZXMvZmxhcmUucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG4uZmxhcmU6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xKSB0cmFuc2xhdGVYKDExMCUpO1xcbn1cXG4uZmxhcmU6bnRoLWNoaWxkKDMpOjphZnRlciB7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExMCUpO1xcbn1cXG5cXG4ubWVudSBsaSB7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1lbnUtaXRlbSxcXG4ucHJpY2Uge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaWNlIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxudWwubGVhZGVycyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG51bC5sZWFkZXJzIGxpOmJlZm9yZSB7XFxuICBjb250ZW50OiAnLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gJ1xcbiAgICAnLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gJ1xcbiAgICAnLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gJ1xcbiAgICAnLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gJztcXG4gIHdpZHRoOiAwO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG51bC5sZWFkZXJzIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogMC4zM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbn1cXG5cXG51bC5sZWFkZXJzIHNwYW4gKyBzcGFuIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLyogQ09OVEFDVCAqL1xcblxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogbWluKDgwJSwgOTAwcHgpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDc1cHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5waG9uZSB7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNvbG9yLXllbGxvdyk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vcmFuZ2UpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XFxufVxcblxcbi5hZGRyZXNzIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmlmcmFtZSB7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5vcGVuLWhvdXJzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5vcGVuLWhvdXJzIGxpIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcXG59XFxuXFxuLm9wZW4taG91cnMgLnRvZGF5IHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNvbG9yLXB1cnBsZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1waW5rKTtcXG59XFxuXFxuLmRheXMsXFxuLmhvdXJzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaG91cnMge1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UocGFyZW50KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRhY3QnKTtcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGhvbmUuY2xhc3NMaXN0LmFkZCgncGhvbmUnKTtcbiAgcGhvbmUuaW5uZXJIVE1MID0gJ+KAoiZuYnNwJm5ic3AmbmJzcDYxNy43NzYuMTIwMCZuYnNwJm5ic3AmbmJzcOKAoic7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xuICBhZGRyZXNzLmlubmVySFRNTCA9ICc8c3Bhbj45OSBCUk9BRFdBWTwvc3Bhbj48c3Bhbj5TT01FUlZJTExFIE1BIDAyMTQ1PC9zcGFuPic7XG5cbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIGNvbnN0IG1hcEF0dHJpYnV0ZXMgPSB7XG4gICAgc3JjOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE0ITFtOCExbTMhMWQxMTc4Ny41MzA2NTkyOTI0MyEyZC03MS4wODI4OTkhM2Q0Mi4zODc2NDYhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODllMzcwZGE1NDFiYjg2MSUzQTB4ZmM5ODM3YWNhYTM1NWUxNSEyc1JpbmNvbiUyME1leGljYW5vJTIwU29tZXJ2aWxsZSE1ZTAhM20yITFzZW4hMnN1cyE0djE2NzcyMjE3NTk1NzkhNW0yITFzZW4hMnN1cycsXG4gICAgd2lkdGg6ICc1MDAnLFxuICAgIGhlaWdodDogJzM3NScsXG4gICAgc3R5bGU6ICdib3JkZXI6MDsnLFxuICAgIGFsbG93ZnVsbHNjcmVlbjogJycsXG4gICAgbG9hZGluZzogJ2xhenknLFxuICAgIHJlZmVycmVycG9saWN5OiAnbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnLFxuICB9O1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtYXBBdHRyaWJ1dGVzKSkge1xuICAgIG1hcC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gIH1cblxuICBjb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgY29uc3Qgb3BlbkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgb3BlbkhvdXJzLmNsYXNzTGlzdC5hZGQoJ29wZW4taG91cnMnKTtcbiAgY29uc3QgZGF5cyA9IFsnU1VOREFZJywgJ01PTkRBWScsICdUVUVTREFZJywgJ1dFRE5FU0RBWScsICdUSFVSU0RBWScsICdGUklEQVknLCAnU0FUVVJEQVknXTtcbiAgY29uc3QgaG91cnMgPSBbXG4gICAgJzEwOjMwQU0gLSAxMDowMFBNJyxcbiAgICAnNTowMFBNIC0gMTA6MDBQTScsXG4gICAgJzEwOjMwQU0gLSAxMDowMFBNJyxcbiAgICAnMTA6MzBBTSAtIDEwOjAwUE0nLFxuICAgICcxMDozMEFNIC0gMTA6MDBQTScsXG4gICAgJzEwOjMwQU0gLSAxMDowMFBNJyxcbiAgICAnMTA6MzBBTSAtIDEwOjAwUE0nLFxuICBdO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheSA9IG5vdy5nZXREYXkoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG4gICAgaWYgKGkgPT09IHRvZGF5KSBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuXG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRheS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICBkYXkudGV4dENvbnRlbnQgPSBkYXlzW2ldO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRheSk7XG5cbiAgICBjb25zdCBob3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhvdXIuY2xhc3NMaXN0LmFkZCgndGltZScpO1xuICAgIGhvdXIudGV4dENvbnRlbnQgPSBob3Vyc1tpXTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChob3VyKTtcblxuICAgIG9wZW5Ib3Vycy5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH1cbiAgY29udGVudC5hcHBlbmRDaGlsZChvcGVuSG91cnMpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RQYWdlO1xuIiwiZnVuY3Rpb24gbG9hZEhvbWVQYWdlKHBhcmVudCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gIGNvbnN0IGhlcm9Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvR3JvdXAuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm9Hcm91cCk7XG5cbiAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBhYm91dFNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dCcpO1xuICBhYm91dFNlY3Rpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhYm91dCcpO1xuXG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaW50cm8udGV4dENvbnRlbnQgPSAnRnJvbSBvdXIgRmFtaWx5IHRvIHlvdXJzLi4uLi4nO1xuICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoaW50cm8pO1xuXG4gIGNvbnN0IHBhcmFncmFwaHMgPSBbXG4gICAgJ0luIDE5ODksIENoZWYgTG9yZW56byBSZXllcyBtb3ZlZCB0byB0aGUgVW5pdGVkIFN0YXRlcyB3aXRoIHRoZSBkcmVhbSBvZiBvcGVuaW5nIGEgcmVzdGF1cmFudCB0aGF0IHdvdWxkIHNob3djYXNlIHRoZSBiZXN0IG9mIE1leGljYW4gY3Vpc2luZS4gQXMgaGUgd29ya2VkIHRvIGVzdGFibGlzaCBoaXMgZmFtaWx5IGluIHRoZWlyIG5ldyBob21lIGNvdW50cnksIHRoZSBkcmVhbSBoYWQgdG8gZW1lcmdlIG92ZXIgMjUgbG9uZyB5ZWFycy4gQnV0LCBDaGVmIExvcmVuem8gbmV2ZXIgbGV0IGdvIG9mIGhpcyB2aXNpb24uJyxcbiAgICAnV2hpbGUgd29ya2luZyBpbiBjb21tZXJjaWFsIGtpdGNoZW5zIGFsbCBhcm91bmQgdGhlIEJvc3RvbiBhcmVhLCBDaGVmIExvcmVuem8gaGVsZCBvbiB0byBoaXMgdWx0aW1hdGUgZHJlYW0gb2Ygb3BlbmluZyBoaXMgb3duIHBsYWNlLiBFdmVyeSB5ZWFyIGZvciAyNSB5ZWFycywgaGUgdHJhdmVsZWQgdG8gZGlmZmVyZW50IHJlZ2lvbnMgb2YgTWV4aWNvIGluIG9yZGVyIHRvIHN0dWR5IGFuZCBleHBhbmQgaGlzIGtub3dsZWRnZSBvZiBsb2NhbCBjb29raW5nIHRlY2huaXF1ZXMsIGluZ3JlZGllbnRzIGFuZCByZWNpcGVzLiBPdmVyIHRoZSB5ZWFycyB0YXN0aW5nIGZvb2QgZnJvbSBhbGwgb3ZlciBNZXhpY28gYW5kIHRhbGtpbmcgYW5kIHByYWN0aWNpbmcgd2l0aCBjb29rcyBsaXZpbmcgdGhlcmUsIGluY2x1ZGluZyBoaXMgbW9tIGFuZCBkYWQsIGF1bnRzIGFuZCB1bmNsZXMsIENoZWYgTG9yZW56byBob25lZCBoaXMgY3VsaW5hcnkgc3R5bGUgdG8gZGVsaWNpb3VzIHBlcmZlY3Rpb24uJyxcbiAgICAnRmluYWxseSwgYWZ0ZXIgc3R1ZHlpbmcsIHNhbXBsaW5nLCBhbmQgbGVhcm5pbmcgaW4tZGVwdGggYWJvdXQgYWxsIHRoZSBkaWZmZXJlbnQgc3R5bGVzIG9mIHJlZ2lvbmFsIE1leGljYW4gY29va2luZyAtIGFuZCB1bmFibGUgdG8gZGVueSBoaXMgbGlmZS1sb25nIGRyZWFtIGFueSBsb25nZXIgLSBoZSBvcGVuZWQgPHN0cm9uZz5SaW5jb24gTWV4aWNhbm88L3N0cm9uZz4gaW4gTWF5IDIwMTQuJyxcbiAgICAnT3duZWQgYW5kIG9wZXJhdGVkIGJ5IENoZWYgTG9yZW56byBSZXllcyBhbG9uZyB3aXRoIGhpcyBicm90aGVyIFJpY2FyZG8sIGJyb3RoZXItaW4tbGF3IEFuZHJlYXMsIGFuZCBkYXVnaHRlciBZdmV0dGUsIGhlIGJyaW5ncyBhbGwgaGUgaGFzIGxlYXJuZWQgdG8gPHN0cm9uZz5SaW5jb24gTWV4aWNhbm88L3N0cm9uZz4gZm9yIHlvdXIgZGluaW5nIHBsZWFzdXJlLiAnLFxuICBdO1xuICBwYXJhZ3JhcGhzLmZvckVhY2goKHBhcmFUZXh0KSA9PiB7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLmlubmVySFRNTCA9IHBhcmFUZXh0O1xuICAgIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChwYXJhKTtcbiAgfSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcblxuICBjb25zdCBwbGFxdWVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBmbGFyZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGZsYXJlUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHNpZ25PZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBzaWduT2ZmLmlubmVyVGV4dCA9ICdCdWVuIFByb3ZlY2hvISc7XG4gIHNpZ25PZmYuY2xhc3NMaXN0LmFkZCgncGxhcXVlJywgJ29yYW5nZScpO1xuXG4gIHBsYXF1ZUdyb3VwLmFwcGVuZENoaWxkKGZsYXJlTGVmdCk7XG4gIHBsYXF1ZUdyb3VwLmFwcGVuZENoaWxkKHNpZ25PZmYpO1xuICBwbGFxdWVHcm91cC5hcHBlbmRDaGlsZChmbGFyZVJpZ2h0KTtcbiAgcGxhcXVlR3JvdXAuY2xhc3NMaXN0LmFkZCgncGxhcXVlJyk7XG4gIGZsYXJlTGVmdC5jbGFzc0xpc3QuYWRkKCdmbGFyZScpO1xuICBmbGFyZVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2ZsYXJlJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxhcXVlR3JvdXApO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVQYWdlO1xuIiwiZnVuY3Rpb24gbG9hZE1lbnVQYWdlKHBhcmVudCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gIGNvbnN0IHBsYXRlcyA9IHtcbiAgICBFbmNoaWxhZGFzOiBbXG4gICAgICAnJDE0Ljk5JyxcbiAgICAgICdUaHJlZSBjb3JuIHRvcnRpbGxhcyB0b3BwZWQgd2l0aCBNZXhpY2FuIHNvdXIgY3JlYW0gJiB3aGl0ZSBjaGVlc2Ugd2l0aCBjaG9pY2Ugb2YgbW9sZSAobW9sZSBjb250YWlucyBwZWFudXRzKSBvciBncmVlbiBzYXVjZS4gQ2hvaWNlIG9mOiBDaGlja2VuIG9yIEJlZWYnLFxuICAgIF0sXG4gICAgUXVlc2FkaWxsYXM6IFtcbiAgICAgICckMTMuOTknLFxuICAgICAgJ0Zsb3VyIHRvcnRpbGxhIGZpbGxlZCB3aXRoIE1vbnRlcnJleSBjaGVlc2Ugd2l0aCBndWFjYW1vbGUgJiBNZXhpY2FuIHNvdXIgY3JlYW0gaW5zaWRlLiBDaG9pY2Ugb2Y6IENoaWNrZW4sIEJlZWYsIG9yIFZlZ2V0YXJpYW4nLFxuICAgIF0sXG4gICAgJ0NoaWxlcyByZWxsZW5vcyc6IFsnJDE5Ljk5JywgJ1R3byBQb2JsYW5vIHBlcHBlcnMgZmlsbGVkIHdpdGggZ3JvdW5kIGJlZWYgJiBjaGVlc2UuJ10sXG4gICAgJ0Nhcm5lIGFzYWRhJzogWyckMTcuOTknLCAnR3JpbGxlZCwgbWFyaW5hdGVkIGJlZWYuJ10sXG4gIH07XG4gIGNvbnN0IHBsYXRlU2VjdGlvbiA9IGdlbmVyYXRlTWVudVNlY3Rpb24oXG4gICAgJ01leGljYW4gUGxhdGVzJyxcbiAgICAnU2VydmVkIHdpdGggcmljZSAmIHBpbnRvIHJlZnJpZWQgYmVhbnMnLFxuICAgIHBsYXRlc1xuICApO1xuICBwbGF0ZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnb3JhbmdlJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxhdGVTZWN0aW9uKTtcblxuICBjb25zdCB0YWNvcyA9IHtcbiAgICAnQ2FybmUgYXNhZGEnOiBbJyQ0LjI1JywgJ01hcmluYXRlZCBncmlsbGVkIGJlZWYnXSxcbiAgICBDYXJuaXRhczogWyckNC4yNScsICdTbG93LWNvb2tlZCwgc2hyZWRkZWQgcG9yayddLFxuICAgIENob3Jpem86IFsnJDQuMjUnLCAnU3BpY3kgc2F1c2FnZSddLFxuICAgIExlbmd1YTogWyckNC4yNScsICdCZWVmIHRvbmd1ZSddLFxuICAgIENhYmV6YTogWyckNC4yNScsICdDb3cgaGVhZCddLFxuICB9O1xuICBjb25zdCB0YWNvc1NlY3Rpb24gPSBnZW5lcmF0ZU1lbnVTZWN0aW9uKFxuICAgICdUYWNvcycsXG4gICAgJ0FsbCBzZXJ2ZWQgd2l0aCBjaWxhbnRybyBhbmQgb25pb25zLiBFeHRyYXM6IGxldHR1Y2UsIGd1YWNhbW9sZSwgJiBjaGVlc2UnLFxuICAgIHRhY29zXG4gICk7XG4gIHRhY29zU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdncmVlbicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRhY29zU2VjdGlvbik7XG5cbiAgY29uc3QgYnVycml0b3MgPSB7XG4gICAgUG9sbG86IFsnJDEzLjUwJywgJ0NoaWNrZW4nXSxcbiAgICAnQ2FybmUgYXNhZGEnOiBbJyQxMy41MCcsICdNYXJpbmF0ZWQgZ3JpbGxlZCBiZWVmJ10sXG4gICAgJ0FsIHBhc3Rvcic6IFsnJDEzLjUwJywgJ01hcmluYXRlZCBwb3JrIHdpdGggcGluZWFwcGxlJ10sXG4gICAgQ2Fybml0YXM6IFsnJDEzLjUwJywgJ1Nsb3ctY29va2VkLCBzaHJlZGRlZCBwb3JrJ10sXG4gIH07XG4gIGNvbnN0IGJ1cnJpdG9zU2VjdGlvbiA9IGdlbmVyYXRlTWVudVNlY3Rpb24oXG4gICAgJ0J1cnJpdG9zJyxcbiAgICAnU2VydmVkIHdpdGggcmljZSwgYmxhY2sgYmVhbnMsIHBpY28gZGUgZ2FsbG8sIGd1YWNhbW9sZSwgc291ciBjcmVhbSwgY2hlZXNlLCAmIGphbGFwZW5vcycsXG4gICAgYnVycml0b3NcbiAgKTtcbiAgYnVycml0b3NTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3BpbmsnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXJyaXRvc1NlY3Rpb24pO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuLy8gbWVudUl0ZW1zIHNob3VsZCBiZSBmb3JtYXR0ZWQgYXMge25hbWU6IFtwcmljZSwgZGVzY3JpcHRpb25dfVxuZnVuY3Rpb24gZ2VuZXJhdGVNZW51U2VjdGlvbihoZWFkaW5nVGV4dCwgc3VidGl0bGVUZXh0LCBtZW51SXRlbXMpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uc3QgaGVhZGluZ0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBsYXF1ZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGZsYXJlTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgZmxhcmVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZ0dyb3VwKTtcbiAgaGVhZGluZ0dyb3VwLmFwcGVuZENoaWxkKHBsYXF1ZUdyb3VwKTtcbiAgaGVhZGluZ0dyb3VwLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgcGxhcXVlR3JvdXAuYXBwZW5kQ2hpbGQoZmxhcmVMZWZ0KTtcbiAgcGxhcXVlR3JvdXAuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHBsYXF1ZUdyb3VwLmFwcGVuZENoaWxkKGZsYXJlUmlnaHQpO1xuXG4gIGhlYWRpbmdHcm91cC5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLWdyb3VwJyk7XG4gIHBsYXF1ZUdyb3VwLmNsYXNzTGlzdC5hZGQoJ3BsYXF1ZScpO1xuICBmbGFyZUxlZnQuY2xhc3NMaXN0LmFkZCgnZmxhcmUnKTtcbiAgZmxhcmVSaWdodC5jbGFzc0xpc3QuYWRkKCdmbGFyZScpO1xuXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBoZWFkaW5nVGV4dDtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBzdWJ0aXRsZVRleHQ7XG5cbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGVhZGVycycpO1xuICBmb3IgKGNvbnN0IFtuYW1lLCBbcHJpY2UsIGRlc2NyaXB0aW9uXV0gb2YgT2JqZWN0LmVudHJpZXMobWVudUl0ZW1zKSkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBuYW1lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwcmljZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbmFtZUl0ZW0udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIG5hbWVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIHByaWNlSXRlbS50ZXh0Q29udGVudCA9IHByaWNlO1xuICAgIHByaWNlSXRlbS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgIGRlc2NyaXB0aW9uSXRlbS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uSXRlbS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobmFtZUl0ZW0pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHByaWNlSXRlbSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JdGVtKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfVxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudVBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51UGFnZSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rPmJ1dHRvbicpO1xuY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ1dHRvbicpO1xuXG5sb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFBhZ2VDb250ZW50KTtcbm5hdkxpbmtzLmZvckVhY2goKG5hdkxpbmspID0+IG5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUGFnZUNvbnRlbnQpKTtcbmxvYWRIb21lUGFnZShtYWluKTtcblxuZnVuY3Rpb24gbG9hZFBhZ2VDb250ZW50KGV2ZW50KSB7XG4gIG5hdkxpbmtzLmZvckVhY2goKGxpbmspID0+IGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDsgLy8gRm9yIFNhZmFyaVxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDsgLy8gRm9yIENocm9tZSwgRmlyZWZveCwgSUUgYW5kIE9wZXJhXG5cbiAgY2xlYXJDb250ZW50KG1haW4pO1xuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PT0gJ2xvZ28nIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQgPT09ICdob21lLWJ1dHRvbicpIHtcbiAgICBob21lTmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGxvYWRIb21lUGFnZShtYWluKTtcbiAgfVxuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PT0gJ21lbnUtYnV0dG9uJykgbG9hZE1lbnVQYWdlKG1haW4pO1xuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PT0gJ2NvbnRhY3QtYnV0dG9uJykgbG9hZENvbnRhY3RQYWdlKG1haW4pO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQocGFyZW50KSB7XG4gIHBhcmVudC5pbm5lclRleHQgPSAnJztcbiAgd2hpbGUgKHBhcmVudC5sYXN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RDaGlsZCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==