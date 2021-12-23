const assert = require('assert');
const circle = require('../src/circle');

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    assert.strictEqual(typeof circle(1), 'object');
    assert.ok(circle(1), Object.keys(circle).length);
    assert.strictEqual(circle(), undefined);
    assert.ok(Object.values(circle(2))[2] === 2 * 3.14 * 2);
    assert.ok(Object.values(circle(3))[2] === 2 * 3.14 * 3);
    const area = 3.14 * 3 * 3;
    const circumference = 2 * 3.14 * 3;
    assert.deepStrictEqual(circle(3), { radius: 3, area, circumference });
  });
});
