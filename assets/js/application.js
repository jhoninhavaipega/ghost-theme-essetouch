webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _modal = __webpack_require__(6);

	new _modal.Modal();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Modal = exports.Modal = function () {
	  function Modal() {
	    _classCallCheck(this, Modal);

	    this.attribute = 'data-modal-target';
	    this.btns = document.querySelectorAll("[" + this.attribute + "]");
	    this.classVisible = 'is-visible';
	    this.modal = null;

	    this.bindAction();
	  }

	  _createClass(Modal, [{
	    key: "bindAction",
	    value: function bindAction() {
	      var _this = this;

	      for (var i = 0; i < this.btns.length; i++) {
	        this.btns[i].addEventListener('click', function (event) {
	          return _this.selectAction(event);
	        });
	      }
	    }
	  }, {
	    key: "selectAction",
	    value: function selectAction(event) {
	      this.setModal(event);

	      if (this.modal.classList.contains(this.classVisible)) {
	        this.close();
	      } else {
	        this.open();
	      }
	    }
	  }, {
	    key: "setModal",
	    value: function setModal(event) {
	      var element = event.target;
	      var attribute = element.getAttribute(this.attribute);
	      var modal = document.querySelector('#' + attribute);

	      this.modal = modal;
	    }
	  }, {
	    key: "open",
	    value: function open() {
	      this.modal.classList.add(this.classVisible);
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      this.modal.classList.remove(this.classVisible);
	    }
	  }]);

	  return Modal;
	}();

/***/ }
]);