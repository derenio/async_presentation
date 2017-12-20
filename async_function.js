async function sleep(ms) {
    console.log('in sleep');
    return new Promise(resolve => setTimeout(resolve, ms));
}

// await sleep(1000); // SyntaxError: Unexpected identifier

async function foo() {
  console.log('before sleep');
  await sleep(100);
  console.log('bar');
  return 'from foo';
}

console.log('before foo');
foo().then(console.log);
console.log('after foo');
