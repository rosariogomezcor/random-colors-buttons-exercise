const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255); 
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`; 
}

for (let i = 0; i < 50; i++) {
    const newButtons = document.createElement('button'); 
    newButtons.innerText = "CLICK"; 
    document.querySelector('body').appendChild(newButtons); 
}

for (let i = 0; i < 15; i++) {
    const spans = document.createElement('span'); 
    spans.innerText = "Click me too!"; 
    document.querySelector('body').appendChild(spans); 
}

const buttons = document.querySelectorAll('button'); 
for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const spans = document.querySelectorAll('span'); 
for (let span of spans) {
    span.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor(); 
    this.style.color = makeRandColor(); 
}