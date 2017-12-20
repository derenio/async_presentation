setTimeout(() => console.log('done'), 1000);

console.log([1, 2, 3].map(i => i**i));

Object.entries({'a': 'A', 'b': 'B'}).map(([key, val]) => {
  console.log(key, val);
});
