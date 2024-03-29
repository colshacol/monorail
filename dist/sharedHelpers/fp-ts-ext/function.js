"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swap = exports.tuple = exports.o = exports.flip_ = exports.constVoid = void 0;

const constVoid = () => {};
/**
 * Flips the order of the arguments to an uncurried function taking two
 * arguments. Like `flip`, but for uncurried, not curried, functions.
 */


exports.constVoid = constVoid;

const flip_ = f => (b, a) => f(a, b);
/**
 * Simple binary composition. Also known as `compose2`
 */


exports.flip_ = flip_;

const o = (f, g) => x => f(g(x));
/**
 * Utility for constructing tuples with proper inference
 */


exports.o = o;

const tuple = (...args) => args;
/**
 * Flips the position of each item in a 2-tuple
 */


exports.tuple = tuple;

const swap = ([x, y]) => [y, x];

exports.swap = swap;