define(['module', 'exports', 'react', './tick', './react_svg'], function (module, exports, _react, _tick, _react_svg) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _tick2 = _interopRequireDefault(_tick);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var TickCollection = function (_React$Component) {
    _inherits(TickCollection, _React$Component);

    function TickCollection() {
      _classCallCheck(this, TickCollection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TickCollection).apply(this, arguments));
    }

    _createClass(TickCollection, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var ticks = this.props.ticks.map(function (t, i) {
          return _react2.default.createElement(_tick2.default, { tick: t, key: i,
            contextSize: _this2.props.contextSize,
            onClick: _this2.props.onClick.bind(_this2) });
        });

        return _react2.default.createElement(
          _react_svg.G,
          { className: 'react-timeline-slider__ticks' },
          ticks
        );
      }
    }]);

    return TickCollection;
  }(_react2.default.Component);

  exports.default = TickCollection;
  module.exports = exports['default'];
});
//# sourceMappingURL=tick_collection.js.map