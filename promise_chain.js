const p1 = Promise.resolve(42)
console.log(p1); // Promise { 42 }

const p2 = p1.then(result => [result, 9000])
  .then(result => [...result, Number.POSITIVE_INFINITY])
  .then(result => {
    throw [...result, 'throwing the ball'];
  }).catch(result => {
    return [...result, 'caught the ball'];
  }).then(result => [...result, 'touchdown!']);
console.log(p2);  // Promise { <pending> }

setTimeout(() => console.log(p2), 1000);  // Promise { [ 42, 9000, 'throwing the ball', 'caught the ball', 'touchdown!' ] }
