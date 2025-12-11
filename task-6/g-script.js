let data = [
	{ country: 'country1', city: 'city11' },
	{ country: 'country2', city: 'city21' },
	{ country: 'country3', city: 'city31' },
	{ country: 'country1', city: 'city12' },
	{ country: 'country1', city: 'city13' },
	{ country: 'country2', city: 'city22' },
	{ country: 'country3', city: 'city31' },
];

const result = data.reduce(function (accumulator, currentValue) {
    if(!accumulator[currentValue.country]) {
        accumulator[currentValue.country] = [];
    }
    accumulator[currentValue.country].push(currentValue.city);
    return accumulator;
}, {});

console.log(result);
