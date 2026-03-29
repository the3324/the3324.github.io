const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

box3.addEventListener('click', () => {
    box2.style.display = box2.style.display === 'block' ? 'none' : 'block';
});