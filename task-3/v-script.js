let randomSecondsTimerId;
let isRandomSecondsTimerStarted = false; 

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function startRandomTimer() {
    let randomSeconds = getRndInteger(1000, 4000);
    
    randomSecondsTimerId = setTimeout(() => {
        console.log(`seconds ${randomSeconds / 1000}`);

        startRandomTimer();
    }, randomSeconds);
}

document.getElementById('btnRandomSeconds').addEventListener('click', function() {
    if(!isRandomSecondsTimerStarted)
    {
        isRandomSecondsTimerStarted = true;
        startRandomTimer();
    }
    else
    {
        isRandomSecondsTimerStarted = false;
        clearTimeout(randomSecondsTimerId);
    }
});
