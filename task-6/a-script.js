const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black'];

const button = document.getElementById('coloredBtn');

document.getElementById('colorsTable').addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = randomColor;
});