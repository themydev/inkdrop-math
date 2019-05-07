"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popNextArg = popNextArg;
exports.getSqureParameter = getSqureParameter;
exports.isAlt = isAlt;

function popNextArg(ctx) {
  return ctx.consumeArgs(1)[0].reverse().map(t => t.text).join("");
}

function getSqureParameter(ctx) {
  while (ctx.future().text === " ") {
    ctx.popToken();
  }

  let parameter = "";

  if (ctx.future().text === "[") {
    ctx.popToken();

    while (true) {
      const ch = ctx.popToken().text;

      if (ch === "]") {
        break;
      } else if (ch === "EOF") {
        throw new Error("Expecting ]");
      }

      parameter += ch;
    }
  }

  return parameter;
}

function isAlt(ctx) {
  while (ctx.future().text === " ") {
    ctx.popToken();
  }

  if (ctx.future().text === "*") {
    ctx.popToken();
    return true;
  }

  return false;
}