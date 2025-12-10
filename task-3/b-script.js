let intervalTimerId;
let intervalStarted = false; 

document.getElementById('btnWelcomeEvery3Seconds').addEventListener('click', function() {
    if(!intervalStarted)
    {
        intervalTimerId = setInterval(() => console.log("You are welcome!"), 3000);
        intervalStarted = true;
    }
    else
    {
        clearTimeout(intervalTimerId);
        intervalStarted = false;
    }
});
