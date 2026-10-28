const slides = document.querySelectorAll('.slider2 .slide');
let index = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
}

document.querySelector('.btn-next').onclick = () => {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
};

document.querySelector('.btn-prev').onclick = () => {
    index--;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
};