"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("./util");

var _default = {
  "\\bra"(ctx) {
    let expr = ["\\left<{" + (0, _util.popNextArg)(ctx)];

    while (ctx.future().text === " ") {
      ctx.popToken();
    }

    if (ctx.future().text !== "\\ket") {
      expr.push("}\\right|");
      return expr.join(" ");
    } // \bra{a}\ket{b} => \left<{a}\middle|{b}\right>


    ctx.popToken();
    expr.push("}\\middle|{");
    expr.push((0, _util.popNextArg)(ctx));
    expr.push("}\\right>");
    return expr.join(" ");
  },

  "\\ket": "\\left|{#1}\\right>",

  "\\braket"(ctx) {
    const a = (0, _util.popNextArg)(ctx);
    let expr = ["\\left<{" + a + "}\\middle|{"];

    try {
      expr.push((0, _util.popNextArg)(ctx));
    } catch (e) {
      expr.push(a);
    }

    expr.push("}\\right>");
    return expr.join(" ");
  },

  "\\ketbra"(ctx) {
    const a = (0, _util.popNextArg)(ctx);
    let expr = ["\\left|{" + a + "}\\middle>\\middle<{"];

    try {
      expr.push((0, _util.popNextArg)(ctx));
    } catch (e) {
      expr.push(a);
    }

    expr.push("}\\right|");
    return expr.join(" ");
  },

  "\\expval"(ctx) {
    const a = (0, _util.popNextArg)(ctx);

    while (ctx.future().text === " ") {
      ctx.popToken();
    }

    if (ctx.future().text !== "{") {
      return "\\left<{" + a + "}\\right>";
    }

    const b = (0, _util.popNextArg)(ctx);
    return "\\left<{" + b + "}\\middle|{" + a + "}\\middle|{" + b + "}\\right>";
  },

  "\\matrixel"(ctx) {
    const [a, b, c] = ctx.consumeArgs(3).map(arg => arg.reverse().map(t => t.text).join(""));
    return "\\left<{" + a + "}\\middle|{" + b + "}\\middle|{" + c + "}\\right>";
  }

};
exports["default"] = _default;