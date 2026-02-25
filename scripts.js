const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('min');
const secondsEl = document.getElementById('sec');
const yearsOldEl = document.getElementById('yearsOldEl');

let currentYear = new Date().getFullYear();
let yearsOld = currentYear - 1995;
let newYears = `11 Dec ${currentYear}`;

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    currentYear = currentYear + 1;
    yearsOld = yearsOld + 1;
    newYears = `11 Dec ${currentYear}`;
  }
  yearsOldEl.innerHTML = yearsOld;
}

function formatTime(time) {
  if (time < 10) {
    return (`0${time}`)
  } else {
    return time;
  }
}

countdown();
setInterval(countdown, 1000);