function foo(first, second, ...rest) {
  console.log(rest);
}

foo(1, 2, 9000, Number.POSITIVE_INFINITY); // [ 9000, Infinity ]
