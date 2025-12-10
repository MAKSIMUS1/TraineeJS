const videos = [
  {
    id: 65432445,
    title: 'The Chamber',
  },
  {
    id: 675465,
    title: 'Fracture',
  },
  {
    id: 70111470,
    title: 'Die Hard',
  },
  {
    id: 654356453,
    title: 'Bad Boys',
  },
];

// // Ожидаемый результат:
// {
//     "65432445": "The Chamber",
//     "675465": "Fracture",
//     "70111470": "Die Hard",
//     "654356453": "Bad Boys"
// }

console.log(
    videos.reduce(function(prev, curr) {
      return {...prev, [curr.id]: curr.title};
  }, {})
);