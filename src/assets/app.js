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

eval("var body = document.querySelector(\"body\");\nbody.classList.add(\"dark_theme\");\nvar mynetwork = document.querySelector(\".body\");\nvar id = chrome.runtime.id;\n\nif (mynetwork) {\n  mynetwork.addEventListener(\"DOMNodeInserted\", function (e) {\n    var ads = document.querySelector(\"#ads-container\");\n\n    if (ads) {\n      console.log(ads);\n    }\n  }, false);\n}\n\nwindow.addEventListener(\"load\", function () {\n  var counter = 30;\n  var checkingCountdown = setInterval(function () {\n    setThemeIcon();\n    reformatAds();\n    counter--;\n\n    if (counter === 0) {\n      clearInterval(checkingCountdown);\n    }\n  }, 1000);\n});\n\nfunction setThemeIcon() {\n  var listMenu = document.querySelector(\"nav.global-nav__nav ul\");\n  var svg = listMenu.querySelector(\".theme_icon\");\n\n  if (listMenu && !svg) {\n    var img = document.createElement(\"img\");\n    img.setAttribute(\"title\", \"Toggle Dark Theme\"); //img.setAttribute(\"data-tootip\", \"Toggle Dark Theme\");\n\n    img.src = \"chrome-extension://\".concat(id, \"/images/dark_icon.svg\");\n    img.classList.add(\"theme_icon\");\n    listMenu.appendChild(img);\n    img.addEventListener(\"click\", toggleTheme);\n  } else {\n    return false;\n  }\n}\n\nfunction toggleTheme() {\n  body.classList.toggle(\"dark_theme\");\n}\n\nfunction reformatAds() {\n  var frame = document.querySelector(\"iframe\");\n  frame.classList.add(\"iframe_format\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXZfanMvYXBwLmpzPzdmNTUiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIm15bmV0d29yayIsImlkIiwiY2hyb21lIiwicnVudGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYWRzIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImNvdW50ZXIiLCJjaGVja2luZ0NvdW50ZG93biIsInNldEludGVydmFsIiwic2V0VGhlbWVJY29uIiwicmVmb3JtYXRBZHMiLCJjbGVhckludGVydmFsIiwibGlzdE1lbnUiLCJzdmciLCJpbWciLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJ0b2dnbGVUaGVtZSIsInRvZ2dsZSIsImZyYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0FGLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLFlBQW5CO0FBQ0EsSUFBSUMsU0FBUyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBaEI7QUFDQSxJQUFNSSxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixFQUExQjs7QUFFQSxJQUFJRCxTQUFKLEVBQWU7QUFDYkEsV0FBUyxDQUFDSSxnQkFBVixDQUEyQixpQkFBM0IsRUFBOEMsVUFBVUMsQ0FBVixFQUFhO0FBQ3pELFFBQUlDLEdBQUcsR0FBR1YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFWOztBQUNBLFFBQUlTLEdBQUosRUFBUztBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsR0FMRCxFQUtHLEtBTEg7QUFNRDs7QUFFREcsTUFBTSxDQUFDTCxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQzFDLE1BQUlNLE9BQU8sR0FBRyxFQUFkO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ3hDQyxnQkFBWTtBQUNaQyxlQUFXO0FBQ1hKLFdBQU87O0FBQ1AsUUFBSUEsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2pCSyxtQkFBYSxDQUFDSixpQkFBRCxDQUFiO0FBQ0Q7QUFDRixHQVBrQyxFQU9oQyxJQVBnQyxDQUFuQztBQVFELENBVkQ7O0FBWUEsU0FBU0UsWUFBVCxHQUF3QjtBQUN0QixNQUFJRyxRQUFRLEdBQUdwQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQWY7QUFDQSxNQUFJb0IsR0FBRyxHQUFHRCxRQUFRLENBQUNuQixhQUFULENBQXVCLGFBQXZCLENBQVY7O0FBQ0EsTUFBSW1CLFFBQVEsSUFBSSxDQUFDQyxHQUFqQixFQUFzQjtBQUNwQixRQUFJQyxHQUFHLEdBQUd0QixRQUFRLENBQUN1QixhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQUQsT0FBRyxDQUFDRSxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLG1CQUExQixFQUZvQixDQUdwQjs7QUFDQUYsT0FBRyxDQUFDRyxHQUFKLGdDQUFnQ3BCLEVBQWhDO0FBQ0FpQixPQUFHLENBQUNwQixTQUFKLENBQWNDLEdBQWQsQ0FBa0IsWUFBbEI7QUFDQWlCLFlBQVEsQ0FBQ00sV0FBVCxDQUFxQkosR0FBckI7QUFDQUEsT0FBRyxDQUFDZCxnQkFBSixDQUFxQixPQUFyQixFQUE4Qm1CLFdBQTlCO0FBQ0QsR0FSRCxNQVFPO0FBQ0wsV0FBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFHRCxTQUFTQSxXQUFULEdBQXVCO0FBQ3JCNUIsTUFBSSxDQUFDRyxTQUFMLENBQWUwQixNQUFmLENBQXNCLFlBQXRCO0FBQ0Q7O0FBRUQsU0FBU1YsV0FBVCxHQUF1QjtBQUNyQixNQUFJVyxLQUFLLEdBQUc3QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBNEIsT0FBSyxDQUFDM0IsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsZUFBcEI7QUFDRCIsImZpbGUiOiIuL2Rldl9qcy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuYm9keS5jbGFzc0xpc3QuYWRkKFwiZGFya190aGVtZVwiKTtcbmxldCBteW5ldHdvcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlcIik7XG5jb25zdCBpZCA9IGNocm9tZS5ydW50aW1lLmlkO1xuXG5pZiAobXluZXR3b3JrKSB7XG4gIG15bmV0d29yay5hZGRFdmVudExpc3RlbmVyKFwiRE9NTm9kZUluc2VydGVkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IGFkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRzLWNvbnRhaW5lclwiKTtcbiAgICBpZiAoYWRzKSB7XG4gICAgICBjb25zb2xlLmxvZyhhZHMpXG4gICAgfVxuICB9LCBmYWxzZSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjb3VudGVyID0gMzA7XG4gIGxldCBjaGVja2luZ0NvdW50ZG93biA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBzZXRUaGVtZUljb24oKTtcbiAgICByZWZvcm1hdEFkcygpO1xuICAgIGNvdW50ZXItLTtcbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChjaGVja2luZ0NvdW50ZG93bik7XG4gICAgfVxuICB9LCAxMDAwKTtcbn0pO1xuXG5mdW5jdGlvbiBzZXRUaGVtZUljb24oKSB7XG4gIGxldCBsaXN0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYuZ2xvYmFsLW5hdl9fbmF2IHVsXCIpO1xuICBsZXQgc3ZnID0gbGlzdE1lbnUucXVlcnlTZWxlY3RvcihcIi50aGVtZV9pY29uXCIpO1xuICBpZiAobGlzdE1lbnUgJiYgIXN2Zykge1xuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlRvZ2dsZSBEYXJrIFRoZW1lXCIpO1xuICAgIC8vaW1nLnNldEF0dHJpYnV0ZShcImRhdGEtdG9vdGlwXCIsIFwiVG9nZ2xlIERhcmsgVGhlbWVcIik7XG4gICAgaW1nLnNyYyA9IGBjaHJvbWUtZXh0ZW5zaW9uOi8vJHtpZH0vaW1hZ2VzL2RhcmtfaWNvbi5zdmdgO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwidGhlbWVfaWNvblwiKTtcbiAgICBsaXN0TWVudS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlVGhlbWUpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblxuZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtfdGhlbWVcIik7XG59XG5cbmZ1bmN0aW9uIHJlZm9ybWF0QWRzKCkge1xuICBsZXQgZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpO1xuICBmcmFtZS5jbGFzc0xpc3QuYWRkKFwiaWZyYW1lX2Zvcm1hdFwiKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev_js/app.js\n");

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