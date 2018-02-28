"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

var _mod = require("./mod1");

var mod1 = _interopRequireWildcard(_mod);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = _chai2.default.assert; // mod1Spec.js


describe("test", function () {
  it("should correctly mock module method", function () {
    _sinon2.default.stub(mod1, "test").returns("pass");
    assert.strictEqual(mod1.test(), "pass");
  });
});

describe("the Module object", function () {
  it("should have a toStringTag symbol with the expected value", function () {
    assert.strictEqual(mod1[Symbol.toStringTag], "Module");
  });

  it("should use the toStringTag symbol", function () {
    var symbolString = mod1[Symbol.toStringTag];
    assert.strictEqual(Object.prototype.toString.call(mod1), "[object " + symbolString + "]");
  });
});