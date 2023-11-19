ппшfunction getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;

stopButton.disabled = true; // Кнопка "Stop" початково неактивна

let colorChangeInterval;

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

function startColorChange() {
    startButton.disabled = true;
    stopButton.disabled = false;

    colorChangeInterval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function stopColorChange() {
    startButton.disabled = false;
    stopButton.disabled = true;

    clearInterval(colorChangeInterval);
}