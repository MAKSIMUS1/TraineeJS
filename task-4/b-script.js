new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 3000);
})
  .then(result => {
    console.log(result);
    return result + 2;
  })
  .then(result => {
    console.log(result);
    return new Promise(function (resolve, reject){
      setTimeout(() => resolve(result+2), 2000);
    });
  })
  .then(result => {
    console.log(result);
  });