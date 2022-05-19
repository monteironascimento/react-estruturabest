module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/link.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, private, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"ignews\\\",\\\"version\\\":\\\"0.1.0\\\",\\\"private\\\":true,\\\"scripts\\\":{\\\"dev\\\":\\\"next dev\\\",\\\"build\\\":\\\"next build\\\",\\\"start\\\":\\\"next start\\\"},\\\"dependencies\\\":{\\\"faunadb\\\":\\\"^4.1.3\\\",\\\"next\\\":\\\"10.0.9\\\",\\\"next-auth\\\":\\\"^3.13.3\\\",\\\"react\\\":\\\"17.0.2\\\",\\\"react-dom\\\":\\\"17.0.2\\\",\\\"react-electron-web-view\\\":\\\"^2.0.1\\\",\\\"react-icons\\\":\\\"^4.2.0\\\",\\\"sass\\\":\\\"^1.32.8\\\",\\\"stripe\\\":\\\"^8.140.0\\\"},\\\"devDependencies\\\":{\\\"@types/next-auth\\\":\\\"^3.13.0\\\",\\\"@types/node\\\":\\\"^14.14.35\\\",\\\"@types/react\\\":\\\"^17.0.3\\\",\\\"typescript\\\":\\\"^4.2.3\\\"}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhY2thZ2UuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "./src/pages/link.tsx":
/*!****************************!*\
  !*** ./src/pages/link.tsx ***!
  \****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n\n\nvar _jsxFileName = \"/Users/rodrigo/Documents/ofertabest/estrutura-best/src/pages/link.tsx\";\n\n\nconst WebView = __webpack_require__(/*! react-electron-web-view */ \"react-electron-web-view\");\n\n// cliten-side\n// server-side \n// static side generation \nfunction Link({\n  product\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WebView, {\n      src: \"https://cursounhasdefibra.com.br/\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, this)\n  }, void 0, false);\n} //export const getServerSideProps: GetServerSideProps = async () => {\n\nconst getStaticProps = async () => {\n  const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_1__[\"stripe\"].prices.retrieve('price_1IZ2mkGQXTBLLSCqnyF1M85J', {\n    expand: ['product']\n  });\n  const product = {\n    priceId: price.id,\n    amount: new Intl.NumberFormat('en-US', {\n      style: 'currency',\n      currency: 'USD'\n    }).format(price.unit_amount / 100)\n  };\n  return {\n    props: {\n      product\n    },\n    revalidate: 60 * 60 * 24 // 24 horas\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGluay50c3g/YTRlNCJdLCJuYW1lcyI6WyJXZWJWaWV3IiwicmVxdWlyZSIsIkxpbmsiLCJwcm9kdWN0IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmljZSIsInN0cmlwZSIsInByaWNlcyIsInJldHJpZXZlIiwiZXhwYW5kIiwicHJpY2VJZCIsImlkIiwiYW1vdW50IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXZCOztBQVNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBc0M7QUFDbkQsc0JBQ0U7QUFBQSwyQkFDSSxxRUFBQyxPQUFEO0FBQVMsU0FBRyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURGO0FBS0QsQyxDQUVEOztBQUNPLE1BQU1DLGNBQThCLEdBQUcsWUFBWTtBQUV4RCxRQUFNQyxLQUFLLEdBQUcsTUFBTUMsdURBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxRQUFkLENBQXVCLGdDQUF2QixFQUF5RDtBQUMzRUMsVUFBTSxFQUFFLENBQUMsU0FBRDtBQURtRSxHQUF6RCxDQUFwQjtBQUlBLFFBQU1OLE9BQU8sR0FBRztBQUNkTyxXQUFPLEVBQUVMLEtBQUssQ0FBQ00sRUFERDtBQUVkQyxVQUFNLEVBQUUsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQThCO0FBQ3BDQyxXQUFLLEVBQUUsVUFENkI7QUFFcENDLGNBQVEsRUFBRTtBQUYwQixLQUE5QixFQUdMQyxNQUhLLENBR0VaLEtBQUssQ0FBQ2EsV0FBTixHQUFvQixHQUh0QjtBQUZNLEdBQWhCO0FBUUEsU0FBTTtBQUNKQyxTQUFLLEVBQUU7QUFDTGhCO0FBREssS0FESDtBQUlKaUIsY0FBVSxFQUFFLEtBQUcsRUFBSCxHQUFNLEVBSmQsQ0FJa0I7O0FBSmxCLEdBQU47QUFNRCxDQXBCTSIsImZpbGUiOiIuL3NyYy9wYWdlcy9saW5rLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZSc7XG5jb25zdCBXZWJWaWV3ID0gcmVxdWlyZSgncmVhY3QtZWxlY3Ryb24td2ViLXZpZXcnKTtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2R1Y3Q6IHtcbiAgICBwcmljZUlkOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gIH1cbn1cblxuLy8gY2xpdGVuLXNpZGVcbi8vIHNlcnZlci1zaWRlIFxuLy8gc3RhdGljIHNpZGUgZ2VuZXJhdGlvbiBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluayh7IHByb2R1Y3QgfTogSG9tZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPFdlYlZpZXcgc3JjPVwiaHR0cHM6Ly9jdXJzb3VuaGFzZGVmaWJyYS5jb20uYnIvXCIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG4vL2V4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgY29uc3QgcHJpY2UgPSBhd2FpdCBzdHJpcGUucHJpY2VzLnJldHJpZXZlKCdwcmljZV8xSVoybWtHUVhUQkxMU0NxbnlGMU04NUonLCB7XG4gICAgZXhwYW5kOiBbJ3Byb2R1Y3QnXVxuICB9KVxuXG4gIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgcHJpY2VJZDogcHJpY2UuaWQsXG4gICAgYW1vdW50OiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJyx7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJ1xuICAgIH0pLmZvcm1hdChwcmljZS51bml0X2Ftb3VudCAvIDEwMCksXG4gIH1cblxuICByZXR1cm57XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCo2MCoyNCwgLy8gMjQgaG9yYXNcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/link.tsx\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/*! exports provided: stripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stripe\", function() { return stripe; });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ \"./package.json\", 1);\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0___default.a(process.env.STRIPE_API_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'IgNews',\n    version: _package_json__WEBPACK_IMPORTED_MODULE_1__[\"version\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyw2Q0FBSixDQUNsQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBRE0sRUFFbEI7QUFDSUMsWUFBVSxFQUFFLFlBRGhCO0FBRUlDLFNBQU8sRUFBRTtBQUNMQyxRQUFJLEVBQUUsUUFERDtBQUVMQyxXQUFPLEVBQUVBLHFEQUFPQTtBQUZYO0FBRmIsQ0FGa0IsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gICAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gICAge1xuICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgICAgIGFwcEluZm86IHtcbiAgICAgICAgICAgIG5hbWU6ICdJZ05ld3MnLFxuICAgICAgICAgICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICAgICAgfVxuICAgIH1cbik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "react-electron-web-view":
/*!******************************************!*\
  !*** external "react-electron-web-view" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-electron-web-view\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1lbGVjdHJvbi13ZWItdmlld1wiP2ZhOTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZWxlY3Ryb24td2ViLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1lbGVjdHJvbi13ZWItdmlld1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-electron-web-view\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ })

/******/ });