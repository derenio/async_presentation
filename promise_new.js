const p = new Promise((resolve, reject) => resolve(42));
p.then(console.log); // 42

const p2 = new Promise((resolve, reject) => reject('boom!'));
p2.catch(console.log); // boom!
