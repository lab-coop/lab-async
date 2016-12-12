'use strict';

module.exports = Object.freeze({
  first,
});

async function first(elements) {
  const [head, ...tail] = elements;
  const result = await head();
  if (result !== null && result !== undefined) {
    return result;
  }
  return await first(tail);
}
