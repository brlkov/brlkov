const btn = document.querySelector('#btn');
const count = document.querySelector('#count');

let value = 0;

btn.addEventListener('click', () => {
    value++;
    count.innerHTML = String(value);
});
