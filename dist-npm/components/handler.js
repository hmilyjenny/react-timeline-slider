'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HANDLER_TWO = exports.HANDLER_ONE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tick_collection = require('./tick_collection');

var _react_svg = require('./react_svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HANDLER_ONE = String("HANDLER_ONE");
var HANDLER_TWO = String("HANDLER_TWO");

var Handler = function (_React$Component) {
  _inherits(Handler, _React$Component);

  function Handler(props) {
    _classCallCheck(this, Handler);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Handler).call(this, props));

    _this.state = {
      x: null,
      r: null
    };
    return _this;
  }

  _createClass(Handler, [{
    key: 'handlerDragged',
    value: function handlerDragged() {
      var _this2 = this;

      var x = this.state.x;
      if (x != null) {
        this.setState({ x: null, r: null }, function () {
          _this2.props.dragged(x);
        });
      }
    }
  }, {
    key: 'handlerBeingDragged',
    value: function handlerBeingDragged(e) {
      var _this3 = this;

      var x = e.x;
      var limits = this.props.limits;
      if (e.x < limits.min.x) x = limits.min.x;
      if (e.x > limits.max.x) x = limits.max.x;

      this.setState({ x: x, r: 8 }, function () {
        _this3.props.onDrag(x);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_react_svg.Circle, { cx: this.x,
        cy: '0',
        r: this.r,
        draggable: true,
        onDrag: this.handlerBeingDragged.bind(this),
        onDragEnd: this.handlerDragged.bind(this),
        className: 'react-timeline-slider__handler',
        style: { cursor: 'pointer' } });
    }
  }, {
    key: 'x',
    get: function get() {
      if (this.state.x !== null) {
        return this.state.x;
      } else {
        return this.props.activeTick.x;
      }
    }
  }, {
    key: 'r',
    get: function get() {
      if (this.state.r !== null) {
        return this.state.r;
      } else {
        return 6;
      }
    }
  }]);

  return Handler;
}(_react2.default.Component);

exports.default = Handler;
exports.HANDLER_ONE = HANDLER_ONE;
exports.HANDLER_TWO = HANDLER_TWO;
//# sourceMappingURL=handler.js.map
