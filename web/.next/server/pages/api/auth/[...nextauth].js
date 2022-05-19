module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/auth/[...nextauth].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default.a.GitHub({\n    clientId: process.env.GIT_HUB_CLIENTE_ID,\n    clientSecret: process.env.GIT_HUB_SECRET,\n    scope: 'read:user'\n  })],\n  //    jwt: {\n  //        signingKey: process.env.SIGNING_KEY,\n  //    },\n  callbacks: {\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__[\"fauna\"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].If(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Not(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Create(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Collection('users'), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Get(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Casefold(user.email)))));\n        return true;\n      } catch {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz83MmNmIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUX0hVQl9DTElFTlRFX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUX0hVQl9TRUNSRVQiLCJzY29wZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImVtYWlsIiwiZmF1bmEiLCJxdWVyeSIsInEiLCJJZiIsIk5vdCIsIkV4aXN0cyIsIk1hdGNoIiwiSW5kZXgiLCJDYXNlZm9sZCIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJkYXRhIiwiR2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFFZUEsK0dBQVEsQ0FBQztBQUVwQkMsV0FBUyxFQUFFLENBQ1BDLDBEQUFTLENBQUNDLE1BQVYsQ0FBaUI7QUFDYkMsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsa0JBRFQ7QUFFYkMsZ0JBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGNBRmI7QUFHYkMsU0FBSyxFQUFFO0FBSE0sR0FBakIsQ0FETyxDQUZTO0FBU3hCO0FBQ0E7QUFDQTtBQUNJQyxXQUFTLEVBQUU7QUFDUCxVQUFNQyxNQUFOLENBQWFDLElBQWIsRUFBbUJDLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFvQztBQUVoQyxZQUFNO0FBQUVDO0FBQUYsVUFBWUgsSUFBbEI7O0FBQ0EsVUFBSTtBQUVBLGNBQU1JLHFEQUFLLENBQUNDLEtBQU4sQ0FFRkMsNkNBQUMsQ0FBQ0MsRUFBRixDQUNJRCw2Q0FBQyxDQUFDRSxHQUFGLENBQ0lGLDZDQUFDLENBQUNHLE1BQUYsQ0FDSUgsNkNBQUMsQ0FBQ0ksS0FBRixDQUNJSiw2Q0FBQyxDQUFDSyxLQUFGLENBQVEsZUFBUixDQURKLEVBRUlMLDZDQUFDLENBQUNNLFFBQUYsQ0FBV1osSUFBSSxDQUFDRyxLQUFoQixDQUZKLENBREosQ0FESixDQURKLEVBU0lHLDZDQUFDLENBQUNPLE1BQUYsQ0FDSVAsNkNBQUMsQ0FBQ1EsVUFBRixDQUFhLE9BQWIsQ0FESixFQUVJO0FBQUVDLGNBQUksRUFBRTtBQUFFWjtBQUFGO0FBQVIsU0FGSixDQVRKLEVBYUlHLDZDQUFDLENBQUNVLEdBQUYsQ0FDSVYsNkNBQUMsQ0FBQ0ksS0FBRixDQUNJSiw2Q0FBQyxDQUFDSyxLQUFGLENBQVEsZUFBUixDQURKLEVBRUlMLDZDQUFDLENBQUNNLFFBQUYsQ0FBV1osSUFBSSxDQUFDRyxLQUFoQixDQUZKLENBREosQ0FiSixDQUZFLENBQU47QUF1QkEsZUFBTyxJQUFQO0FBRUgsT0EzQkQsQ0EyQkMsTUFBSztBQUNGLGVBQU8sS0FBUDtBQUNIO0FBRUo7O0FBbkNNO0FBWlMsQ0FBRCxDQUF2QiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gJ2ZhdW5hZGInO1xuXG5cbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJztcblxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYSc7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHsgXG5cbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUHJvdmlkZXJzLkdpdEh1Yih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUX0hVQl9DTElFTlRFX0lELFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRfSFVCX1NFQ1JFVCxcbiAgICAgICAgICAgIHNjb3BlOiAncmVhZDp1c2VyJ1xuICAgICAgICB9KVxuICAgIF0sXG4vLyAgICBqd3Q6IHtcbi8vICAgICAgICBzaWduaW5nS2V5OiBwcm9jZXNzLmVudi5TSUdOSU5HX0tFWSxcbi8vICAgIH0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIHNpZ25Jbih1c2VyLCBhY2NvdW50LCBwcm9maWxlKXtcblxuICAgICAgICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlcjsgICBcbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcblxuICAgICAgICAgICAgICAgICAgICBxLklmKFxuICAgICAgICAgICAgICAgICAgICAgICAgcS5Ob3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5FeGlzdHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcS5DcmVhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5Db2xsZWN0aW9uKCd1c2VycycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YTogeyBlbWFpbH19XG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcS5HZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgKSAgICBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH1jYXRjaHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/*! exports provided: fauna */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fauna\", function() { return fauna; });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__[\"Client\"]({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLE1BQU1BLEtBQUssR0FBRyxJQUFJQyw4Q0FBSixDQUFXO0FBQzVCQyxRQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQURRLENBQVgsQ0FBZCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9mYXVuYS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInO1xuXG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVlcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faunadb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXVuYWRiXCI/OWIwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmYXVuYWRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///faunadb\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });