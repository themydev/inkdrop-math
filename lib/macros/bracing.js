"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
const braces = {
  "(": ")",
  "[": "]",
  "{": "}",
  "\\{": "\\}",
  "|": "|"
};
const evalBraces = {
  "(": "|",
  "[": "|",
  "{": "}"
};
var _default = {
  "\\qty"(ctx) {
    const start = ctx.popToken().text;
    const end = braces[start];

    if (typeof end === "undefined") {
      return new Error("Expecting opening delimeters after \\qty");
    }

    let expr = ["\\left"];
    expr.push(start === "{" ? "\\{" : start);
    let opened = 0;

    while (true) {
      const next = ctx.popToken().text;

      if (next === "EOF") {
        return new Error("Expecting closing delimeters " + end + " after \\mqty");
      } else if (next !== end) {
        expr.push(next);

        if (next === start) {
          ++opened;
        }
      } else if (opened > 0) {
        expr.push(next);
        --opened;
      } else {
        // end
        expr.push("\\right");
        expr.push(end === "}" ? "\\}" : next);
        break;
      }
    }

    return expr.join(" ");
  },

  "\\abs": "\\qty|{#1}|",

  "\\eval"(ctx) {
    const start = ctx.popToken().text;
    let end = evalBraces[start];

    if (typeof end === "undefined") {
      return new Error("Expecting opening delimeters after \\eval");
    }

    let expr = ["\\left"];
    expr.push(start === "{" ? "." : start);
    let opened = 0;

    while (true) {
      const next = ctx.popToken().text;

      if (next === "EOF") {
        return new Error("Expecting " + end + " after \\eval");
      } else if (next !== end) {
        expr.push(next);

        if (next === start) {
          ++opened;
        }
      } else if (end === "}" && opened > 0) {
        expr.push(next);
        --opened;
      } else {
        // end
        expr.push("\\rule{0px}{1.2em}\\right|");
        break;
      }
    }

    return expr.join(" ");
  }

};
exports["default"] = _default;