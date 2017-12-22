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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/draw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/draw.js":
/*!***************************!*\
  !*** ./assets/js/draw.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var app = new Vue({
    el: '#app',
    data: {
        login: '',
        birthdate: '',
        drawn: false
    },
    methods: {
        formatBirthdate: function formatBirthdate(e) {
            if (this.birthdate.length == 2 || this.birthdate.length == 7) {
                this.birthdate += ' / ';
            }
            if (this.birthdate.length < 5 && this.birthdate.length > 2) {
                this.birthdate = this.birthdate.substr(0, 1);
            }
            if (this.birthdate.length < 10 && this.birthdate.length > 7) {
                this.birthdate = this.birthdate.substr(0, 6);
            }
        },
        draw: function draw() {
            this.drawn = true;
        }
    }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzYyMWZkYzM4Y2JkYThhNDMzNTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RyYXcuanMiXSwibmFtZXMiOlsiYXBwIiwiVnVlIiwiZWwiLCJkYXRhIiwibG9naW4iLCJiaXJ0aGRhdGUiLCJkcmF3biIsIm1ldGhvZHMiLCJmb3JtYXRCaXJ0aGRhdGUiLCJlIiwibGVuZ3RoIiwic3Vic3RyIiwiZHJhdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBLElBQUlBLE1BQU0sSUFBSUMsR0FBSixDQUFRO0FBQ2RDLFFBQUksTUFEVTtBQUVkQyxVQUFNO0FBQ0ZDLGVBQU8sRUFETDtBQUVGQyxtQkFBVyxFQUZUO0FBR0ZDLGVBQU87QUFITCxLQUZRO0FBT2RDLGFBQVM7QUFDTEMseUJBQWlCLHlCQUFTQyxDQUFULEVBQVk7QUFDekIsZ0JBQUksS0FBS0osU0FBTCxDQUFlSyxNQUFmLElBQXlCLENBQXpCLElBQThCLEtBQUtMLFNBQUwsQ0FBZUssTUFBZixJQUF5QixDQUEzRCxFQUE4RDtBQUMxRCxxQkFBS0wsU0FBTCxJQUFrQixLQUFsQjtBQUNIO0FBQ0QsZ0JBQUksS0FBS0EsU0FBTCxDQUFlSyxNQUFmLEdBQXdCLENBQXhCLElBQTZCLEtBQUtMLFNBQUwsQ0FBZUssTUFBZixHQUF3QixDQUF6RCxFQUE0RDtBQUN4RCxxQkFBS0wsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVNLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsQ0FBakI7QUFDSDtBQUNELGdCQUFJLEtBQUtOLFNBQUwsQ0FBZUssTUFBZixHQUF3QixFQUF4QixJQUE4QixLQUFLTCxTQUFMLENBQWVLLE1BQWYsR0FBd0IsQ0FBMUQsRUFBNkQ7QUFDekQscUJBQUtMLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlTSxNQUFmLENBQXNCLENBQXRCLEVBQXdCLENBQXhCLENBQWpCO0FBQ0g7QUFDSixTQVhJO0FBWUxDLGNBQU0sZ0JBQVc7QUFDYixpQkFBS04sS0FBTCxHQUFhLElBQWI7QUFDSDtBQWRJO0FBUEssQ0FBUixDQUFWLEMiLCJmaWxlIjoiZHJhdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2RyYXcuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzYyMWZkYzM4Y2JkYThhNDMzNTQiLCJ2YXIgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBkYXRhOiB7XG4gICAgICAgIGxvZ2luOiAnJyxcbiAgICAgICAgYmlydGhkYXRlOiAnJyxcbiAgICAgICAgZHJhd246IGZhbHNlXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGZvcm1hdEJpcnRoZGF0ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYmlydGhkYXRlLmxlbmd0aCA9PSAyIHx8IHRoaXMuYmlydGhkYXRlLmxlbmd0aCA9PSA3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iaXJ0aGRhdGUgKz0gJyAvICdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJpcnRoZGF0ZS5sZW5ndGggPCA1ICYmIHRoaXMuYmlydGhkYXRlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJpcnRoZGF0ZSA9IHRoaXMuYmlydGhkYXRlLnN1YnN0cigwLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYmlydGhkYXRlLmxlbmd0aCA8IDEwICYmIHRoaXMuYmlydGhkYXRlLmxlbmd0aCA+IDcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJpcnRoZGF0ZSA9IHRoaXMuYmlydGhkYXRlLnN1YnN0cigwLDYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkcmF3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd24gPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZHJhdy5qcyJdLCJzb3VyY2VSb290IjoiIn0=