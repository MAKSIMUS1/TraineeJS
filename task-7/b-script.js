const table = document.getElementById('table');

table.addEventListener('click', (event) => {
    const cell = event.target;

    if(cell.tagName !== 'TD') return;

    const row = cell.parentElement;

    document.querySelectorAll('#table tr').forEach(tr => {
        tr.classList.remove('active');
    });

    row.classList.add('active');
});