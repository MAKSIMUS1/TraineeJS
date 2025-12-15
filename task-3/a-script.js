let timerId;

document.getElementById('btnHelloWorld').addEventListener('click', () =>{
    clearTimeout(timerId);
    timerId = setTimeout(() => console.log("Hello World"), 5000);
});
