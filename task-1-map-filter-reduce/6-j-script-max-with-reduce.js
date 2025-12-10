const ratings = [2, 3, 1, 4, 5];

console.log(
  ratings.reduce(function(prev, curr) {
    return prev > curr ? prev : curr;
  })
);