const Robot = function (name) {
  this.name = name;
};

function add(op1, op2) {
  this.name = this.name || 'Human';
  return this.name + ' can count to ' + (op1 + op2);
}

const voltron = new Robot('Voltron');

// #1
console.log(add(0, 1));

// #2
console.log(add.call(voltron, 1, 2));

// #3
console.log(add.apply(voltron, [20, 30]));

// #4
const voltronAdd = add.bind(voltron);
console.log(voltronAdd('drinking', 'beer'));

// #5
function showName() {
  console.log(this.name);
}

// 1
setTimeout(function() {
    showName.call(voltron);
}, 1);
// 2
setTimeout(showName.bind(voltron), 1);
// 3
setTimeout(() => showName.call(voltron), 1);
// 4
setTimeout(() => showName.apply(voltron), 1);
// 5
voltron.showName = showName;
setTimeout(() => voltron.showName(), 1);
