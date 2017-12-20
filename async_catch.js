async function foo() {
  throw 'ball';
}

async function main() {
  const p = foo();
  try {
    await p;
  } catch (e) {
    console.log('caught', e); // caught ball
  }

  p.catch(e => console.log('cought second', e)); // caught second ball
}

main();
