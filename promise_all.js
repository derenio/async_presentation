function newPromise(i) {
  const p = new Promise((resolve, reject) => {
    console.log('created promise', i);
    setTimeout(() => resolve(i), 100);
  });
  return p;
}

const promises = [];
for(let i=0; i < 10; i++) {
  promises.push(newPromise(i));
}

console.log(promises); // [ Promise { <pending> }, ... ]
Promise.all(promises).then(console.log); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
