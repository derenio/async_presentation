// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

const obj = { a: 'a', b: 'b' };
const obj2 = { a: 'a2', ...obj, b: 'b2', c: 'c' };

console.log(obj2); // { a: 'a', b: 'b2', c: 'c' }

const arr = [1, 2, 3];
const arr2 = [...arr, 9000, Number.POSITIVE_INFINITY];

console.log(arr2); // [ 1, 2, 3, 9000, Infinity ]
