async function main() {
  const result = await {
    then: (resolve, reject) => setTimeout(() => resolve('response'), 100)
  };
  console.log(result); // response

  try {
    await {
      then: (resolve, reject) => setTimeout(() => reject('throw'), 100)
    };
  } catch (e) {
    console.log(e); // throw
  }
}

main();
