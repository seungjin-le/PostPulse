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

/***/ "(app-client)/./src/utility/zustand/UserZustand.tsx":
/*!*********************************************!*\
  !*** ./src/utility/zustand/UserZustand.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"(app-client)/./node_modules/zustand/esm/index.mjs\");\n\nconst useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((set)=>({\n        isLoggedIn: false,\n        user: {\n            platform: \"\",\n            name: \"\",\n            email: \"\",\n            picture: \"\",\n            sub: \"\",\n            iat: 0,\n            exp: 0,\n            jti: \"\"\n        },\n        logIn: (user)=>set({\n                isLoggedIn: true,\n                user: user\n            }),\n        logOut: ()=>set({\n                isLoggedIn: false\n            })\n    }));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useUserStore);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3V0aWxpdHkvenVzdGFuZC9Vc2VyWnVzdGFuZC50c3giLCJtYXBwaW5ncyI6Ijs7QUFBNEI7QUFXNUIsTUFBTUMsZUFBZUQsbURBQU1BLENBQVlFLENBQUFBLE1BQVE7UUFDN0NDLFlBQVk7UUFDWkMsTUFBTTtZQUNKQyxVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxLQUFLO1lBQ0xDLEtBQUs7UUFDUDtRQUNBQyxPQUFPVCxDQUFBQSxPQUFRRixJQUFJO2dCQUFDQyxZQUFZO2dCQUFNQyxNQUFNQTtZQUFJO1FBQ2hEVSxRQUFRLElBQU1aLElBQUk7Z0JBQUNDLFlBQVk7WUFBSztJQUN0QztBQUVBLCtEQUFlRixZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlsaXR5L3p1c3RhbmQvVXNlclp1c3RhbmQudHN4PzdlMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZSBmcm9tICd6dXN0YW5kJ1xuaW1wb3J0IHtVc2VyVHlwZXN9IGZyb20gJ2xvZGFzaCdcblxuaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XG4gIGlzTG9nZ2VkSW46IGJvb2xlYW5cbiAgdXNlcjogVXNlclR5cGVzXG4gIGFjY291bnQ6IGFueVxuICBsb2dJbjogKHVzZXI6IGFueSkgPT4gdm9pZFxuICBsb2dPdXQ6ICgpID0+IHZvaWRcbn1cblxuY29uc3QgdXNlVXNlclN0b3JlID0gY3JlYXRlPFVzZXJTdGF0ZT4oc2V0ID0+ICh7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICB1c2VyOiB7XG4gICAgcGxhdGZvcm06ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwaWN0dXJlOiAnJyxcbiAgICBzdWI6ICcnLFxuICAgIGlhdDogMCxcbiAgICBleHA6IDAsXG4gICAganRpOiAnJyxcbiAgfSxcbiAgbG9nSW46IHVzZXIgPT4gc2V0KHtpc0xvZ2dlZEluOiB0cnVlLCB1c2VyOiB1c2VyfSksXG4gIGxvZ091dDogKCkgPT4gc2V0KHtpc0xvZ2dlZEluOiBmYWxzZX0pLFxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IHVzZVVzZXJTdG9yZVxuIl0sIm5hbWVzIjpbImNyZWF0ZSIsInVzZVVzZXJTdG9yZSIsInNldCIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwicGxhdGZvcm0iLCJuYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwic3ViIiwiaWF0IiwiZXhwIiwianRpIiwibG9nSW4iLCJsb2dPdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/utility/zustand/UserZustand.tsx\n"));

/***/ })

});