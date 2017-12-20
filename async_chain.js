function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function looper(resolve, reject, i = 10) {
  // Uncomment to stop the synchronous execution of this function's body
  // await sleep(1);
  // Check exit condition
  if (i <= 0) {
    console.log('i ==', i);
    resolve('takeoff!');
    return;
  }
  // Looping
  const p = new Promise((resolve2, reject2) => {
    console.log('inside Promise', i);
    setTimeout(() => looper(resolve2, reject2, i - 1), 100);
  });
  resolve(p);
}

async function main() {
  console.log('before "new Promise"');
  const p = new Promise(looper);
  console.log('after "new Promise"');
  const result = await p;
  console.log('result:', result);
}

main();
