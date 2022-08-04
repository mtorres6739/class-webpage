const myForm = document.querySelector('#my-form');
const movieInput = document.querySelector('#movie');
const msg = document.querySelector('.msg');
const movieList = document.querySelector('#movies');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if(movieInput.value === '') {
     msg.classList.add('error');
     msg.innerHTML = 'Please enter a movie';

     setTimeout(() => msg.remove(), 3000);
} else {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${movieInput.value}`));

  movieList.appendChild(li);

  // Clear fields
  movieInput.value = '';
}
}