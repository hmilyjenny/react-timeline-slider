define(["module", "exports", "react", "react-dom"], function (module, exports, _react, _reactDom) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

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

  var AutoWidth = function AutoWidth(ComposedComponent) {
    return function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, props));

        _this.state = {
          width: 0
        };
        return _this;
      }

      _createClass(_class, [{
        key: "updateWidth",
        value: function updateWidth() {
          var node = _reactDom2.default.findDOMNode(this.refs.component);
          var parentNode = node.parentNode;
          this.setState({ width: parentNode.offsetWidth });
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.updateWidth();
          window.addEventListener('resize', this.updateWidth.bind(this));
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.updateWidth.bind(this));
        }
      }, {
        key: "render",
        value: function render() {
          return _react2.default.createElement(ComposedComponent, _extends({}, this.props, {
            ref: "component",
            width: this.state.width }));
        }
      }]);

      return _class;
    }(_react2.default.Component);
  };

  exports.default = AutoWidth;
  module.exports = exports['default'];
});
//# sourceMappingURL=auto_width.js.map
