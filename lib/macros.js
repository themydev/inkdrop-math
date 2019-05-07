"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bracing = _interopRequireDefault(require("./macros/bracing"));

var _derivative = _interopRequireDefault(require("./macros/derivative"));

var _dirac = _interopRequireDefault(require("./macros/dirac"));

var _matrix = _interopRequireDefault(require("./macros/matrix"));

var _text = _interopRequireDefault(require("./macros/text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

const macros = { ..._bracing["default"],
  ..._derivative["default"],
  ..._dirac["default"],
  ..._matrix["default"],
  ..._text["default"]
};
var _default = macros;
exports["default"] = _default;