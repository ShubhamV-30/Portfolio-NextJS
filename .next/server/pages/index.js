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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ServiceCard.tsx":
/*!************************************!*\
  !*** ./components/ServiceCard.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/shubham.verma1/Documents/My-Projects/Portfolio-NextJS/components/ServiceCard.tsx\";\n\n// import { motion } from 'framer-motion'\nconst ServiceCard = ({\n  service: {\n    Icon,\n    title,\n    about\n  }\n}) => {\n  //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify\n  function createMarkup() {\n    return {\n      __html: about\n    };\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex items-center p-2 space-x-4 \",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Icon, {\n      className: \"w-12 h-12 text-red-400\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n        className: \"font-bold\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        dangerouslySetInnerHTML: createMarkup()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 10\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLnRzeD84MGFmIl0sIm5hbWVzIjpbIlNlcnZpY2VDYXJkIiwic2VydmljZSIsIkljb24iLCJ0aXRsZSIsImFib3V0IiwiY3JlYXRlTWFya3VwIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTtBQUVBLE1BQU1BLFdBQW9ELEdBQUcsQ0FBQztBQUMzREMsU0FBTyxFQUFFO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQztBQUFmO0FBRGtELENBQUQsS0FFdkQ7QUFDSDtBQUNBLFdBQVNDLFlBQVQsR0FBd0I7QUFDckIsV0FBTztBQUNKQyxZQUFNLEVBQUVGO0FBREosS0FBUDtBQUdGOztBQUVELHNCQUNHO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUEsNEJBQ0cscUVBQUMsSUFBRDtBQUFNLGVBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURILGVBRUc7QUFBSyxlQUFTLEVBQUMsRUFBZjtBQUFBLDhCQUNHO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUEsa0JBQTJCRDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILGVBRUc7QUFBRywrQkFBdUIsRUFBRUUsWUFBWTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESDtBQVNGLENBbkJEOztBQXFCZUwsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdHlwZXMnXG4vLyBpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBTZXJ2aWNlQ2FyZDogRnVuY3Rpb25Db21wb25lbnQ8eyBzZXJ2aWNlOiBTZXJ2aWNlIH0+ID0gKHtcbiAgIHNlcnZpY2U6IHsgSWNvbiwgdGl0bGUsIGFib3V0IH0sXG59KSA9PiB7XG4gICAvL1hTUyBhdHRhY2sgOiggb24gb3VyIHBvcnRmb2xpbyBidHcsIGFzIGFuIGFsdGVybmF0ZSB1c2UgbnBtIGkgZG9tIHB1cmlmeVxuICAgZnVuY3Rpb24gY3JlYXRlTWFya3VwKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgIF9faHRtbDogYWJvdXQsXG4gICAgICB9XG4gICB9XG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgcC0yIHNwYWNlLXgtNCAnPlxuICAgICAgICAgPEljb24gY2xhc3NOYW1lPSd3LTEyIGgtMTIgdGV4dC1yZWQtNDAwJyAvPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdmb250LWJvbGQnPnt0aXRsZX08L2g2PlxuICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2NyZWF0ZU1hcmt1cCgpfSAvPlxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUNhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ServiceCard.tsx\n");

/***/ }),

/***/ "./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/*! exports provided: services, languages, tools, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"services\", function() { return services; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"languages\", function() { return languages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tools\", function() { return tools; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/ri */ \"react-icons/ri\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"react-icons/bs\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst services = [{\n  Icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_0__[\"RiComputerLine\"],\n  title: \"Frontend Development\",\n  about: \"I can build a beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b>, <b>React.js</b>   and <b>Next.js</b> \"\n}, {\n  Icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaServer\"],\n  title: \"Backend  Development\",\n  about: \"handle database, server, api using <b>Express </b> & other popular frameworks\"\n}, {\n  Icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__[\"AiOutlineApi\"],\n  title: \"API Development\",\n  about: \"I can develop robust  REST API using <b>Node API</b> \"\n}, {\n  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdDeveloperMode\"],\n  title: \"Competitive Coder\",\n  about: \" A daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> \"\n}, {\n  Icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__[\"AiOutlineAntDesign\"],\n  title: \"UI/UX designer\",\n  about: \"Stunning user interface designer using libraries and framework like <b>TailwindCss</b>  and  <b>Bootstrap</b> \"\n}, {\n  Icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_0__[\"RiComputerLine\"],\n  title: \"Whatever\",\n  about: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!\"\n}];\nconst languages = [{\n  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__[\"BsCircleFill\"],\n  name: \"Python\",\n  level: \"45\"\n}, {\n  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__[\"BsCircleFill\"],\n  name: \"Java Script\",\n  level: \"60\"\n}, {\n  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__[\"BsCircleFill\"],\n  name: \"React\",\n  level: \"70\"\n}, {\n  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__[\"BsCircleFill\"],\n  name: \"Express\",\n  level: \"70\"\n}, {\n  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__[\"BsCircleFill\"],\n  name: \"Bootstrap\",\n  level: \"80\"\n}, {\n  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__[\"BsCircleFill\"],\n  name: \"NextJS\",\n  level: \"70\"\n}, {\n  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__[\"BsCircleFill\"],\n  name: \"Typescript\",\n  level: \"70\"\n}];\nconst tools = [{\n  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__[\"BsCircleFill\"],\n  name: \"Swagger\",\n  level: \"65\"\n}, {\n  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__[\"BsCircleFill\"],\n  name: \"Postman\",\n  level: \"45\"\n}, {\n  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__[\"BsCircleFill\"],\n  name: \"vsCode\",\n  level: \"85\"\n}];\nconst projects = [{\n  name: \"Weather Application\",\n  image_path: \"/images/Weather-App.png\",\n  deployed_url: \"https://weather-six-lovat.vercel.app/\",\n  github_url: \"https://github.com/ShubhamV-30/weather\",\n  category: [\"react\", \"node\"],\n  description: \"Weather forecast app provides detailed local forecast & weather forecast world wide, the app provides the current temperature in Celsius and Fahrenheit, sunrise and sunset time according to city time zone.\",\n  key_techs: [\"React\", \"Bootstrap\", \"OpenWeather-api\"]\n}, {\n  name: \"Blog App\",\n  image_path: \"/images/Blog.png\",\n  deployed_url: \"https://blog-zeta-amber-39.vercel.app/\",\n  github_url: \"https://github.com/ShubhamV-30/Blog\",\n  category: [\"react\"],\n  description: \"Its a blog app which shows personal information and showcase skills.\",\n  key_techs: [\"Next.js\"]\n}, {\n  name: \"Netflix-Clone\",\n  image_path: \"/images/Netflix-Next.js.png\",\n  deployed_url: \"https://netflix-clone-one-liard.vercel.app/auth\",\n  github_url: \"https://github.com/ShubhamV-30/Netflix-Clone\",\n  category: [\"react\", \"mongo\"],\n  description: \"a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, etc.\",\n  key_techs: [\"Next.js\"]\n}, {\n  name: \"Weather Application\",\n  image_path: \"/images/Weather-App.png\",\n  deployed_url: \"https://weather-six-lovat.vercel.app/\",\n  github_url: \"https://github.com/ShubhamV-30/weather\",\n  category: [\"react\"],\n  description: \"Weather forecast app provides detailed local forecast & weather forecast world wide, the app provides the current temperature in Celsius and Fahrenheit, sunrise and sunset time according to city time zone.\",\n  key_techs: [\"React\", \"Bootstrap\", \"OpenWeather-api\"]\n}, {\n  name: \"Blog App\",\n  image_path: \"/images/Blog.png\",\n  deployed_url: \"https://blog-zeta-amber-39.vercel.app/\",\n  github_url: \"https://github.com/ShubhamV-30/Blog\",\n  category: [\"react\"],\n  description: \"Its a blog app which shows personal information and showcase skills.\",\n  key_techs: [\"Next.js\"]\n}, {\n  name: \"Netflix-Clone\",\n  image_path: \"/images/Netflix-Next.js.png\",\n  deployed_url: \"https://netflix-clone-one-liard.vercel.app/auth\",\n  github_url: \"https://github.com/ShubhamV-30/Netflix-Clone\",\n  category: [\"react\", \"mongo\"],\n  description: \"a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, etc.\",\n  key_techs: [\"Next.js\", \"mobgoDb\", \"Tailwind css\"]\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhLnRzPzA5NTAiXSwibmFtZXMiOlsic2VydmljZXMiLCJJY29uIiwiUmlDb21wdXRlckxpbmUiLCJ0aXRsZSIsImFib3V0IiwiRmFTZXJ2ZXIiLCJBaU91dGxpbmVBcGkiLCJNZERldmVsb3Blck1vZGUiLCJBaU91dGxpbmVBbnREZXNpZ24iLCJsYW5ndWFnZXMiLCJCc0NpcmNsZUZpbGwiLCJuYW1lIiwibGV2ZWwiLCJ0b29scyIsInByb2plY3RzIiwiaW1hZ2VfcGF0aCIsImRlcGxveWVkX3VybCIsImdpdGh1Yl91cmwiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwia2V5X3RlY2hzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRU8sTUFBTUEsUUFBbUIsR0FBRyxDQUNqQztBQUNFQyxNQUFJLEVBQUVDLDZEQURSO0FBRUVDLE9BQUssRUFBRSxzQkFGVDtBQUdFQyxPQUFLLEVBQ0g7QUFKSixDQURpQyxFQU9qQztBQUNFSCxNQUFJLEVBQUVJLHVEQURSO0FBRUVGLE9BQUssRUFBRSxzQkFGVDtBQUdFQyxPQUFLLEVBQ0g7QUFKSixDQVBpQyxFQWFqQztBQUNFSCxNQUFJLEVBQUVLLDJEQURSO0FBRUVILE9BQUssRUFBRSxpQkFGVDtBQUdFQyxPQUFLLEVBQ0g7QUFKSixDQWJpQyxFQW1CakM7QUFDRUgsTUFBSSxFQUFFTSw4REFEUjtBQUVFSixPQUFLLEVBQUUsbUJBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FuQmlDLEVBd0JqQztBQUNFSCxNQUFJLEVBQUVPLGlFQURSO0FBRUVMLE9BQUssRUFBRSxnQkFGVDtBQUdFQyxPQUFLLEVBQ0g7QUFKSixDQXhCaUMsRUE4QmpDO0FBQ0VILE1BQUksRUFBRUMsNkRBRFI7QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsT0FBSyxFQUNIO0FBSkosQ0E5QmlDLENBQTVCO0FBc0NBLE1BQU1LLFNBQWtCLEdBQUcsQ0FDaEM7QUFDRVIsTUFBSSxFQUFFUywyREFEUjtBQUVFQyxNQUFJLEVBQUUsUUFGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQURnQyxFQU1oQztBQUNFWCxNQUFJLEVBQUVTLDJEQURSO0FBRUVDLE1BQUksRUFBRSxhQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBTmdDLEVBV2hDO0FBQ0VYLE1BQUksRUFBRVMsMkRBRFI7QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FYZ0MsRUFnQmhDO0FBQ0VYLE1BQUksRUFBRVMsMkRBRFI7QUFFRUMsTUFBSSxFQUFFLFNBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FoQmdDLEVBcUJoQztBQUNFWCxNQUFJLEVBQUVTLDJEQURSO0FBRUVDLE1BQUksRUFBRSxXQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBckJnQyxFQTBCaEM7QUFDRVgsTUFBSSxFQUFFUywyREFEUjtBQUVFQyxNQUFJLEVBQUUsUUFGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQTFCZ0MsRUErQmhDO0FBQ0VYLE1BQUksRUFBRVMsMkRBRFI7QUFFRUMsTUFBSSxFQUFFLFlBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0EvQmdDLENBQTNCO0FBc0NBLE1BQU1DLEtBQWMsR0FBRyxDQUM1QjtBQUNFWixNQUFJLEVBQUVTLDJEQURSO0FBRUVDLE1BQUksRUFBRSxTQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBRDRCLEVBTTVCO0FBQ0VYLE1BQUksRUFBRVMsMkRBRFI7QUFFRUMsTUFBSSxFQUFFLFNBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FONEIsRUFXNUI7QUFDRVgsTUFBSSxFQUFFUywyREFEUjtBQUVFQyxNQUFJLEVBQUUsUUFGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVg0QixDQUF2QjtBQW1CQSxNQUFNRSxRQUFvQixHQUFHLENBQ2xDO0FBQ0VILE1BQUksRUFBRSxxQkFEUjtBQUVFSSxZQUFVLEVBQUUseUJBRmQ7QUFHRUMsY0FBWSxFQUFFLHVDQUhoQjtBQUlFQyxZQUFVLEVBQUUsd0NBSmQ7QUFLRUMsVUFBUSxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FMWjtBQU1FQyxhQUFXLEVBQ1QsK01BUEo7QUFRRUMsV0FBUyxFQUFFLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUIsaUJBQXZCO0FBUmIsQ0FEa0MsRUFZbEM7QUFDRVQsTUFBSSxFQUFFLFVBRFI7QUFFRUksWUFBVSxFQUFFLGtCQUZkO0FBR0VDLGNBQVksRUFBRSx3Q0FIaEI7QUFJRUMsWUFBVSxFQUFFLHFDQUpkO0FBS0VDLFVBQVEsRUFBRSxDQUFDLE9BQUQsQ0FMWjtBQU1FQyxhQUFXLEVBQ1Qsc0VBUEo7QUFRRUMsV0FBUyxFQUFFLENBQ1QsU0FEUztBQVJiLENBWmtDLEVBeUJsQztBQUNFVCxNQUFJLEVBQUUsZUFEUjtBQUVFSSxZQUFVLEVBQUUsNkJBRmQ7QUFHRUMsY0FBWSxFQUFFLGlEQUhoQjtBQUlFQyxZQUFVLEVBQUUsOENBSmQ7QUFLRUMsVUFBUSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FMWjtBQU1FQyxhQUFXLEVBQ1QsOEdBUEo7QUFRRUMsV0FBUyxFQUFFLENBQ1QsU0FEUztBQVJiLENBekJrQyxFQXNDbEM7QUFDRVQsTUFBSSxFQUFFLHFCQURSO0FBRUVJLFlBQVUsRUFBRSx5QkFGZDtBQUdFQyxjQUFZLEVBQUUsdUNBSGhCO0FBSUVDLFlBQVUsRUFBRSx3Q0FKZDtBQUtFQyxVQUFRLEVBQUUsQ0FBQyxPQUFELENBTFo7QUFNRUMsYUFBVyxFQUNULCtNQVBKO0FBUUVDLFdBQVMsRUFBRSxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLGlCQUF2QjtBQVJiLENBdENrQyxFQWlEbEM7QUFDRVQsTUFBSSxFQUFFLFVBRFI7QUFFRUksWUFBVSxFQUFFLGtCQUZkO0FBR0VDLGNBQVksRUFBRSx3Q0FIaEI7QUFJRUMsWUFBVSxFQUFFLHFDQUpkO0FBS0VDLFVBQVEsRUFBRSxDQUFDLE9BQUQsQ0FMWjtBQU1FQyxhQUFXLEVBQ1Qsc0VBUEo7QUFRRUMsV0FBUyxFQUFFLENBQ1QsU0FEUztBQVJiLENBakRrQyxFQThEbEM7QUFDRVQsTUFBSSxFQUFFLGVBRFI7QUFFRUksWUFBVSxFQUFFLDZCQUZkO0FBR0VDLGNBQVksRUFBRSxpREFIaEI7QUFJRUMsWUFBVSxFQUFFLDhDQUpkO0FBS0VDLFVBQVEsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBTFo7QUFNRUMsYUFBVyxFQUNULDhHQVBKO0FBUUVDLFdBQVMsRUFBRSxDQUNULFNBRFMsRUFFVCxTQUZTLEVBR1QsY0FIUztBQVJiLENBOURrQyxDQUE3QiIsImZpbGUiOiIuL2RhdGEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSaUNvbXB1dGVyTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xuaW1wb3J0IHsgRmFTZXJ2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEFpT3V0bGluZUFudERlc2lnbiwgQWlPdXRsaW5lQXBpIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBNZERldmVsb3Blck1vZGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IElQcm9qZWN0LCBTZXJ2aWNlLCBTa2lsbCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmltcG9ydCB7IEJzQ2lyY2xlRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5leHBvcnQgY29uc3Qgc2VydmljZXM6IFNlcnZpY2VbXSA9IFtcbiAge1xuICAgIEljb246IFJpQ29tcHV0ZXJMaW5lLFxuICAgIHRpdGxlOiBcIkZyb250ZW5kIERldmVsb3BtZW50XCIsXG4gICAgYWJvdXQ6XG4gICAgICBcIkkgY2FuIGJ1aWxkIGEgYmVhdXRpZnVsIGFuZCBzY2FsYWJsZSBTUEEgdXNpbmcgPGI+IEhUTUw8L2I+LCA8Yj5DU1M8L2I+LCA8Yj5SZWFjdC5qczwvYj4gICBhbmQgPGI+TmV4dC5qczwvYj4gXCIsXG4gIH0sXG4gIHtcbiAgICBJY29uOiBGYVNlcnZlcixcbiAgICB0aXRsZTogXCJCYWNrZW5kICBEZXZlbG9wbWVudFwiLFxuICAgIGFib3V0OlxuICAgICAgXCJoYW5kbGUgZGF0YWJhc2UsIHNlcnZlciwgYXBpIHVzaW5nIDxiPkV4cHJlc3MgPC9iPiAmIG90aGVyIHBvcHVsYXIgZnJhbWV3b3Jrc1wiLFxuICB9LFxuICB7XG4gICAgSWNvbjogQWlPdXRsaW5lQXBpLFxuICAgIHRpdGxlOiBcIkFQSSBEZXZlbG9wbWVudFwiLFxuICAgIGFib3V0OlxuICAgICAgXCJJIGNhbiBkZXZlbG9wIHJvYnVzdCAgUkVTVCBBUEkgdXNpbmcgPGI+Tm9kZSBBUEk8L2I+IFwiLFxuICB9LFxuICB7XG4gICAgSWNvbjogTWREZXZlbG9wZXJNb2RlLFxuICAgIHRpdGxlOiBcIkNvbXBldGl0aXZlIENvZGVyXCIsXG4gICAgYWJvdXQ6IFwiIEEgZGFpbHkgcHJvYmxlbSBzb2x2ZXIgaW4gPGI+SGFja2VyUmFuazwvYj4gIGFuZCA8Yj5MZWV0IENvZGU8L2I+IFwiLFxuICB9LFxuICB7XG4gICAgSWNvbjogQWlPdXRsaW5lQW50RGVzaWduLFxuICAgIHRpdGxlOiBcIlVJL1VYIGRlc2lnbmVyXCIsXG4gICAgYWJvdXQ6XG4gICAgICBcIlN0dW5uaW5nIHVzZXIgaW50ZXJmYWNlIGRlc2lnbmVyIHVzaW5nIGxpYnJhcmllcyBhbmQgZnJhbWV3b3JrIGxpa2UgPGI+VGFpbHdpbmRDc3M8L2I+ICBhbmQgIDxiPkJvb3RzdHJhcDwvYj4gXCIsXG4gIH0sXG4gIHtcbiAgICBJY29uOiBSaUNvbXB1dGVyTGluZSxcbiAgICB0aXRsZTogXCJXaGF0ZXZlclwiLFxuICAgIGFib3V0OlxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIaWMgcXVpcyBtaW5pbWEgYXV0ZW0hXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzOiBTa2lsbFtdID0gW1xuICB7XG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxuICAgIG5hbWU6IFwiUHl0aG9uXCIsXG4gICAgbGV2ZWw6IFwiNDVcIixcbiAgfSxcbiAge1xuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcbiAgICBuYW1lOiBcIkphdmEgU2NyaXB0XCIsXG4gICAgbGV2ZWw6IFwiNjBcIixcbiAgfSxcbiAge1xuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcbiAgICBuYW1lOiBcIlJlYWN0XCIsXG4gICAgbGV2ZWw6IFwiNzBcIixcbiAgfSxcbiAge1xuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcbiAgICBuYW1lOiBcIkV4cHJlc3NcIixcbiAgICBsZXZlbDogXCI3MFwiLFxuICB9LFxuICB7XG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxuICAgIG5hbWU6IFwiQm9vdHN0cmFwXCIsXG4gICAgbGV2ZWw6IFwiODBcIixcbiAgfSxcbiAge1xuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcbiAgICBuYW1lOiBcIk5leHRKU1wiLFxuICAgIGxldmVsOiBcIjcwXCIsXG4gIH0sXG4gIHtcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXG4gICAgbmFtZTogXCJUeXBlc2NyaXB0XCIsXG4gICAgbGV2ZWw6IFwiNzBcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB0b29sczogU2tpbGxbXSA9IFtcbiAge1xuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcbiAgICBuYW1lOiBcIlN3YWdnZXJcIixcbiAgICBsZXZlbDogXCI2NVwiLFxuICB9LFxuICB7XG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxuICAgIG5hbWU6IFwiUG9zdG1hblwiLFxuICAgIGxldmVsOiBcIjQ1XCIsXG4gIH0sXG4gIHtcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXG4gICAgbmFtZTogXCJ2c0NvZGVcIixcbiAgICBsZXZlbDogXCI4NVwiLFxuICB9LFxuXG5dO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHM6IElQcm9qZWN0W10gPSBbXG4gIHtcbiAgICBuYW1lOiBcIldlYXRoZXIgQXBwbGljYXRpb25cIixcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvV2VhdGhlci1BcHAucG5nXCIsXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vd2VhdGhlci1zaXgtbG92YXQudmVyY2VsLmFwcC9cIixcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaHViaGFtVi0zMC93ZWF0aGVyXCIsXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCIsIFwibm9kZVwiXSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2VhdGhlciBmb3JlY2FzdCBhcHAgcHJvdmlkZXMgZGV0YWlsZWQgbG9jYWwgZm9yZWNhc3QgJiB3ZWF0aGVyIGZvcmVjYXN0IHdvcmxkIHdpZGUsIHRoZSBhcHAgcHJvdmlkZXMgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW4gQ2Vsc2l1cyBhbmQgRmFocmVuaGVpdCwgc3VucmlzZSBhbmQgc3Vuc2V0IHRpbWUgYWNjb3JkaW5nIHRvIGNpdHkgdGltZSB6b25lLlwiLFxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJCb290c3RyYXBcIiwgXCJPcGVuV2VhdGhlci1hcGlcIl0sXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiQmxvZyBBcHBcIixcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvQmxvZy5wbmdcIixcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9ibG9nLXpldGEtYW1iZXItMzkudmVyY2VsLmFwcC9cIixcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaHViaGFtVi0zMC9CbG9nXCIsXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCJdLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJdHMgYSBibG9nIGFwcCB3aGljaCBzaG93cyBwZXJzb25hbCBpbmZvcm1hdGlvbiBhbmQgc2hvd2Nhc2Ugc2tpbGxzLlwiLFxuICAgIGtleV90ZWNoczogW1xuICAgICAgXCJOZXh0LmpzXCIsXG5cbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOZXRmbGl4LUNsb25lXCIsXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL05ldGZsaXgtTmV4dC5qcy5wbmdcIixcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9uZXRmbGl4LWNsb25lLW9uZS1saWFyZC52ZXJjZWwuYXBwL2F1dGhcIixcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaHViaGFtVi0zMC9OZXRmbGl4LUNsb25lXCIsXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCIsIFwibW9uZ29cIl0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcImEgc3RyZWFtaW5nIHNlcnZpY2UgdGhhdCBvZmZlcnMgYSB3aWRlIHZhcmlldHkgb2YgYXdhcmQtd2lubmluZyBUViBzaG93cywgbW92aWVzLCBhbmltZSwgZG9jdW1lbnRhcmllcywgZXRjLlwiLFxuICAgIGtleV90ZWNoczogW1xuICAgICAgXCJOZXh0LmpzXCIsXG5cbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJXZWF0aGVyIEFwcGxpY2F0aW9uXCIsXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL1dlYXRoZXItQXBwLnBuZ1wiLFxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL3dlYXRoZXItc2l4LWxvdmF0LnZlcmNlbC5hcHAvXCIsXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vU2h1YmhhbVYtMzAvd2VhdGhlclwiLFxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2VhdGhlciBmb3JlY2FzdCBhcHAgcHJvdmlkZXMgZGV0YWlsZWQgbG9jYWwgZm9yZWNhc3QgJiB3ZWF0aGVyIGZvcmVjYXN0IHdvcmxkIHdpZGUsIHRoZSBhcHAgcHJvdmlkZXMgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW4gQ2Vsc2l1cyBhbmQgRmFocmVuaGVpdCwgc3VucmlzZSBhbmQgc3Vuc2V0IHRpbWUgYWNjb3JkaW5nIHRvIGNpdHkgdGltZSB6b25lLlwiLFxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJCb290c3RyYXBcIiwgXCJPcGVuV2VhdGhlci1hcGlcIl0sXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiQmxvZyBBcHBcIixcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvQmxvZy5wbmdcIixcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9ibG9nLXpldGEtYW1iZXItMzkudmVyY2VsLmFwcC9cIixcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaHViaGFtVi0zMC9CbG9nXCIsXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCJdLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJdHMgYSBibG9nIGFwcCB3aGljaCBzaG93cyBwZXJzb25hbCBpbmZvcm1hdGlvbiBhbmQgc2hvd2Nhc2Ugc2tpbGxzLlwiLFxuICAgIGtleV90ZWNoczogW1xuICAgICAgXCJOZXh0LmpzXCIsXG5cbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOZXRmbGl4LUNsb25lXCIsXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL05ldGZsaXgtTmV4dC5qcy5wbmdcIixcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9uZXRmbGl4LWNsb25lLW9uZS1saWFyZC52ZXJjZWwuYXBwL2F1dGhcIixcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaHViaGFtVi0zMC9OZXRmbGl4LUNsb25lXCIsXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCIsIFwibW9uZ29cIl0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcImEgc3RyZWFtaW5nIHNlcnZpY2UgdGhhdCBvZmZlcnMgYSB3aWRlIHZhcmlldHkgb2YgYXdhcmQtd2lubmluZyBUViBzaG93cywgbW92aWVzLCBhbmltZSwgZG9jdW1lbnRhcmllcywgZXRjLlwiLFxuICAgIGtleV90ZWNoczogW1xuICAgICAgXCJOZXh0LmpzXCIsXG4gICAgICBcIm1vYmdvRGJcIixcbiAgICAgIFwiVGFpbHdpbmQgY3NzXCJcblxuICAgIF0sXG4gIH0sXG5cbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ServiceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ServiceCard */ \"./components/ServiceCard.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./data.ts\");\n\nvar _jsxFileName = \"/home/shubham.verma1/Documents/My-Projects/Portfolio-NextJS/pages/index.tsx\";\n\n\n\nconst About = () => {\n  // console.log(services);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-col flex-grow px-6 pt-1 \",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n      className: \"my-3 text-base font-medium\",\n      children: \"Results-driven and highly motivated Web Developer with one year of hands-on experience in a dynamic and innovative company. Proficient in developing robust and user-friendly web applications using modern technologies and frameworks. Adept at translating design concepts into functional and responsive websites. Demonstrated ability to collaborate effectively in cross-functional teams to deliver high-quality projects on time. Eager to contribute my skills and expertise to create exceptional web experiences.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 \",\n      style: {\n        marginLeft: \"-1.5rem\",\n        marginRight: \"-1.5rem\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        className: \"my-3 text-xl font-semibold tracking-wide\",\n        children: \"What I am doing\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"grid gap-6 my-3 md:grid-cols-2\",\n        children: _data__WEBPACK_IMPORTED_MODULE_2__[\"services\"].map(service => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ServiceCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            service: service\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, undefined)\n        }, service.title, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJBYm91dCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNlcnZpY2VzIiwibWFwIiwic2VydmljZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0E7QUFDQTs7QUFHQSxNQUFNQSxLQUFlLEdBQUcsTUFBTTtBQUM1QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUNFLGVBQVMsRUFBQyxrREFEWjtBQUVFLFdBQUssRUFBRTtBQUFFQyxrQkFBVSxFQUFFLFNBQWQ7QUFBeUJDLG1CQUFXLEVBQUU7QUFBdEMsT0FGVDtBQUFBLDhCQUlFO0FBQUksaUJBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQVFFO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGtCQUVHQyw4Q0FBUSxDQUFDQyxHQUFULENBQWNDLE9BQUQsaUJBQ1o7QUFDRSxtQkFBUyxFQUFDLHVFQURaO0FBQUEsaUNBSUUscUVBQUMsK0RBQUQ7QUFBYSxtQkFBTyxFQUFFQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsV0FFT0EsT0FBTyxDQUFDQyxLQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTJCRCxDQTlCRDs7QUFnQ2VOLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgR2V0U2VydmVyU2lkZVByb3BzLFxuICBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0LFxuICBHZXRTdGF0aWNQcm9wcyxcbiAgR2V0U3RhdGljUHJvcHNDb250ZXh0LFxuICBOZXh0UGFnZSxcbn0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZFwiO1xuaW1wb3J0IHsgc2VydmljZXMgfSBmcm9tIFwiLi4vZGF0YVwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBBYm91dDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHNlcnZpY2VzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgcHgtNiBwdC0xIFwiPlxuICAgICAgPGg2IGNsYXNzTmFtZT1cIm15LTMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgIFJlc3VsdHMtZHJpdmVuIGFuZCBoaWdobHkgbW90aXZhdGVkIFdlYiBEZXZlbG9wZXIgd2l0aCBvbmUgeWVhciBvZiBoYW5kcy1vbiBleHBlcmllbmNlIGluIGEgZHluYW1pYyBhbmQgaW5ub3ZhdGl2ZSBjb21wYW55LiBQcm9maWNpZW50IGluIGRldmVsb3Bpbmcgcm9idXN0IGFuZCB1c2VyLWZyaWVuZGx5IHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgbW9kZXJuIHRlY2hub2xvZ2llcyBhbmQgZnJhbWV3b3Jrcy4gQWRlcHQgYXQgdHJhbnNsYXRpbmcgZGVzaWduIGNvbmNlcHRzIGludG8gZnVuY3Rpb25hbCBhbmQgcmVzcG9uc2l2ZSB3ZWJzaXRlcy4gRGVtb25zdHJhdGVkIGFiaWxpdHkgdG8gY29sbGFib3JhdGUgZWZmZWN0aXZlbHkgaW4gY3Jvc3MtZnVuY3Rpb25hbCB0ZWFtcyB0byBkZWxpdmVyIGhpZ2gtcXVhbGl0eSBwcm9qZWN0cyBvbiB0aW1lLiBFYWdlciB0byBjb250cmlidXRlIG15IHNraWxscyBhbmQgZXhwZXJ0aXNlIHRvIGNyZWF0ZSBleGNlcHRpb25hbCB3ZWIgZXhwZXJpZW5jZXMuXG4gICAgICA8L2g2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcC00IG10LTUgYmctZ3JheS00MDAgZGFyazpiZy1kYXJrLTEwMCBcIlxuICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi0xLjVyZW1cIiwgbWFyZ2luUmlnaHQ6IFwiLTEuNXJlbVwiIH19XG4gICAgICA+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJteS0zIHRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlXCI+XG4gICAgICAgICAgV2hhdCBJIGFtIGRvaW5nXG4gICAgICAgIDwvaDQ+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC02IG15LTMgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICB7LyogY2hpbGRyZW4ncyBpbml0aWFsIGFuZCBhbmltYXRlIHByb3BlcnR5IHNob3VsZCBiZSBzYW1lIGFzIHRoZSBwYXJlbnQgZHVyaW5nIGEgc3RhZ2dlciBlZmZlY3QgICovfVxuICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBwLTIgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBkYXJrOmJnLWRhcmstMjAwIG1kOmNvbC1zcGFuLTEgXCJcbiAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlLnRpdGxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U2VydmljZUNhcmQgc2VydmljZT17c2VydmljZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/ai\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiPzQ4OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/ai\n");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiP2FhNzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/bs\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/md\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiP2YzZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvbWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/md\n");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/ri\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9yaVwiPzA0MWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvcmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/ri\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });