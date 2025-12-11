new Promise(function (resolve, reject) {
    const delay = Math.floor(Math.random() * 4000);

    setTimeout(() => {
        if(delay < 2000) {
            resolve(`resolve, time: ${delay}`);
        }
        else {
            reject(`reject, time: ${delay}`);
        }
    }, delay);
})
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });