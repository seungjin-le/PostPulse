"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/posts/PostList.tsx":
/*!*******************************************!*\
  !*** ./src/components/posts/PostList.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostItem */ \"(app-client)/./src/components/posts/PostItem.tsx\");\n/* harmony import */ var _recoil_PostsAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recoil/PostsAtom */ \"(app-client)/./src/recoil/PostsAtom.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"(app-client)/./node_modules/recoil/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst PostList = ()=>{\n    _s();\n    const arr = [\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9\n    ];\n    const [post, setPost] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_recoil_PostsAtom__WEBPACK_IMPORTED_MODULE_3__.postsState);\n    const getDates = ()=>{\n    // getData(EndPoint.GET_POSTS)\n    //   .then(res => {\n    //     console.log(res)\n    //   })\n    //   .catch(err => console.log(err))\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getDates();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full relative\",\n        children: arr.map((v)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, v, false, {\n                fileName: \"/Users/leeseungjin/Desktop/Dev_Projects/post_pulse/src/components/posts/PostList.tsx\",\n                lineNumber: 27,\n                columnNumber: 16\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/leeseungjin/Desktop/Dev_Projects/post_pulse/src/components/posts/PostList.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostList, \"fc/r4F48CLofKUpnATGLRpeldqQ=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PostList));\nvar _c, _c1;\n$RefreshReg$(_c, \"PostList\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvcG9zdHMvUG9zdExpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM0QztBQUNYO0FBR2dCO0FBQ1o7QUFFckMsTUFBTU0sV0FBVzs7SUFDZixNQUFNQyxNQUFNO1FBQUM7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO0tBQUU7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLHNEQUFjQSxDQUFDRCx5REFBVUE7SUFFakQsTUFBTU0sV0FBVztJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxvQ0FBb0M7SUFDdEM7SUFDQVIsZ0RBQVNBLENBQUM7UUFDUlE7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVztrQkFDYkwsSUFBSU0sSUFBSUMsQ0FBQUE7WUFDUCxxQkFBTyw4REFBQ1gsaURBQVFBLE1BQU1XOzs7OztRQUN4Qjs7Ozs7O0FBR047R0F0Qk1SOztRQUVvQkQsa0RBQWNBOzs7S0FGbENDO0FBd0JOLGtGQUFlTCwyQ0FBSUEsQ0FBQ0ssU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3N0cy9Qb3N0TGlzdC50c3g/OGZmMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwge21lbW8sIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUG9zdEl0ZW0gZnJvbSAnLi9Qb3N0SXRlbSdcbmltcG9ydCB7Z2V0RGF0YX0gZnJvbSAnLi4vLi4vdXRpbGl0eS9hcGlNb2R1bHMnXG5pbXBvcnQge0VuZFBvaW50fSBmcm9tICcuLi8uLi9kYXRhTWFuYWdldC9hcGlNYXBwZXInXG5pbXBvcnQge3Bvc3RzU3RhdGV9IGZyb20gJy4uLy4uL3JlY29pbC9Qb3N0c0F0b20nXG5pbXBvcnQge3VzZVJlY29pbFN0YXRlfSBmcm9tICdyZWNvaWwnXG5cbmNvbnN0IFBvc3RMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBhcnIgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV1cbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlUmVjb2lsU3RhdGUocG9zdHNTdGF0ZSlcblxuICBjb25zdCBnZXREYXRlcyA9ICgpID0+IHtcbiAgICAvLyBnZXREYXRhKEVuZFBvaW50LkdFVF9QT1NUUylcbiAgICAvLyAgIC50aGVuKHJlcyA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREYXRlcygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyd3LWZ1bGwgaC1mdWxsIHJlbGF0aXZlJ30+XG4gICAgICB7YXJyLm1hcCh2ID0+IHtcbiAgICAgICAgcmV0dXJuIDxQb3N0SXRlbSBrZXk9e3Z9IC8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFBvc3RMaXN0KVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsInVzZUVmZmVjdCIsIlBvc3RJdGVtIiwicG9zdHNTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwiUG9zdExpc3QiLCJhcnIiLCJwb3N0Iiwic2V0UG9zdCIsImdldERhdGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/posts/PostList.tsx\n"));

/***/ }),

/***/ "(app-client)/./src/recoil/PostsAtom.tsx":
/*!**********************************!*\
  !*** ./src/recoil/PostsAtom.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postsState: function() { return /* binding */ postsState; }\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"(app-client)/./node_modules/recoil/es/index.js\");\n\nconst postsState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"postsState\",\n    default: {\n        posts: []\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3JlY29pbC9Qb3N0c0F0b20udHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJCO0FBR3BCLE1BQU1DLGFBQWFELDRDQUFJQSxDQUFrQjtJQUM5Q0UsS0FBSztJQUNMQyxTQUFTO1FBQ1BDLE9BQU8sRUFBRTtJQUNYO0FBQ0YsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVjb2lsL1Bvc3RzQXRvbS50c3g/MTAxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F0b219IGZyb20gJ3JlY29pbCdcbmltcG9ydCB7UG9zdHNTdGF0ZVR5cGVzfSBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBjb25zdCBwb3N0c1N0YXRlID0gYXRvbTxQb3N0c1N0YXRlVHlwZXM+KHtcbiAga2V5OiAncG9zdHNTdGF0ZScsXG4gIGRlZmF1bHQ6IHtcbiAgICBwb3N0czogW10sXG4gIH0sXG59KVxuIl0sIm5hbWVzIjpbImF0b20iLCJwb3N0c1N0YXRlIiwia2V5IiwiZGVmYXVsdCIsInBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/recoil/PostsAtom.tsx\n"));

/***/ })

});