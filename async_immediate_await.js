function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function immediateAwait() {
  const s1 = await sleep(1000);
  const s2 = await sleep(1000);
  const s3 = await sleep(1000);
  const s4 = await sleep(1000);
  console.log('finished slow');
}

async function lateAwait() {
  const s1 = sleep(1000);
  const s2 = sleep(1000);
  const s3 = sleep(1000);
  const s4 = sleep(1000);
  await s1;
  await s2;
  await s3;
  await s4;
  console.log('finished fast');
}

immediateAwait();
lateAwait();
// finished fast
// finished slow
