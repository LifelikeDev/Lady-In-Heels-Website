// Hamburger navigation
const navigation = document.querySelector('.navigation');
const navBar = document.querySelector('.nav-bar');
const navList = document.querySelectorAll('.nav-list');
const hamburgerOpen= document.querySelector('.ham-open');
const hamburgerClose= document.querySelector('.ham-close');

hamburgerOpen.addEventListener('click', () => {
    navigation.classList.add('mobile-nav');
    hamburgerOpen.style.display = 'none';
    hamburgerClose.style.display = 'block';

});

hamburgerClose.addEventListener('click', () => {
    navigation.classList.remove('mobile-nav');
    hamburgerClose.style.display = 'none';
    hamburgerOpen.style.display = 'block';

});


// adding event listener to each side to listen for the mouse hover event

const slideWrapper = document.querySelector('.slide-wrapper');
const slideLeft = document.querySelector('.left');
const slideRight = document.querySelector('.right');


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