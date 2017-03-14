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

  it('should return with undefined in case of no valid result', async () => {
    const taskA = async () => await Promise.resolve(null);
    const taskB = async () => await Promise.resolve(null);

    const result = await a.first([taskA, taskB]);
    expect(result).toEqual(undefined);

  });

  it('should use arguments passed', async () => {
    const taskA = async () => await Promise.resolve(null);
    const taskB = async (a, b) => await Promise.resolve(a + b);

    const result = await a.first([taskA, taskB], 40, 2);
    expect(result).toEqual(42);
  });
});
