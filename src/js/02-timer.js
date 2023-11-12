import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const btn = document.querySelector('[data-start]');
    btn.disabled = selectedDates[0] <= Date.now();

    iziToast.show({
      title: btn.disabled ? 'Error' : 'Success',
      message: btn.disabled
        ? 'Please choose a date in the future!'
        : 'Lets go?',
      position: 'topCenter',
      color: btn.disabled ? 'red' : 'green',
    });
  },
});

document.querySelector('[data-start]').addEventListener('click', () => {
  const date = document.querySelector('#datetime-picker');
  const spans = document.querySelectorAll('.value');
  const day = document.querySelector('[data-days]');
  const hour = document.querySelector('[data-hours]');
  const min = document.querySelector('[data-minutes]');
  const sec = document.querySelector('[data-seconds]');
  const btn = document.querySelector('[data-start]');

  btn.disabled = true;
  date.disabled = true;
  spans.forEach(item => item.classList.toggle('end'));

  const timerId = setInterval(() => {
    const chosenDate = new Date(date.value);
    const timeToFinish = chosenDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeToFinish);

    day.textContent = addLeadingZero(days);
    hour.textContent = addLeadingZero(hours);
    min.textContent = addLeadingZero(minutes);
    sec.textContent = addLeadingZero(seconds);

    if (timeToFinish < 1000) {
      spans.forEach(item => item.classList.toggle('end'));
      clearInterval(timerId);
      date.disabled = false;
    }
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}