// Import library
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Get form element
const formRef = document.querySelector('.form');

// Set event listener submit on form
formRef.addEventListener('submit', onSubmitForm);

// Submit form
function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(formRef.delay.value);

  for (let i = 1; i <= formRef.amount.value; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += Number(formRef.step.value);
  }
}

// Create promise
function createPromise(position, delay) {
  const obj = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(obj);
      } else {
        // Reject
        reject(obj);
      }
    }, delay);
  });
}
