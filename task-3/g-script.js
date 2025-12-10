let timerTextId;
document.getElementById('textOutAfter1Sec').addEventListener('input', updateValue);

function updateValue(e) {
    clearTimeout(timerTextId);
    timerTextId = setTimeout(() => console.log(e.target.value), 1000);
}