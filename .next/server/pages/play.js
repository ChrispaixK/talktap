"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/play";
exports.ids = ["pages/play"];
exports.modules = {

/***/ "./src/pages/play.js":
/*!***************************!*\
  !*** ./src/pages/play.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Play)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Play() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"fyo\");\n    const [letter, setLetter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [player, setPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(5);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const categoryUrl = router.query.category;\n        if (categoryUrl) {\n            setCategory(categoryUrl);\n        }\n    }, [\n        router.query.category\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-3xl text-center\",\n        children: category\n    }, void 0, false, {\n        fileName: \"/home/ck/Desktop/-/Front-End/taptalk/src/pages/play.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxheS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNJO0FBRTVCLFNBQVNHLE9BQU87SUFDN0IsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVqQ0MsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLE1BQU1XLGNBQWNULE9BQU9VLEtBQUssQ0FBQ1QsUUFBUTtRQUN6QyxJQUFHUSxhQUFZO1lBQ1hQLFlBQVlPO1FBQ2hCLENBQUM7SUFDSCxHQUFFO1FBQUNULE9BQU9VLEtBQUssQ0FBQ1QsUUFBUTtLQUFDO0lBRXpCLHFCQUNFLDhEQUFDVTtRQUFHQyxXQUFVO2tCQUF3Qlg7Ozs7OztBQUcxQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFsa3RhcC8uL3NyYy9wYWdlcy9wbGF5LmpzP2RlMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXkoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoJ2Z5bycpXG4gIGNvbnN0IFtsZXR0ZXIsIHNldExldHRlcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDUpXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgY2F0ZWdvcnlVcmwgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnk7XG4gICAgaWYoY2F0ZWdvcnlVcmwpe1xuICAgICAgICBzZXRDYXRlZ29yeShjYXRlZ29yeVVybClcbiAgICB9XG4gIH0sW3JvdXRlci5xdWVyeS5jYXRlZ29yeV0pXG5cbiAgcmV0dXJuKFxuICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPntjYXRlZ29yeX08L2gyPlxuICApXG5cbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBsYXkiLCJyb3V0ZXIiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwibGV0dGVyIiwic2V0TGV0dGVyIiwicGxheWVyIiwic2V0UGxheWVyIiwidGltZSIsInNldFRpbWUiLCJjYXRlZ29yeVVybCIsInF1ZXJ5IiwiaDIiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/play.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/play.js"));
module.exports = __webpack_exports__;

})();