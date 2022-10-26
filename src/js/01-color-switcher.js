// Import library
import getRandomHexColor from './randomHexColor';

//Get button start/stop element
const dataStartRef = document.querySelector('[data-start]');
const dataStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
// values
let timerId = null;

// Add event listener start/stop on btn start/stop
dataStartRef.addEventListener('click', onStart);
dataStopRef.addEventListener('click', onStop);

// Function start event listener
function onStart() {
  timerId = setInterval(getBgColor, 1000);

  dataStartRef.toggleAttribute('disabled');
}

// Function stop event listener
function onStop() {
  clearInterval(timerId);

  dataStartRef.removeAttribute('disabled');
}

// Function set random bg color
function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}
