// |reftest| skip async -- Atomics.waitAsync is not supported
// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-atomics.waitasync
description: >
  null timeout arg should result in an +0 timeout
info: |
  Atomics.waitAsync( typedArray, index, value, timeout )

  1. Return DoWait(async, typedArray, index, value, timeout).

  DoWait ( mode, typedArray, index, value, timeout )

  6. Let q be ? ToNumber(timeout).

    Null -> Return +0.

features: [Atomics.waitAsync, SharedArrayBuffer, Symbol, Symbol.toPrimitive, TypedArray, computed-property-names, Atomics, BigInt, arrow-function]
flags: [async]
---*/
assert.sameValue(typeof Atomics.waitAsync, 'function');
const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));

const valueOf = {
  valueOf() {
    return null;
  }
};

const toPrimitive = {
  [Symbol.toPrimitive]() {
    return null;
  }
};

assert.sameValue(
  Atomics.waitAsync(i64a, 0, 0n, null).value,
  'timed-out',
  'Atomics.waitAsync(i64a, 0, 0n, null).value resolves to "timed-out"'
);

assert.sameValue(
  Atomics.waitAsync(i64a, 0, 0n, valueOf).value,
  'timed-out',
  'Atomics.waitAsync(i64a, 0, 0n, valueOf).value resolves to "timed-out"'
);

assert.sameValue(
  Atomics.waitAsync(i64a, 0, 0n, toPrimitive).value,
  'timed-out',
  'Atomics.waitAsync(i64a, 0, 0n, toPrimitive).value resolves to "timed-out"'
);

Promise.all([
  Atomics.waitAsync(i64a, 0, 0n, null).value,
  Atomics.waitAsync(i64a, 0, 0n, valueOf).value,
  Atomics.waitAsync(i64a, 0, 0n, toPrimitive).value
]).then(outcomes => {
  assert.sameValue(outcomes[0], 'timed-out');
  assert.sameValue(outcomes[1], 'timed-out');
  assert.sameValue(outcomes[2], 'timed-out');
}).then($DONE, $DONE);
