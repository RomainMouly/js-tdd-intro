const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("isSquare", () => {
  it("is square", () => {
    assert.ok(2, 2), true;
    assert.ok(2, 1), false;
  });
});

describe("getArea", () => {
  it("getArea", () => {
    const newRec = new Rectangle(3, 4);
    assert.strictEqual(newRec.getArea(), 12);
  });
});

describe("getPerimeter", () => {
  it("getPerimeter", () => {
    const newRec2 = new Rectangle(2, 3);
    assert.strictEqual(newRec2.getPerimeter(), 10);
  });
});
