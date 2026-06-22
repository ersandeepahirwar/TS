const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved.");
    reject("Promise is rejected.");
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
