(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/Clock.tsx":
/*!******************************!*\
  !*** ./components/Clock.tsx ***!
  \******************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\react-with-typescript\\react-with-typescript\\components\\Clock.tsx";

var Clock = function Clock(_ref) {
  var time = _ref.time;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Time: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, time));
};

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: defaultTitle, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTitle", function() { return defaultTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\react-with-typescript\\react-with-typescript\\components\\Header.tsx";

var defaultTitle = 'Airport Departures';
var Header = function Header(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title);
};

/***/ }),

/***/ "./components/Schedule.tsx":
/*!*********************************!*\
  !*** ./components/Schedule.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\react-with-typescript\\react-with-typescript\\components\\Schedule.tsx";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var schedule = _ref.schedule;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, schedule.map(function (_ref2, i) {
    var from = _ref2.from,
        to = _ref2.to,
        time = _ref2.time;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, from, " \u2014 ", to, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, time));
  }));
});

/***/ }),

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/*! exports provided: getTime, getSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchedule", function() { return getSchedule; });
var getTime = function getTime() {
  return '18:00';
};
var getSchedule = function getSchedule() {
  return [{
    from: 'Kyiv',
    to: 'Lviv',
    time: '19:30'
  }, {
    from: 'Kyiv',
    to: 'Odessa',
    time: '19:45'
  }, {
    from: 'Kyiv',
    to: 'Dnipro',
    time: '20:00'
  }];
};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=F%3A%5Creact-with-typescript%5Creact-with-typescript%5Cpages%5Cindex.tsx!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=F%3A%5Creact-with-typescript%5Creact-with-typescript%5Cpages%5Cindex.tsx ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_6dc2816e14fab51b8269 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_6dc2816e14fab51b8269 */ "dll-reference dll_6dc2816e14fab51b8269"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Clock */ "./components/Clock.tsx");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _components_Schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Schedule */ "./components/Schedule.tsx");
var _jsxFileName = "F:\\react-with-typescript\\react-with-typescript\\pages\\index.tsx";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    title: _components_Header__WEBPACK_IMPORTED_MODULE_1__["defaultTitle"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Clock__WEBPACK_IMPORTED_MODULE_2__["Clock"], {
    time: _lib_utils__WEBPACK_IMPORTED_MODULE_3__["getTime"](),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Schedule__WEBPACK_IMPORTED_MODULE_4__["default"], {
    schedule: _lib_utils__WEBPACK_IMPORTED_MODULE_3__["getSchedule"](),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
});

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=F%3A%5Creact-with-typescript%5Creact-with-typescript%5Cpages%5Cindex.tsx ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=F%3A%5Creact-with-typescript%5Creact-with-typescript%5Cpages%5Cindex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=F%3A%5Creact-with-typescript%5Creact-with-typescript%5Cpages%5Cindex.tsx!./");


/***/ }),

/***/ "dll-reference dll_6dc2816e14fab51b8269":
/*!*******************************************!*\
  !*** external "dll_6dc2816e14fab51b8269" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_6dc2816e14fab51b8269;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map