const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.ok(Array.isArray(productDetails('Alcool gel', 'Mascara')));
    assert.ok(productDetails('x', 'y').length === 2);
    assert.deepStrictEqual(typeof productDetails('x', 'y')[0]
    && typeof productDetails('x', 'y')[1], 'object');
    assert.notDeepStrictEqual(productDetails('x', 'y')[0], productDetails('x', 'y')[1]);
    assert.deepStrictEqual(productDetails('x', 'y')[0].details.productId.substr(1), '123');
    assert.deepStrictEqual(productDetails('x', 'y')[1].details.productId.substr(1), '123');
  });
});
