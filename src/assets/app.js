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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev_css/app.scss":
/*!**************************!*\
  !*** ./dev_css/app.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXZfY3NzL2FwcC5zY3NzPzc3MzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9kZXZfY3NzL2FwcC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev_css/app.scss\n");

/***/ }),

/***/ "./dev_js/app.js":
/*!***********************!*\
  !*** ./dev_js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var body = document.querySelector(\"body\");\nbody.classList.add(\"dark_theme\");\nvar mynetwork = document.querySelector(\".body\");\nvar id = chrome.runtime.id;\n\nif (mynetwork) {\n  mynetwork.addEventListener(\"DOMNodeInserted\", function (e) {\n    var ads = document.querySelector(\"#ads-container\");\n\n    if (ads) {\n      console.log(ads);\n    }\n  }, false);\n}\n\nwindow.addEventListener(\"load\", function () {\n  var counter = 30;\n  var checkingCountdown = setInterval(function () {\n    setThemeIcon();\n    reformatAds();\n    counter--;\n\n    if (counter === 0) {\n      clearInterval(checkingCountdown);\n    }\n  }, 1000);\n});\n\nfunction setThemeIcon() {\n  var listMenu = document.querySelector(\"nav.global-nav__nav ul\");\n  var svg = listMenu.querySelector(\".theme_icon\");\n\n  if (listMenu && !svg) {\n    var img = document.createElement(\"img\");\n    img.setAttribute(\"title\", \"Toggle Dark Theme\"); //img.setAttribute(\"data-tootip\", \"Toggle Dark Theme\");\n\n    img.src = \"chrome-extension://\".concat(id, \"/src/assets/images/dark_icon.svg\");\n    console.log(img);\n    img.classList.add(\"theme_icon\");\n    listMenu.appendChild(img);\n    img.addEventListener(\"click\", toggleTheme);\n  } else {\n    return false;\n  }\n}\n\nfunction toggleTheme() {\n  body.classList.toggle(\"dark_theme\");\n}\n\nfunction reformatAds() {\n  var frame = document.querySelector(\"iframe\");\n  frame.classList.add(\"iframe_format\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXZfanMvYXBwLmpzPzdmNTUiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIm15bmV0d29yayIsImlkIiwiY2hyb21lIiwicnVudGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYWRzIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImNvdW50ZXIiLCJjaGVja2luZ0NvdW50ZG93biIsInNldEludGVydmFsIiwic2V0VGhlbWVJY29uIiwicmVmb3JtYXRBZHMiLCJjbGVhckludGVydmFsIiwibGlzdE1lbnUiLCJzdmciLCJpbWciLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJ0b2dnbGVUaGVtZSIsInRvZ2dsZSIsImZyYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0FGLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLFlBQW5CO0FBQ0EsSUFBSUMsU0FBUyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBaEI7QUFDQSxJQUFNSSxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixFQUExQjs7QUFFQSxJQUFJRCxTQUFKLEVBQWU7QUFDYkEsV0FBUyxDQUFDSSxnQkFBVixDQUEyQixpQkFBM0IsRUFBOEMsVUFBVUMsQ0FBVixFQUFhO0FBQ3pELFFBQUlDLEdBQUcsR0FBR1YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFWOztBQUNBLFFBQUlTLEdBQUosRUFBUztBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsR0FMRCxFQUtHLEtBTEg7QUFNRDs7QUFFREcsTUFBTSxDQUFDTCxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQzFDLE1BQUlNLE9BQU8sR0FBRyxFQUFkO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ3hDQyxnQkFBWTtBQUNaQyxlQUFXO0FBQ1hKLFdBQU87O0FBQ1AsUUFBSUEsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2pCSyxtQkFBYSxDQUFDSixpQkFBRCxDQUFiO0FBQ0Q7QUFDRixHQVBrQyxFQU9oQyxJQVBnQyxDQUFuQztBQVFELENBVkQ7O0FBWUEsU0FBU0UsWUFBVCxHQUF3QjtBQUN0QixNQUFJRyxRQUFRLEdBQUdwQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQWY7QUFDQSxNQUFJb0IsR0FBRyxHQUFHRCxRQUFRLENBQUNuQixhQUFULENBQXVCLGFBQXZCLENBQVY7O0FBQ0EsTUFBSW1CLFFBQVEsSUFBSSxDQUFDQyxHQUFqQixFQUFzQjtBQUNwQixRQUFJQyxHQUFHLEdBQUd0QixRQUFRLENBQUN1QixhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQUQsT0FBRyxDQUFDRSxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLG1CQUExQixFQUZvQixDQUdwQjs7QUFDQUYsT0FBRyxDQUFDRyxHQUFKLGdDQUFnQ3BCLEVBQWhDO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0FBLE9BQUcsQ0FBQ3BCLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixZQUFsQjtBQUNBaUIsWUFBUSxDQUFDTSxXQUFULENBQXFCSixHQUFyQjtBQUNBQSxPQUFHLENBQUNkLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCbUIsV0FBOUI7QUFDRCxHQVRELE1BU087QUFDTCxXQUFPLEtBQVA7QUFDRDtBQUNGOztBQUdELFNBQVNBLFdBQVQsR0FBdUI7QUFDckI1QixNQUFJLENBQUNHLFNBQUwsQ0FBZTBCLE1BQWYsQ0FBc0IsWUFBdEI7QUFDRDs7QUFFRCxTQUFTVixXQUFULEdBQXVCO0FBQ3JCLE1BQUlXLEtBQUssR0FBRzdCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFaO0FBQ0E0QixPQUFLLENBQUMzQixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixlQUFwQjtBQUNEIiwiZmlsZSI6Ii4vZGV2X2pzL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5ib2R5LmNsYXNzTGlzdC5hZGQoXCJkYXJrX3RoZW1lXCIpO1xubGV0IG15bmV0d29yayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keVwiKTtcbmNvbnN0IGlkID0gY2hyb21lLnJ1bnRpbWUuaWQ7XG5cbmlmIChteW5ldHdvcmspIHtcbiAgbXluZXR3b3JrLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlSW5zZXJ0ZWRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgYWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZHMtY29udGFpbmVyXCIpO1xuICAgIGlmIChhZHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKGFkcylcbiAgICB9XG4gIH0sIGZhbHNlKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNvdW50ZXIgPSAzMDtcbiAgbGV0IGNoZWNraW5nQ291bnRkb3duID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHNldFRoZW1lSWNvbigpO1xuICAgIHJlZm9ybWF0QWRzKCk7XG4gICAgY291bnRlci0tO1xuICAgIGlmIChjb3VudGVyID09PSAwKSB7XG4gICAgICBjbGVhckludGVydmFsKGNoZWNraW5nQ291bnRkb3duKTtcbiAgICB9XG4gIH0sIDEwMDApO1xufSk7XG5cbmZ1bmN0aW9uIHNldFRoZW1lSWNvbigpIHtcbiAgbGV0IGxpc3RNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdi5nbG9iYWwtbmF2X19uYXYgdWxcIik7XG4gIGxldCBzdmcgPSBsaXN0TWVudS5xdWVyeVNlbGVjdG9yKFwiLnRoZW1lX2ljb25cIik7XG4gIGlmIChsaXN0TWVudSAmJiAhc3ZnKSB7XG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiVG9nZ2xlIERhcmsgVGhlbWVcIik7XG4gICAgLy9pbWcuc2V0QXR0cmlidXRlKFwiZGF0YS10b290aXBcIiwgXCJUb2dnbGUgRGFyayBUaGVtZVwiKTtcbiAgICBpbWcuc3JjID0gYGNocm9tZS1leHRlbnNpb246Ly8ke2lkfS9zcmMvYXNzZXRzL2ltYWdlcy9kYXJrX2ljb24uc3ZnYDtcbiAgICBjb25zb2xlLmxvZyhpbWcpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwidGhlbWVfaWNvblwiKTtcbiAgICBsaXN0TWVudS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlVGhlbWUpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblxuZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtfdGhlbWVcIik7XG59XG5cbmZ1bmN0aW9uIHJlZm9ybWF0QWRzKCkge1xuICBsZXQgZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpO1xuICBmcmFtZS5jbGFzc0xpc3QuYWRkKFwiaWZyYW1lX2Zvcm1hdFwiKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev_js/app.js\n");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./dev_js/app.js ./dev_css/app.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mac/Documents/development/chrome/darker_link/src/dev_js/app.js */"./dev_js/app.js");
module.exports = __webpack_require__(/*! /Users/mac/Documents/development/chrome/darker_link/src/dev_css/app.scss */"./dev_css/app.scss");


/***/ })

/******/ });