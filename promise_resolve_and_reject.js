const p = Promise.resolve(42);
p.then(console.log); // 42

const p2 = Promise.reject('boom!');
p2.catch(console.log); // boom!
