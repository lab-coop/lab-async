'use strict';
const a = require('./');

describe('lab async first', () => {
  it('should return with the first valid result', async() => {
    const taskA = async () => await Promise.resolve(null);
    const taskB = async () => await Promise.resolve(undefined);
    const taskC = async () => await Promise.resolve(true);

    const result = await a.first([taskA, taskB, taskC]);
    expect(result).toEqual(true);
  });
});
