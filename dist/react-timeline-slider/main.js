define(["exports", "./components/timeline_slider", "./components/auto_width"], function (exports, _timeline_slider, _auto_width) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AutoWidth = undefined;

  var _timeline_slider2 = _interopRequireDefault(_timeline_slider);

  var _auto_width2 = _interopRequireDefault(_auto_width);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _auto_width2.default)(_timeline_slider2.default);
  exports.AutoWidth = _auto_width2.default;
});
//# sourceMappingURL=main.js.map
