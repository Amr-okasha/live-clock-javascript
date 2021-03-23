let clock = document.getElementById("clock");

let showTime = () => {
  "use strict";
  let time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    secondes = time.getSeconds();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (secondes < 10) {
    secondes = `0${secondes}`;
  }

  clock.textContent = `${hours}:${minutes}:${secondes}`;
};

window.onload = function () {
  "use strict";
  setInterval(() => {
    showTime();
  }, 1000);
};
