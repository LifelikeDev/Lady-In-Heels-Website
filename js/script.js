const slideWrapper = document.querySelector('.slide-wrapper');
const slideLeft = document.querySelector('.left');
const slideRight = document.querySelector('.right');

// add event listener to each side to listen for the mouse hover event

slideLeft.addEventListener('mouseenter', () => {
    slideWrapper.classList.add('hovered-left');
});

slideLeft.addEventListener('mouseleave', () => {
    slideWrapper.classList.remove('hovered-left');
});

slideRight.addEventListener('mouseenter', () => {
    slideWrapper.classList.add('hovered-right');
});

slideRight.addEventListener('mouseleave', () => {
    slideWrapper.classList.remove('hovered-right');
});