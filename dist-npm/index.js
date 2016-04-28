"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timeline_slider = require("./components/timeline_slider");

var _timeline_slider2 = _interopRequireDefault(_timeline_slider);

var _auto_width = require("./components/auto_width");

var _auto_width2 = _interopRequireDefault(_auto_width);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _auto_width2.default)(_timeline_slider2.default);

global.ReactTimelineSlider = (0, _auto_width2.default)(_timeline_slider2.default);
//# sourceMappingURL=index.js.map
