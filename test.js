var ceil = require('./');
var expect = require('expect');

describe('fixed-ceil', function() {
  it('1. fixed > 0', function() {
    expect(ceil(125.34567, 1)).toBe(125.4);
    expect(ceil(125.34567, 2)).toBe(125.35);
    expect(ceil(125.34567, 3)).toBe(125.346);
    expect(ceil(125.34567, 4)).toBe(125.3457);
    expect(ceil(125.34567, 5)).toBe(125.34567);
    expect(ceil(125.34567, 6)).toBe(125.34567);
  });

  it('2. fixed = 0', function() {
    expect(ceil(125.6, 0)).toBe(126);
    expect(ceil(125.4, 0)).toBe(126);
    expect(ceil(125.6, null)).toBe(126);
    expect(ceil(125.6, '')).toBe(126);
    expect(ceil(125.6)).toBe(126);
    expect(ceil(125.4, null)).toBe(126);
    expect(ceil(125.6, undefined)).toBe(126);
    expect(ceil(125.4, undefined)).toBe(126);
    expect(ceil(125.6)).toBe(126);
    expect(ceil(125.4)).toBe(126);
  });

  it('3. fixed < 0', function() {
    expect(ceil(125.34567, -1)).toBe(130);
    expect(ceil(125.34567, -2)).toBe(200);
  });

  it('4. exception', function() {
    expect(ceil.bind(null, 'hello', 2)).toThrow('Parameters should be type of number!');
    expect(ceil.bind(null, 123, '2')).toThrow('Parameters should be type of number!');
    expect(ceil.bind(null, 123, 1.1)).toThrow('Parameter `fixed` should be an integer!');
    expect(ceil.bind(null, 123, -1.1)).toThrow('Parameter `fixed` should be an integer!');
  });

  it('5. random', function() {
    for (var i = 0; i < 10000; i += 1) {
      var r = Math.random();
      expect((ceil(r, 2) + '').length).toBeLessThanOrEqualTo(4);
    }
  });
});
