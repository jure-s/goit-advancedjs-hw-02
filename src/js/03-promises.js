import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function() {
  iziToast.settings({
    closeOnClick: true,
    position: 'topRight',
    progressBar: false,
    timeout: 5000,
    transitionIn: 'bounceInUp',
  });

  const form = document.querySelector('.form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fields = e.target.elements;
    let delay = Number(fields.delay.value);
    const step = Number(fields.step.value);
    const amount = Number(fields.amount.value);

    for (let i = 1; i <= amount; i++) {
      getPromiseResult(i, delay);
      delay += step;
    }

    form.reset();
  });

   function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        shouldResolve ? resolve({ position, delay }) : reject({ position, delay });
      }, delay);
    });
  }

  function getPromiseResult(num, step) {
    createPromise(num, step)
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'Resolved',
          message: `Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: 'Rejected',
          message: `Rejected promise ${position} in ${delay}ms`,
        });
      });
  }
});