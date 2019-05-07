"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("./util");

var _default = {
  "\\qc": ",\\quad",
  "\\qq": ctx => ((0, _util.isAlt)(ctx) ? "" : "\\quad") + "\\text{" + (0, _util.popNextArg)() + "}\\quad",
  "\\qcc": ctx => ((0, _util.isAlt)(ctx) ? "" : "\\quad") + "\\text{c.c.}\\quad",
  "\\qif": ctx => ((0, _util.isAlt)(ctx) ? "" : "\\quad") + "\\text{if}\\quad"
};
exports["default"] = _default;