function checkSafari() {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1) {
        return ua.indexOf("chrome") > -1 ? false : true;
    }
}

// определение бэкграунда у хедера

window.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero')
    const header = document.querySelector('.header')
    console.log(hero === null)
    if(hero === null) {
        header.classList.add('header_background')
    }
})


// мобильное меню
const bodyElement = document.querySelector('body');
const htmlElement = document.querySelector('html');
const disableScroll = () => {
    bodyElement.style.overflow = 'hidden';
    htmlElement.style.overflow = 'hidden';
}
const enableScroll = () => {
    bodyElement.style.overflow = 'visible';
    htmlElement.style.overflow = 'visible';
}

const menu = document.querySelector('.menu-box')
const burger = document.querySelector('.burger-menu')

const lg = window.matchMedia("(max-width: 950px)")

if(lg.matches === true) {
    burger.addEventListener('click', toggleMenu)
    menu.addEventListener('click', toggleMenu)
} else {
    burger.removeEventListener('click', toggleMenu)
    menu.removeEventListener('click', toggleMenu)
}

function toggleMenu() {
    if(menu.classList.contains('open')) {
        menu.classList.remove('open')
        enableScroll()
    } else {
        menu.classList.add('open')
        disableScroll()
    }
}






// кастомный селект
const select = document.querySelector('.form__select')
const selectField = document.querySelector('.form__select-field')
select.addEventListener('change', function() {
    selectField.textContent = select.value
  });


// слайдер
const numberOfSlides = document.querySelectorAll('.swiper-slide').length;
const next = document.querySelector('.history-slider__button_next')
const prev = document.querySelector('.history-slider__button_prev')

if(numberOfSlides <= 2) {
    next.style.pointerEvents = "none";
    prev.style.pointerEvents = "none";
}

console.log(numberOfSlides)

const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    breakpoints: {
        950: {
            slidesPerView: 2,
        },
    },
    spaceBetween: 24,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.history-slider__button_next',
        prevEl: '.history-slider__button_prev',
    },

});