function newPromise(i) {
  const p = new Promise((resolve, reject) => {
    console.log('created promise', i);
    setTimeout(() => resolve(i), 1000 * Math.random());
  });
  return p;
}

const promises = [];
for(let i=0; i < 10; i++) {
  promises.push(newPromise(i));
}

console.log(promises); // [ Promise { <pending> }, ... ]
Promise.race(promises).then(console.log); // ?
