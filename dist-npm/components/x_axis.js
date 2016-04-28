'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react_svg = require('./react_svg');

var _tick = require('../tick');

var _tick_collection = require('./tick_collection');

var _tick_collection2 = _interopRequireDefault(_tick_collection);

var _handler = require('./handler');

var _handler2 = _interopRequireDefault(_handler);

var _line_between_handlers = require('./line_between_handlers');

var _line_between_handlers2 = _interopRequireDefault(_line_between_handlers);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XAxis = function (_React$Component) {
  _inherits(XAxis, _React$Component);

  function XAxis(props) {
    _classCallCheck(this, XAxis);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(XAxis).call(this, props));

    _this.state = {
      handlersPosition: []
    };
    return _this;
  }

  _createClass(XAxis, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.isPlaying != nextProps.isPlaying) {
        if (nextProps.isPlaying) {
          var speed = this.props.playStopSpeed || 1000;
          this.interval = setInterval(this.move.bind(this), speed);
        } else {
          clearInterval(this.interval);
        }
      }

      if (!_underscore2.default.isEqual(nextProps.multi, this.props.multi)) {
        this.setState({ handlersPosition: [] });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'playStopSpace',
    value: function playStopSpace() {
      if (this.props.playStop) return 50;
      return 0;
    }
  }, {
    key: 'width',
    value: function width() {
      return this.props.width - this.props.margin * 4 - this.playStopSpace();
    }
  }, {
    key: 'ticks',
    value: function ticks() {
      return _tick.TickCollection.fromRange(this.props.range, this.width());
    }
  }, {
    key: 'limits',
    value: function limits() {
      var ticks = this.ticks();
      return {
        min: ticks.min(),
        max: ticks.max()
      };
    }
  }, {
    key: 'values',
    value: function values() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, _handler.HANDLER_ONE, this.props.value[0]), _defineProperty(_ref, _handler.HANDLER_TWO, this.props.value[1]), _defineProperty(_ref, 'toArray', function toArray() {
        return [this[_handler.HANDLER_ONE], this[_handler.HANDLER_TWO]].sort();
      }), _ref;
    }
  }, {
    key: 'activeTick',
    value: function activeTick(handler) {
      return this.ticks().findByValue(this.values()[handler]);
    }
  }, {
    key: 'moveHandlerTo',
    value: function moveHandlerTo(tick) {
      this.moveHandler(_handler.HANDLER_ONE, tick);
    }
  }, {
    key: 'moveHandler',
    value: function moveHandler(handler, tick) {
      var values = this.values();
      values[handler] = tick.value;

      this.props.onValueChange(values.toArray());
    }
  }, {
    key: 'move',
    value: function move() {
      var activeTickValue = this.activeTick(_handler.HANDLER_ONE).value;
      var tickNextToActive = this.ticks().findNext(activeTickValue);
      var maxTickValue = this.limits().max.value;
      var beforeLastHandler = void 0;

      if (this.props.multi) {
        beforeLastHandler = this.ticks().before(this.activeTick(_handler.HANDLER_TWO).value);
      }

      if (activeTickValue == maxTickValue || this.props.multi && activeTickValue == beforeLastHandler.value) {
        this.moveHandlerTo(this.limits().min);
      } else {
        if (!(this.props.multi && tickNextToActive.value == maxTickValue)) {
          this.moveHandlerTo(tickNextToActive);
        }

        if (tickNextToActive.value == maxTickValue || this.props.multi && tickNextToActive.value == beforeLastHandler.value) {
          clearInterval(this.interval);
          this.props.onStop();
        }
      }
    }
  }, {
    key: 'handlerDragged',
    value: function handlerDragged(handler, x) {
      var _this2 = this;

      var values = this.values();
      values[handler] = this.ticks().findCloser(x).value;
      this.setState({
        handlersPosition: []
      }, function () {
        _this2.props.onValueChange(values.toArray());
      });
    }
  }, {
    key: 'setHandlerPosition',
    value: function setHandlerPosition(handler, x) {
      var positions = this.state.handlersPosition;
      positions[handler] = x;
      this.setState({
        handlersPosition: positions
      });
    }
  }, {
    key: 'getHandlerPosition',
    value: function getHandlerPosition(handler) {
      var activeTick = this.activeTick(handler);
      if (_underscore2.default.isNumber(this.state.handlersPosition[handler])) {
        return this.state.handlersPosition[handler];
      } else if (activeTick) {
        return activeTick.x;
      }
    }
  }, {
    key: 'getHandlerDistance',
    value: function getHandlerDistance(handler, x) {
      var handlerPosition = this.getHandlerPosition(handler);
      return Math.abs(handlerPosition - x);
    }
  }, {
    key: 'findCloserHandler',
    value: function findCloserHandler(x) {
      if (this.getHandlerDistance(_handler.HANDLER_ONE, x) > this.getHandlerDistance(_handler.HANDLER_TWO, x)) {
        return _handler.HANDLER_TWO;
      } else {
        return _handler.HANDLER_ONE;
      }
    }
  }, {
    key: 'thereIsAHandlerOn',
    value: function thereIsAHandlerOn(x) {
      return this.getHandlerDistance(_handler.HANDLER_ONE, x) == 0 || this.getHandlerDistance(_handler.HANDLER_TWO, x) == 0;
    }
  }, {
    key: 'handleTickClick',
    value: function handleTickClick(tick) {
      if (this.props.multi) {
        if (!this.thereIsAHandlerOn(tick.x)) {
          var handler = this.findCloserHandler(tick.x);
          this.moveHandler(handler, tick);
        }
      } else {
        this.moveHandlerTo(tick);
      }
    }
  }, {
    key: 'multiHandlerSupport',
    value: function multiHandlerSupport() {
      if (this.props.multi) {
        return _react2.default.createElement(
          _react_svg.G,
          null,
          _react2.default.createElement(_line_between_handlers2.default, {
            x1: this.getHandlerPosition(_handler.HANDLER_ONE),
            x2: this.getHandlerPosition(_handler.HANDLER_TWO) }),
          _react2.default.createElement(_handler2.default, { ticks: this.ticks(),
            limits: this.limits(),
            activeTick: this.activeTick(_handler.HANDLER_TWO),
            onDrag: this.setHandlerPosition.bind(this, _handler.HANDLER_TWO),
            dragged: this.handlerDragged.bind(this, _handler.HANDLER_TWO) })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var margin = this.props.margin;

      return _react2.default.createElement(
        _react_svg.G,
        { className: 'xaxis', transform: 'translate(' + (margin * 2 + this.playStopSpace()) + ', ' + margin + ') ' },
        _react2.default.createElement(_tick_collection2.default, {
          contextSize: this.props.contextSize,
          ticks: this.ticks(),
          onClick: this.handleTickClick.bind(this) }),
        this.multiHandlerSupport(),
        _react2.default.createElement(_handler2.default, { ticks: this.ticks(),
          limits: this.limits(),
          activeTick: this.activeTick(_handler.HANDLER_ONE),
          onDrag: this.setHandlerPosition.bind(this, _handler.HANDLER_ONE),
          dragged: this.handlerDragged.bind(this, _handler.HANDLER_ONE) })
      );
    }
  }]);

  return XAxis;
}(_react2.default.Component);

exports.default = XAxis;
;

XAxis.defaultProps = {
  margin: 18
};
//# sourceMappingURL=x_axis.js.map
