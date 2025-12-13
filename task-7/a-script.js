const coords = [ [1, 2], [2, 4], [3, 8], [4, 16], [5, 32] ];

const graph = document.getElementById('graph');

const maxX = Math.max(...coords.map(p => p[0]));
const maxY = Math.max(...coords.map(p => p[1]));

const clientWidth = graph.clientWidth;
const clientHeight = graph.clientHeight;

coords.forEach(([x, y]) => {
    const point = document.createElement('div');    
    point.className = 'point';

    const px = (x / maxX) * clientWidth;
    const py = clientHeight - (y / maxY) * clientHeight;

    point.style.left = px + 'px';
    point.style.top = py + 'px';

    graph.appendChild(point);
});