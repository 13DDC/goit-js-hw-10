import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(form);
  const timeDelay = formData.get('delay');
  const state = formData.get('state');
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(timeDelay);
      } else {
        reject(timeDelay);
      }
    }, timeDelay);
  });
  prom
    .then(timeDelay =>
      iziToast.success({
        message: `✅Fulfilled promise in ${timeDelay}ms`,
        position: 'topRight',
        icon: '',
      })
    )
    .catch(timeDelay =>
      iziToast.error({
        message: `❌ Rejected promise in ${timeDelay}ms`,
        position: 'topRight',
        icon: '',
      })
    );
});
